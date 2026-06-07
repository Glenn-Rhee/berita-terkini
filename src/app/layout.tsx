import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Nunito_Sans,
  Montserrat,
  Sora,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Berita Terkini",
  description: "...",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunitoSans",
  subsets: ["latin"],
});

const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${nunitoSans.variable} ${monserrat.variable} h-full antialiased`}
    >
      <body className="bg-background min-h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
