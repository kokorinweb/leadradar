import { PROOF } from "@/content/site";
import { Container, Figure } from "./primitives";

/**
 * Доказательства подаются одной полосой с разделителями, а не четырьмя
 * одинаковыми карточками: так это читается как шильдик с характеристиками,
 * а не как очередной набор плиток.
 */
export function Proof() {
  return (
    <section className="bg-graphite text-plaster">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {PROOF.map((item, i) => (
            <div
              key={item.label}
              className={`border-line-dark px-1 py-9 lg:py-12 ${
                i % 2 === 0 ? "" : "border-l"
              } ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                i === 2 ? "lg:border-l" : ""
              } ${i === 3 ? "lg:border-l" : ""} lg:px-8`}
            >
              <Figure
                value={item.value}
                unit={item.unit}
                className="text-4xl font-bold lg:text-5xl"
              />
              <p className="mt-3 max-w-[13rem] text-[0.88rem] leading-snug text-plaster/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
