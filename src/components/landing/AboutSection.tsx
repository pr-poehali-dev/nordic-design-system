import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const achievements = [
  { icon: "Users", label: "Артистов в команде", value: "50+" },
  { icon: "Music2", label: "Выпущенных треков", value: "300+" },
  { icon: "Globe", label: "Платформ дистрибуции", value: "50+" },
  { icon: "Award", label: "Лет на рынке", value: "5+" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} id="about" className="py-14 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `translateY(${(1 - scrollProgress) * 50}px)` }}
        >
          <div className="relative max-w-sm mx-auto md:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl transform -rotate-6"></div>
            <div className="w-full aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl relative z-10 flex items-center justify-center">
              <div className="text-center p-6 md:p-8">
                <img
                  src="https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/5a627555-b6f6-4f69-81b3-d64887e6ed30.png"
                  alt="DIZY MUSIC"
                  className="w-full max-w-xs mx-auto"
                />
                <p className="text-zinc-400 text-sm mt-4">Музыкальный лейбл</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">О лейбле</h2>
            <p className="text-base md:text-lg mb-4 md:mb-6 text-zinc-300">
              DIZY MUSIC — это динамичный музыкальный лейбл, который предлагает полный спектр услуг для музыкантов и артистов. Мы специализируемся на дистрибуции треков, обеспечивая их доступность на всех крупнейших цифровых платформах.
            </p>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-zinc-300">
              Наша команда опытных профессионалов поддерживает исполнителей на каждом этапе — от написания оригинальных треков и создания ремиксов до продвижения на рынке. С DIZY MUSIC вы получите доступ к ресурсам и инструментам, которые помогут вам достичь новых вершин.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className={`bg-zinc-900/50 rounded-lg p-4 border border-white/10 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-2 text-white">
                      <Icon name={achievement.icon} size={24} />
                    </div>
                    <div className="text-2xl font-bold text-white">{achievement.value}</div>
                  </div>
                  <div className="text-sm text-zinc-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;