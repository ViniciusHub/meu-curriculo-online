import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.github.io";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vinicius Oliveira | Currículo Online",
  description:
    "Portfólio profissional de Vinicius Oliveira, desenvolvedor full stack com experiência em interfaces modernas, integrações, e-commerce e performance.",
  keywords: [
    "Vinicius Oliveira",
    "desenvolvedor full stack",
    "portfólio",
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
    title: "Vinicius Oliveira | Currículo Online",
    description:
      "Portfólio profissional de Vinicius Oliveira, desenvolvedor full stack com experiência em interfaces modernas, integrações, e-commerce e performance.",
    url: siteUrl,
    siteName: "Vinicius Oliveira | Currículo Online",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vinicius Oliveira | Currículo Online",
    description:
      "Portfólio profissional de Vinicius Oliveira, desenvolvedor full stack com experiência em interfaces modernas, integrações, e-commerce e performance.",
  },
  icons: {
    icon: `${basePath}/logo/logo.ico`,
    shortcut: `${basePath}/logo/logo.ico`,
    apple: `${basePath}/logo/logo.png`,
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
