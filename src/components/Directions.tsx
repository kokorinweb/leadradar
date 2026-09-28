import { DIRECTIONS } from "@/content/site";
import { Container, Heading, PhotoSlot, Section } from "./primitives";

export function Directions() {
  return (
    <Section id="napravleniya">
      <Container>
        <Heading className="max-w-[20rem]">Направления работ</Heading>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {DIRECTIONS.map((d) => (
            <article key={d.id}>
              <PhotoSlot label={`Фото: ${d.title.toLowerCase()}`} ratio="4/3" />
              <h3 className="mt-5 text-xl font-bold tracking-[-0.01em]">
                {d.title}
              </h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-graphite/70">
                {d.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
