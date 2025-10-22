import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import emailService from '../services/email.service';

const router = express.Router();
const prisma = new PrismaClient();

// Enhanced validation schema - deviceBrand and deviceModel are truly optional
const bookingSchema = z.object({
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
    .transform(val => val.replace(/[\s\-()]/g, '')), // Clean phone number
  service: z.string()
    .min(1, 'Service is required')
    .max(200, 'Service name is too long'),
  deviceType: z.string()
    .min(1, 'Device type is required')
    .max(100, 'Device type is too long'),
  deviceBrand: z.string()
    .max(100, 'Device brand is too long')
    .optional()
    .transform(val => val || undefined), // Convert empty string to undefined
  deviceModel: z.string()
    .max(100, 'Device model is too long')
    .optional()
    .transform(val => val || undefined), // Convert empty string to undefined
  problemDescription: z.string()
    .min(10, 'Problem description must be at least 10 characters')
    .max(1000, 'Problem description must be less than 1000 characters')
    .trim(),
  preferredDate: z.string()
    .refine(val => {
      const date = new Date(val);
      return !isNaN(date.getTime());
    }, 'Invalid date format')
    .refine(val => {
      const date = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, 'Preferred date cannot be in the past'),
  preferredTime: z.string()
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)')
    .refine(val => {
      const timeParts = val.split(':');
      const hours = parseInt(timeParts[0] || '0', 10);
      const minutes = parseInt(timeParts[1] || '0', 10);
      return !isNaN(hours) && !isNaN(minutes) && hours >= 9 && hours < 19;
    }, 'Preferred time must be between 09:00 and 19:00')
});

// Create new booking
router.post('/', async (req: Request, res: Response) => {
  try {
    console.log('📝 Received booking request:', {
      ...req.body,
      // Don't log sensitive data in production
      email: req.body.email ? '***@***' : undefined,
      phone: req.body.phone ? '***' : undefined
    });
    
    // Validate request data
    const validatedData = bookingSchema.parse(req.body);

    // Create booking in database
    const booking = await prisma.booking.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service,
        deviceType: validatedData.deviceType,
        deviceBrand: validatedData.deviceBrand, // Can be undefined
        deviceModel: validatedData.deviceModel, // Can be undefined
        problemDescription: validatedData.problemDescription,
        preferredDate: new Date(validatedData.preferredDate),
        preferredTime: validatedData.preferredTime,
        status: 'PENDING'
      }
    });

    console.log('✅ Booking created:', booking.id);

    // Send emails asynchronously (don't wait for them)
    Promise.all([
      emailService.sendBookingConfirmation(booking),
      emailService.sendBookingNotificationToAdmin(booking)
    ]).then(() => {
      console.log('✅ All booking emails sent successfully');
    }).catch((error) => {
      console.error('⚠️ Some emails failed to send:', error);
      // Don't fail the request if emails fail - booking is already created
    });

    // Return success response
    res.status(201).json({
      success: true,
      data: {
        id: booking.id,
        name: booking.name,
        email: booking.email,
        service: booking.service,
        deviceType: booking.deviceType,
        preferredDate: booking.preferredDate,
        preferredTime: booking.preferredTime,
        status: booking.status
      },
      message: 'Booking created successfully. You will receive a confirmation email shortly.'
    });
  } catch (error) {
    console.error('❌ Booking error:', error);
    
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
      const prismaError = error as { code: string; meta?: any };
      
      if (prismaError.code === 'P2002') {
        return res.status(409).json({
          success: false,
          error: 'Duplicate entry',
          message: 'A booking with this information already exists'
        });
      }
      
      if (prismaError.code === 'P2003') {
        return res.status(400).json({
          success: false,
          error: 'Invalid reference',
          message: 'Referenced data does not exist'
        });
      }
    }
    
    // Generic error response
    res.status(500).json({
      success: false,
      error: 'Failed to create booking',
      message: process.env.NODE_ENV === 'development' && error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred. Please try again later.'
    });
  }
});

// Get booking by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if id exists
    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Booking ID is required'
      });
    }

    // Validate UUID format
    if (!id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid booking ID format'
      });
    }

    const booking = await prisma.booking.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        service: true,
        deviceType: true,
        deviceBrand: true,
        deviceModel: true,
        problemDescription: true,
        preferredDate: true,
        preferredTime: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found',
        message: 'No booking exists with this ID'
      });
    }

    res.json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch booking',
      message: 'An error occurred while retrieving the booking'
    });
  }
});

// Update booking status (for admin use)
router.patch('/:id/status', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Booking ID is required'
      });
    }

    const validStatuses = ['PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
    
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status',
        message: `Status must be one of: ${validStatuses.join(', ')}`
      });
    }

    const booking = await prisma.booking.update({
      where: { id },
      data: { 
        status,
        ...(status === 'COMPLETED' && { completedAt: new Date() })
      }
    });

    res.json({
      success: true,
      data: booking,
      message: 'Booking status updated successfully'
    });
  } catch (error) {
    console.error('Update booking status error:', error);
    
    if (error && typeof error === 'object' && 'code' in error) {
      const prismaError = error as { code: string };
      if (prismaError.code === 'P2025') {
        return res.status(404).json({
          success: false,
          error: 'Booking not found'
        });
      }
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to update booking status'
    });
  }
});

// Test route (only in development)
if (process.env.NODE_ENV === 'development') {
  router.get('/test', (req: Request, res: Response) => {
    res.json({ 
      success: true, 
      message: 'Bookings route is working!',
      timestamp: new Date().toISOString()
    });
  });
}

export default router;