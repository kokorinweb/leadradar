"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAV } from "@/content/site";
import { Container } from "./primitives";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-plaster/92 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" className="flex items-baseline gap-2.5 shrink-0">
            <span className="text-lg font-extrabold tracking-[-0.03em]">
              {COMPANY.name}
            </span>
            <span className="hidden text-[0.7rem] text-concrete sm:inline">
              {COMPANY.city}
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[0.88rem] text-graphite/80 transition-colors hover:text-ochre"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={COMPANY.phoneHref}
              className="hidden whitespace-nowrap text-[0.95rem] font-semibold sm:inline"
            >
              {COMPANY.phone}
            </a>
            <Link
              href="#kalkulyator"
              className="hidden whitespace-nowrap bg-ochre px-5 py-3 text-[0.85rem] font-semibold text-plaster transition-colors hover:bg-ochre-deep xl:inline-flex"
            >
              Рассчитать ремонт
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`block h-[2px] w-6 bg-graphite transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 bg-graphite transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 bg-graphite transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line bg-plaster lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 text-base last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={COMPANY.phoneHref}
                className="text-lg font-semibold"
              >
                {COMPANY.phone}
              </a>
              <Link
                href="#kalkulyator"
                onClick={() => setOpen(false)}
                className="bg-ochre px-6 py-3.5 text-center text-[0.95rem] font-semibold text-plaster"
              >
                Рассчитать ремонт
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
