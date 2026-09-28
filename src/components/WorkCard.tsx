import Link from "next/link";
import { workPhotoName, type Work } from "@/content/site";
import { Figure, PhotoSlot, money } from "./primitives";

/**
 * Карточка объекта в сетке. Кадр помечен именем общего элемента: при переходе
 * на страницу объекта браузер считает его тем же самым и разворачивает,
 * а не подменяет.
 */
export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="group">
      <Link href={`/raboty/${work.slug}/`} transitionTypes={["nav-forward"]}>
        <PhotoSlot
          label={`Фото объекта: ${work.title.toLowerCase()}`}
          ratio="4/3"
          vtName={workPhotoName(work.slug)}
        />
        <p className="mt-5 text-[0.78rem] text-concrete">{work.kind}</p>
        <h3 className="mt-1.5 text-lg font-bold leading-snug transition-colors group-hover:text-ochre">
          {work.title}
        </h3>
      </Link>
      <dl className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line pt-4">
        <div>
          <dt className="sr-only">Площадь</dt>
          <dd>
            <Figure value={work.area} unit="м²" className="text-base font-medium" />
          </dd>
        </div>
        <div>
          <dt className="sr-only">Срок</dt>
          <dd>
            <Figure value={work.months} unit="мес." className="text-base font-medium" />
          </dd>
        </div>
        <div className="ml-auto">
          <dt className="sr-only">Стоимость работ</dt>
          <dd>
            <Figure value={money(work.price)} unit="₽" className="text-base font-medium" />
          </dd>
        </div>
      </dl>
    </article>
  );
}
