"use client";

import { useState } from "react";
import { WORKS, WORK_KINDS } from "@/content/site";
import { Container, Heading, Section } from "./primitives";
import { WorkCard } from "./WorkCard";

/**
 * Список объектов с фильтром по типу. Фильтр не трогает адрес страницы:
 * сайт собирается статически, и отдельная страница под каждый срез была бы
 * шестью почти одинаковыми документами.
 */
export function WorksBrowser() {
  const [kind, setKind] = useState<string>("Все");
  const shown = kind === "Все" ? WORKS : WORKS.filter((w) => w.kind === kind);

  return (
    <main>
      <Section className="border-b border-line">
        <Container>
          <Heading className="max-w-[24rem]">Наши работы</Heading>
          <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-relaxed text-graphite/65">
            Сданные объекты с площадью, сроком и стоимостью работ. Откройте
            любой, чтобы увидеть исходное состояние и состав работ.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {WORK_KINDS.map((k) => (
              <button
                key={k}
                type="button"
                aria-pressed={kind === k}
                onClick={() => setKind(k)}
                className={`px-5 py-2.5 text-[0.9rem] font-medium transition-colors ${
                  kind === k
                    ? "bg-graphite text-plaster"
                    : "border border-line text-graphite/75 hover:border-graphite"
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {shown.map((w) => (
              <WorkCard key={w.slug} work={w} />
            ))}
          </div>

          {shown.length === 0 ? (
            <p className="mt-12 text-[0.95rem] text-concrete">
              В этой категории пока нет опубликованных объектов.
            </p>
          ) : null}
        </Container>
      </Section>
    </main>
  );
}
