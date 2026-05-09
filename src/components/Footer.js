import Link from "next/link";
import { ShieldCheck, Mail, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">S</div>
              <span className="font-serif font-bold text-xl">simplifylegaldocument</span>
            </Link>
            <p className="text-muted max-w-sm mb-6 leading-relaxed">
              Making legal clarity accessible to everyone. Our mission is to help people understand what they sign without expensive legal fees.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">How it works</Link></li>

              <li><Link href="/api-docs" className="hover:text-primary transition-colors">API Docs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} simplifylegaldocument. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted bg-background px-3 py-1 rounded-full border border-border">
            <ShieldCheck className="w-3 h-3 text-secondary" />
            <span>Not a substitute for professional legal advice.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

