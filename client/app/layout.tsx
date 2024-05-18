import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estate Eagle",
  description: "Real Estate Price Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en'>
          <ClerkProvider>
            <body>
              {children}
            </body>
          </ClerkProvider>
      </html>
  );
}
