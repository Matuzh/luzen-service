import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const router = express.Router();
const prisma = new PrismaClient();

// Validation schema
const bookingSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(9).max(15),
  service: z.string().min(1),
  deviceType: z.string().min(1),
  deviceBrand: z.string().min(1),
  deviceModel: z.string().optional(),
  problemDescription: z.string().min(10).max(1000),
  preferredDate: z.string().datetime(),
  preferredTime: z.string().min(1)
});

// Create new booking
router.post('/', async (req: Request, res: Response) => {
  try {
    const validatedData = bookingSchema.parse(req.body);

    const booking = await prisma.booking.create({
      data: {
        ...validatedData,
        deviceModel: validatedData.deviceModel || '',
        preferredDate: new Date(validatedData.preferredDate)
      }
    });

    // TODO: Send confirmation email here
    console.log('New booking created:', booking.id);

    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.issues
      });
    }
    
    console.error('Booking creation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create booking'
    });
  }
});

// Get booking by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'ID rezerwacji jest wymagane'
      });
    }

    const booking = await prisma.booking.findUnique({
      where: { id }
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
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
      error: 'Failed to fetch booking'
    });
  }
});

export default router;