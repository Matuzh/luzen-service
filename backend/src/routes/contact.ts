import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import emailService from '../services/email.service';

const router = express.Router();
const prisma = new PrismaClient();

// Enhanced contact validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z.string()
    .email('Invalid email address')
    .toLowerCase()
    .trim(),
  phone: z.string()
    .min(9, 'Phone number must be at least 9 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[0-9\s\-+()]+$/, 'Phone number contains invalid characters')
    .transform(val => val.replace(/[\s\-()]/g, '')),
  subject: z.string()
    .min(1, 'Subject is required')
    .max(200, 'Subject must be less than 200 characters')
    .trim(),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .trim()
});

// Create new contact message
router.post('/', async (req: Request, res: Response) => {
  try {
    console.log('📧 Received contact message:', {
      ...req.body,
      email: req.body.email ? '***@***' : undefined,
      phone: req.body.phone ? '***' : undefined,
      message: req.body.message ? '[message content hidden]' : undefined
    });
    
    // Validate request data
    const validatedData = contactSchema.parse(req.body);

    // Create contact message in database
    const message = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
        status: 'NEW'
      }
    });

    console.log('✅ Contact message saved:', message.id);

    // Send emails asynchronously
    Promise.all([
      emailService.sendContactConfirmation(message),
      emailService.sendContactNotificationToAdmin(message)
    ]).then(() => {
      console.log('✅ All contact emails sent successfully');
    }).catch((error) => {
      console.error('⚠️ Some emails failed to send:', error);
      // Don't fail the request if emails fail
    });

    res.status(201).json({
      success: true,
      data: {
        id: message.id,
        name: message.name,
        subject: message.subject,
        createdAt: message.createdAt
      },
      message: 'Message sent successfully. We will respond within 24 hours.'
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.issues.map(issue => ({
          field: issue.path.join('.'),
          message: issue.message
        }))
      });
    }
    
    // Handle Prisma errors
    if (error && typeof error === 'object' && 'code' in error) {
      const prismaError = error as { code: string };
      
      if (prismaError.code === 'P2002') {
        return res.status(409).json({
          success: false,
          error: 'Duplicate message',
          message: 'This message has already been submitted'
        });
      }
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to send message',
      message: process.env.NODE_ENV === 'development' && error instanceof Error
        ? error.message
        : 'An unexpected error occurred. Please try again later.'
    });
  }
});

// Get contact message by ID (admin only - would need auth middleware)
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if id exists
    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Message ID is required'
      });
    }

    // Validate UUID format
    if (!id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid message ID format'
      });
    }

    const message = await prisma.contactMessage.findUnique({
      where: { id }
    });

    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    // Mark as read if not already
    if (message.status === 'NEW') {
      await prisma.contactMessage.update({
        where: { id },
        data: { 
          status: 'READ',
          readAt: new Date()
        }
      });
    }

    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error('Get contact message error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch message'
    });
  }
});

// Update message status (admin only - would need auth middleware)
router.patch('/:id/status', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, response } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Message ID is required'
      });
    }

    const validStatuses = ['NEW', 'READ', 'REPLIED', 'ARCHIVED'];
    
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status',
        message: `Status must be one of: ${validStatuses.join(', ')}`
      });
    }

    const updateData: any = { status };
    
    if (status === 'READ' && !updateData.readAt) {
      updateData.readAt = new Date();
    }
    
    if (status === 'REPLIED') {
      updateData.repliedAt = new Date();
      if (response) {
        updateData.response = response;
      }
    }

    const message = await prisma.contactMessage.update({
      where: { id },
      data: updateData
    });

    res.json({
      success: true,
      data: message,
      message: 'Message status updated successfully'
    });
  } catch (error) {
    console.error('Update message status error:', error);
    
    if (error && typeof error === 'object' && 'code' in error) {
      const prismaError = error as { code: string };
      if (prismaError.code === 'P2025') {
        return res.status(404).json({
          success: false,
          error: 'Message not found'
        });
      }
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to update message status'
    });
  }
});

// Test route (only in development)
if (process.env.NODE_ENV === 'development') {
  router.get('/test', (req: Request, res: Response) => {
    res.json({ 
      success: true, 
      message: 'Contact route is working!',
      timestamp: new Date().toISOString()
    });
  });
}

export default router;
