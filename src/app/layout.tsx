import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Nunito-Italic-VariableFont_wght.ttf",
  variable: "--font-nunito-italic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ENEM 2024 - Simuladores ENEM",
  description: "Simulado com Ranking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
