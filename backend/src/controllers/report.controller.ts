import { Request, Response } from 'express';
import { prisma } from '../prisma/client';
import { validateReport } from '../utils/validate';

export const createReport = async (req: Request, res: Response) => {
  const error = validateReport(req.body);
  if (error) return res.status(400).json({ success: false, message: error });

  const { deviceType, problemDescription, fullName, phoneNumber } = req.body;

  const report = await prisma.report.create({
    data: {
      deviceType,
      description: problemDescription,
      fullName,
      phone: phoneNumber,
    },
  });

  return res.status(201).json({
    success: true,
    message: 'Zgłoszenie przyjęte. Skontaktujemy się wkrótce.',
    reportId: report.id,
  });
};
