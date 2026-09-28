"use client";

import { useMemo, useState } from "react";
import { CALC } from "@/content/site";
import { Container, Figure, Heading, Section, money } from "./primitives";

const STEPS = ["Объект", "Вид ремонта", "Площадь", "Дополнительно", "Контакты"];

/**
 * Считает грубую вилку, а не смету. Коэффициенты в src/content/site.ts —
 * заглушки: заменить на данные компании до публикации.
 */
function estimate(
  objectType: string,
  repairType: string,
  condition: string,
  area: number,
  extras: string[],
) {
  const o = CALC.objectTypes.find((x) => x.id === objectType);
  const r = CALC.repairTypes.find((x) => x.id === repairType);
  const c = CALC.conditions.find((x) => x.id === condition);
  if (!o || !r || !c || !area) return null;

  const extraK = CALC.extras
    .filter((x) => extras.includes(x.id))
    .reduce((sum, x) => sum + x.k, 0);

  const mid = r.base * area * o.k * c.k * (1 + extraK);
  return {
    low: Math.round((mid * (1 - CALC.spread)) / 1000) * 1000,
    high: Math.round((mid * (1 + CALC.spread)) / 1000) * 1000,
  };
}

export function Calculator() {
  const [step, setStep] = useState(0);
  const [objectType, setObjectType] = useState("");
  const [repairType, setRepairType] = useState("");
  const [condition, setCondition] = useState("");
  const [area, setArea] = useState("");
  const [extras, setExtras] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const result = useMemo(
    () => estimate(objectType, repairType, condition, Number(area), extras),
    [objectType, repairType, condition, area, extras],
  );

  const canAdvance = [
    Boolean(objectType),
    Boolean(repairType),
    Boolean(area) && Number(area) > 0 && Boolean(condition),
    true,
    name.trim().length > 1 && phone.trim().length > 5,
  ][step];

  const toggleExtra = (id: string) =>
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const choiceClass = (active: boolean) =>
    `px-5 py-4 text-left text-[0.95rem] font-medium transition-colors ${
      active
        ? "bg-ochre text-plaster"
        : "border border-line-dark text-plaster/85 hover:border-ochre"
    }`;

  return (
    <Section id="kalkulyator" className="bg-bitumen text-plaster">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <Heading className="max-w-[20rem]">Расчёт стоимости</Heading>
            <p className="mt-5 max-w-[26rem] text-[0.95rem] leading-relaxed text-plaster/60">
              Пять коротких шагов — и вы увидите ориентировочную вилку. Точная
              смета считается на замере: она зависит от состояния помещения,
              которое по фотографиям не определить.
            </p>

            <div className="mt-10 border-t border-line-dark pt-8">
              {result ? (
                <>
                <p className="text-[0.8rem] text-plaster/45">
                  Ориентировочно, работы без материалов
                </p>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-3">
                  <Figure value={money(result.low)} className="text-3xl font-bold lg:text-4xl" />
                  <span className="text-2xl text-plaster/35">—</span>
                  <Figure value={money(result.high)} unit="₽" className="text-3xl font-bold lg:text-4xl" />
                </p>
                </>
              ) : (
                <p className="max-w-[24rem] text-[0.95rem] leading-relaxed text-plaster/45">
                  Вилка появится здесь, как только вы укажете тип объекта, вид
                  ремонта и площадь.
                </p>
              )}
            </div>
          </div>

          <div>
            {/* Прогресс — как разметка на рулетке. Подписи ко всем делениям
                на узком экране не помещаются, поэтому там остаётся название
                текущего шага и его номер. */}
            <div aria-hidden>
              <div className="flex items-end gap-px">
                {STEPS.map((label, i) => (
                  <div key={label} className="flex-1">
                    <div
                      className={`border-l ${
                        i <= step ? "border-ochre" : "border-line-dark"
                      }`}
                      style={{ height: i <= step ? "2rem" : "1.1rem" }}
                    />
                    <p
                      className={`mt-2 hidden text-[0.72rem] sm:block ${
                        i <= step ? "text-plaster/75" : "text-plaster/30"
                      }`}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3 flex items-baseline gap-2 text-[0.78rem] sm:hidden">
                <span className="text-plaster/75">{STEPS[step]}</span>
                <span className="text-plaster/30">
                  шаг {step + 1} из {STEPS.length}
                </span>
              </p>
            </div>

            <div className="mt-10">
              {sent ? (
                <div>
                  <p className="text-xl font-bold">Заявка отправлена</p>
                  <p className="mt-3 max-w-[26rem] text-[0.95rem] leading-relaxed text-plaster/60">
                    Перезвоним в рабочее время и согласуем удобное время замера.
                  </p>
                </div>
              ) : (
                <>
                  {step === 0 ? (
                    <div className="grid gap-3 sm:grid-cols-3">
                      {CALC.objectTypes.map((o) => (
                        <button
                          key={o.id}
                          type="button"
                          onClick={() => setObjectType(o.id)}
                          className={choiceClass(objectType === o.id)}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  ) : null}

                  {step === 1 ? (
                    <div className="grid gap-3">
                      {CALC.repairTypes.map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setRepairType(r.id)}
                          className={choiceClass(repairType === r.id)}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <div className="flex flex-col gap-7">
                      <label className="block">
                        <span className="text-[0.85rem] text-plaster/55">
                          Площадь, м²
                        </span>
                        <input
                          type="number"
                          inputMode="numeric"
                          min={1}
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          placeholder="64"
                          className="mt-2 w-full border border-line-dark bg-transparent px-5 py-4 text-lg outline-none placeholder:text-plaster/25 focus:border-ochre"
                        />
                      </label>
                      <div>
                        <span className="text-[0.85rem] text-plaster/55">
                          Состояние помещения
                        </span>
                        <div className="mt-2 grid gap-3">
                          {CALC.conditions.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => setCondition(c.id)}
                              className={choiceClass(condition === c.id)}
                            >
                              {c.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {step === 3 ? (
                    <div className="grid gap-3">
                      {CALC.extras.map((x) => (
                        <button
                          key={x.id}
                          type="button"
                          aria-pressed={extras.includes(x.id)}
                          onClick={() => toggleExtra(x.id)}
                          className={choiceClass(extras.includes(x.id))}
                        >
                          {x.label}
                        </button>
                      ))}
                    </div>
                  ) : null}

                  {step === 4 ? (
                    <div className="flex flex-col gap-4">
                      <label className="block">
                        <span className="text-[0.85rem] text-plaster/55">Как вас зовут</span>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-2 w-full border border-line-dark bg-transparent px-5 py-4 text-lg outline-none focus:border-ochre"
                        />
                      </label>
                      <label className="block">
                        <span className="text-[0.85rem] text-plaster/55">Телефон</span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+7"
                          className="mt-2 w-full border border-line-dark bg-transparent px-5 py-4 text-lg outline-none placeholder:text-plaster/25 focus:border-ochre"
                        />
                      </label>
                      <p className="text-[0.78rem] leading-relaxed text-plaster/40">
                        Отправляя заявку, вы соглашаетесь на обработку
                        персональных данных.
                      </p>
                    </div>
                  ) : null}
                </>
              )}
            </div>

            {!sent ? (
              <div className="mt-7 flex items-center gap-4">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="px-5 py-4 text-[0.9rem] text-plaster/55 transition-colors hover:text-plaster"
                  >
                    Назад
                  </button>
                ) : null}
                <button
                  type="button"
                  disabled={!canAdvance}
                  onClick={() =>
                    step === STEPS.length - 1 ? setSent(true) : setStep((s) => s + 1)
                  }
                  className="ml-auto bg-ochre px-8 py-4 text-[0.95rem] font-semibold text-plaster transition-colors hover:bg-ochre-deep disabled:cursor-not-allowed disabled:bg-line-dark disabled:text-plaster/35"
                >
                  {step === STEPS.length - 1 ? "Отправить заявку" : "Дальше"}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
