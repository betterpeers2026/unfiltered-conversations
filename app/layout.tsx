import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unfiltered Conversations | Name the pattern. Change the trajectory.",
  description:
    "A leadership development practice helping capable leaders identify the patterns keeping them from the next level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${dmSans.variable} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
