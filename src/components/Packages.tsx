import { PACKAGES } from "@/content/site";
import { Button, Container, Figure, Heading, Section, money } from "./primitives";

export function Packages() {
  return (
    <Section id="ceny">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Heading className="max-w-[26rem]">Цены и состав работ</Heading>
          <p className="max-w-[26rem] text-[0.95rem] leading-relaxed text-graphite/65">
            Цена указана за квадратный метр работ без материалов. Точная смета
            считается после замера — объём зависит от состояния помещения.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <article
              key={p.title}
              className={`flex flex-col p-8 ${
                p.featured
                  ? "bg-graphite text-plaster"
                  : "border border-line bg-plaster-deep"
              }`}
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-6 flex items-baseline gap-2">
                <span
                  className={`text-[0.85rem] ${p.featured ? "text-plaster/55" : "text-concrete"}`}
                >
                  от
                </span>
                <Figure value={money(p.price)} className="text-3xl font-bold" />
                <span
                  className={`text-[0.85rem] ${p.featured ? "text-plaster/55" : "text-concrete"}`}
                >
                  ₽/м²
                </span>
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-2.5">
                {p.includes.map((item) => (
                  <li
                    key={item}
                    className={`text-[0.92rem] leading-snug ${p.featured ? "text-plaster/85" : "text-graphite/80"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p
                className={`mt-7 border-t pt-5 text-[0.85rem] leading-snug ${
                  p.featured
                    ? "border-line-dark text-plaster/50"
                    : "border-line text-concrete"
                }`}
              >
                Оплачивается отдельно: {p.extra.toLowerCase()}
              </p>

              <Button
                href="#kalkulyator"
                variant={p.featured ? "quiet" : "outline"}
                className="mt-7 w-full"
              >
                Рассчитать
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
