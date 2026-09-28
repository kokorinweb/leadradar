import Link from "next/link";
import { WORKS } from "@/content/site";
import { Container, Figure, Heading, PhotoSlot, Section, money } from "./primitives";

/**
 * Кадры одного формата. Разные пропорции пробовались и были убраны: в сетке
 * строка тянется по самому высокому кадру, и между карточками оставались
 * дыры. Разнообразие здесь даёт содержание, а не рамка.
 */
export function Works() {
  return (
    <Section id="raboty" className="border-y border-line bg-plaster-deep">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Heading className="max-w-[22rem]">Избранные объекты</Heading>
          <Link
            href="#raboty"
            className="text-[0.95rem] font-semibold text-ochre underline-offset-4 hover:underline"
          >
            Все работы
          </Link>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {WORKS.map((w) => (
            <article key={w.id} className="group">
              <PhotoSlot label={`Фото объекта: ${w.title.toLowerCase()}`} ratio="4/3" />
              <p className="mt-5 text-[0.78rem] text-concrete">{w.kind}</p>
              <h3 className="mt-1.5 text-lg font-bold leading-snug transition-colors group-hover:text-ochre">
                {w.title}
              </h3>
              <dl className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line pt-4">
                <div>
                  <dt className="sr-only">Площадь</dt>
                  <dd>
                    <Figure value={w.area} unit="м²" className="text-base font-medium" />
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Срок</dt>
                  <dd>
                    <Figure value={w.months} unit="мес." className="text-base font-medium" />
                  </dd>
                </div>
                <div className="ml-auto">
                  <dt className="sr-only">Стоимость работ</dt>
                  <dd>
                    <Figure value={money(w.price)} unit="₽" className="text-base font-medium" />
                  </dd>
                </div>
              </dl>
            </article>
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
