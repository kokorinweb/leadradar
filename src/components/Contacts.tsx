import { COMPANY } from "@/content/site";
import { Container, Heading, PhotoSlot, Section } from "./primitives";

export function Contacts() {
  const rows = [
    { label: "Город", value: COMPANY.city },
    { label: "Телефон", value: COMPANY.phone, href: COMPANY.phoneHref },
    { label: "Адрес", value: COMPANY.address },
    { label: "Часы работы", value: COMPANY.hours },
  ];

  return (
    <Section id="kontakty">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <Heading className="max-w-[18rem]">География и контакты</Heading>
            <dl className="mt-10">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line py-5 first:border-t"
                >
                  <dt className="text-[0.85rem] text-concrete">{r.label}</dt>
                  <dd className="text-[1.02rem] font-semibold">
                    {r.href ? <a href={r.href}>{r.value}</a> : r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <PhotoSlot
            label="Карта с меткой офиса — подключить Яндекс.Карты после подтверждения адреса"
            ratio="4/3"
          />
        </div>
      </Container>
    </Section>
  );
}
