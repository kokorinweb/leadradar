# Источники скиллов

Скиллы скопированы из публичных репозиториев. Обновлять — вручную из источника.

## anthropics/skills — Apache License 2.0

Текст лицензии лежит рядом со скиллом в `LICENSE.txt`.

| Скилл | Назначение |
| --- | --- |
| `frontend-design` | Основной скилл по визуальному дизайну. Задаёт процесс: план → проверка на шаблонность → код → самокритика. |
| `webapp-testing` | Playwright: запуск приложения, скриншоты, логи браузера. |

## travisjneuman/.claude — MIT License

| Скилл | Назначение |
| --- | --- |
| `ui-research` | Исследование референсов перед вёрсткой. |
| `_shared` | Общие файлы, на которые ссылается `ui-research` по относительным путям. Не скилл, удалять нельзя. |
| `accessibility-a11y` | WCAG 2.2, ARIA, клавиатурная навигация. |
| `seo-analytics-auditor` | Мета-теги, структурированные данные, Core Web Vitals. |

## vercel-labs/agent-skills — MIT License

| Скилл | Назначение |
| --- | --- |
| `web-design-guidelines` | Аудит готовой вёрстки по Web Interface Guidelines. |
| `react-view-transitions` | Анимации через View Transition API. В Next.js 16 работает без флагов и без `react@canary`. |
| `react-best-practices` | Производительность React и Next.js. |
| `deploy-to-vercel` | Порядок деплоя на Vercel, включая путь «связать проект один раз, дальше деплоит git push». |

Репозиторий `vercel-labs/skills` — это не набор скиллов, а CLI для их установки
(`npx skills add`). Внутри один скилл `find-skills`, который учит искать
остальные. Нужные скиллы лежат в `vercel-labs/agent-skills`.

## Что намеренно не установлено

Из `travisjneuman/.claude` доступно 127 скиллов. Семейство `generic-react-*`
(design-system, ux-designer), а также `ui-animation`, `brand-identity` и
`frontend-enhancer` не устанавливались: они продвигают ровно те приёмы, которые
`frontend-design` перечисляет как признаки сгенерированной страницы —
одинаковые карточки со скруглениями, glassmorphism, fade-and-slide-up на каждой
секции, системные шрифтовые стеки. Держать оба набора — значит давать модели
противоречивые инструкции.

Из `anthropics/skills` не устанавливались `theme-factory` (готовые пресеты тем),
`brand-guidelines` (фирменный стиль Anthropic, не наш), `canvas-design`
(постеры в PNG/PDF, 5.6 МБ) и `web-artifacts-builder` (артефакты claude.ai,
не Next.js-проект).

Из `vercel-labs/agent-skills` не устанавливались `composition-patterns`
(паттерны компонентных библиотек — избыточно для лендинга), `vercel-optimize`
(1.2 МБ про снижение счёта за Vercel на работающем проекте),
`writing-guidelines` (стиль технической документации, не продающих текстов),
`react-native-skills` и `vercel-cli-with-tokens`.

Ни один из установленных скиллов не умеет создавать изображения. Такого скилла
не существует: генерация картинок — это отдельный инструмент, а не инструкция
в контексте модели.
