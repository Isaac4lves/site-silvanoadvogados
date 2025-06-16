import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Silvano Almeida - Advogado Trabalhista e Cível em Araguaína - TO",
  description: "Silvano Almeida é advogado em Araguaína/TO com mais de 10 anos de experiência em Direito Trabalhista e Cível. Atendimento personalizado, consultoria e defesa técnica eficaz.",
  keywords: [
    "advogado Araguaína", 
    "direito trabalhista", 
    "direito cível", 
    "consultoria jurídica Araguaína", 
    "advogado Silvano Almeida", 
    "OAB TO 7049", 
    "ações judiciais Araguaína"
  ],
  authors: [{ name: "Silvano Almeida", url: "https://silvanoalmeida.com.br" }],
  openGraph: {
    title: "Silvano Almeida - Advogado Trabalhista e Cível em Araguaína - TO",
    description: "Especializado em Direito do Trabalho e Cível. Atendimento com ética, experiência e resultados.",
    url: "https://site-silvanoadvogados.vercel.app/",
    siteName: "Silvano Almeida Advogados",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "_jpt2djUgSZnKp1E1MMR7dBDA_6SdcRrLMCDXnh3uQQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}

      </body>
    </html>
  );
}
