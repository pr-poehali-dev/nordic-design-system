import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

const steps = [
  {
    num: "01",
    title: "Отправляешь материал",
    desc: "Присылаешь нам проект или стемы — все треки отдельно. Мы принимаем любые форматы.",
  },
  {
    num: "02",
    title: "Обсуждаем референсы",
    desc: "Указываешь, как должен звучать трек. Мы изучаем референсы и согласовываем видение.",
  },
  {
    num: "03",
    title: "Сводим и мастерим",
    desc: "Наши инженеры работают над звуком: баланс, панорама, динамика, финальная громкость.",
  },
  {
    num: "04",
    title: "Получаешь результат",
    desc: "Отправляем готовый трек. При необходимости делаем правки до полного согласования.",
  },
];

const mixServices = [
  {
    icon: "Sliders",
    title: "Сведение",
    price: "от 3 000 ₽",
    desc: "Балансировка инструментов, эквализация, компрессия, реверберация. Трек звучит чисто, объёмно и профессионально.",
    features: ["Баланс и панорама", "EQ и компрессия", "Пространство и глубина", "До 3 правок"],
  },
  {
    icon: "Sparkles",
    title: "Мастеринг",
    price: "от 1 500 ₽",
    desc: "Финальная обработка готового микса. Трек соответствует стандартам стриминговых платформ и звучит громко.",
    features: ["Loudness для стримингов", "Стерео расширение", "Финальный лимитинг", "WAV + MP3 форматы"],
  },
  {
    icon: "Music2",
    title: "Сведение + Мастеринг",
    price: "от 4 000 ₽",
    desc: "Полный цикл обработки — от сырых стемов до готового мастера. Лучшая цена и один исполнитель на весь процесс.",
    features: ["Полный цикл", "Один инженер", "Экономия 20%", "До 5 правок"],
    highlight: true,
  },
];

const genres = [
  "EDM", "House", "Techno", "Drum & Bass", "Hip-Hop", "R&B",
  "Pop", "Поп", "Рэп", "Indie", "Rock", "Ambient",
];

function useVisible(threshold = 0.15) {
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

const MixMastering = () => {
  useEffect(() => {
    document.title = "Сведение и мастеринг треков — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Профессиональное сведение и мастеринг треков от DIZY MUSIC. Готовим музыку к релизу на всех платформах. Работаем в любых жанрах. Цены от 1 500 ₽.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/mix-mastering");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible(0.1);
  const services = useVisible(0.1);
  const process = useVisible(0.1);
  const genresSection = useVisible(0.1);

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
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-5xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Sliders" size={16} className="text-purple-400" />
                    <span className="text-sm text-zinc-300 font-medium">Профессиональный звук</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Сведение и<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
                      мастеринг треков
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Превращаем твой материал в профессиональный трек, готовый к релизу на всех платформах. Опытные инженеры, современное оборудование, результат — как у лучших.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-zinc-200 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Заказать сведение →
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

          {/* Услуги */}
          <section ref={services.ref} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  services.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Выбери формат работы — от отдельных этапов до полного цикла обработки
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {mixServices.map((service, index) => (
                  <div
                    key={service.title}
                    className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-105 ${
                      service.highlight
                        ? "border-purple-500/50 bg-purple-950/30 shadow-lg shadow-purple-500/10"
                        : "border-white/10 bg-zinc-900/60"
                    } ${
                      services.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {service.highlight && (
                      <div className="inline-flex items-center gap-1.5 bg-purple-600/30 border border-purple-500/30 rounded-full px-3 py-1 mb-4 text-xs text-purple-300 font-medium">
                        <Icon name="Star" size={12} />
                        Популярно
                      </div>
                    )}
                    <div className="mb-4 text-white/70">
                      <Icon name={service.icon} size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                    <div className="text-purple-400 font-semibold text-lg mb-3">{service.price}</div>
                    <p className="text-zinc-400 text-sm mb-4">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={14} className="text-purple-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Процесс */}
          <section ref={process.ref} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
                <p className="text-zinc-400 text-lg">Просто и прозрачно — от заявки до готового трека</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                  <div
                    key={step.num}
                    className={`relative transition-all duration-500 ${
                      process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-colors">
                      <div className="text-4xl font-bold text-white/10 mb-3">{step.num}</div>
                      <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 text-sm">{step.desc}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-white/20">
                        <Icon name="ChevronRight" size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Жанры */}
          <section ref={genresSection.ref} className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div
                className={`rounded-2xl border border-white/10 bg-zinc-900/40 p-8 md:p-12 text-center transition-all duration-700 ${
                  genresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Работаем во всех жанрах</h2>
                <p className="text-zinc-400 mb-8">Опыт с широким спектром музыкальных стилей</p>
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                  {genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300 hover:border-purple-500/40 hover:text-white transition-colors"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                    Написать нам →
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

export default MixMastering;