import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Lexend_Deca } from "next/font/google";
import { WalletProvider } from "../providers/WalletProvider";
import LayoutContent from "./LayoutContent";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Chesz",
  description: "Chesz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${dmSans.variable} ${lexendDeca.variable} antialiased bg-black text-white transition-colors`}
        suppressHydrationWarning
      >
        <WalletProvider>
          <LayoutContent>{children}</LayoutContent>
        </WalletProvider>
      </body>
    </html>
  );
}
