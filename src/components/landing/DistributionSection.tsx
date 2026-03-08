import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const platforms = [
  { icon: "Music", label: "Spotify" },
  { icon: "Music2", label: "Apple Music" },
  { icon: "Radio", label: "Amazon Music" },
  { icon: "Headphones", label: "И многих других" },
];

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
    <section ref={ref} id="distribution" className="py-20 bg-zinc-900 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-transparent to-zinc-900" />
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Дистрибуция музыки
          </h2>
          <p className="text-center text-zinc-400 mb-14 text-lg max-w-2xl mx-auto">
            DIZY MUSIC
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                DIZY MUSIC предлагает надёжную и эффективную дистрибуцию треков, позволяя артистам представить свои произведения на крупнейших цифровых платформах, таких как Spotify, Apple Music, Amazon Music и многих других. Наша команда обеспечивает максимально быстрое и беспроблемное размещение музыки, чтобы вы могли сосредоточиться на своём творчестве.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Одним из главных преимуществ сотрудничества с DIZY MUSIC является прозрачная схема выплат роялти: мы гарантируем <span className="text-white font-semibold">100% выплату всех доходов</span> от вашей музыки. Это значит, что вы получите именно то, что заслуживаете за свой труд и талант, без скрытых комиссий и дополнительных сборов.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Присоединяйтесь к DIZY MUSIC, и дайте своей музыке шанс завоевать мир! Мы поддержим вас на каждом этапе пути, обеспечивая минимальные заботы и максимальные результаты.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} />
                  <span className="ml-2">Подключить дистрибуцию</span>
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={platform.label}
                  className={`bg-black/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-white/30 hover:bg-white/5 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="text-white mb-3">
                    <Icon name={platform.icon} size={32} />
                  </div>
                  <span className="text-zinc-300 font-medium">{platform.label}</span>
                </div>
              ))}

              <div
                className={`col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="text-white shrink-0">
                  <Icon name="BadgeCheck" size={32} />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">100% роялти</div>
                  <div className="text-zinc-400 text-sm">Без скрытых комиссий и сборов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;