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

const remixServices = [
  {
    icon: "Shuffle",
    title: "Ремикс трека",
    price: "от 5 000 ₽",
    desc: "Берём твой трек и переосмысливаем его в новом жанре или стиле. Голос, мелодия — остаются, звучание — меняется полностью.",
    features: ["Новый жанр / BPM", "Сохранение вокала", "До 3 правок", "Стемы по запросу"],
  },
  {
    icon: "Wand2",
    title: "Официальный ремикс",
    price: "от 8 000 ₽",
    desc: "Создаём ремикс с оформлением всех прав и документов. Готов к релизу на стриминговых платформах под твоим именем.",
    features: ["Оформление прав", "Релиз на платформах", "Мастеринг включён", "До 5 правок"],
    highlight: true,
  },
  {
    icon: "Repeat2",
    title: "Bootleg / Edit",
    price: "от 3 000 ₽",
    desc: "Нестандартная обработка или неофициальный ремикс для DJ-сетов, клубного использования или личного архива.",
    features: ["Быстрые сроки", "DJ-ready формат", "WAV + MP3", "1 правка"],
  },
];

const steps = [
  {
    num: "01",
    title: "Присылаешь материал",
    desc: "Отправляешь стемы или готовый трек. Указываешь, в каком жанре или стиле хочешь ремикс.",
  },
  {
    num: "02",
    title: "Обсуждаем концепцию",
    desc: "Согласовываем BPM, жанр, референсы. Утверждаем направление до начала работы.",
  },
  {
    num: "03",
    title: "Пишем ремикс",
    desc: "Наши продюсеры создают новую аранжировку, сохраняя ключевые элементы оригинала.",
  },
  {
    num: "04",
    title: "Отдаём готовый трек",
    desc: "Получаешь мастер в WAV и MP3. При необходимости вносим правки до полного согласования.",
  },
];

const genres = [
  "House", "Tech House", "Techno", "Drum & Bass", "Dubstep",
  "Hip-Hop", "Trap", "R&B", "Pop", "EDM", "Afro", "Phonk",
];

const Remixes = () => {
  useEffect(() => {
    document.title = "Написание ремиксов на заказ — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Профессиональное написание ремиксов на заказ от DIZY MUSIC. Официальные ремиксы, DJ-редакты, любые жанры. Сроки от 3 дней, цены от 3 000 ₽.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/remixes");
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
            <div className="absolute inset-0 bg-gradient-to-b from-pink-950/20 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-3xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Shuffle" size={16} className="text-pink-400" />
                    <span className="text-sm text-zinc-300 font-medium">Авторские ремиксы</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Ремиксы<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-white">
                      на заказ
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Переосмысливаем твой трек в новом жанре или создаём официальный ремикс, готовый к релизу. Любой стиль — от хауса до хип-хопа.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-zinc-200 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Заказать ремикс →
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
          <section
            ref={services.ref}
            className="py-16 md:py-24"
          >
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  services.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Что мы делаем</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                  Три формата — выбирай под свою задачу
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {remixServices.map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border p-6 flex flex-col transition-all duration-700 delay-${i * 100} ${
                      services.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } ${
                      s.highlight
                        ? "border-pink-500/40 bg-pink-950/20"
                        : "border-white/10 bg-zinc-900/40"
                    }`}
                  >
                    {s.highlight && (
                      <div className="inline-flex items-center gap-1.5 bg-pink-500/20 text-pink-300 text-xs font-medium rounded-full px-3 py-1 mb-4 self-start">
                        <Icon name="Star" size={12} />
                        Популярное
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <Icon name={s.icon} size={20} className="text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg leading-tight">{s.title}</h3>
                        <span className="text-pink-400 text-sm font-medium">{s.price}</span>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-5 flex-1">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={14} className="text-pink-400 shrink-0" />
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

          {/* Процесс */}
          <section
            ref={process.ref}
            className="py-16 md:py-24 bg-zinc-950/50"
          >
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как это работает</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                  От идеи до готового ремикса — 4 простых шага
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-700 delay-${i * 100} ${
                      process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <span className="text-4xl font-bold text-pink-500/30">{step.num}</span>
                    <h3 className="font-semibold text-lg mt-2 mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Жанры */}
          <section
            ref={genresSection.ref}
            className="py-16 md:py-24"
          >
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-10 transition-all duration-700 ${
                  genresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Работаем в любом жанре</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                  Опыт в самых разных стилях электронной и популярной музыки
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
                <p className="text-zinc-400 mb-6">Нет своего жанра в списке? Просто напиши — мы работаем со всем</p>
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

export default Remixes;
