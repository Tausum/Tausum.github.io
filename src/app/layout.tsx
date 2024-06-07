import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RTau's Page",
  description: "Generated by create next app",
};

const DynamicLayout = dynamic(() => import('@/components/app-router'), {
  ssr: false
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cn_ZH">
      <body className={inter.className}>
        <DynamicLayout>{children}</DynamicLayout>
      </body>
    </html>
  );
}
