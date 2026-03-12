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

const platforms = [
  {
    icon: "MessageCircle",
    name: "ВКонтакте",
    color: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300",
    desc: "Продвижение в музыкальных сообществах, таргетированная реклама, посевы в пабликах. Охват миллионной аудитории русскоязычных слушателей.",
    services: [
      { name: "Посевы в музыкальных пабликах", price: "от 3 000 ₽" },
      { name: "Таргетированная реклама", price: "от 5 000 ₽" },
      { name: "Продвижение в VK Музыке", price: "от 4 000 ₽" },
    ],
  },
  {
    icon: "Send",
    name: "Telegram",
    color: "from-sky-600/20 to-sky-900/10",
    border: "border-sky-500/30",
    accent: "text-sky-400",
    badge: "bg-sky-500/20 text-sky-300",
    desc: "Размещение в тематических каналах, продвижение через музыкальные чаты и коллаборации с крупными Telegram-каналами.",
    services: [
      { name: "Посевы в музыкальных каналах", price: "от 2 000 ₽" },
      { name: "Реклама в тематических каналах", price: "от 3 500 ₽" },
      { name: "Комплексная кампания", price: "от 8 000 ₽" },
    ],
  },
  {
    icon: "Youtube",
    name: "YouTube",
    color: "from-red-600/20 to-red-900/10",
    border: "border-red-500/30",
    accent: "text-red-400",
    badge: "bg-red-500/20 text-red-300",
    desc: "Продвижение клипов и лирик-видео, интеграции в популярных каналах, YouTube Ads для роста просмотров и подписчиков.",
    services: [
      { name: "YouTube Ads (просмотры)", price: "от 4 000 ₽" },
      { name: "Интеграции в каналах", price: "от 6 000 ₽" },
      { name: "Продвижение трека / клипа", price: "от 7 000 ₽" },
    ],
  },
  {
    icon: "Music2",
    name: "Spotify",
    color: "from-green-600/20 to-green-900/10",
    border: "border-green-500/30",
    accent: "text-green-400",
    badge: "bg-green-500/20 text-green-300",
    desc: "Попадание в независимые плейлисты, продвижение через Spotify for Artists и работа с кураторами. Рост стримов и слушателей.",
    services: [
      { name: "Плейлист-кампания (до 20 кураторов)", price: "от 5 000 ₽" },
      { name: "Spotify Ads", price: "от 4 500 ₽" },
      { name: "Комплексное продвижение", price: "от 12 000 ₽" },
    ],
  },
  {
    icon: "Headphones",
    name: "Яндекс Музыка",
    color: "from-yellow-600/20 to-yellow-900/10",
    border: "border-yellow-500/30",
    accent: "text-yellow-400",
    badge: "bg-yellow-500/20 text-yellow-300",
    desc: "Продвижение внутри платформы, попадание в редакционные и пользовательские плейлисты, рост прослушиваний в России и СНГ.",
    services: [
      { name: "Продвижение трека в Яндекс", price: "от 4 000 ₽" },
      { name: "Работа с кураторами плейлистов", price: "от 3 500 ₽" },
      { name: "Комплексная кампания", price: "от 10 000 ₽" },
    ],
  },
];

const steps = [
  { num: "01", title: "Бриф", desc: "Рассказываешь о треке, жанре и целевой аудитории. Определяем цели кампании." },
  { num: "02", title: "Стратегия", desc: "Подбираем площадки и форматы под твой жанр и бюджет. Согласовываем план." },
  { num: "03", title: "Запуск", desc: "Стартуем кампанию, подключаем каналы, запускаем рекламу и посевы." },
  { num: "04", title: "Отчёт", desc: "Предоставляем статистику: охваты, прослушивания, прирост аудитории." },
];

const Promotion = () => {
  useEffect(() => {
    document.title = "Продвижение музыки — VK, Telegram, YouTube, Spotify, Яндекс — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Продвижение музыки от DIZY MUSIC: VK, Telegram, YouTube, Spotify и Яндекс Музыка. Специальные цены для артистов лейбла. Рост прослушиваний и аудитории.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/promotion");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible(0.1);
  const platformsSection = useVisible(0.1);
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
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-3xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="TrendingUp" size={16} className="text-violet-400" />
                    <span className="text-sm text-zinc-300 font-medium">Маркетинг для артистов</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Продвижение<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
                      музыки
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Запускаем рекламные кампании в VK, Telegram, YouTube, Spotify и Яндекс Музыке. Реальные прослушивания, живая аудитория, прозрачная отчётность.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["ВКонтакте", "Telegram", "YouTube", "Spotify", "Яндекс Музыка"].map((p) => (
                      <span key={p} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-zinc-300">
                        {p}
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
                      <a href="https://t.me/dizymusicchat" target="_blank" rel="noopener noreferrer">
                        Задать вопрос
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Платформы */}
          <section ref={platformsSection.ref} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-14 transition-all duration-700 ${
                  platformsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Площадки</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Продвигаем на всех ключевых платформах — выбирай одну или несколько</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {platforms.map((p, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border bg-gradient-to-br ${p.color} ${p.border} p-6 flex flex-col gap-4 transition-all duration-700 hover:scale-[1.02]`}
                    style={{
                      opacity: platformsSection.isVisible ? 1 : 0,
                      transform: platformsSection.isVisible ? "translateY(0)" : "translateY(2rem)",
                      transition: `opacity 0.7s ease ${i * 100}ms, transform 0.7s ease ${i * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center`}>
                        <Icon name={p.icon as "MessageCircle"} size={22} className={p.accent} />
                      </div>
                      <h3 className="text-xl font-bold">{p.name}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                    <div className="space-y-2 mt-auto">
                      {p.services.map((s, j) => (
                        <div key={j} className="flex items-center justify-between gap-2">
                          <span className="text-sm text-zinc-300">{s.name}</span>
                          <span className={`text-xs font-semibold rounded-full px-2.5 py-1 whitespace-nowrap ${p.badge}`}>{s.price}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-full mt-2"
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

          {/* Как работаем */}
          <section ref={stepsSection.ref} className="py-16 md:py-24 bg-zinc-950/50">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-14 transition-all duration-700 ${
                  stepsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как работаем</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">От брифа до отчёта — прозрачный процесс на каждом этапе</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 flex flex-col gap-3"
                    style={{
                      opacity: stepsSection.isVisible ? 1 : 0,
                      transform: stepsSection.isVisible ? "translateY(0)" : "translateY(2rem)",
                      transition: `opacity 0.7s ease ${i * 100}ms, transform 0.7s ease ${i * 100}ms`,
                    }}
                  >
                    <span className="text-4xl font-black text-white/10">{step.num}</span>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section ref={cta.ref} className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div
                className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
                  cta.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-violet-500/20 bg-violet-950/20 p-8 md:p-14">
                  <Icon name="Rocket" size={40} className="text-violet-400 mx-auto mb-6" />
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готов продвигать трек?</h2>
                  <p className="text-zinc-400 mb-8 text-lg">
                    Напиши нам — обсудим бюджет, платформы и стратегию. Специальные условия для артистов DIZY MUSIC.
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
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Promotion;
