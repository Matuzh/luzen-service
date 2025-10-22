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
    console.log('Received booking request:', req.body);
    
    const validatedData = bookingSchema.parse(req.body);

    const booking = await prisma.booking.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service,
        deviceType: validatedData.deviceType,
        deviceBrand: validatedData.deviceBrand,
        deviceModel: validatedData.deviceModel || '',
        problemDescription: validatedData.problemDescription,
        preferredDate: new Date(validatedData.preferredDate),
        preferredTime: validatedData.preferredTime,
        status: 'PENDING'
      }
    });

    console.log('Booking created:', booking.id);

    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    console.error('Booking error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.issues
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to create booking',
      message: error instanceof Error ? error.message : 'Unknown error'
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

// Add a test GET route
router.get('/test', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Bookings route is working!' });
});

export default router;