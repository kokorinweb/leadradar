import { REVIEWS } from "@/content/site";
import { Container, Heading, Section } from "./primitives";

export function Reviews() {
  return (
    <Section>
      <Container>
        <Heading className="max-w-[22rem]">Отзывы клиентов</Heading>
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure key={i} className="flex flex-col border-t border-graphite pt-6">
              <blockquote className="text-[1.02rem] leading-relaxed text-graphite/85">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 text-[0.85rem] text-concrete">
                <span className="font-semibold text-graphite">{r.author}</span>
                <span className="mx-2">/</span>
                {r.object}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
