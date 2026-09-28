"use client";

import { useEffect, useRef, useState } from "react";
import { HERO } from "@/content/site";
import { Button, Container, PhotoSlot } from "./primitives";

/**
 * Первый экран построен на шве: слева штукатурка и текст, справа готовый
 * интерьер, уходящий за край. Это «до» и «после» в одном кадре — та же мысль,
 * что и в слайдере ниже по странице.
 *
 * Единственное движение на странице, которое человек не вызывал сам: снимок
 * сдвигается на четверть скорости прокрутки. На узких экранах и при
 * prefers-reduced-motion параллакс выключен.
 */
export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setParallax(wide.matches && !still.matches);

    decide();
    wide.addEventListener("change", decide);
    still.addEventListener("change", decide);
    return () => {
      wide.removeEventListener("change", decide);
      still.removeEventListener("change", decide);
    };
  }, []);

  useEffect(() => {
    const node = photoRef.current;
    if (!node) return;
    if (!parallax) {
      node.style.transform = "";
      return;
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const shift = Math.min(window.scrollY * 0.25, 110);
        node.style.transform = `translate3d(0, ${shift}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [parallax]);

  return (
    <section className="plaster-grain relative overflow-hidden border-b border-line">
      <Container className="relative">
        <div className="grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:py-24">
          <div className="max-w-[34rem]">
            <h1 className="text-[2.1rem] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[2.9rem] lg:text-[3.5rem]">
              {HERO.title}
            </h1>
            <p className="mt-6 max-w-[30rem] text-[1.05rem] leading-relaxed text-graphite/75">
              {HERO.lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={HERO.primary.href}>{HERO.primary.label}</Button>
              <Button href={HERO.secondary.href} variant="outline">
                {HERO.secondary.label}
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[30rem]">
            <div
              ref={photoRef}
              className="will-change-transform lg:absolute lg:-top-24 lg:bottom-[-7rem] lg:left-0 lg:right-[-12vw]"
            >
              <PhotoSlot
                label="Фотография сданного объекта — горизонтальный кадр, интерьер целиком"
                ratio="3/2"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
