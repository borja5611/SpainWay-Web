import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpainWay",
  description:
    "Plataforma web turística para descubrir destinos, planificar rutas y vivir experiencias en España.",
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