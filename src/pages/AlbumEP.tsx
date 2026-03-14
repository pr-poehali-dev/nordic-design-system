import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

const steps = [
  {
    num: "01",
    title: "Обсуждаем концепцию",
    desc: "Рассказываешь идею альбома или EP — жанр, настроение, количество треков, референсы. Определяем формат и сроки.",
  },
  {
    num: "02",
    title: "Готовим материал",
    desc: "Сводим, мастерим и оформляем треки. Создаём обложку и прописываем метаданные по стандартам платформ.",
  },
  {
    num: "03",
    title: "Дистрибуция и питчинг",
    desc: "Загружаем релиз на 50+ платформ, питчируем в плейлисты стримингов и прессу за 4–6 недель до выхода.",
  },
  {
    num: "04",
    title: "Выход и поддержка",
    desc: "Релиз выходит в назначенную дату. Ведём продвижение в первые недели — самый важный период для алгоритмов.",
  },
];

const packages = [
  {
    icon: "Disc",
    title: "EP",
    subtitle: "3–6 треков",
    price: "от 15 000 ₽",
    desc: "Идеально для первого серьёзного релиза. EP даёт алгоритмам больше материала и строит образ артиста.",
    features: [
      "До 6 треков",
      "Мастеринг всех треков",
      "Обложка релиза",
      "Дистрибуция на 50+ платформ",
      "Питчинг в плейлисты",
      "Метаданные и ISRC",
    ],
  },
  {
    icon: "Album",
    title: "Мини-альбом",
    subtitle: "7–9 треков",
    price: "от 25 000 ₽",
    desc: "Оптимальный формат: достаточно треков для полноценного образа, не перегружает слушателя.",
    features: [
      "7–9 треков",
      "Сведение + мастеринг",
      "Обложка + визуальный стиль",
      "Дистрибуция на 50+ платформ",
      "Приоритетный питчинг",
      "Пресс-релиз для СМИ",
    ],
    highlight: true,
  },
  {
    icon: "Disc3",
    title: "Полный альбом",
    subtitle: "10+ треков",
    price: "от 40 000 ₽",
    desc: "Полноценный художественный проект. Включает полное сопровождение: от производства до пресс-кампании.",
    features: [
      "10+ треков",
      "Полный цикл производства",
      "Арт-дирекция обложки",
      "Дистрибуция + синхронизация",
      "Максимальный питчинг",
      "Пресс-кампания и СМИ",
    ],
  },
];

const whyItems = [
  {
    icon: "ShieldCheck",
    title: "100% ваши роялти",
    desc: "Вы остаётесь единственным правообладателем. Все доходы со стримингов — только вам.",
  },
  {
    icon: "Globe",
    title: "50+ платформ",
    desc: "Spotify, Apple Music, YouTube Music, ВКонтакте, Яндекс Музыка и десятки других сервисов по всему миру.",
  },
  {
    icon: "ListMusic",
    title: "Питчинг в плейлисты",
    desc: "Продвигаем релиз в кураторские и алгоритмические плейлисты стримингов. Начинаем за 4 недели до выхода.",
  },
  {
    icon: "Newspaper",
    title: "Пресс-поддержка",
    desc: "Готовим пресс-релиз и рассылаем музыкальным СМИ, блогерам и радиостанциям.",
  },
  {
    icon: "CalendarCheck",
    title: "Чёткие сроки",
    desc: "Релиз выходит в назначенную дату. Без задержек и переносов — как у крупных лейблов.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Менеджер под ключ",
    desc: "Один менеджер ведёт весь проект от первого звонка до выхода релиза и аналитики.",
  },
];

const faqs = [
  {
    q: "Чем EP отличается от альбома?",
    a: "EP — это мини-релиз из 3–6 треков, альбом — от 7 треков. EP легче производить и лучше воспринимается алгоритмами стримингов для новых артистов.",
  },
  {
    q: "Сколько времени занимает выпуск?",
    a: "От готового материала до релиза — 3–4 недели. Это время нужно для питчинга в плейлисты Spotify и Apple Music. Чем раньше начнём, тем лучше результат.",
  },
  {
    q: "Я могу сам загрузить треки на платформы?",
    a: "Да, но через нас у вас есть доступ к официальному питчингу в плейлисты, которого нет у большинства дистрибьюторов. Плюс мы берём всё оформление на себя.",
  },
  {
    q: "Что такое ISRC-коды?",
    a: "ISRC — уникальный идентификатор каждого трека. Он необходим для корректного отслеживания стримов и выплаты роялти. Мы присваиваем коды каждому треку.",
  },
  {
    q: "Вы работаете с начинающими артистами?",
    a: "Да, и с удовольствием. Мы помогаем выстроить стратегию с нуля: от первого EP до полноценной дискографии.",
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

const AlbumEP = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Выпуск альбома и EP — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Полный цикл выпуска альбома или EP: производство, мастеринг, обложка, дистрибуция на 50+ платформ и питчинг в плейлисты Spotify, Apple Music. DIZY MUSIC — ваш лейбл под ключ."
      );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/album-ep");
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
  const packagesSection = useVisible(0.1);
  const why = useVisible(0.1);
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
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/25 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-5xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Album" size={16} className="text-violet-400" />
                    <span className="text-sm text-zinc-300 font-medium">Выпуск музыки под ключ</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Выпуск альбома<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-white">
                      и EP
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    От идеи до релиза на 50+ стриминговых платформах. Мы берём на себя производство, оформление, дистрибуцию и питчинг — ты занимаешься музыкой.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["EP", "Мини-альбом", "Полный альбом"].map((tag) => (
                      <span key={tag} className="bg-white/8 border border-white/10 rounded-full px-4 py-1.5 text-sm text-zinc-300">
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
                        Обсудить релиз →
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
          <section ref={packagesSection.ref} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  packagesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Форматы релиза</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Выбери подходящий формат — мы адаптируем под любые задачи и бюджет
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {packages.map((pkg, index) => (
                  <div
                    key={pkg.title}
                    className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-105 ${
                      pkg.highlight
                        ? "border-violet-500/50 bg-violet-950/20 shadow-xl shadow-violet-950/20"
                        : "border-white/10 bg-zinc-900/40"
                    } ${
                      packagesSection.isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {pkg.highlight && (
                      <div className="inline-flex items-center gap-1 bg-violet-500/20 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        <Icon name="Star" size={11} />
                        Популярный
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl ${pkg.highlight ? "bg-violet-500/20" : "bg-white/5"}`}>
                        <Icon name={pkg.icon} size={22} className={pkg.highlight ? "text-violet-400" : "text-zinc-400"} />
                      </div>
                      <div>
                        <div className="font-bold text-lg leading-tight">{pkg.title}</div>
                        <div className="text-xs text-zinc-500">{pkg.subtitle}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-3">{pkg.price}</div>
                    <p className="text-sm text-zinc-400 mb-5 leading-relaxed">{pkg.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={14} className={pkg.highlight ? "text-violet-400 shrink-0" : "text-zinc-500 shrink-0"} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full rounded-full ${
                        pkg.highlight
                          ? "bg-violet-600 hover:bg-violet-700 text-white"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                      }`}
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Выбрать
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Почему DIZY */}
          <section ref={why.ref} className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  why.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему DIZY MUSIC</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Всё необходимое для успешного релиза в одном месте
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {whyItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl border border-white/8 bg-zinc-900/40 p-6 transition-all duration-500 hover:border-white/20 ${
                      why.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="p-2.5 rounded-xl bg-white/5 w-fit mb-4">
                      <Icon name={item.icon} size={20} className="text-violet-400" />
                    </div>
                    <div className="font-semibold mb-2">{item.title}</div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Процесс */}
          <section ref={process.ref} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/8 to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Как проходит работа</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Прозрачный процесс без лишних слов
                </p>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.num}
                    className={`flex gap-5 items-start rounded-2xl border border-white/8 bg-zinc-900/40 p-6 transition-all duration-500 ${
                      process.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-black text-violet-500/40 leading-none w-10 shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-semibold text-base mb-1">{step.title}</div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section ref={faqSection.ref} className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  faqSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
              </div>
              <div className="max-w-2xl mx-auto space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border border-white/8 bg-zinc-900/40 overflow-hidden transition-all duration-500 ${
                      faqSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-medium text-sm md:text-base">{faq.q}</span>
                      <Icon
                        name={openFaq === index ? "ChevronUp" : "ChevronDown"}
                        size={18}
                        className="text-zinc-500 shrink-0"
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5">
                        <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/15 to-black" />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-3xl mx-auto rounded-2xl border border-violet-500/20 bg-violet-950/20 backdrop-blur-md p-8 md:p-14 text-center shadow-2xl shadow-violet-950/20">
                <Icon name="Album" size={40} className="text-violet-400 mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Готов выпустить релиз?</h2>
                <p className="text-zinc-300 text-lg mb-8 max-w-xl mx-auto">
                  Напиши нам — обсудим твой проект, подберём формат и запустим процесс уже сегодня.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-zinc-200 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                      Обсудить релиз →
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
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AlbumEP;
