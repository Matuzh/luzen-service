import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get published reviews
router.get('/', async (req: Request, res: Response) => {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        isPublished: true,
        isApproved: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10,
      select: {
        id: true,
        name: true,
        rating: true,
        text: true,
        service: true,
        createdAt: true
      }
    });

    res.json({
      success: true,
      data: reviews
    });
  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch reviews'
    });
  }
});

export default router;