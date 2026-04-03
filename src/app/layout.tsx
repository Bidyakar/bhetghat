import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Bhetghat - Authentic Nepalese Cuisine",
  description: "Authentic Nepalese Cuisine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-on-surface font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}