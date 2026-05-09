import { Outfit, Literata } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});

export const metadata = {
  title: "simplifylegaldocument — AI Legal Document Simplifier",
  description:
    "Paste a contract. Understand it instantly. Get plain-English summaries, risk scores, and red flags for any legal document.",
  keywords: [
    "legal document simplifier",
    "contract analysis",
    "AI lawyer",
    "legal summary",
    "plain english law",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${literata.variable}`}
    >
      <body className="font-sans antialiased bg-background text-text transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1492697474833006"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}