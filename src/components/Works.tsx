import Link from "next/link";
import { WORKS } from "@/content/site";
import { Container, Heading, Section } from "./primitives";
import { WorkCard } from "./WorkCard";

/**
 * Избранные объекты на главной. Кадры одного формата: разные пропорции
 * пробовались и были убраны — в сетке строка тянется по самому высокому
 * кадру, и между карточками оставались дыры.
 */
export function Works() {
  return (
    <Section id="raboty" className="border-y border-line bg-plaster-deep">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Heading className="max-w-[22rem]">Избранные объекты</Heading>
          <Link
            href="/raboty/"
            className="text-[0.95rem] font-semibold text-ochre underline-offset-4 hover:underline"
          >
            Все работы
          </Link>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {WORKS.map((w) => (
            <WorkCard key={w.slug} work={w} />
          ))}
        </div>

        <p className="mt-10 max-w-[44rem] text-[0.85rem] leading-relaxed text-concrete">
          Уточнить у компании, что означает указанная сумма — только работы или
          работы вместе с материалами. На странице объекта это должно быть
          написано прямо.
        </p>
      </Container>
    </Section>
  );
}
