import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Cecilie Vangen",
  description: "Fullstack-utvikler med designbakgrunn.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body
        className={[
          inter.variable,
          playfair.variable,
          "min-h-dvh bg-[rgb(var(--bg))] text-[rgb(var(--ink))]",
        ].join(" ")}
      >
        <Header />
        <main className="pt-18 pb-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
