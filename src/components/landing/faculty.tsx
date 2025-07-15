"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { Button } from "../ui/button";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const facultyMembers = [
  {
    name: "হাসমত উল্লাহ",
    title: "স্কুল সহ-সভাপতি",
    image: "/images/faculty-1.jpg",
    initials: "HU",
    hint: "man portrait"
  },
  {
    name: "রেজাউল ইসলাম",
    title: "স্কুল ক্যাশিয়ার",
    image: "/images/faculty-2.jpg",
    initials: "RI",
    hint: "man portrait"
  },
  {
    name: "মাহবুব আলম",
    title: "স্কুল সেক্রেটারী",
    image: "/images/faculty-3.jpg",
    initials: "MA",
    hint: "man portrait"
  },
];

export default function Faculty() {
  const { t } = useLanguage();

  return (
    <section id="faculty" className="py-8">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-headline text-foreground">{t('faculty.title')}</h2>
            <Button variant="link" asChild className="text-foreground">
                <Link href="#">{t('see_all.button')}</Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((member) => (
            <Card key={member.name} className="text-center p-6 shadow-sm hover:shadow-md transition-shadow bg-card border">
                <Avatar className="h-24 w-24 mx-auto border-4 border-primary/20">
                  <AvatarImage src={`https://placehold.co/100x100.png`} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
                <div className="flex justify-center space-x-2 mt-4">
                    <Link href="#"><Facebook className="h-4 w-4 text-muted-foreground hover:text-primary" /></Link>
                    <Link href="#"><Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" /></Link>
                    <Link href="#"><Instagram className="h-4 w-4 text-muted-foreground hover:text-primary" /></Link>
                </div>
            </Card>
          ))}
        </div>
    </section>
  );
}
