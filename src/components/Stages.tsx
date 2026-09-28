import { STAGES } from "@/content/site";
import { Container, Heading, Section } from "./primitives";

export function Stages() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <Heading>Что входит в ремонт под ключ</Heading>
          <div>
            {STAGES.map((s) => (
              <div
                key={s.title}
                className="grid gap-2 border-b border-line py-7 first:border-t sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-8"
              >
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-graphite/70">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
