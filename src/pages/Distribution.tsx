import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

const steps = [
  {
    num: "01",
    title: "Подписываем договор",
    desc: "Оформляем соглашение на дистрибуцию. Ты остаёшься владельцем прав — мы только доставляем музыку на платформы и получаем роялти в твою пользу.",
  },
  {
    num: "02",
    title: "Подготавливаем материал",
    desc: "Проверяем треки и метаданные по стандартам каждой платформы. Заполняем ISRC, UPC, автора, жанр, лирику — всё, что влияет на ранжирование.",
  },
  {
    num: "03",
    title: "Загружаем на платформы",
    desc: "Отправляем релиз в Spotify, Apple Music, YouTube Music, ВКонтакте, Яндекс Музыку и ещё 50+ сервисов по всему миру. Глобально — в один день.",
  },
  {
    num: "04",
    title: "Мониторим и выплачиваем",
    desc: "Собираем роялти с каждой платформы, конвертируем в рубли и выплачиваем тебе. Подробная аналитика по стримам — в личном кабинете.",
  },
];

const platforms = [
  { name: "Spotify", region: "Весь мир", icon: "Music2" },
  { name: "Apple Music", region: "Весь мир", icon: "Music" },
  { name: "YouTube Music", region: "Весь мир", icon: "Play" },
  { name: "ВКонтакте", region: "СНГ", icon: "Globe" },
  { name: "Яндекс Музыка", region: "СНГ", icon: "Headphones" },
  { name: "Amazon Music", region: "США, Европа", icon: "ShoppingBag" },
  { name: "Deezer", region: "Европа", icon: "Radio" },
  { name: "Tidal", region: "Весь мир", icon: "Waves" },
  { name: "TikTok / CapCut", region: "Весь мир", icon: "Zap" },
  { name: "Instagram / FB", region: "Весь мир", icon: "Share2" },
  { name: "SoundCloud", region: "Весь мир", icon: "Cloud" },
  { name: "Boomplay", region: "Африка", icon: "Globe2" },
];

const plans = [
  {
    icon: "Disc",
    title: "Стартовый",
    subtitle: "1–3 трека",
    price: "от 2 000 ₽",
    desc: "Для синглов и небольших релизов. Быстрая загрузка, все основные платформы и роялти без комиссии.",
    features: [
      "До 3 треков",
      "50+ платформ",
      "ISRC и UPC коды",
      "Метаданные и лирика",
      "Выплаты роялти",
      "Базовая аналитика",
    ],
  },
  {
    icon: "Globe",
    title: "Международный",
    subtitle: "до 10 треков",
    price: "от 6 000 ₽",
    desc: "Полный выход на мировой рынок с питчингом, приоритетной поддержкой и углублённой аналитикой по странам.",
    features: [
      "До 10 треков",
      "70+ платформ",
      "Питчинг в плейлисты",
      "Аналитика по регионам",
      "Приоритетная поддержка",
      "Пресс-релиз",
    ],
    highlight: true,
  },
  {
    icon: "Crown",
    title: "Лейбл",
    subtitle: "Неограниченно",
    price: "от 15 000 ₽ / мес",
    desc: "Для артистов с постоянными релизами. Безлимитная дистрибуция, персональный менеджер и максимальный питчинг.",
    features: [
      "Неограниченные релизы",
      "70+ платформ",
      "Максимальный питчинг",
      "Менеджер под ключ",
      "Синхронизация кино / ТВ",
      "Пресс-кампания",
    ],
  },
];

const whyItems = [
  {
    icon: "ShieldCheck",
    title: "100% ваши роялти",
    desc: "Никаких скрытых комиссий. Все деньги с платформ поступают на ваш счёт.",
  },
  {
    icon: "Globe",
    title: "70+ платформ",
    desc: "Spotify, Apple Music, ВКонтакте, Яндекс Музыка, TikTok, Amazon и десятки других.",
  },
  {
    icon: "Zap",
    title: "Выход за 24–72 часа",
    desc: "После проверки материала релиз появляется на всех платформах в течение 1–3 рабочих дней.",
  },
  {
    icon: "BarChart2",
    title: "Аналитика в реальном времени",
    desc: "Сколько стримов, в каких странах, на каких плейлистах — всё в личном кабинете.",
  },
  {
    icon: "CalendarCheck",
    title: "Точная дата релиза",
    desc: "Выбираешь дату — мы гарантируем выход именно в этот день. Никаких переносов.",
  },
  {
    icon: "Headphones",
    title: "Персональный менеджер",
    desc: "Один человек ведёт все твои релизы: от загрузки до аналитики и выплат.",
  },
];

const faqs = [
  {
    q: "Вы забираете процент с роялти?",
    a: "Нет. Мы работаем по фиксированной оплате за дистрибуцию — все 100% роялти с платформ уходят вам. Никакой скрытой комиссии.",
  },
  {
    q: "Сколько времени до выхода релиза на платформах?",
    a: "После отправки материала — 24–72 часа для большинства платформ. Некоторые сервисы, например Apple Music, могут занять до 5 дней. Рекомендуем закладывать 2–3 недели до желаемой даты для питчинга.",
  },
  {
    q: "Можно ли выбрать конкретную дату выхода?",
    a: "Да. Вы указываете желаемую дату релиза, и мы организуем выход именно в этот день. Это важно для предзаказов, питчинга и PR-активности.",
  },
  {
    q: "Что нужно предоставить для дистрибуции?",
    a: "Аудиофайлы в формате WAV 44.1 kHz / 16–24 bit, обложку JPG 3000×3000 px, метаданные (названия треков, авторы, год). Мы поможем подготовить всё по стандартам платформ.",
  },
  {
    q: "Я могу в любой момент отозвать релиз?",
    a: "Да. Вы полностью контролируете свои релизы. Можно снять с публикации в любой момент — мы обработаем запрос в течение 24 часов.",
  },
  {
    q: "Вы работаете с электронной музыкой / рэпом / поп-музыкой?",
    a: "Со всеми жанрами без ограничений. Единственное условие — контент не должен нарушать авторские права третьих лиц.",
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

const Distribution = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Международная дистрибуция музыки — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Дистрибуция музыки на Spotify, Apple Music, ВКонтакте, Яндекс Музыку и 70+ платформ по всему миру. 100% роялти, выход за 24–72 часа, питчинг в плейлисты. DIZY MUSIC."
      );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/distribution");
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
  const plansSection = useVisible(0.1);
  const platformsSection = useVisible(0.1);
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
            <div className="absolute inset-0 bg-gradient-to-b from-sky-950/25 via-black to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`max-w-5xl mx-auto transition-all duration-700 ${
                  hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Globe" size={16} className="text-sky-400" />
                    <span className="text-sm text-zinc-300 font-medium">Музыка по всему миру</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Международная<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-white">
                      дистрибуция
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Выводим вашу музыку на 70+ стриминговых платформ по всему миру. 100% роялти, выход за 24–72 часа, питчинг в плейлисты — всё под ключ.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["Spotify", "Apple Music", "ВКонтакте", "TikTok", "70+ платформ"].map((tag) => (
                      <span key={tag} className="bg-white/8 border border-white/10 rounded-full px-4 py-1.5 text-sm text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-zinc-100 font-semibold px-8"
                      onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Выбрать тариф
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/8 px-8"
                      onClick={() => window.open("https://t.me/dizymusic", "_blank")}
                    >
                      Получить консультацию
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platforms */}
          <section
            ref={platformsSection.ref}
            className="py-16 md:py-20"
          >
            <div className="container mx-auto px-4">
              <div
                className={`transition-all duration-700 ${
                  platformsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Платформы</h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    Ваша музыка появляется на всех крупных стриминговых сервисах одновременно — без лишних шагов с вашей стороны.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
                  {platforms.map((p) => (
                    <div
                      key={p.name}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/8 bg-zinc-900/50 hover:border-sky-500/40 hover:bg-sky-950/20 transition-all duration-200"
                    >
                      <Icon name={p.icon} size={22} className="text-sky-400" />
                      <span className="text-sm font-medium text-white text-center">{p.name}</span>
                      <span className="text-xs text-zinc-500 text-center">{p.region}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-zinc-500 text-sm mt-6">И ещё 58+ платформ по всему миру</p>
              </div>
            </div>
          </section>

          {/* Plans */}
          <section
            id="plans"
            ref={plansSection.ref}
            className="py-16 md:py-24 bg-zinc-950/50"
          >
            <div className="container mx-auto px-4">
              <div
                className={`transition-all duration-700 ${
                  plansSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы</h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    Выберите формат, который подходит под ваши задачи — от разового сингла до постоянного потока релизов.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {plans.map((plan) => (
                    <div
                      key={plan.title}
                      className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-200 ${
                        plan.highlight
                          ? "border-sky-500/60 bg-sky-950/30 shadow-xl shadow-sky-900/20"
                          : "border-white/10 bg-zinc-900/50 hover:border-white/20"
                      }`}
                    >
                      {plan.highlight && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                          <span className="bg-sky-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                            Популярный
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 rounded-xl ${plan.highlight ? "bg-sky-500/20" : "bg-white/8"}`}>
                          <Icon name={plan.icon} size={22} className={plan.highlight ? "text-sky-400" : "text-zinc-300"} />
                        </div>
                        <div>
                          <div className="font-bold text-lg">{plan.title}</div>
                          <div className="text-zinc-400 text-sm">{plan.subtitle}</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold mb-3">{plan.price}</div>
                      <p className="text-zinc-400 text-sm mb-6">{plan.desc}</p>
                      <ul className="space-y-2.5 mb-8 flex-1">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                            <Icon name="Check" size={15} className={plan.highlight ? "text-sky-400" : "text-zinc-400"} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full font-semibold ${
                          plan.highlight
                            ? "bg-sky-500 hover:bg-sky-400 text-white"
                            : "bg-white/10 hover:bg-white/20 text-white"
                        }`}
                        onClick={() => window.open("https://t.me/dizymusic", "_blank")}
                      >
                        Начать
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why */}
          <section
            ref={why.ref}
            className="py-16 md:py-24"
          >
            <div className="container mx-auto px-4">
              <div
                className={`transition-all duration-700 ${
                  why.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему DIZY MUSIC</h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    Мы не просто загружаем файлы — мы выстраиваем стратегию присутствия вашей музыки в мире.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                  {whyItems.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/8 bg-zinc-900/50 p-6 hover:border-sky-500/30 hover:bg-sky-950/10 transition-all duration-200"
                    >
                      <div className="p-2.5 rounded-xl bg-sky-500/15 w-fit mb-4">
                        <Icon name={item.icon} size={22} className="text-sky-400" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section
            ref={process.ref}
            className="py-16 md:py-24 bg-zinc-950/50"
          >
            <div className="container mx-auto px-4">
              <div
                className={`transition-all duration-700 ${
                  process.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    Четыре шага от вашего WAV-файла до глобальных стримингов.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                  {steps.map((step) => (
                    <div
                      key={step.num}
                      className="rounded-xl border border-white/8 bg-zinc-900/50 p-6"
                    >
                      <div className="text-4xl font-black text-sky-500/30 mb-3 leading-none">{step.num}</div>
                      <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            ref={faqSection.ref}
            className="py-16 md:py-24"
          >
            <div className="container mx-auto px-4">
              <div
                className={`max-w-3xl mx-auto transition-all duration-700 ${
                  faqSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Вопросы и ответы</h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/8 bg-zinc-900/50 overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/4 transition-colors"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="font-medium text-white">{faq.q}</span>
                        <Icon
                          name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                          size={18}
                          className="text-zinc-400 shrink-0"
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-5">
                          <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-sky-950/20 to-black">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto rounded-2xl border border-sky-500/30 bg-zinc-900/70 backdrop-blur-md p-10 md:p-16 text-center shadow-2xl">
                <Icon name="Globe" size={40} className="text-sky-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Готовы выйти на весь мир?
                </h2>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                  Напишите нам — обсудим ваши треки, выберем тариф и запустим дистрибуцию.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-zinc-100 font-semibold px-10"
                    onClick={() => window.open("https://t.me/dizymusic", "_blank")}
                  >
                    Написать в Telegram
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/8 px-10"
                    onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Смотреть тарифы
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

export default Distribution;