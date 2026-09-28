import { FAQ } from "@/content/site";
import { Container, Heading, Section } from "./primitives";

export function Faq() {
  return (
    <Section className="border-y border-line bg-plaster-deep">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <Heading>Частые вопросы</Heading>
          <div>
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group border-b border-line first:border-t"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.02rem] font-semibold marker:content-none">
                  {item.q}
                  <span
                    aria-hidden
                    className="relative h-3 w-3 shrink-0 text-ochre"
                  >
                    <span className="absolute top-1/2 left-0 h-[2px] w-3 -translate-y-1/2 bg-current" />
                    <span className="absolute top-0 left-1/2 h-3 w-[2px] -translate-x-1/2 bg-current transition-transform duration-200 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-[40rem] pb-6 text-[0.95rem] leading-relaxed text-graphite/70">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
