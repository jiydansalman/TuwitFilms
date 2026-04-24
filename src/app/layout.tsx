import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TuwitFilms - Videographer Portfolio",
  description:
    "Portfolio videographer TuwitFilms oleh Rafli Firmansyah, menampilkan karya commercial, event, documentary, dan brand film.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
