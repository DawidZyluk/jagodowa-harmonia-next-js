import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Jagodowa Harmonia",
  description: "Jagodowa Harmonia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}
