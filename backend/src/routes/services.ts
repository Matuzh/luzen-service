import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all active services
router.get('/', async (req: Request, res: Response) => {
  try {
    // Return hardcoded services since we're using constants in frontend
    // You can later add them to DB if needed
    const services = [
      {
        id: 'naprawa-laptopow',
        title: 'Naprawa laptopów',
        description: 'Kompleksowa naprawa laptopów wszystkich marek',
        price: 'od 80 zł',
        duration: '1-3 dni',
        icon: 'Laptop',
        features: [
          'Wymiana matryc i klawiatur',
          'Czyszczenie i konserwacja',
          'Wymiana dysków i pamięci RAM',
          'Naprawa gniazd ładowania'
        ],
        isActive: true
      },
      {
        id: 'naprawa-komputerow',
        title: 'Naprawa komputerów PC',
        description: 'Diagnostyka i naprawa komputerów stacjonarnych',
        price: 'od 60 zł',
        duration: '1-2 dni',
        icon: 'Monitor',
        features: [
          'Diagnostyka podzespołów',
          'Wymiana i upgrade komponentów',
          'Czyszczenie i optymalizacja',
          'Naprawa zasilaczy'
        ],
        isActive: true
      },
      {
        id: 'odzyskiwanie-danych',
        title: 'Odzyskiwanie danych',
        description: 'Profesjonalne odzyskiwanie utraconych danych',
        price: 'od 150 zł',
        duration: '2-5 dni',
        icon: 'HardDrive',
        features: [
          'Odzyskiwanie z uszkodzonych dysków',
          'Backup i migracja danych',
          'Odzyskiwanie usuniętych plików',
          'Naprawa logiczna dysków'
        ],
        isActive: true
      },
      {
        id: 'instalacja-systemow',
        title: 'Instalacja systemów',
        description: 'Instalacja i konfiguracja systemów operacyjnych',
        price: 'od 100 zł',
        duration: '2-4 godz',
        icon: 'Settings',
        features: [
          'Windows 10/11',
          'Linux (różne dystrybucje)',
          'Konfiguracja sterowników',
          'Optymalizacja systemu'
        ],
        isActive: true
      },
      {
        id: 'pomoc-zdalna',
        title: 'Pomoc zdalna',
        description: 'Szybka pomoc techniczna przez Internet',
        price: 'od 50 zł',
        duration: '30 min - 2 godz',
        icon: 'Wifi',
        features: [
          'Rozwiązywanie problemów',
          'Instalacja oprogramowania',
          'Optymalizacja wydajności',
          'Usuwanie wirusów'
        ],
        isActive: true
      },
      {
        id: 'doradztwo-it',
        title: 'Doradztwo IT',
        description: 'Profesjonalne doradztwo w zakresie IT',
        price: 'od 80 zł/h',
        duration: 'wg potrzeb',
        icon: 'Users',
        features: [
          'Dobór sprzętu',
          'Planowanie infrastruktury',
          'Bezpieczeństwo IT',
          'Szkolenia użytkowników'
        ],
        isActive: true
      }
    ];

    res.json({
      success: true,
      data: services
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch services'
    });
  }
});

export default router;