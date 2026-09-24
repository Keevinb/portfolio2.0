"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DELAY = 5000; // time per image in milliseconds

const slides = [
  {
    src: "/projects/login2.png",
    title: "Lokalbokning webbapplikation",
    href: "/projects/lokal-bokning",
  },
  {
    src: "/projects/UI_data_generator.png",
    title: "Data generator",
    href: "/projects/data-generator",
  },
  {
    src: "/projects/quiz4.png",
    title: "Quiz game",
    href: "/projects/quiz-game",
  },
  {
    src: "/projects/chat-img2.png",
    title: "Chat application",
    href: "/projects/chat-app",
  },
];

export default function ProjectSlideshow() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const autoplay = useRef(
    Autoplay({
      delay: DELAY,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  );

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[autoplay.current]}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.src}>
              <Link
                href={slide.href}
                className="relative block aspect-video overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800"
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <p className="mt-3 text-center font-medium">{slide.title}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        {!hovered && (
          <div
            key={current}
            className="h-full bg-zinc-800 dark:bg-zinc-200"
            style={{ animation: `slide-progress ${DELAY}ms linear forwards` }}
          />
        )}
      </div>
    </div>
  );
}
