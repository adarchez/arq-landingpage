import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alejandra Videla",
  description: "Estudio de arquitectura de Alejandra Videla.",
  verification: {
    google: (
      <meta
        name="google-site-verification"
        content="KhWtmwkk5li2fl_xxtdM6sjIWrsMlG-lJLsqltid1r8"
      />
    ),
  },
  metadataBase: new URL("https://alejandravidela.vercel.app"),
  openGraph: {
    title: "Alejandra Videla",
    description: "Estudio de arquitectura de Alejandra Videla.",
    url: "https://alejandravidela.vercel.app",
    siteName: "Alejandra Videla",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandra Videla",
    description: "Estudio de arquitectura de Alejandra Videla.",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
