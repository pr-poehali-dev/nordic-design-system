import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "BarChart2",
    title: "Аналитика",
    description: "Ваши прослушивания в реальном времени",
  },
  {
    icon: "Wallet",
    title: "Финансы",
    description: "Бухгалтерия и выводы в один клик",
  },
  {
    icon: "BadgeCheck",
    title: "Верификация",
    description: "Поможем получить галочку в любимой соц.сети",
  },
  {
    icon: "Waveform",
    title: "Анализ аудио",
    description: "AI информация о треках",
  },
  {
    icon: "TrendingUp",
    title: "Чарты",
    description: "Заявите о себе в локальном чарте",
  },
  {
    icon: "Link",
    title: "Мультиссылки",
    description: "Ссылка на все площадки в один клик",
  },
  {
    icon: "Sparkles",
    title: "Генерации",
    description: "Автоматический контент под ваши релизы",
  },
];

const FeaturesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="features" className="py-14 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4">
              <Icon name="Zap" size={16} className="text-zinc-300" />
              <span className="text-sm text-zinc-300 font-medium">Возможности</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Наши возможности
            </h2>
            <p className="text-zinc-400 text-base md:text-lg whitespace-nowrap">
              Всё необходимое для роста вашей музыкальной карьеры в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group bg-zinc-900/60 border border-white/8 rounded-2xl p-6 hover:border-white/20 hover:bg-zinc-900 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors duration-300">
                  <Icon name={feature.icon} size={22} className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}

            {/* Последняя карточка — CTA */}
            <div
              className={`bg-white/5 border border-white/15 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${features.length * 70}ms` }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                  <Icon name="ArrowRight" size={22} className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">И многое другое</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Свяжитесь с нами, чтобы узнать подробнее</p>
              </div>
              <a
                href="https://t.me/dizymusic"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Написать <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;