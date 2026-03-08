import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "Spotify", logo: "https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg" },
  { name: "Apple Music", logo: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg" },
  { name: "Amazon Music", logo: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg" },
  { name: "YouTube Music", logo: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" },
  { name: "Deezer", logo: "https://www.vectorlogo.zone/logos/deezer/deezer-icon.svg" },
  { name: "Tidal", logo: "https://images.tidal.com/images/tidal_logo_white.svg" },
  { name: "Pandora", logo: "https://www.vectorlogo.zone/logos/pandora/pandora-icon.svg" },
  { name: "iTunes", logo: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg" },
  { name: "SoundCloud", logo: "https://www.vectorlogo.zone/logos/soundcloud/soundcloud-icon.svg" },
  { name: "TikTok", logo: "https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg" },
  { name: "Shazam", logo: "https://www.vectorlogo.zone/logos/shazam/shazam-icon.svg" },
  { name: "VK Music", logo: "https://www.vectorlogo.zone/logos/vk/vk-icon.svg" },
  { name: "Яндекс Музыка", logo: "https://www.vectorlogo.zone/logos/yandex/yandex-icon.svg" },
  { name: "Звук", logo: null },
  { name: "Boom", logo: null },
  { name: "Napster", logo: null },
];

// Дублируем для бесшовной анимации
const doubled = [...platforms, ...platforms];

const DistributionSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="distribution" className="py-14 md:py-20 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-transparent to-zinc-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Дистрибуция музыки
          </h2>
          <p className="text-center text-zinc-400 mb-8 md:mb-14 text-base md:text-lg max-w-2xl mx-auto">
            DIZY MUSIC
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-14 md:mb-20">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                DIZY MUSIC предлагает надёжную и эффективную дистрибуцию треков, позволяя артистам представить свои произведения на крупнейших цифровых платформах, таких как Spotify, Apple Music, Amazon Music и многих других. Наша команда обеспечивает максимально быстрое и беспроблемное размещение музыки, чтобы вы могли сосредоточиться на своём творчестве.
              </p>
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                Одним из главных преимуществ сотрудничества с DIZY MUSIC является прозрачная схема выплат роялти: мы гарантируем <span className="text-white font-semibold">100% выплату всех доходов</span> от вашей музыки. Это значит, что вы получите именно то, что заслуживаете за свой труд и талант, без скрытых комиссий и дополнительных сборов.
              </p>
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                Присоединяйтесь к DIZY MUSIC, и дайте своей музыке шанс завоевать мир! Мы поддержим вас на каждом этапе пути, обеспечивая минимальные заботы и максимальные результаты.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} />
                  <span className="ml-2">Подключить дистрибуцию</span>
                </a>
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <div className="text-white shrink-0">
                  <Icon name="BadgeCheck" size={36} />
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">100% роялти</div>
                  <div className="text-zinc-400">Без скрытых комиссий и сборов</div>
                </div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <div className="text-white shrink-0">
                  <Icon name="Globe" size={36} />
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">50+ платформ</div>
                  <div className="text-zinc-400">Максимальный охват аудитории</div>
                </div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <div className="text-white shrink-0">
                  <Icon name="Zap" size={36} />
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">Быстрое размещение</div>
                  <div className="text-zinc-400">Минимальные сроки выхода треков</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Бегущая строка платформ */}
      <div
        className={`relative transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />
        <p className="text-center text-zinc-500 text-sm uppercase tracking-widest mb-6 px-4">
          Мы работаем с ведущими платформами
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee w-max">
            {doubled.map((platform, index) => (
              <div
                key={`${platform.name}-${index}`}
                className="flex flex-col items-center justify-center gap-2 bg-black/40 border border-white/8 rounded-2xl px-6 py-4 min-w-[120px] hover:border-white/20 hover:bg-white/5 transition-all duration-300 shrink-0"
              >
                {platform.logo ? (
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                ) : null}
                <Icon
                  name="Music"
                  size={32}
                  className={`text-white/60 ${platform.logo ? "hidden" : ""}`}
                />
                <span className="text-zinc-400 text-xs font-medium text-center whitespace-nowrap">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default DistributionSection;