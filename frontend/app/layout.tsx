import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Marketplace MVP',
  description: 'Znajdź specjalistę IT w kilka minut',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar zawsze na górze */}
        <Navbar />

        {/* Treść strony */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer zawsze na dole */}
        <Footer />
      </body>
    </html>
  );
}