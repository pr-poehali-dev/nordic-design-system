import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = Math.max(0, 1 - scrolled / (windowHeight * 0.5));
      setScrollOpacity(opacity);
      setScrollY(scrolled * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: "Music", label: "Артистов в лейбле", value: "50+" },
    { icon: "Disc3", label: "Выпущенных треков", value: "300+" },
    { icon: "Globe", label: "Платформ дистрибуции", value: "50+" },
    { icon: "TrendingUp", label: "Лет на рынке", value: "5+" },
  ];

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
      </div>

      <div
        style={{ transform: `translateY(${scrollY}px)`, opacity: scrollOpacity }}
        className="relative pt-24 sm:pt-32 md:pt-40 pb-10 sm:pb-16 px-4 transition-opacity duration-100 flex items-center min-h-screen"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="animate-fade-in rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl mb-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                  DIZY MUSIC
                </span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl mb-6 md:mb-8 text-zinc-400 max-w-3xl mx-auto">
                Музыкальный лейбл, который выводит артистов на новый уровень. Дистрибуция на всех крупнейших платформах, поддержка на каждом этапе карьеры и индивидуальный подход к каждому исполнителю.
              </p>
              <div className="relative inline-block">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  asChild
                >
                  <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Присоединиться к лейблу</span>
                    <span
                      className={`ml-2 relative z-10 transition-transform duration-200 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                    >
                      &rarr;
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="bg-zinc-900/50 rounded-xl p-3 sm:p-6 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                  <div className="mb-2 text-white/70 flex justify-center">
                    <Icon name={stat.icon} size={20} />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold mb-1 text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-zinc-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;