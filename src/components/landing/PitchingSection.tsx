import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const platforms = [
  { icon: "Music", label: "Spotify" },
  { icon: "Music2", label: "Apple Music" },
  { icon: "Radio", label: "Amazon Music" },
  { icon: "Headphones", label: "Deezer" },
];

const PitchingSection = () => {
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
    <section ref={ref} id="pitching" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
      <div className="container mx-auto px-4 relative">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4 md:mb-6">
                  <Icon name="ListMusic" size={16} className="text-zinc-300" />
                  <span className="text-sm text-zinc-300 font-medium">Pitching</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
                  Попади в<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                    топовые плейлисты
                  </span>
                </h2>
                <p className="text-base md:text-lg text-zinc-300 mb-6 md:mb-8">
                  Питчинг — это ваш шанс продвинуть свою музыку в топовые плейлисты на популярных стриминговых платформах. Наша команда профессионалов тщательно подберёт плейлисты, соответствующие вашему жанру и стилю, и представит ваши треки кураторам, чтобы увеличить их видимость и привлечь новых слушателей.
                </p>
                <p className="text-base md:text-lg text-zinc-300 mb-6 md:mb-8">
                  Благодаря нашему опыту в музыкальной индустрии, вы получаете возможность повысить свою популярность и добиться успеха в музыкальной карьере. Дайте своему творчеству шанс быть услышанным вместе с DIZY MUSIC!
                </p>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                    Запустить питчинг →
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.label}
                    className={`bg-black/50 border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-white/30 hover:bg-white/5 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="text-white mb-3">
                      <Icon name={platform.icon} size={32} />
                    </div>
                    <span className="text-zinc-300 font-medium text-sm md:text-base">{platform.label}</span>
                  </div>
                ))}

                <div
                  className={`col-span-2 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 flex items-center gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <div className="text-white shrink-0">
                    <Icon name="TrendingUp" size={32} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg md:text-xl">Больше слушателей</div>
                    <div className="text-zinc-400 text-sm">Прямой выход на кураторов плейлистов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchingSection;
