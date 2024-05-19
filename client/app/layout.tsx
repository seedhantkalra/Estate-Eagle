import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estate Eagle",
  description: "Real Estate Price Tracker",
  icons: {
    icon: "123.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en'>
          <ClerkProvider>
            <body className = "bg-white">
              {children}
            </body>
          </ClerkProvider>
      </html>
  );
}
