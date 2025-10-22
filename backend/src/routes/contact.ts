import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import emailService from '../services/email.service';

const router = express.Router();
const prisma = new PrismaClient();

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(9).max(15),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(2000)
});

router.post('/', async (req: Request, res: Response) => {
  try {
    console.log('📧 Received contact message:', req.body);
    
    const validatedData = contactSchema.parse(req.body);

    const message = await prisma.contactMessage.create({
      data: validatedData
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
        subject: message.subject
      },
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.issues
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to send message',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;