"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/context/language-context";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.quote1"),
      name: "Amina Hussein",
      title: "Parent",
      avatar: "https://placehold.co/100x100.png",
      initials: "AH",
      hint: "woman portrait"
    },
    {
      quote: "The teachers are incredibly supportive and dedicated. I've grown so much academically and spiritually since I joined.",
      name: "Ibrahim Ali",
      title: "Student, Grade 10",
      avatar: "https://placehold.co/100x100.png",
      initials: "IA",
      hint: "male student"
    },
    {
      quote: "As an alumnus, I can confidently say that INA prepared me not just for college, but for life. The values I learned here are invaluable.",
      name: "Zainab Ahmed",
      title: "Alumni, Class of 2020",
      avatar: "https://placehold.co/100x100.png",
      initials: "ZA",
      hint: "female graduate"
    },
  ];

  return (
    <section id="testimonials" className="py-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-headline text-foreground">{t('testimonials.title')}</h2>
            <div className="flex items-center gap-2">
                <CarouselPrevious className="relative top-auto left-auto right-auto bottom-auto -translate-y-0 h-8 w-8" />
                <CarouselNext className="relative top-auto left-auto right-auto bottom-auto -translate-y-0 h-8 w-8" />
            </div>
        </div>
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 pl-4">
                <Card className="h-full relative overflow-hidden p-6 bg-card border shadow-sm">
                     <span className="absolute top-2 left-2 text-6xl text-primary/10 font-serif">&ldquo;</span>
                    <CardContent className="p-0">
                      <p className="italic text-foreground z-10 relative">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
