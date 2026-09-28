"use client";

import { useCallback, useRef, useState } from "react";
import { Container, Heading, PhotoSlot, Section } from "./primitives";

/**
 * Сравнение до и после. Двигает человек — никакой автоматической анимации.
 * Работает мышью, пальцем и стрелками на клавиатуре.
 */
export function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const moveTo = useCallback((clientX: number) => {
    const box = frameRef.current?.getBoundingClientRect();
    if (!box) return;
    const next = ((clientX - box.left) / box.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const startDrag = (clientX: number) => {
    moveTo(clientX);
    const onMouseMove = (e: MouseEvent) => moveTo(e.clientX);
    const onTouchMove = (e: TouchEvent) => moveTo(e.touches[0].clientX);
    const stop = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
  };

  return (
    <Section>
      <Container>
        <Heading className="max-w-[24rem]">До и после</Heading>
        <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-relaxed text-graphite/65">
          Потяните разделитель, чтобы сравнить исходное состояние и результат.
        </p>

        <div
          ref={frameRef}
          onMouseDown={(e) => startDrag(e.clientX)}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          className="relative mt-10 select-none overflow-hidden lg:mt-14"
          style={{ aspectRatio: "16/9", cursor: "ew-resize" }}
        >
          <PhotoSlot
            label="Фото: состояние до ремонта"
            ratio="16/9"
            className="absolute inset-0 h-full"
          />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <div className="h-full bg-graphite">
              <PhotoSlot
                label="Фото: результат после ремонта"
                ratio="16/9"
                className="h-full"
              />
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 w-[2px] bg-ochre"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-ochre">
              <span className="block h-4 w-[2px] bg-plaster" />
              <span className="mx-1.5 block h-4 w-[2px] bg-plaster" />
              <span className="block h-4 w-[2px] bg-plaster" />
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            aria-label="Положение разделителя между фотографиями до и после"
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute bottom-4 left-1/2 w-2/3 -translate-x-1/2 opacity-0 focus-visible:opacity-100"
          />
        </div>
      </Container>
    </Section>
  );
}
