import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gerador de Senha",
  description: "Uma aplicação que gera Senha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-200">{children}</body>
    </html>
  );
}
