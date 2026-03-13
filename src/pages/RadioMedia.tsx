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

const radioChannels = [
  {
    icon: "Radio",
    title: "Федеральное радио",
    desc: "Ротация на крупнейших федеральных радиостанциях России. Миллионная аудитория слушателей по всей стране.",
    examples: ["Европа Плюс", "DFM", "Радио Record", "Energy", "Русское Радио"],
    color: "from-red-500/20 to-rose-900/10",
    border: "border-red-500/20",
    accent: "text-red-400",
  },
  {
    icon: "Wifi",
    title: "Онлайн-радио",
    desc: "Продвижение на популярных интернет-радиостанциях и подкаст-платформах с молодой и активной аудиторией.",
    examples: ["DI.FM", "Promodj Radio", "Megafonmusic", "Zvuki.ru", "Радио для двоих"],
    color: "from-sky-500/20 to-blue-900/10",
    border: "border-sky-500/20",
    accent: "text-sky-400",
    highlight: true,
  },
  {
    icon: "Newspaper",
    title: "Музыкальные СМИ",
    desc: "Рецензии, интервью и новостные публикации в ведущих музыкальных изданиях и порталах.",
    examples: ["Звук.Медиа", "The Flow", "Rap.ru", "Musikmag", "Afisha.ru"],
    color: "from-violet-500/20 to-purple-900/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    icon: "Tv",
    title: "Телевидение и стриминг",
    desc: "Интеграции на музыкальных телеканалах и видеоплатформах. Клипы в ротации и тематические сюжеты.",
    examples: ["МУЗ-ТВ", "RU.TV", "A-ONE", "YouTube Premier", "Okko Music"],
    color: "from-amber-500/20 to-yellow-900/10",
    border: "border-amber-500/20",
    accent: "text-amber-400",
  },
];

const packages = [
  {
    name: "Медиа-старт",
    price: "от 12 000 ₽",
    desc: "Первые публикации и знакомство с редакциями",
    items: [
      "2 публикации в музыкальных СМИ",
      "Пресс-релиз о релизе",
      "Рассылка по базе редакций",
      "Отчёт о размещениях",
    ],
  },
  {
    name: "Радио + СМИ",
    price: "от 28 000 ₽",
    desc: "Комплексное продвижение в эфире и прессе",
    items: [
      "Ротация на 3–5 радиостанциях",
      "4 публикации в СМИ",
      "Интервью или рецензия",
      "Пресс-кит и пресс-релиз",
      "Ежемесячный отчёт",
    ],
    highlight: true,
  },
  {
    name: "Полный охват",
    price: "Индивидуально",
    desc: "Федеральный уровень: радио, ТВ и топ-издания",
    items: [
      "Федеральное радио (5+ станций)",
      "Телеканалы (МУЗ-ТВ / RU.TV)",
      "8+ публикаций в СМИ",
      "PR-сопровождение 3 месяца",
      "Управление репутацией",
    ],
  },
];

const steps = [
  { num: "01", title: "Анализ", desc: "Изучаем трек, жанр и целевую аудиторию. Подбираем подходящие радиостанции и издания." },
  { num: "02", title: "Материалы", desc: "Готовим пресс-релиз, пресс-кит и промо-материалы для редакций и программных директоров." },
  { num: "03", title: "Питчинг", desc: "Отправляем трек и материалы в редакции, ведём переговоры о ротации и публикациях." },
  { num: "04", title: "Результат", desc: "Предоставляем подтверждения выходов, ссылки на публикации и статистику ротаций." },
];

const stats = [
  { value: "150+", label: "Радиостанций в базе" },
  { value: "80+", label: "Медиа-партнёров" },
  { value: "500+", label: "Успешных питчей" },
  { value: "12М+", label: "Охват аудитории" },
];

const RadioMedia = () => {
  useEffect(() => {
    document.title = "Продвижение на радио и в СМИ — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Продвижение музыки на радио и в СМИ от DIZY MUSIC: ротация на федеральных радиостанциях, публикации в музыкальных изданиях, интервью и рецензии. Выход на широкую аудиторию.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/radio-media");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible(0.1);
  const statsSection = useVisible(0.1);
  const channelsSection = useVisible(0.1);
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
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div className={`max-w-5xl mx-auto transition-all duration-700 ${hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Radio" size={16} className="text-red-400" />
                    <span className="text-sm text-zinc-300 font-medium">Радио и медиа</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Продвижение на{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-400">
                      радио и в СМИ
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Выводим твою музыку в эфир федеральных радиостанций и на страницы ведущих музыкальных изданий. Реальные ротации, живые публикации, миллионная аудитория.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["Федеральное радио", "Онлайн-радио", "Музыкальные СМИ", "ТВ-каналы", "Пресс-релиз"].map((tag) => (
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
                        Обсудить продвижение →
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full"
                      asChild
                    >
                      <a href="#packages">Смотреть цены</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Статистика */}
          <section ref={statsSection.ref} className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 text-center transition-all duration-700"
                    style={{ transitionDelay: `${i * 80}ms`, opacity: statsSection.isVisible ? 1 : 0, transform: statsSection.isVisible ? "translateY(0)" : "translateY(20px)" }}
                  >
                    <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                    <div className="text-sm text-zinc-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Каналы продвижения */}
          <section ref={channelsSection.ref} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className={`text-center mb-12 transition-all duration-700 ${channelsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Каналы продвижения</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Работаем со всеми форматами эфирного и цифрового присутствия</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {radioChannels.map((ch, i) => (
                  <div
                    key={ch.title}
                    className={`rounded-2xl border ${ch.border} bg-gradient-to-br ${ch.color} p-6 transition-all duration-700`}
                    style={{ transitionDelay: `${i * 80}ms`, opacity: channelsSection.isVisible ? 1 : 0, transform: channelsSection.isVisible ? "translateY(0)" : "translateY(24px)" }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-black/30 shrink-0">
                        <Icon name={ch.icon} size={24} className={ch.accent} />
                      </div>
                      <div>
                        {ch.highlight && (
                          <span className="inline-block text-xs font-semibold bg-white text-black rounded-full px-3 py-0.5 mb-2">Популярно</span>
                        )}
                        <h3 className="text-xl font-bold">{ch.title}</h3>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-4">{ch.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {ch.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-black/30 border border-white/10 rounded-full px-3 py-1 text-zinc-300">
                          {ex}
                        </span>
                      ))}
                    </div>
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Пакеты продвижения</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Выбери уровень охвата под свои цели</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как это работает</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">От подачи до выхода в эфир — прозрачно и понятно</p>
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
                  <Icon name="Radio" size={40} className="text-red-400 mx-auto mb-4" />
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готов выйти в эфир?</h2>
                  <p className="text-zinc-400 mb-8">Напиши нам — подберём радиостанции и СМИ под твой жанр и бюджет.</p>
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

export default RadioMedia;