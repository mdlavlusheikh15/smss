"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from '@/context/language-context';

export default function Hero() {
  const { t } = useLanguage();

  const slides = [
    {
      image: "https://placehold.co/1200x500.png",
      hint: "school children smiling",
      title: "hero.title",
    },
    {
      image: "https://placehold.co/1200x500.png",
      hint: "students in classroom",
      title: "hero.title",
    },
    {
      image: "https://placehold.co/1200x500.png",
      hint: "school building exterior",
      title: "hero.title",
    },
  ];

  return (
    <section className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                <Image
                  src={slide.image}
                  alt={t(slide.title)}
                  data-ai-hint={slide.hint}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
                  <h1 className="text-3xl md:text-5xl font-bold font-headline drop-shadow-lg max-w-2xl">
                    {t(slide.title)}
                  </h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-white/50 hover:text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-white/50 hover:text-white" />
      </Carousel>
    </section>
  );
}
