import type { Metadata } from "next";
import { COMPANY } from "@/content/site";
import { WorksBrowser } from "@/components/WorksBrowser";

export const metadata: Metadata = {
  title: `Наши работы — ремонт под ключ в ${COMPANY.cityIn}`,
  description:
    "Сданные объекты: квартиры, дома и офисы. Площадь, срок и стоимость " +
    "работ по каждому.",
};

export default function WorksPage() {
  return <WorksBrowser />;
}
