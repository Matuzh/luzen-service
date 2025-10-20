import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

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
    const validatedData = contactSchema.parse(req.body);

    const message = await prisma.contactMessage.create({
      data: validatedData
    });

    console.log('New contact message:', message.id);

    res.status(201).json({
      success: true,
      data: message,
      message: 'Message sent successfully'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.issues
      });
    }
    
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message'
    });
  }
});

export default router;