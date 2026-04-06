import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.github.io";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vinicius Oliveira | Curriculo Online",
  description:
    "Portfolio profissional de Vinicius Oliveira, desenvolvedor full stack com experiencia em interfaces modernas, integracoes, e-commerce e performance.",
  keywords: [
    "Vinicius Oliveira",
    "desenvolvedor full stack",
    "portfolio",
    "Next.js",
    "React",
    "e-commerce",
    "desenvolvedor web",
  ],
  authors: [{ name: "Vinicius Oliveira" }],
  creator: "Vinicius Oliveira",
  publisher: "Vinicius Oliveira",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Vinicius Oliveira | Curriculo Online",
    description:
      "Portfolio profissional de Vinicius Oliveira, desenvolvedor full stack com experiencia em interfaces modernas, integracoes, e-commerce e performance.",
    url: siteUrl,
    siteName: "Vinicius Oliveira | Curriculo Online",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vinicius Oliveira | Curriculo Online",
    description:
      "Portfolio profissional de Vinicius Oliveira, desenvolvedor full stack com experiencia em interfaces modernas, integracoes, e-commerce e performance.",
  },
  icons: {
    icon: "/logo/logo.ico",
    shortcut: "/logo/logo.ico",
    apple: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
