import Link from "next/link";
import { ViewTransition, type ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-block lg:py-block-lg ${className}`}
    >
      {children}
    </section>
  );
}

/**
 * Заголовок раздела. Без надстрочных подписей и без выделения одного слова
 * цветом — ровно те приёмы, по которым страница читается как сгенерированная.
 */
export function Heading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-[-0.02em] ${className}`}
    >
      {children}
    </h2>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "quiet";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-4 text-[0.95rem] font-semibold transition-colors duration-200";
  const styles = {
    solid: "bg-ochre text-plaster hover:bg-ochre-deep",
    outline:
      "border border-graphite text-graphite hover:bg-graphite hover:text-plaster",
    quiet:
      "border border-line-dark text-plaster hover:border-ochre hover:text-ochre",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

/**
 * Место под фотографию. Настоящих снимков объектов пока нет, а рисовать их
 * нечем, поэтому слот честно показывает, что здесь будет и какого размера.
 * Заменяется на next/image без изменения разметки вокруг.
 */
export function PhotoSlot({
  label,
  ratio = "3/2",
  className = "",
  vtName,
}: {
  label: string;
  ratio?: string;
  className?: string;
  /** Имя общего элемента: кадр переезжает из сетки в шапку объекта. */
  vtName?: string;
}) {
  const frame = (
    <div
      style={{ aspectRatio: ratio }}
      className={`relative w-full overflow-hidden bg-plaster-deep ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #22262b 0 1px, transparent 1px 11px)",
        }}
      />
      <div className="absolute inset-0 flex items-end p-5">
        <span className="text-[0.8rem] leading-snug text-graphite/55">
          {label}
        </span>
      </div>
    </div>
  );

  if (!vtName) return frame;

  return (
    <ViewTransition name={vtName} share="work-photo">
      {frame}
    </ViewTransition>
  );
}

/** Крупная цифра-доказательство. */
export function Figure({
  value,
  unit,
  className = "",
}: {
  value: string | number;
  unit?: string;
  className?: string;
}) {
  return (
    <span className={`figure ${className}`}>
      {value}
      {unit ? (
        <span className="ml-1.5 text-[0.5em] font-medium tracking-normal">
          {unit}
        </span>
      ) : null}
    </span>
  );
}

export const money = (n: number) => n.toLocaleString("ru-RU");
