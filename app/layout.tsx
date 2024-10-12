import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Nunito } from 'next/font/google'
 
const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PlayTest Proxy",
  description: "Generate your MTG proxies using the playtest layout!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
