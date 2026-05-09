import { Outfit, Literata } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
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
  description: "Paste a contract. Understand it instantly. Get plain-English summaries, risk scores, and red flags for any legal document.",
  keywords: ["legal document simplifier", "contract analysis", "AI lawyer", "legal summary", "plain english law"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${literata.variable}`}>
      <body className="font-sans antialiased bg-background text-text transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

