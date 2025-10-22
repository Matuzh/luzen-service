import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const router = express.Router();
const prisma = new PrismaClient();

// Review validation schema
const reviewSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z.string()
    .email('Invalid email address')
    .toLowerCase()
    .trim(),
  rating: z.number()
    .int('Rating must be an integer')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  text: z.string()
    .min(10, 'Review must be at least 10 characters')
    .max(1000, 'Review must be less than 1000 characters')
    .trim(),
  service: z.string()
    .max(200, 'Service name is too long')
    .optional()
});

// Submit new review
router.post('/', async (req: Request, res: Response) => {
  try {
    console.log('⭐ Received review submission');
    
    const validatedData = reviewSchema.parse(req.body);

    const review = await prisma.review.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        rating: validatedData.rating,
        text: validatedData.text,
        ...(validatedData.service && { service: validatedData.service }),
        isApproved: false, // Reviews need approval
        isPublished: false
      }
    });

    console.log('✅ Review created:', review.id);

    res.status(201).json({
      success: true,
      data: {
        id: review.id,
        name: review.name,
        rating: review.rating,
        createdAt: review.createdAt
      },
      message: 'Thank you for your review! It will be published after moderation.'
    });
  } catch (error) {
    console.error('❌ Review submission error:', error);
    
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
    
    res.status(500).json({
      success: false,
      error: 'Failed to submit review',
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
});

// Get published reviews
router.get('/', async (req: Request, res: Response) => {
  try {
    const { limit = '10', offset = '0', rating } = req.query;

    const limitNum = Math.min(parseInt(limit as string) || 10, 50);
    const offsetNum = parseInt(offset as string) || 0;

    const where: any = {
      isPublished: true
    };

    if (rating) {
      where.rating = parseInt(rating as string);
    }

    const [reviews, total] = await Promise.all([
      prisma.review.findMany({
        where,
        select: {
          id: true,
          name: true,
          rating: true,
          text: true,
          service: true,
          createdAt: true
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: limitNum,
        skip: offsetNum
      }),
      prisma.review.count({ where })
    ]);

    res.json({
      success: true,
      data: reviews,
      pagination: {
        total,
        limit: limitNum,
        offset: offsetNum,
        hasMore: offsetNum + limitNum < total
      }
    });
  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch reviews'
    });
  }
});

// Get review statistics
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const stats = await prisma.review.groupBy({
      by: ['rating'],
      where: {
        isPublished: true
      },
      _count: {
        rating: true
      }
    });

    const totalReviews = stats.reduce((sum: number, stat: typeof stats[0]) => sum + stat._count.rating, 0);
    const averageRating = stats.reduce((sum: number, stat: typeof stats[0]) => 
      sum + (stat.rating * stat._count.rating), 0
    ) / (totalReviews || 1); // Prevent division by zero

    const distribution = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };

    stats.forEach((stat: typeof stats[0]) => {
      distribution[stat.rating as keyof typeof distribution] = stat._count.rating;
    });

    res.json({
      success: true,
      data: {
        totalReviews,
        averageRating: parseFloat(averageRating.toFixed(2)),
        distribution
      }
    });
  } catch (error) {
    console.error('Get review stats error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch review statistics'
    });
  }
});

// Update review (admin only - would need auth middleware)
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isApproved, isPublished } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Review ID is required'
      });
    }

    const updateData: any = {};
    
    if (typeof isApproved === 'boolean') {
      updateData.isApproved = isApproved;
    }
    
    if (typeof isPublished === 'boolean') {
      updateData.isPublished = isPublished;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No valid fields to update'
      });
    }

    const review = await prisma.review.update({
      where: { id },
      data: updateData
    });

    res.json({
      success: true,
      data: review,
      message: 'Review updated successfully'
    });
  } catch (error) {
    console.error('Update review error:', error);
    
    if (error && typeof error === 'object' && 'code' in error) {
      const prismaError = error as { code: string };
      if (prismaError.code === 'P2025') {
        return res.status(404).json({
          success: false,
          error: 'Review not found'
        });
      }
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to update review'
    });
  }
});

// Delete review (admin only - would need auth middleware)
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Review ID is required'
      });
    }

    await prisma.review.delete({
      where: { id }
    });

    res.json({
      success: true,
      message: 'Review deleted successfully'
    });
  } catch (error) {
    console.error('Delete review error:', error);
    
    if (error && typeof error === 'object' && 'code' in error) {
      const prismaError = error as { code: string };
      if (prismaError.code === 'P2025') {
        return res.status(404).json({
          success: false,
          error: 'Review not found'
        });
      }
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to delete review'
    });
  }
});

export default router;