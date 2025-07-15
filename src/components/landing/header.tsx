"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, LogIn, Wheat, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/language-context";

export default function Header() {
  const { t, setLanguage, language } = useLanguage();

  const navLinks = [
    { href: "#", label: t("nav.home") },
    { href: "#about", label: t("nav.about"), dropdown: true },
    { href: "#", label: t("nav.personnel"), dropdown: true },
    { href: "#", label: t("nav.students"), dropdown: true },
    { href: "#", label: t("nav.results"), dropdown: true },
    { href: "#", label: t("nav.gallery") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-md rounded-t-lg">
      <div className="bg-muted/50 py-2 text-center text-sm font-medium">
        <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center gap-2 text-foreground">
                <span className="bg-foreground text-background text-xs font-bold px-2 py-0.5 rounded-sm">{t('header.update_badge')}</span>
                <p>{t('header.update_text')}</p>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-xs text-foreground">
                <span>EIIN No: 121314</span>
                <span>School code: 123456</span>
                <span>Reg. No: 121314151617</span>
            </div>
        </div>
      </div>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <GraduationCap className="h-10 w-10 text-primary" />
          <div>
            <span className="text-xl font-bold text-primary font-headline">{t('school.name.full')}</span>
            <p className="text-xs text-muted-foreground">{t('school.tagline')}</p>
          </div>
        </Link>
        <nav className="hidden lg:flex lg:gap-1 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Item 1</DropdownMenuItem>
                  <DropdownMenuItem>Item 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button key={link.label} variant="ghost" asChild className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
           <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90">
             <Link href="#">
               <LogIn className="mr-2 h-4 w-4" />
               {t('login.button')}
             </Link>
           </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-12">
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
