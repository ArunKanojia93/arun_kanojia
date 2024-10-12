import "@mantine/core/styles.css";
import "aos/dist/aos.css";
import localFont from "next/font/local";
import "./globals.css";

import { AOSInit } from "@/components/Aos";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Arun Kanojia</title>
        <meta name="description" content="Frontend engineer" />

        <meta property="og:url" content="https://arun-kanojia.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arun Kanojia" />
        <meta property="og:description" content="Frontend engineer" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e46ec848-6d26-4b40-9ebb-d4cca119d973.png?token=Z0twFNmzMlDXoVmwO_jwkmulp6EOhi1T1vV4E1Zkosk&height=1105&width=1102&expires=33264724839" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="arun-kanojia.vercel.app" />
        <meta property="twitter:url" content="https://arun-kanojia.vercel.app" />
        <meta name="twitter:title" content="Arun Kanojia" />
        <meta name="twitter:description" content="Frontend engineer" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e46ec848-6d26-4b40-9ebb-d4cca119d973.png?token=Z0twFNmzMlDXoVmwO_jwkmulp6EOhi1T1vV4E1Zkosk&height=1105&width=1102&expires=33264724839" />
        <ColorSchemeScript />
        <AOSInit />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
