import { useState, useRef, useEffect } from "react";
import { Check, Crown, Zap, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceOption {
  name: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
  badge?: string;
}

const serviceOptions: ServiceOption[] = [
  {
    name: "Старт",
    price: "Базовый",
    icon: <Star className="w-6 h-6" />,
    features: [
      "Дистрибуция на 10+ платформах",
      "Регистрация авторских прав",
      "Базовое продвижение в соцсетях",
      "Персональный менеджер",
      "Ежемесячная отчётность",
    ],
    badge: "ИДЕАЛЬНО ДЛЯ НАЧАЛА КАРЬЕРЫ!",
  },
  {
    name: "Развитие",
    price: "Стандарт",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Дистрибуция на 30+ платформах",
      "Регистрация авторских прав",
      "Активное продвижение в соцсетях",
      "Создание ремиксов",
      "PR и медиа-продвижение",
      "Еженедельная отчётность",
    ],
    popular: true,
  },
  {
    name: "Профи",
    price: "Премиум",
    icon: <Crown className="w-6 h-6" />,
    features: [
      "Дистрибуция на 50+ платформах",
      "Полное юридическое сопровождение",
      "Продвижение на радио и в СМИ",
      "Организация живых выступлений",
      "Разработка артист-бренда",
      "Поддержка 24/7",
    ],
  },
  {
    name: "Лейбл",
    price: "Эксклюзив",
    icon: <Globe className="w-6 h-6" />,
    features: [
      "Полное управление карьерой",
      "Международная дистрибуция",
      "Синхронизация (кино, реклама, ТВ)",
      "Персональная PR-команда",
      "Выпуск альбомов и EP",
      "Партнёрства с мировыми лейблами",
    ],
  },
];

const LicenseSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="licenses" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Наши услуги</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Выбери формат сотрудничества с DIZY MUSIC и раскрой свой талант на полную мощность
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceOptions.map((option, index) => (
            <div
              key={option.name}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`relative h-full bg-black border-white/10 ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                } transition-all duration-300`}
              >
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-white/20 to-white/0">
                  <div className="absolute inset-0 rounded-lg bg-black"></div>
                </div>

                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Популярный
                    </span>
                  </div>
                )}

                <CardContent className="relative p-6 rounded-lg h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 rounded-full bg-zinc-900 border border-white/10 mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{option.name}</h3>
                    <div className="text-xl font-semibold text-zinc-300">{option.price}</div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-white mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {option.badge && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-white bg-white/5 py-2 px-3 rounded-lg border border-white/10 animate-pulse text-center">
                        {option.badge}
                      </p>
                    </div>
                  )}

                  <Button
                    className="w-full bg-white text-black hover:bg-zinc-200 transition-colors"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Обсудить условия
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;
