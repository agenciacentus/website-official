import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acentus® — La agencia de Software que necesitas",
  description:
    "Nos encargamos de tus proyectos digitales para que te enfoques en tu negocio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="cupcake">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
