import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

const steps = [
  {
    num: "01",
    title: "Знакомство и аудит",
    desc: "Изучаем твою музыку, соцсети, текущую аудиторию и цели. Определяем точку А и строим дорожную карту к точке Б.",
  },
  {
    num: "02",
    title: "Стратегия и позиционирование",
    desc: "Формируем уникальный образ артиста, жанровую нишу, целевую аудиторию и ключевые сообщения для каждой платформы.",
  },
  {
    num: "03",
    title: "Запуск и сопровождение",
    desc: "Реализуем план: релизы, продвижение, пресс, переговоры с партнёрами. Твой менеджер всегда на связи.",
  },
  {
    num: "04",
    title: "Анализ и рост",
    desc: "Каждый месяц разбираем метрики, корректируем стратегию и масштабируем то, что работает лучше всего.",
  },
];

const services = [
  {
    icon: "Map",
    title: "Карьерная стратегия",
    desc: "Разрабатываем долгосрочный план развития: от первого релиза до гастрольного тура и сделки с лейблом.",
  },
  {
    icon: "Disc3",
    title: "Управление релизами",
    desc: "Планирование, производство и выпуск музыки в правильные даты. Координация сведения, мастеринга и дистрибуции.",
  },
  {
    icon: "Globe",
    title: "Дистрибуция на 70+ платформ",
    desc: "Выводим музыку на Spotify, Apple Music, ВКонтакте, TikTok и десятки других сервисов по всему миру.",
  },
  {
    icon: "Send",
    title: "Питчинг в плейлисты",
    desc: "Продвигаем релизы в кураторские и алгоритмические плейлисты Spotify, Apple Music, Яндекс Музыки.",
  },
  {
    icon: "Newspaper",
    title: "PR и медиа",
    desc: "Пресс-релизы, публикации в СМИ, интервью, радиоротации — строим медиаприсутствие артиста.",
  },
  {
    icon: "Handshake",
    title: "Переговоры и сделки",
    desc: "Ведём переговоры с лейблами, букинг-агентствами, брендами и синхронизационными агентами.",
  },
  {
    icon: "Instagram",
    title: "Контент и соцсети",
    desc: "Стратегия контента для Instagram, ВКонтакте, TikTok. Работаем с SMM и визуальным стилем.",
  },
  {
    icon: "BarChart2",
    title: "Аналитика и отчёты",
    desc: "Ежемесячные отчёты по стримам, аудитории, доходам и эффективности каждого действия.",
  },
  {
    icon: "ShieldCheck",
    title: "Защита прав",
    desc: "Регистрация авторских прав, контроль за использованием музыки, защита от пиратства.",
  },
];

const plans = [
  {
    icon: "Star",
    title: "Старт",
    subtitle: "Для начинающих",
    price: "от 25 000 ₽ / мес",
    desc: "Базовое управление карьерой для артистов с первыми релизами. Стратегия, релизы и дистрибуция.",
    features: [
      "Карьерная стратегия",
      "До 2 релизов в месяц",
      "Дистрибуция на 70+ платформ",
      "Питчинг в плейлисты",
      "Ежемесячный отчёт",
      "Персональный менеджер",
    ],
  },
  {
    icon: "Rocket",
    title: "Рост",
    subtitle: "Для активных артистов",
    price: "от 55 000 ₽ / мес",
    desc: "Полный цикл управления: производство, продвижение, PR и переговоры с партнёрами.",
    features: [
      "Полная карьерная стратегия",
      "Неограниченные релизы",
      "Дистрибуция + синхронизация",
      "Максимальный питчинг",
      "PR и медиа-поддержка",
      "Переговоры с партнёрами",
    ],
    highlight: true,
  },
  {
    icon: "Crown",
    title: "Лейбл",
    subtitle: "Уровень топ-артиста",
    price: "Индивидуально",
    desc: "Для состоявшихся артистов: полная команда, гастрольный менеджмент и международный выход.",
    features: [
      "Команда из 3+ специалистов",
      "Гастрольный менеджмент",
      "Международный букинг",
      "Бренд-партнёрства",
      "Юридическое сопровождение",
      "Стратегия на 2–3 года",
    ],
  },
];

const results = [
  { value: "3×", label: "рост стримов за первые 6 месяцев" },
  { value: "70+", label: "платформ по всему миру" },
  { value: "500+", label: "плейлистов с нашими артистами" },
  { value: "100%", label: "роялти остаётся у артиста" },
];

const faqs = [
  {
    q: "Чем менеджер отличается от лейбла?",
    a: "Мы не забираем долю в творчестве и не требуем эксклюзивных прав. Вы остаётесь владельцем музыки — мы просто берём на себя всю операционную работу по развитию карьеры.",
  },
  {
    q: "С какого уровня артиста вы работаете?",
    a: "Мы работаем с артистами на любом этапе: от первого EP до уже состоявшихся исполнителей с аудиторией. Главное — наличие музыки и желание развиваться.",
  },
  {
    q: "Как быстро появятся первые результаты?",
    a: "Первые измеримые результаты (рост прослушиваний, попадание в плейлисты, публикации в СМИ) обычно видны через 4–8 недель. Устойчивый рост аудитории — от 3 месяцев.",
  },
  {
    q: "Вы работаете с артистами из любых городов?",
    a: "Да, мы работаем полностью удалённо. Наши артисты живут в разных городах России и СНГ. Для встреч используем видеозвонки.",
  },
  {
    q: "Можно ли начать с одной услуги и потом расширить?",
    a: "Конечно. Многие артисты начинают с дистрибуции или питчинга, а потом переходят на полное управление карьерой по мере роста.",
  },
  {
    q: "Что происходит, если я захочу прекратить сотрудничество?",
    a: "Мы работаем по договору с уведомлением за 30 дней. Все права на музыку и наработанные аудитории остаются у вас.",
  },
];

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

const CareerManagement = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Полное управление карьерой артиста — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Полное управление музыкальной карьерой: стратегия, релизы, дистрибуция, питчинг, PR и переговоры с лейблами. Персональный менеджер под ключ. DIZY MUSIC."
      );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/career-management");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc)
        desc.setAttribute(
          "content",
          "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти."
        );
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible(0.1);
  const resultsSection = useVisible(0.1);
  const servicesSection = useVisible(0.1);
  const plansSection = useVisible(0.1);
  const process = useVisible(0.1);
  const faqSection = useVisible(0.1);

  return (
    <div className="min-h-screen text-white relative bg-black">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main>

          {/* Hero */}
          <section
            ref={hero.ref}
            className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-5xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Crown" size={16} className="text-amber-400" />
                    <span className="text-sm text-zinc-300 font-medium">Менеджмент артиста</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Полное управление<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
                      карьерой
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Берём на себя всё — от стратегии и производства до PR, переговоров с лейблами и монетизации. Ты занимаешься творчеством, мы — остальным.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["Стратегия", "Релизы", "PR", "Переговоры", "Дистрибуция"].map((tag) => (
                      <span key={tag} className="bg-white/8 border border-white/10 rounded-full px-4 py-1.5 text-sm text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-zinc-100 font-semibold px-8"
                      onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Выбрать тариф
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/8 px-8"
                      onClick={() => window.open("https://t.me/dizymusic", "_blank")}
                    >
                      Получить консультацию
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section
            ref={resultsSection.ref}
            className="py-12 md:py-16 border-y border-white/6"
          >
            <div className="container mx-auto px-4">
              <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-700 ${
                  resultsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">{r.value}</div>
                    <div className="text-zinc-400 text-sm leading-snug">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section
            ref={servicesSection.ref}
            className="py-16 md:py-24"
          >
            <div className="container mx-auto px-4">
              <div
                className={`transition-all duration-700 ${
                  servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Что входит в управление</h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    Полный спектр услуг — от стратегии до монетизации. Всё, что нужно артисту для роста.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="rounded-xl border border-white/8 bg-zinc-900/50 p-6 hover:border-amber-500/30 hover:bg-amber-950/10 transition-all duration-200"
                    >
                      <div className="p-2.5 rounded-xl bg-amber-500/15 w-fit mb-4">
                        <Icon name={s.icon} size={22} className="text-amber-400" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Plans */}
          <section
            id="plans"
            ref={plansSection.ref}
            className="py-16 md:py-24 bg-zinc-950/50"
          >
            <div className="container mx-auto px-4">
              <div
                className={`transition-all duration-700 ${
                  plansSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы</h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    Выберите формат сотрудничества в зависимости от ваших целей и уровня развития.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {plans.map((plan) => (
                    <div
                      key={plan.title}
                      className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-200 ${
                        plan.highlight
                          ? "border-amber-500/60 bg-amber-950/25 shadow-xl shadow-amber-900/20"
                          : "border-white/10 bg-zinc-900/50 hover:border-white/20"
                      }`}
                    >
                      {plan.highlight && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                          <span className="bg-amber-500 text-black text-xs font-semibold px-4 py-1 rounded-full">
                            Популярный
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 rounded-xl ${plan.highlight ? "bg-amber-500/20" : "bg-white/8"}`}>
                          <Icon name={plan.icon} size={22} className={plan.highlight ? "text-amber-400" : "text-zinc-300"} />
                        </div>
                        <div>
                          <div className="font-bold text-lg">{plan.title}</div>
                          <div className="text-zinc-400 text-sm">{plan.subtitle}</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold mb-3">{plan.price}</div>
                      <p className="text-zinc-400 text-sm mb-6">{plan.desc}</p>
                      <ul className="space-y-2.5 mb-8 flex-1">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                            <Icon name="Check" size={15} className={plan.highlight ? "text-amber-400" : "text-zinc-400"} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full font-semibold ${
                          plan.highlight
                            ? "bg-amber-500 hover:bg-amber-400 text-black"
                            : "bg-white/10 hover:bg-white/20 text-white"
                        }`}
                        onClick={() => window.open("https://t.me/dizymusic", "_blank")}
                      >
                        Начать
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section
            ref={process.ref}
            className="py-16 md:py-24"
          >
            <div className="container mx-auto px-4">
              <div
                className={`transition-all duration-700 ${
                  process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    Чёткий процесс без лишней бюрократии — от первой встречи до реальных результатов.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                  {steps.map((step) => (
                    <div
                      key={step.num}
                      className="rounded-xl border border-white/8 bg-zinc-900/50 p-6"
                    >
                      <div className="text-4xl font-black text-amber-500/30 mb-3 leading-none">{step.num}</div>
                      <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            ref={faqSection.ref}
            className="py-16 md:py-24 bg-zinc-950/50"
          >
            <div className="container mx-auto px-4">
              <div
                className={`max-w-3xl mx-auto transition-all duration-700 ${
                  faqSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Вопросы и ответы</h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/8 bg-zinc-900/50 overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/4 transition-colors"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="font-medium text-white">{faq.q}</span>
                        <Icon
                          name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                          size={18}
                          className="text-zinc-400 shrink-0"
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-5">
                          <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-amber-950/15 to-black">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto rounded-2xl border border-amber-500/30 bg-zinc-900/70 backdrop-blur-md p-10 md:p-16 text-center shadow-2xl">
                <Icon name="Crown" size={40} className="text-amber-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Готов вывести карьеру на новый уровень?
                </h2>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                  Расскажи о себе — обсудим, как именно мы можем помочь, и подберём формат сотрудничества.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-zinc-100 font-semibold px-10"
                    onClick={() => window.open("https://t.me/dizymusic", "_blank")}
                  >
                    Написать в Telegram
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/8 px-10"
                    onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Смотреть тарифы
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CareerManagement;
