import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "Spotify", logo: "https://cdn.simpleicons.org/spotify/1DB954" },
  { name: "Apple Music", logo: "https://cdn.simpleicons.org/applemusic/FA243C" },
  { name: "Amazon Music", logo: "https://cdn.simpleicons.org/amazonmusic/00A8E0" },
  { name: "YouTube Music", logo: "https://cdn.simpleicons.org/youtubemusic/FF0000" },
  { name: "Deezer", logo: "https://cdn.simpleicons.org/deezer/FF0092" },
  { name: "Tidal", logo: "https://cdn.simpleicons.org/tidal/ffffff" },
  { name: "Pandora", logo: "https://cdn.simpleicons.org/pandora/3668FF" },
  { name: "iTunes", logo: "https://cdn.simpleicons.org/itunes/FB5BC5" },
  { name: "SoundCloud", logo: "https://cdn.simpleicons.org/soundcloud/FF5500" },
  { name: "TikTok", logo: "https://cdn.simpleicons.org/tiktok/ffffff" },
  { name: "Shazam", logo: "https://cdn.simpleicons.org/shazam/0088FF" },
  { name: "VK Music", logo: "https://cdn.simpleicons.org/vk/4680C2" },
  { name: "Яндекс Музыка", logo: "https://cdn.simpleicons.org/yandex/FF0000" },
  { name: "Звук", logo: null },
  { name: "Boom", logo: null },
  { name: "Napster", logo: "https://cdn.simpleicons.org/napster/ffffff" },
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
                  />
                ) : (
                  <Icon name="Music" size={32} className="text-white/60" />
                )}
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