import { DEMO_NOTICE } from "@/content/site";

/**
 * Ссылку на макет показывают людям, а цифры в нём выдуманы. Полоса говорит
 * это прямо, чтобы никто не принял заглушки за обязательства компании.
 */
export function DemoNotice() {
  if (!DEMO_NOTICE) return null;

  return (
    <div className="bg-ochre text-plaster">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-2.5 sm:px-8">
        <p className="text-[0.82rem] leading-snug">
          Макет для согласования. Название, телефон, сроки, цены и отзывы —
          заглушки, а не данные компании. Фотографии не расставлены.
        </p>
      </div>
    </div>
  );
}
