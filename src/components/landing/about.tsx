"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-8">
       <Card className="overflow-hidden shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative min-h-[300px] md:min-h-full rounded-lg overflow-hidden">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt={t('about.title')}
                    data-ai-hint="school building"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-0">
                <h2 className="text-2xl font-bold font-headline text-foreground mb-4">{t('about.title')}</h2>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {t('about.full_desc')}
                </p>
                <Button asChild>
                    <Link href="#">{t('about.button')}</Link>
                </Button>
            </div>
        </div>
       </Card>
    </section>
  );
}
