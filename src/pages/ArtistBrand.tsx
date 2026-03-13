import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

const brandServices = [
  {
    icon: "Palette",
    title: "Визуальная идентичность",
    desc: "Разрабатываем уникальный визуальный стиль: цветовая палитра, шрифты, графические элементы. Всё, чтобы тебя узнавали с первого взгляда.",
    features: ["Логотип и фирменный стиль", "Цветовая палитра", "Типографика", "Гайдлайн бренда"],
    color: "from-pink-500/20 to-rose-900/10",
    border: "border-pink-500/20",
    accent: "text-pink-400",
  },
  {
    icon: "Instagram",
    title: "Соцсети и контент",
    desc: "Создаём единый образ в Instagram, ВКонтакте, TikTok и Telegram: шаблоны постов, обложки, сторис и контент-стратегия.",
    features: ["Шаблоны постов и сторис", "Оформление профилей", "Контент-план", "Фирменные баннеры"],
    color: "from-violet-500/20 to-purple-900/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    icon: "Mic2",
    title: "Артист-имидж",
    desc: "Помогаем сформировать образ и позиционирование: кто ты как артист, какие ценности транслируешь, как тебя должна воспринимать аудитория.",
    features: ["Концепция образа", "Биография артиста", "Пресс-кит", "Питч для СМИ"],
    color: "from-amber-500/20 to-yellow-900/10",
    border: "border-amber-500/20",
    accent: "text-amber-400",
    highlight: true,
  },
  {
    icon: "Globe",
    title: "Медиаприсутствие",
    desc: "Публикации в музыкальных медиа, интервью, рецензии. Строим репутацию и авторитет твоего имени в индустрии.",
    features: ["Публикации в СМИ", "Интервью и рецензии", "PR-сопровождение", "Wikipedia и база данных"],
    color: "from-sky-500/20 to-blue-900/10",
    border: "border-sky-500/20",
    accent: "text-sky-400",
  },
];

const packages = [
  {
    name: "Старт",
    price: "от 15 000 ₽",
    desc: "Базовый брендинг для выхода на рынок",
    items: ["Логотип (3 варианта)", "Цветовая палитра", "Шрифты", "Оформление 2 соцсетей", "Гайдлайн PDF"],
  },
  {
    name: "Профи",
    price: "от 35 000 ₽",
    desc: "Полный визуальный пакет + имидж",
    items: ["Всё из тарифа Старт", "Концепция образа", "Пресс-кит", "Биография", "Шаблоны сторис и постов", "Контент-план на месяц"],
    highlight: true,
  },
  {
    name: "Лейбл",
    price: "Индивидуально",
    desc: "Полное сопровождение карьеры",
    items: ["Всё из тарифа Профи", "PR в СМИ", "3 публикации в медиа", "Ежемесячная поддержка бренда", "Стратегия на 6 месяцев"],
  },
];

const steps = [
  { num: "01", title: "Знакомство", desc: "Рассказываешь о себе, музыке и целях. Изучаем твои референсы и конкурентов." },
  { num: "02", title: "Концепция", desc: "Разрабатываем платформу бренда: позиционирование, tone of voice, визуальный образ." },
  { num: "03", title: "Дизайн", desc: "Создаём все визуальные элементы и материалы согласно утверждённой концепции." },
  { num: "04", title: "Запуск", desc: "Внедряем бренд во все каналы, обучаем как им пользоваться, остаёмся на связи." },
];

const ArtistBrand = () => {
  useEffect(() => {
    document.title = "Разработка артист-бренда — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Разработка артист-бренда от DIZY MUSIC: логотип, фирменный стиль, имидж, соцсети и медиаприсутствие. Создаём уникальный образ, который запоминается.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/artist-brand");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible(0.1);
  const servicesSection = useVisible(0.1);
  const packagesSection = useVisible(0.1);
  const stepsSection = useVisible(0.1);
  const cta = useVisible(0.1);

  return (
    <div className="min-h-screen text-white relative bg-black">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main>

          {/* Hero */}
          <section ref={hero.ref} className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-950/20 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div className={`max-w-3xl mx-auto transition-all duration-700 ${hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Sparkles" size={16} className="text-pink-400" />
                    <span className="text-sm text-zinc-300 font-medium">Брендинг для артистов</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Разработка<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
                      артист-бренда
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Создаём уникальный образ, который запоминается. Логотип, визуальный стиль, имидж и медиаприсутствие — всё в одних руках.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["Логотип", "Фирменный стиль", "Пресс-кит", "Соцсети", "PR в СМИ"].map((tag) => (
                      <span key={tag} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-zinc-200 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Обсудить бренд →
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full"
                      asChild
                    >
                      <a href="#packages">
                        Смотреть цены
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Направления */}
          <section ref={servicesSection.ref} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className={`text-center mb-12 transition-all duration-700 ${servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Что входит в брендинг</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Комплексный подход — от визуала до репутации</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {brandServices.map((s, i) => (
                  <div
                    key={s.title}
                    className={`rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} p-6 transition-all duration-700`}
                    style={{ transitionDelay: `${i * 80}ms`, opacity: servicesSection.isVisible ? 1 : 0, transform: servicesSection.isVisible ? "translateY(0)" : "translateY(24px)" }}
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-black/30 mb-4`}>
                      <Icon name={s.icon} size={24} className={s.accent} />
                    </div>
                    {s.highlight && (
                      <span className="inline-block text-xs font-semibold bg-white text-black rounded-full px-3 py-0.5 mb-3">Популярно</span>
                    )}
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-zinc-400 text-sm mb-4">{s.desc}</p>
                    <ul className="space-y-1.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={14} className={s.accent} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Пакеты */}
          <section id="packages" ref={packagesSection.ref} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
            <div className="container mx-auto px-4 relative">
              <div className={`text-center mb-12 transition-all duration-700 ${packagesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Пакеты</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Выбери формат под свои цели и бюджет</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {packages.map((pkg, i) => (
                  <div
                    key={pkg.name}
                    className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-700 ${pkg.highlight ? "border-white/30 bg-zinc-800/60" : "border-white/10 bg-zinc-900/40"}`}
                    style={{ transitionDelay: `${i * 100}ms`, opacity: packagesSection.isVisible ? 1 : 0, transform: packagesSection.isVisible ? "translateY(0)" : "translateY(24px)" }}
                  >
                    {pkg.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">Популярный</span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                    <p className="text-zinc-400 text-sm mb-3">{pkg.desc}</p>
                    <div className="text-2xl font-bold mb-5">{pkg.price}</div>
                    <ul className="space-y-2 flex-grow mb-6">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={15} className="text-white shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-white text-black hover:bg-zinc-200" asChild>
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Выбрать пакет
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Процесс */}
          <section ref={stepsSection.ref} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className={`text-center mb-12 transition-all duration-700 ${stepsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как мы работаем</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">4 шага от идеи до узнаваемого бренда</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-700"
                    style={{ transitionDelay: `${i * 100}ms`, opacity: stepsSection.isVisible ? 1 : 0, transform: stepsSection.isVisible ? "translateY(0)" : "translateY(24px)" }}
                  >
                    <div className="text-4xl font-black text-white/10 mb-3">{step.num}</div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section ref={cta.ref} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${cta.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8 md:p-12">
                  <Icon name="Sparkles" size={40} className="text-pink-400 mx-auto mb-4" />
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готов создать свой бренд?</h2>
                  <p className="text-zinc-400 mb-8">Напиши нам — обсудим концепцию и подберём пакет под твои цели.</p>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-zinc-200 text-base px-10 py-6 rounded-full transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                      Написать в Telegram →
                    </a>
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

export default ArtistBrand;
