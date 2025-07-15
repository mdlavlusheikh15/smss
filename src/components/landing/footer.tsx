"use client";

import Link from "next/link";
import { School, Facebook, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t, language } = useLanguage();
  
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <School className="h-8 w-8" />
              <span className="text-2xl font-bold font-headline">{t('hero.title')}</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">{t('footer.tagline')}</p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground"><Facebook /></Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground"><Twitter /></Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground"><Instagram /></Link>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider uppercase">{t('footer.links.title')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">{t('footer.links.about')}</Link></li>
              <li><Link href="#programs" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">{t('footer.links.programs')}</Link></li>
              <li><Link href="#faculty" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">{t('footer.links.faculty')}</Link></li>
              <li><Link href="#faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">{t('footer.links.faq')}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
             <h3 className="font-semibold tracking-wider uppercase">{t('footer.contact.title')}</h3>
             <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                <li>{t('footer.contact.address')}</li>
                <li>{t('footer.contact.email')}</li>
                <li>{t('footer.contact.phone')}</li>
             </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
