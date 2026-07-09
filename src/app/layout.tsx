import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cecilie Vangen",
  description: "Fullstack-utvikler med designbakgrunn.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="min-h-dvh bg-[rgb(var(--bg))] text-[rgb(var(--ink))]">
        <Header />
        <main className="pt-18 pb-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
