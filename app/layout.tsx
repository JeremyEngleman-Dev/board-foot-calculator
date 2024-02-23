import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Board Foot Calculator",
  description: "Calculate the price of lumber using board feet",
  icons: {
    icon: '/icon.png',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="." />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}