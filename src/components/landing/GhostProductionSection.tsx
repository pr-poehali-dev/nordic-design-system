import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  { icon: "Music2", title: "Оригинальные треки", desc: "Создаём уникальную музыку под ваш стиль и видение" },
  { icon: "Shuffle", title: "Ремиксы", desc: "Профессиональные ремиксы любой сложности" },
  { icon: "Sliders", title: "Сведение", desc: "Идеальный баланс и детализация каждого элемента" },
  { icon: "Sparkles", title: "Мастеринг", desc: "Финальная полировка для звучания мирового уровня" },
];

const GhostProductionSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="ghost" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
      <div className="container mx-auto px-4 relative">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-10 md:p-16 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                  <Icon name="Ghost" size={16} className="text-zinc-300" />
                  <span className="text-sm text-zinc-300 font-medium">Ghost Production</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Твоя музыка —<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                    наша работа
                  </span>
                </h2>
                <p className="text-lg text-zinc-300 mb-6">
                  Идеальное решение для артистов, ищущих профессиональную помощь в создании музыкального контента, не афишируя своё имя. Полный спектр услуг — от написания треков до финального мастеринга.
                </p>
                <p className="text-lg text-zinc-300 mb-8">
                  Наши опытные продюсеры работают в различных жанрах и стилях, гарантируя уникальный результат под ваши требования. Сосредоточьтесь на своём искусстве — технические аспекты мы берём на себя.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                    Обсудить проект →
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className={`bg-black/50 rounded-xl p-6 border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="mb-3 text-white/70">
                      <Icon name={service.icon} size={28} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                    <p className="text-sm text-zinc-400">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GhostProductionSection;