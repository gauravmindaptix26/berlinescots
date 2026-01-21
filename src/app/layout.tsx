import type { Metadata } from "next";
import { Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../i18n/LanguageProvider";

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Berlinescots - Discreet Elegance, Always Available",
  description:
    "Berlinescots connects you with carefully selected companions across Germany and Europe, delivering discreet, premium experiences.",
  metadataBase: new URL("https://berlinescots.de"),
  openGraph: {
    title: "Berlinescots - Discreet Elegance, Always Available",
    description:
      "Discreet, premium companionship with trusted, carefully selected companions across Germany and Europe.",
    type: "website",
    url: "https://berlinescots.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berlinescots - Discreet Elegance, Always Available",
    description:
      "Discreet, premium companionship with trusted, carefully selected companions across Germany and Europe.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dancingScript.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
