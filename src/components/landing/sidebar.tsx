"use client"

import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { AlertTriangle, Pin } from "lucide-react"

export default function Sidebar() {
    const { t } = useLanguage()

    const notices = [
      { text: "আগামীকাল মহান স্বাধীনতা দিবস উপলক্ষে স্কুল এবং কলেজ বন্ধ থাকবে।", isNew: true },
      { text: "২০২৪ ভর্তি সংক্রান্ত জরুরী বিজ্ঞপ্তী!", isNew: true },
      { text: "সকল শ্রেনির ১ম সেমিষ্টার পরীক্ষার রুটিন", isNew: false },
      { text: "বেতন সংক্রান্ত জরুরী বিজ্ঞপ্তী!", isNew: false },
    ];

    const studentStats = [
        { count: 95, label: "Students", class: "Class Nine" },
        { count: 80, label: "Total Students", class: "Class Eight" },
        { count: 160, label: "Total Students", class: "Class Seven" },
        { count: 110, label: "Total Students", class: "Class Six" },
    ];

    const alumni = [
        { name: "তানিয়া আক্তার", class: "ক্লাস টেন", image: "https://placehold.co/100x100.png", hint: "female student" },
        { name: "মাজেদুল ইসলাম", class: "ক্লাস নাইন", image: "https://placehold.co/100x100.png", hint: "male student" },
        { name: "রহমান হোসেন", class: "ক্লাস নাইন", image: "https://placehold.co/100x100.png", hint: "male student" },
    ];
    
    const links = [
        { text: "শিক্ষা মন্ত্রনালয়", url: "#" },
        { text: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা...", url: "#" },
    ];


    return (
        <aside className="space-y-8">
             <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-headline text-foreground">{t('notice_board.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {notices.map((notice, index) => (
                      <li key={index} className="flex items-start gap-3 p-2 border-b last:border-b-0">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                        <p className="text-sm font-medium flex-1">{notice.text}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-4">
                    <Button variant="link" asChild className="text-foreground">
                        <Link href="#">{t('notice_board.all_notices')}</Link>
                    </Button>
                  </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-bold font-headline text-foreground">{t('faq.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {links.map((link, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-card border rounded-lg shadow-sm">
                            <div className="flex items-center gap-3">
                            <Pin className="h-5 w-5 text-primary" />
                            <p className="font-medium">{link.text}</p>
                            </div>
                            <Button asChild>
                            <Link href={link.url}>{t('faq.visit_button')}</Link>
                            </Button>
                        </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardContent className="pt-6 grid grid-cols-2 gap-4">
                    {studentStats.map((stat, index) => (
                        <div key={index} className="text-center bg-card border p-4 rounded-lg shadow-sm">
                            <p className="text-3xl font-bold text-foreground">{stat.count}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                             <p className="text-xs text-muted-foreground">{stat.class}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex-row items-center justify-between">
                    <CardTitle className="text-xl font-bold font-headline text-foreground">{t('sidebar.alumni.title')}</CardTitle>
                    <Button variant="link" className="text-foreground">{t('see_all.button')}</Button>
                </CardHeader>
                <CardContent className="space-y-4">
                    {alumni.map(person => (
                        <div key={person.name} className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={person.image} alt={person.name} data-ai-hint={person.hint} />
                                <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{person.name}</p>
                                <p className="text-sm text-muted-foreground">{person.class}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

        </aside>
    )
}
