import Link from "next/link";
import { COMPANY, NAV } from "@/content/site";
import { Container } from "./primitives";

export function Footer() {
  return (
    <footer className="mt-auto bg-bitumen py-14 text-plaster">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold tracking-[-0.03em]">
              {COMPANY.name}
            </p>
            <p className="mt-2 text-[0.85rem] text-plaster/45">
              Ремонт под ключ в {COMPANY.cityIn}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[0.9rem] text-plaster/70 transition-colors hover:text-ochre"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 text-[0.9rem] text-plaster/70">
            <a href={COMPANY.phoneHref} className="font-semibold text-plaster">
              {COMPANY.phone}
            </a>
            <p>{COMPANY.address}</p>
            <p>{COMPANY.hours}</p>
          </div>

          <div className="flex flex-col gap-2.5 text-[0.9rem] text-plaster/70">
            <Link href="#" className="transition-colors hover:text-ochre">
              Политика обработки данных
            </Link>
            <Link href="#" className="transition-colors hover:text-ochre">
              Договор и гарантия
            </Link>
          </div>
        </div>

        <p className="mt-12 border-t border-line-dark pt-6 text-[0.8rem] text-plaster/35">
          Реквизиты юридического лица, ИНН и ОГРН добавить после подтверждения
          компанией.
        </p>
      </Container>
    </footer>
  );
}
