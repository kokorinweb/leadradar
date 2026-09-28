import { PROCESS } from "@/content/site";
import { Container, Figure, Heading, Section } from "./primitives";

/**
 * Единственное место на странице с нумерацией: здесь содержание
 * действительно последовательность, а не набор пунктов.
 */
export function Process() {
  return (
    <Section className="border-y border-line bg-plaster-deep">
      <Container>
        <Heading className="max-w-[22rem]">Как проходит работа</Heading>
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <li key={p.title} className="border-t border-graphite pt-5">
              <Figure value={i + 1} className="text-[0.8rem] text-ochre" />
              <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-graphite/70">
                {p.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
