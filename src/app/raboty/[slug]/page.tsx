import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WORKS, workPhotoName } from "@/content/site";
import {
  Button,
  Container,
  Figure,
  Heading,
  PhotoSlot,
  Section,
  money,
} from "@/components/primitives";

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/raboty/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) return {};

  return {
    title: `${work.title} — ${work.area} м², ремонт под ключ`,
    description: `${work.kind}, ${work.area} м². Срок ${work.months} мес., стоимость работ ${money(work.price)} ₽.`,
  };
}

export default async function WorkPage({ params }: PageProps<"/raboty/[slug]">) {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) notFound();

  const others = WORKS.filter((w) => w.slug !== work.slug).slice(0, 3);

  const facts = [
    { label: "Тип объекта", value: work.kind },
    { label: "Площадь", node: <Figure value={work.area} unit="м²" /> },
    { label: "Срок работ", node: <Figure value={work.months} unit="мес." /> },
    {
      label: "Стоимость работ",
      node: <Figure value={money(work.price)} unit="₽" />,
    },
  ];

  return (
    <main>
      {/* Кадр несёт то же имя, что и в сетке, поэтому при переходе
          разворачивается из карточки, а не появляется заново. */}
      <PhotoSlot
        label={`Фото объекта: ${work.title.toLowerCase()}`}
        ratio="21/9"
        vtName={workPhotoName(work.slug)}
        className="border-b border-line"
      />

      <Section>
        <Container>
          <Link
            href="/raboty/"
            transitionTypes={["nav-back"]}
            className="text-[0.85rem] text-concrete underline-offset-4 hover:text-ochre hover:underline"
          >
            Все работы
          </Link>

          <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
            <div>
              <Heading>{work.title}</Heading>

              <div className="mt-10">
                <h2 className="text-[0.85rem] text-concrete">Задача клиента</h2>
                <p className="mt-2 max-w-[38rem] text-[1.02rem] leading-relaxed">
                  {work.task}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-[0.85rem] text-concrete">
                  Исходное состояние
                </h2>
                <p className="mt-2 max-w-[38rem] text-[1.02rem] leading-relaxed">
                  {work.before}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-[0.85rem] text-concrete">
                  Выполненные работы
                </h2>
                <ul className="mt-2 flex flex-col gap-2">
                  {work.done.map((item) => (
                    <li
                      key={item}
                      className="max-w-[38rem] text-[1.02rem] leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <dl>
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line py-4 first:border-t"
                  >
                    <dt className="text-[0.85rem] text-concrete">{f.label}</dt>
                    <dd className="text-[1.02rem] font-semibold">
                      {f.node ?? f.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[0.8rem] leading-relaxed text-concrete">
                Уточнить у компании, входят ли материалы в указанную сумму.
              </p>
              <Button href="/#kalkulyator" className="mt-7 w-full">
                Рассчитать свой ремонт
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-plaster-deep">
        <Container>
          <Heading className="max-w-[20rem]">Галерея</Heading>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: work.gallery }, (_, i) => (
              // Кадры одного формата: при разных пропорциях строка сетки
              // тянется по самому высокому, и под низкими остаются дыры.
              <PhotoSlot
                key={i}
                label={`Кадр ${i + 1} из ${work.gallery}`}
                ratio="4/3"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading className="max-w-[20rem]">Другие объекты</Heading>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((w) => (
              <article key={w.slug}>
                <Link
                  href={`/raboty/${w.slug}/`}
                  transitionTypes={["nav-forward"]}
                  className="group"
                >
                  <PhotoSlot
                    label={`Фото объекта: ${w.title.toLowerCase()}`}
                    ratio="4/3"
                    vtName={workPhotoName(w.slug)}
                  />
                  <p className="mt-4 text-[0.78rem] text-concrete">{w.kind}</p>
                  <h3 className="mt-1.5 text-lg font-bold leading-snug transition-colors group-hover:text-ochre">
                    {w.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
