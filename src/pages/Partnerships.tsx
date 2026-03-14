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

const labels = [
  {
    icon: "Music2",
    name: "Universal Music Group",
    region: "США / Глобально",
    desc: "Крупнейший мировой лейбл. Сотрудничество открывает доступ к глобальной дистрибуции, синхронизации с кино и рекламой, международным промо-ресурсам.",
    tags: ["Pop", "Hip-Hop", "R&B", "Rock", "Electronic"],
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
  },
  {
    icon: "Headphones",
    name: "Sony Music Entertainment",
    region: "Япония / Глобально",
    desc: "Один из трёх мейджоров. Партнёрство даёт выход на азиатский рынок, кроссплатформенные промо-кампании и доступ к крупнейшим playlist-командам.",
    tags: ["Pop", "Latin", "K-Pop", "Indie", "Classical"],
    color: "from-rose-500/20 to-rose-900/10",
    border: "border-rose-500/20",
    accent: "text-rose-400",
    highlight: true,
  },
  {
    icon: "Radio",
    name: "Warner Music Group",
    region: "США / Глобально",
    desc: "Третий мейджор с сильным фокусом на инди-артистах и электронной музыке. Развитая сеть в Европе, синхронизация с Netflix и HBO.",
    tags: ["Electronic", "Indie", "Alternative", "Metal"],
    color: "from-orange-500/20 to-orange-900/10",
    border: "border-orange-500/20",
    accent: "text-orange-400",
  },
  {
    icon: "Zap",
    name: "Insomniac / HARD Events",
    region: "США / Европа",
    desc: "Ведущий промоутер EDM-сцены. Партнёрство — это слоты на EDC, Electric Forest, HARD Summer и доступ к миллионной фестивальной аудитории.",
    tags: ["EDM", "Techno", "House", "Bass", "Dubstep"],
    color: "from-yellow-500/20 to-yellow-900/10",
    border: "border-yellow-500/20",
    accent: "text-yellow-400",
  },
  {
    icon: "Globe",
    name: "Armada Music",
    region: "Нидерланды / Глобально",
    desc: "Топовый независимый лейбл электронной музыки Армина ван Бюрена. Выход на транс, хаус, прогрессив — с аудиторией 50+ млн подписчиков.",
    tags: ["Trance", "House", "Progressive", "Electronic"],
    color: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
  },
  {
    icon: "TrendingUp",
    name: "Spinnin' Records",
    region: "Нидерланды / Глобально",
    desc: "Легендарный лейбл с YouTube-каналом 30+ млн подписчиков. Один из самых эффективных каналов продвижения для EDM и future bass артистов.",
    tags: ["Future Bass", "Tropical", "Big Room", "House"],
    color: "from-purple-500/20 to-purple-900/10",
    border: "border-purple-500/20",
    accent: "text-purple-400",
  },
];

const formats = [
  {
    icon: "FileSignature",
    title: "Лицензионная сделка",
    desc: "Передача прав на конкретный трек или альбом лейблу на оговорённый срок. Ты получаешь аванс и роялти, лейбл — права на дистрибуцию.",
    highlight: false,
  },
  {
    icon: "Handshake",
    title: "Совместное издание",
    desc: "Co-publishing: доходы и права делятся между тобой и лейблом. Идеально для артистов, которые хотят сохранить творческий контроль.",
    highlight: true,
  },
  {
    icon: "BarChart2",
    title: "Дистрибуция + промо",
    desc: "Лейбл берёт на себя дистрибуцию и продвижение, ты сохраняешь все авторские права. Минимальные обязательства, максимальный охват.",
    highlight: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Анализ материала",
    desc: "Изучаем твои треки, стиль, целевую аудиторию и определяем, с какими лейблами совпадение будет максимальным.",
  },
  {
    num: "02",
    title: "Подготовка питча",
    desc: "Готовим профессиональный press kit, биографию, EPK и сопроводительные письма на языке лейбла.",
  },
  {
    num: "03",
    title: "Выход на лейбл",
    desc: "Используем прямые контакты A&R менеджеров — твой питч попадает нужным людям, минуя общий ящик.",
  },
  {
    num: "04",
    title: "Переговоры и сделка",
    desc: "Сопровождаем на всех этапах переговоров, помогаем разобраться в условиях контракта и защитить твои интересы.",
  },
];

const stats = [
  { value: "50+", label: "лейблов в базе" },
  { value: "12", label: "стран охвата" },
  { value: "3", label: "мейджора" },
  { value: "87%", label: "успешных питчей" },
];

const Partnerships = () => {
  useEffect(() => {
    document.title = "Партнёрства с мировыми лейблами — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Партнёрства с мировыми музыкальными лейблами от DIZY MUSIC. Выводим артистов на Universal, Sony, Warner и топовые инди-лейблы. Лицензионные сделки, co-publishing, дистрибуция. Прямые контакты A&R.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/partnerships");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible();
  const statsSection = useVisible();
  const labelsSection = useVisible();
  const formatsSection = useVisible();
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
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/25 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-5xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Globe" size={16} className="text-indigo-400" />
                    <span className="text-sm text-zinc-300 font-medium">Мировая музыкальная индустрия</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Партнёрства<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      с мировыми лейблами
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Выводим твою музыку на Universal, Sony, Warner и ведущие инди-лейблы. Прямые контакты A&R, профессиональный питч и полное сопровождение сделки.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["Universal Music", "Sony Music", "Warner Music", "Armada", "Spinnin' Records"].map((tag) => (
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
                        Хочу на мировой лейбл →
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
                    <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-1">{s.value}</div>
                    <div className="text-sm text-zinc-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Лейблы */}
          <section ref={labelsSection} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  labelsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши партнёры</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Работаем напрямую с A&R командами ведущих лейблов мира
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {labels.map((label, index) => (
                  <div
                    key={label.name}
                    className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br ${label.color} ${label.border} ${
                      labelsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {label.highlight && (
                      <div className="inline-flex items-center gap-1.5 bg-rose-600/30 border border-rose-500/30 rounded-full px-3 py-1 mb-4 text-xs text-rose-300 font-medium">
                        <Icon name="Star" size={12} />
                        Топ партнёр
                      </div>
                    )}
                    <div className={`mb-3 ${label.accent}`}>
                      <Icon name={label.icon} size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{label.name}</h3>
                    <div className={`text-sm font-medium mb-3 ${label.accent}`}>{label.region}</div>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{label.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {label.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Форматы сотрудничества */}
          <section ref={formatsSection} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  formatsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Форматы сотрудничества</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Подбираем формат под твои цели — сохранить права или получить максимальный охват
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {formats.map((f, index) => (
                  <div
                    key={f.title}
                    className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-105 ${
                      f.highlight
                        ? "border-indigo-500/50 bg-indigo-950/30 shadow-lg shadow-indigo-500/10"
                        : "border-white/10 bg-zinc-900/60"
                    } ${
                      formatsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {f.highlight && (
                      <div className="inline-flex items-center gap-1.5 bg-indigo-600/30 border border-indigo-500/30 rounded-full px-3 py-1 mb-4 text-xs text-indigo-300 font-medium">
                        <Icon name="Star" size={12} />
                        Популярно
                      </div>
                    )}
                    <div className="mb-4 text-white/70">
                      <Icon name={f.icon} size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                    <Button
                      className="w-full mt-6 rounded-full bg-white text-black hover:bg-zinc-200"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Узнать подробнее
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Как работаем */}
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
                  Берём на себя весь путь — от анализа твоей музыки до подписания контракта
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
                    <div className="text-4xl font-bold text-indigo-400 mb-4">{step.num}</div>
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
              <div className="max-w-2xl mx-auto rounded-2xl border border-indigo-500/30 bg-indigo-950/20 p-10 md:p-16">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-500/20 mb-6 mx-auto">
                  <Icon name="Globe" size={28} className="text-indigo-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Готов выйти на мировой уровень?</h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Напиши нам — расскажем, какой лейбл подойдёт под твой стиль, и запустим процесс уже сегодня.
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

export default Partnerships;
