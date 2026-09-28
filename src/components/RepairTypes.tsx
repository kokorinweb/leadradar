import { REPAIR_TYPES } from "@/content/site";
import { Container, Heading, Section } from "./primitives";

/**
 * Таблица, а не карточки: четыре вида ремонта сравнивают между собой, и
 * сравнивать удобнее строками с общими колонками.
 */
export function RepairTypes() {
  return (
    <Section className="border-y border-line bg-plaster-deep">
      <Container>
        <Heading className="max-w-[24rem]">Виды ремонта</Heading>
        <div className="mt-12 lg:mt-16">
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1.6fr)] gap-8 border-b border-line pb-3 text-[0.8rem] text-concrete lg:grid">
            <span>Вид</span>
            <span>Что входит</span>
            <span>Кому подходит</span>
          </div>
          {REPAIR_TYPES.map((t) => (
            <div
              key={t.title}
              className="grid gap-2 border-b border-line py-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1.6fr)] lg:gap-8"
            >
              <h3 className="text-lg font-bold">{t.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-graphite/80">
                {t.includes}
              </p>
              <p className="text-[0.95rem] leading-relaxed text-graphite/60">
                {t.fits}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
