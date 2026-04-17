import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpainWay",
  description:
    "Plataforma de turismo inteligente para descubrir destinos e itinerarios personalizados en España.",
  // No necesitas la propiedad 'icons' aquí, Next.js ya detectó tu icon.png
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}