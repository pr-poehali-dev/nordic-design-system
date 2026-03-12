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

const trackServices = [
  {
    icon: "Music",
    title: "Инструментал",
    price: "от 4 000 ₽",
    desc: "Пишем бит или полноценный инструментал под твой запрос. Любой жанр, темп, настроение — по описанию или референсам.",
    features: ["Любой жанр и BPM", "По референсам", "До 3 правок", "WAV + MP3"],
  },
  {
    icon: "Mic2",
    title: "Трек «под ключ»",
    price: "от 10 000 ₽",
    desc: "Полный цикл: концепция, инструментал, аранжировка, сведение и мастеринг. Получаешь готовый трек для релиза.",
    features: ["Концепция и аранжировка", "Сведение + мастеринг", "До 5 правок", "Готов к релизу"],
    highlight: true,
  },
  {
    icon: "Radio",
    title: "Джингл / Заставка",
    price: "от 3 000 ₽",
    desc: "Короткий трек для рекламы, подкаста, YouTube-канала или бренда. Быстро и чётко по техзаданию.",
    features: ["До 60 секунд", "Брендовый звук", "Быстрые сроки", "Лицензия включена"],
  },
];

const steps = [
  {
    num: "01",
    title: "Описываешь задачу",
    desc: "Рассказываешь, для чего трек, в каком жанре и стиле. Прикрепляешь референсы — это сильно ускоряет работу.",
  },
  {
    num: "02",
    title: "Согласовываем детали",
    desc: "Обсуждаем структуру, инструменты, настроение. Утверждаем техзадание до старта работы.",
  },
  {
    num: "03",
    title: "Пишем трек",
    desc: "Наши продюсеры создают аранжировку, записывают и обрабатывают все элементы.",
  },
  {
    num: "04",
    title: "Сдаём результат",
    desc: "Отправляем готовый трек. Вносим правки до полного согласования — без доплат.",
  },
];

const useCases = [
  { icon: "User", label: "Для артиста" },
  { icon: "Video", label: "Для YouTube" },
  { icon: "Megaphone", label: "Для рекламы" },
  { icon: "Podcast", label: "Для подкаста" },
  { icon: "ShoppingBag", label: "Для бренда" },
  { icon: "Film", label: "Для видео" },
  { icon: "Gamepad2", label: "Для игры" },
  { icon: "Globe", label: "Для сайта" },
];

const genres = [
  "Hip-Hop", "Trap", "R&B", "Pop", "EDM", "House",
  "Phonk", "Drill", "Lo-Fi", "Ambient", "Indie", "Electronic",
];

const CustomTracks = () => {
  useEffect(() => {
    document.title = "Написание треков на заказ — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Написание треков на заказ от DIZY MUSIC. Инструменталы, треки под ключ, джинглы и заставки. Любой жанр, профессиональное качество. Цены от 3 000 ₽.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/custom-tracks");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible(0.1);
  const services = useVisible(0.1);
  const useCasesSection = useVisible(0.1);
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
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-3xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="PenLine" size={16} className="text-amber-400" />
                    <span className="text-sm text-zinc-300 font-medium">Авторская музыка</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Треки<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
                      на заказ
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Пишем музыку под твой проект — от инструментала до полноценного трека, готового к релизу. Любой жанр, любая задача.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-zinc-200 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Заказать трек →
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

          {/* Форматы */}
          <section ref={services.ref} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  services.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Форматы работы</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Выбирай то, что подходит под твою задачу</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {trackServices.map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border p-6 flex flex-col transition-all duration-700 ${
                      services.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } ${
                      s.highlight
                        ? "border-amber-500/40 bg-amber-950/20"
                        : "border-white/10 bg-zinc-900/40"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {s.highlight && (
                      <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-medium rounded-full px-3 py-1 mb-4 self-start">
                        <Icon name="Star" size={12} />
                        Популярное
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <Icon name={s.icon} size={20} className="text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg leading-tight">{s.title}</h3>
                        <span className="text-amber-400 text-sm font-medium">{s.price}</span>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-5 flex-1">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={14} className="text-amber-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={s.highlight
                        ? "bg-white text-black hover:bg-zinc-200 rounded-full w-full"
                        : "border-white/20 text-white hover:bg-white/10 rounded-full w-full"
                      }
                      variant={s.highlight ? "default" : "outline"}
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

          {/* Для кого */}
          <section ref={useCasesSection.ref} className="py-16 md:py-24 bg-zinc-950/50">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  useCasesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Для кого это</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Треки на заказ нужны самым разным проектам</p>
              </div>
              <div
                className={`grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
                  useCasesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {useCases.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 flex flex-col items-center gap-3 text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Icon name={item.icon} size={20} className="text-amber-400" />
                    </div>
                    <span className="text-sm text-zinc-300 font-medium">{item.label}</span>
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как мы работаем</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">От идеи до готового трека — 4 простых шага</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-700 ${
                      process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className="text-4xl font-bold text-amber-500/30">{step.num}</span>
                    <h3 className="font-semibold text-lg mt-2 mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Жанры */}
          <section ref={genresSection.ref} className="py-16 md:py-24 bg-zinc-950/50">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-10 transition-all duration-700 ${
                  genresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Работаем в любом жанре</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                  Опыт в самых разных стилях — от электронной музыки до клубных хитов
                </p>
              </div>
              <div
                className={`flex flex-wrap justify-center gap-3 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                  genresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {genres.map((g) => (
                  <span
                    key={g}
                    className="px-4 py-2 rounded-full border border-white/10 bg-zinc-900/60 text-sm text-zinc-300"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <div
                className={`mt-12 text-center transition-all duration-700 delay-300 ${
                  genresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-zinc-400 mb-6">Нет своего жанра? Просто напиши — мы работаем со всем</p>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                    Обсудить проект →
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

export default CustomTracks;
