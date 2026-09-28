import { COMPANY } from "@/content/site";
import { Container, Section } from "./primitives";

export function FinalCta() {
  return (
    <Section id="zayavka" className="bg-graphite text-plaster">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 className="max-w-[20rem] text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl">
              Опишите объект — подскажем, с чего начать
            </h2>
            <p className="mt-5 max-w-[26rem] text-[0.95rem] leading-relaxed text-plaster/60">
              Если не хотите заполнять форму, позвоните. Проконсультируем без
              выезда и скажем, нужен ли замер.
            </p>
            <a
              href={COMPANY.phoneHref}
              className="mt-8 inline-block text-2xl font-bold tracking-[-0.02em] sm:text-3xl"
            >
              {COMPANY.phone}
            </a>
            <p className="mt-2 text-[0.85rem] text-plaster/45">{COMPANY.hours}</p>
          </div>

          <form className="flex flex-col gap-4">
            <label className="block">
              <span className="text-[0.85rem] text-plaster/55">Как вас зовут</span>
              <input
                name="name"
                className="mt-2 w-full border border-line-dark bg-transparent px-5 py-4 text-lg outline-none focus:border-ochre"
              />
            </label>
            <label className="block">
              <span className="text-[0.85rem] text-plaster/55">Телефон</span>
              <input
                name="phone"
                type="tel"
                placeholder="+7"
                className="mt-2 w-full border border-line-dark bg-transparent px-5 py-4 text-lg outline-none placeholder:text-plaster/25 focus:border-ochre"
              />
            </label>
            <label className="block">
              <span className="text-[0.85rem] text-plaster/55">
                Что нужно сделать
              </span>
              <textarea
                name="message"
                rows={3}
                className="mt-2 w-full resize-none border border-line-dark bg-transparent px-5 py-4 text-[1.02rem] outline-none focus:border-ochre"
              />
            </label>
            <button
              type="submit"
              className="mt-2 bg-ochre px-8 py-4 text-[0.95rem] font-semibold text-plaster transition-colors hover:bg-ochre-deep"
            >
              Отправить заявку
            </button>
            <p className="text-[0.78rem] leading-relaxed text-plaster/40">
              Отправляя заявку, вы соглашаетесь на обработку персональных данных.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
