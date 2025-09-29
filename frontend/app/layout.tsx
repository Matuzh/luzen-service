import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LuzeN | Marketplace IT",
  description: "Znajdź specjalistę IT dla swojej firmy w kilka minut",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-slate-950">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
