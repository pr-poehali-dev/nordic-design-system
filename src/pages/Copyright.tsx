import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

const steps = [
  {
    num: "01",
    title: "Заполняешь заявку",
    desc: "Присылаешь нам данные о треке, авторах и правообладателях. Подготовим необходимые документы.",
  },
  {
    num: "02",
    title: "Проверяем и готовим",
    desc: "Юристы проверяют документы, составляют заявку и готовят пакет для регистрации авторских прав.",
  },
  {
    num: "03",
    title: "Подаём в РАО / ВОИС",
    desc: "Направляем заявку в Российское авторское общество или международные организации.",
  },
  {
    num: "04",
    title: "Получаешь свидетельство",
    desc: "Ты получаешь официальный документ, подтверждающий твои авторские права на произведение.",
  },
];

const services = [
  {
    icon: "FileText",
    title: "Базовая защита",
    price: "от 5 000 ₽",
    desc: "Регистрация авторских прав на один трек или альбом в РАО. Официальный документ с датой создания.",
    features: ["Регистрация в РАО", "Один трек / альбом", "Срок 7–14 дней", "Электронный сертификат"],
  },
  {
    icon: "Shield",
    title: "Расширенная защита",
    price: "от 12 000 ₽",
    desc: "Защита до 5 произведений + консультация юриста + нотариальное депонирование для суда.",
    features: ["До 5 произведений", "Нотариальное депонирование", "Консультация юриста", "Пакет документов"],
    highlight: true,
  },
  {
    icon: "Globe",
    title: "Международная защита",
    price: "от 25 000 ₽",
    desc: "Защита в РАО + международная регистрация через ВОИС. Подходит для артистов с зарубежной аудиторией.",
    features: ["РАО + ВОИС", "Международный охват", "Юридическое сопровождение", "Приоритетный срок"],
  },
];

const faq = [
  {
    q: "Нужно ли регистрировать авторские права в России?",
    a: "Авторские права возникают автоматически с момента создания произведения. Но регистрация даёт официальное подтверждение даты создания — это важно при спорах и монетизации.",
  },
  {
    q: "Что защищает регистрация?",
    a: "Мелодию, текст, аранжировку, фонограмму. При нарушении прав у тебя будет официальный документ, который суд примет как доказательство.",
  },
  {
    q: "Можно ли зарегистрировать права на несколько треков?",
    a: "Да, мы работаем с отдельными треками, EP и альбомами. Чем больше произведений — тем выгоднее пакетная регистрация.",
  },
  {
    q: "Сколько времени занимает регистрация?",
    a: "Базовая регистрация в РАО — 7–14 рабочих дней. Международная через ВОИС — от 4 до 8 недель.",
  },
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

const Copyright = () => {
  useEffect(() => {
    document.title = "Регистрация авторских прав на музыку — DIZY MUSIC";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Регистрация авторских прав на музыку от DIZY MUSIC. Официальная защита треков и альбомов в РАО и ВОИС. Юридическое сопровождение, нотариальное депонирование. Цены от 5 000 ₽.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://dizymusic.ru/copyright");
    return () => {
      document.title = "DIZY MUSIC — Музыкальный лейбл | Дистрибуция, Ghost Production, Питчинг";
      if (desc) desc.setAttribute("content", "DIZY MUSIC — музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на 50+ платформ, ghost production, питчинг в топ-плейлисты, сведение и мастеринг. 100% роялти.");
      if (canonical) canonical.setAttribute("href", "https://dizymusic.ru");
    };
  }, []);

  const hero = useVisible(0.1);
  const servicesSection = useVisible(0.1);
  const processSection = useVisible(0.1);
  const faqSection = useVisible(0.1);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                    <Icon name="ShieldCheck" size={16} className="text-purple-400" />
                    <span className="text-sm text-zinc-300 font-medium">Юридическая защита музыки</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Регистрация<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
                      авторских прав
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    Официально защищаем твои треки и альбомы. Регистрация в РАО и ВОИС, нотариальное депонирование, полное юридическое сопровождение.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-zinc-200 text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Защитить музыку →
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
          <section ref={servicesSection} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Пакеты защиты</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Выбери уровень защиты — от базовой регистрации до международного охвата
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className={`rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-105 ${
                      service.highlight
                        ? "border-purple-500/50 bg-purple-950/30 shadow-lg shadow-purple-500/10"
                        : "border-white/10 bg-zinc-900/60"
                    } ${
                      servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                    <p className="text-zinc-400 text-sm mb-6">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Icon name="Check" size={14} className="text-purple-400 shrink-0" />
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
          <section ref={processSection} className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  processSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  Берём на себя весь процесс — от подготовки документов до получения свидетельства
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                  <div
                    key={step.num}
                    className={`text-center transition-all duration-500 ${
                      processSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="text-4xl font-bold text-purple-400 mb-4">{step.num}</div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section ref={faqSection} className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
            <div className="container mx-auto px-4 relative">
              <div
                className={`text-center mb-12 transition-all duration-700 ${
                  faqSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faq.map((item, index) => (
                  <div
                    key={index}
                    className={`border border-white/10 rounded-2xl bg-zinc-900/60 overflow-hidden transition-all duration-500 ${
                      faqSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <button
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="font-semibold text-base">{item.q}</span>
                      <Icon
                        name={openFaq === index ? "ChevronUp" : "ChevronDown"}
                        size={18}
                        className="text-purple-400 shrink-0"
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-2xl mx-auto rounded-2xl border border-purple-500/30 bg-purple-950/20 p-10 md:p-16">
                <Icon name="ShieldCheck" size={48} className="text-purple-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Защити свою музыку сегодня
                </h2>
                <p className="text-zinc-400 mb-8">
                  Напиши нам — обсудим твой случай и подберём оптимальный вариант защиты
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

export default Copyright;
