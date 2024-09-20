import "@mantine/core/styles.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

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
  title: "Arun Kanojia",
  description: "Frontend engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" defer></script>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono pb-20`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
