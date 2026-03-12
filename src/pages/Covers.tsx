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

const coverPackages = [
  {
    icon: "Image",
    title: "Стандарт",
    price: "от 2 500 ₽",
    desc: "Авторская обложка для сингла или EP. Соответствует техническим требованиям всех стриминговых площадок.",
    features: ["3000×3000 px, 300 dpi", "JPG / PNG", "До 2 правок", "Срок — 3 рабочих дня"],
  },
  {
    icon: "Layers",
    title: "Альбом / EP",
    price: "от 4 500 ₽",
    desc: "Комплект: обложка для альбома или EP + согласованный стиль для отдельных треков внутри релиза.",
    features: ["Единый визуальный стиль", "До 5 треков в серии", "До 3 правок", "Исходники в PSD/AI"],
    highlight: true,
  },
  {
    icon: "Wand2",
    title: "Брендовый пакет",
    price: "от 8 000 ₽",
    desc: "Разрабатываем визуальный образ артиста: обложки, баннеры, аватар, шаблоны для соцсетей — единый стиль.",
    features: ["Обложка + баннеры", "Аватар и соцсети", "До 5 правок", "Брендбук в подарок"],
  },
];

const platformRules = [
  { icon: "Music2", label: "Spotify" },
  { icon: "Music", label: "Apple Music" },
  { icon: "Youtube", label: "YouTube Music" },
  { icon: "Radio", label: "VK Музыка" },
  { icon: "Headphones", label: "Яндекс Музыка" },
  { icon: "Disc", label: "Deezer" },
  { icon: "Globe", label: "Tidal" },
  { icon: "Rss", label: "Boom" },
];

const steps = [
  {
    num: "01",
    title: "Описываешь концепцию",
    desc: "Рассказываешь об артисте, жанре, настроении трека. Прикрепляешь референсы — это помогает попасть в точку с первого раза.",
  },
  {
    num: "02",
    title: "Согласовываем стиль",
    desc: "Предлагаем 2-3 концепции на выбор. После утверждения направления приступаем к финальной работе.",
  },
  {
    num: "03",
    title: "Дизайнер рисует обложку",
    desc: "Создаём авторскую иллюстрацию или дизайн, строго соблюдая требования площадок по размеру, формату и качеству.",
  },
  {
    num: "04",
    title: "Получаешь файлы",
    desc: "Отправляем готовую обложку в нужных форматах. Вносим правки до полного согласования — без доплат.",
  },
];

const requirements = [
  { icon: "Maximize2", label: "3000×3000 px" },
  { icon: "FileImage", label: "JPG или PNG" },
  { icon: "Zap", label: "300 dpi" },
  { icon: "Type", label: "Имя артиста / название" },
  { icon: "Ban", label: "Без URL и контактов" },
  { icon: "ShieldCheck", label: "Оригинальный арт" },
];

const Covers = () => {
  useEffect(() => {
    document.title = "Обложки для релизов на заказ — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Авторские обложки для релизов от DIZY MUSIC. Соответствуют правилам Spotify, Apple Music, ВКонтакте и других площадок. Синглы, EP, альбомы. Цены от 2 500 ₽.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/covers");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible(0.1);
  const packages = useVisible(0.1);
  const platformsSection = useVisible(0.1);
  const requirementsSection = useVisible(0.1);
  const process = useVisible(0.1);

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
            <div className="absolute inset-0 bg-gradient-to-b from-pink-950/20 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-3xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="ImagePlus" size={16} className="text-pink-400" />
                    <span className="text-sm text-zinc-300 font-medium">Дизайн для стримингов</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Обложки<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-white">
                      для релизов
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Авторские обложки, которые проходят модерацию на всех площадках. Единый стиль для твоих релизов — от сингла до альбома.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-zinc-200 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Заказать обложку →
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

          {/* Пакеты */}
          <section ref={packages.ref} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  packages.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Пакеты</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Выбирай подходящий формат для своего релиза</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {coverPackages.map((pkg, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border p-6 flex flex-col transition-all duration-700 ${
                      packages.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } ${
                      pkg.highlight
                        ? "border-pink-500/40 bg-pink-950/20"
                        : "border-white/10 bg-zinc-900/40"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {pkg.highlight && (
                      <div className="inline-flex items-center gap-1.5 bg-pink-500/20 text-pink-300 text-xs font-medium rounded-full px-3 py-1 mb-4 self-start">
                        <Icon name="Star" size={12} />
                        Популярное
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <Icon name={pkg.icon} size={20} className="text-pink-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{pkg.title}</div>
                        <div className="text-pink-300 text-sm font-medium">{pkg.price}</div>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-5 flex-1">{pkg.desc}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={14} className="text-pink-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Требования площадок */}
          <section ref={requirementsSection.ref} className="py-16 md:py-24 border-t border-white/5">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  requirementsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Правила площадок</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                  Каждая обложка соответствует техническим требованиям стримингов — никаких отказов при загрузке
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-16">
                {requirements.map((req, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border border-white/10 bg-zinc-900/40 p-4 flex flex-col items-center gap-2 text-center transition-all duration-700 ${
                      requirementsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <Icon name={req.icon} size={22} className="text-pink-400" />
                    <span className="text-xs text-zinc-300">{req.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Площадки */}
          <section ref={platformsSection.ref} className="py-16 md:py-24 border-t border-white/5">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  platformsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Работаем для всех платформ</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Обложки проходят модерацию на всех популярных стримингах</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {platformRules.map((p, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/40 px-5 py-2.5 transition-all duration-700 ${
                      platformsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <Icon name={p.icon} size={16} className="text-pink-400" />
                    <span className="text-sm text-zinc-200">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Процесс */}
          <section ref={process.ref} className="py-16 md:py-24 border-t border-white/5">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как это работает</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Четыре шага от идеи до готовой обложки</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-700 ${
                      process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="text-4xl font-bold text-pink-500/30 mb-3">{step.num}</div>
                    <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готов к релизу?</h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Напиши нам — расскажи о треке, и мы создадим обложку, которая выделит тебя на полке стриминга
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 text-base px-10 py-6 rounded-full transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                  Заказать обложку →
                </a>
              </Button>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Covers;
