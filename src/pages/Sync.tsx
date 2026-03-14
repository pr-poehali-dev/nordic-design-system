import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

function useVisible() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

const placements = [
  {
    icon: "Film",
    title: "Кино и сериалы",
    desc: "Размещаем музыку в российских и международных фильмах, сериалах Netflix, Кинопоиска, START. Один трек в хорошей сцене — миллионы прослушиваний и лояльная аудитория.",
    examples: ["Netflix", "Кинопоиск", "START", "СТС Медиа", "Wink"],
    color: "from-violet-500/20 to-violet-900/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
    highlight: true,
  },
  {
    icon: "Megaphone",
    title: "Реклама и бренды",
    desc: "Треки для ТВ-роликов, digital-кампаний и брендовых проектов. Крупные бренды платят за синхронизацию от 100 000 ₽ — это разовый платёж без передачи авторских прав.",
    examples: ["Сбер", "МТС", "Яндекс", "Авито", "X5 Retail"],
    color: "from-amber-500/20 to-amber-900/10",
    border: "border-amber-500/20",
    accent: "text-amber-400",
  },
  {
    icon: "Tv",
    title: "Телевидение",
    desc: "Заставки, фоновая музыка и треки для телепередач на федеральных и кабельных каналах. Постоянные роялти от РАО за каждый эфир.",
    examples: ["Первый канал", "Россия 1", "НТВ", "ТНТ", "Муз-ТВ"],
    color: "from-sky-500/20 to-sky-900/10",
    border: "border-sky-500/20",
    accent: "text-sky-400",
  },
  {
    icon: "Gamepad2",
    title: "Игры и интерактив",
    desc: "Музыка для видеоигр, мобильных приложений и VR-проектов. Быстро растущий рынок с долгосрочными лицензиями и высокими гонорарами.",
    examples: ["Mail.ru Games", "Lesta", "Gaijin", "indie-студии"],
    color: "from-emerald-500/20 to-emerald-900/10",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
  },
];

const packages = [
  {
    icon: "Zap",
    title: "Базовое размещение",
    price: "от 15 000 ₽",
    desc: "Питчинг трека в базу sync-агентов и небольших продакшн-студий. Подходит для старта.",
    features: ["Подготовка трека к питчингу", "Питчинг в 10–15 студий", "Отчёт о результатах", "Срок 30 дней"],
    highlight: false,
  },
  {
    icon: "Star",
    title: "Расширенное продвижение",
    price: "от 40 000 ₽",
    desc: "Активный питчинг в крупные агентства, брендам и стриминговым платформам. Полное сопровождение сделки.",
    features: ["Питчинг в 40+ компаний", "Прямые переговоры с брендами", "Юридическое сопровождение", "Оформление sync-лицензии", "Срок 60 дней"],
    highlight: true,
  },
  {
    icon: "Globe",
    title: "Международный питч",
    price: "от 80 000 ₽",
    desc: "Выход на международный рынок: Hollywood, Netflix, Spotify Music + Talk, Amazon.",
    features: ["Международная база агентов", "Netflix / Amazon / Disney", "Перевод и адаптация питча", "Полное юр. сопровождение", "Срок 90 дней"],
    highlight: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Аудит материала",
    desc: "Слушаем треки, оцениваем потенциал для синхронизации и подбираем наиболее подходящие направления.",
  },
  {
    num: "02",
    title: "Подготовка трека",
    desc: "При необходимости делаем edit-версии, stem-файлы и instrumental — всё, что требуют sync-агенты.",
  },
  {
    num: "03",
    title: "Питчинг",
    desc: "Отправляем трек напрямую music supervisors, sync-агентам и брендам из нашей базы контактов.",
  },
  {
    num: "04",
    title: "Сделка и выплата",
    desc: "Сопровождаем переговоры, оформляем лицензию и обеспечиваем своевременную выплату гонорара.",
  },
];

const stats = [
  { value: "200+", label: "sync-сделок" },
  { value: "50+", label: "брендов-партнёров" },
  { value: "15", label: "стран охвата" },
  { value: "100%", label: "авторских прав у артиста" },
];

const Sync = () => {
  useEffect(() => {
    document.title = "Синхронизация музыки — кино, реклама, ТВ | DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Синхронизация музыки для кино, рекламы и телевидения от DIZY MUSIC. Размещаем треки артистов в фильмах Netflix, сериалах, рекламных кампаниях Сбера, Яндекса и других крупных брендов. Sync-лицензии, гонорары от 100 000 ₽.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/sync");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible();
  const statsSection = useVisible();
  const placementsSection = useVisible();
  const packagesSection = useVisible();
  const stepsSection = useVisible();

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
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/25 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-5xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Film" size={16} className="text-violet-400" />
                    <span className="text-sm text-zinc-300 font-medium">Кино · Реклама · Телевидение</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Синхронизация<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
                      музыки
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Размещаем твои треки в фильмах, рекламных кампаниях и телепередачах. Разовые гонорары, постоянные роялти — и твоя музыка звучит там, где её услышат миллионы.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["Netflix", "Кинопоиск", "Сбер", "Яндекс", "Первый канал", "Игры"].map((tag) => (
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
                        Разместить музыку →
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full"
                      asChild
                    >
                      <a href="https://t.me/dizymusicchat" target="_blank" rel="noopener noreferrer">
                        Задать вопрос
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Статистика */}
          <section ref={statsSection} className="pb-16 md:pb-20">
            <div className="container mx-auto px-4">
              <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-700 ${
                  statsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-1">{s.value}</div>
                    <div className="text-sm text-zinc-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Направления */}
          <section ref={placementsSection} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  placementsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Куда попадёт твоя музыка</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Работаем со всеми ключевыми направлениями sync-рынка
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {placements.map((p, index) => (
                  <div
                    key={p.title}
                    className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br ${p.color} ${p.border} ${
                      placementsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {p.highlight && (
                      <div className="inline-flex items-center gap-1.5 bg-violet-600/30 border border-violet-500/30 rounded-full px-3 py-1 mb-4 text-xs text-violet-300 font-medium">
                        <Icon name="Star" size={12} />
                        Самое востребованное
                      </div>
                    )}
                    <div className={`mb-3 ${p.accent}`}>
                      <Icon name={p.icon} size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-zinc-400">
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
          <section ref={packagesSection} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  packagesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Пакеты продвижения</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Выбери уровень — от первого питчинга до международных платформ
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {packages.map((pkg, index) => (
                  <div
                    key={pkg.title}
                    className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-105 ${
                      pkg.highlight
                        ? "border-violet-500/50 bg-violet-950/30 shadow-lg shadow-violet-500/10"
                        : "border-white/10 bg-zinc-900/60"
                    } ${
                      packagesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {pkg.highlight && (
                      <div className="inline-flex items-center gap-1.5 bg-violet-600/30 border border-violet-500/30 rounded-full px-3 py-1 mb-4 text-xs text-violet-300 font-medium">
                        <Icon name="Star" size={12} />
                        Популярно
                      </div>
                    )}
                    <div className="mb-4 text-white/70">
                      <Icon name={pkg.icon} size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                    <div className="text-violet-400 font-semibold text-lg mb-3">{pkg.price}</div>
                    <p className="text-zinc-400 text-sm mb-6">{pkg.desc}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={14} className="text-violet-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6 rounded-full bg-white text-black hover:bg-zinc-200"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Заказать
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Процесс */}
          <section ref={stepsSection} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  stepsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Берём на себя весь процесс — от подготовки трека до получения гонорара
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                  <div
                    key={step.num}
                    className={`text-center transition-all duration-500 ${
                      stepsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="text-4xl font-bold text-violet-400 mb-4">{step.num}</div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-2xl mx-auto rounded-2xl border border-violet-500/30 bg-violet-950/20 p-10 md:p-16">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-violet-500/20 mb-6 mx-auto">
                  <Icon name="Film" size={28} className="text-violet-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Пусть твоя музыка звучит в кино</h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Напиши нам — разберём твой материал и скажем, какие направления подойдут лучше всего.
                </p>
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
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Sync;
