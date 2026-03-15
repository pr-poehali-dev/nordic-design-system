import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

function useVisible(threshold = 0.1) {
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

const trending = [
  {
    rank: 1,
    title: "Midnight Dreams",
    artist: "DIZY feat. Alina",
    genre: "Future Bass",
    plays: "142K",
    duration: "3:24",
    isNew: true,
    isHot: true,
    coverColor: "from-purple-600 to-pink-600",
  },
  {
    rank: 2,
    title: "Neon City",
    artist: "DIZY Remix",
    genre: "Synthwave",
    plays: "98K",
    duration: "3:57",
    isNew: false,
    isHot: true,
    coverColor: "from-sky-500 to-blue-700",
  },
  {
    rank: 3,
    title: "Dark Matter",
    artist: "DIZY feat. Max V.",
    genre: "Trap",
    plays: "87K",
    duration: "2:48",
    isNew: false,
    isHot: false,
    coverColor: "from-zinc-700 to-zinc-900",
  },
  {
    rank: 4,
    title: "Summer Haze",
    artist: "DIZY Remix",
    genre: "Afrobeat",
    plays: "73K",
    duration: "3:12",
    isNew: true,
    isHot: false,
    coverColor: "from-orange-500 to-yellow-400",
  },
  {
    rank: 5,
    title: "Ghost Signal",
    artist: "DIZY x Kira",
    genre: "Lo-Fi",
    plays: "61K",
    duration: "4:05",
    isNew: false,
    isHot: false,
    coverColor: "from-emerald-600 to-teal-800",
  },
  {
    rank: 6,
    title: "Red Lights",
    artist: "DIZY Remix",
    genre: "House",
    plays: "54K",
    duration: "3:38",
    isNew: false,
    isHot: false,
    coverColor: "from-red-600 to-rose-800",
  },
  {
    rank: 7,
    title: "Ice Cold",
    artist: "DIZY feat. Den",
    genre: "Drill",
    plays: "49K",
    duration: "2:55",
    isNew: true,
    isHot: false,
    coverColor: "from-slate-500 to-blue-900",
  },
  {
    rank: 8,
    title: "Frequency",
    artist: "DIZY Remix",
    genre: "Techno",
    plays: "41K",
    duration: "5:10",
    isNew: false,
    isHot: false,
    coverColor: "from-violet-700 to-purple-900",
  },
];

const benefits = [
  {
    icon: "Flame",
    title: "Только горящие треки",
    desc: "Каждую неделю — свежая подборка самых популярных ремиксов DIZY MUSIC.",
  },
  {
    icon: "Download",
    title: "Скачивание без ограничений",
    desc: "Скачивай все треки в максимальном качестве WAV и MP3 без лимитов.",
  },
  {
    icon: "Headphones",
    title: "Слушай первым",
    desc: "Доступ к эксклюзивным дропам за 7 дней до официального релиза.",
  },
  {
    icon: "RefreshCw",
    title: "Обновление каждую неделю",
    desc: "Список трендов обновляется каждые 7 дней — всегда актуальная музыка.",
  },
];

const faqs = [
  {
    q: "Что входит в подписку?",
    a: "Полный доступ ко всем трендовым ремиксам: прослушивание онлайн, скачивание в WAV и MP3, ранний доступ к новинкам за неделю до выхода.",
  },
  {
    q: "Могу ли я использовать треки в своих соцсетях?",
    a: "Да — подписка включает некоммерческую лицензию для использования треков в Reels, Shorts, TikTok и стримах.",
  },
  {
    q: "Как оформить подписку?",
    a: "Нажми «Оформить подписку» и напиши нам в Telegram. Мы пришлём ссылку на оплату и сразу откроем доступ.",
  },
  {
    q: "Есть ли пробный период?",
    a: "Да — первые 3 трека можно скачать бесплатно. Для полного доступа оформи подписку.",
  },
];

export default function Trending() {
  const hero = useVisible(0.1);
  const tracksSection = useVisible(0.1);
  const benefitsSection = useVisible(0.1);
  const faqSection = useVisible(0.1);
  const ctaSection = useVisible(0.1);

  const [playing, setPlaying] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Сейчас в тренде — DIZY MUSIC | Топ ремиксов недели";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };

    setMeta("description", "Топ ремиксов и треков DIZY MUSIC прямо сейчас. Слушай и скачивай самую горячую музыку за 500 ₽/мес. Обновление каждую неделю.");
    setMeta("keywords", "тренды музыки, топ ремиксы, скачать ремикс, DIZY MUSIC, горящие треки, подписка на музыку");
    setOg("og:title", "Сейчас в тренде — DIZY MUSIC");
    setOg("og:description", "Топ ремиксов и треков DIZY MUSIC. Подписка 500 ₽/мес — слушай и скачивай без ограничений.");
    setOg("og:type", "website");
    setLink("canonical", "https://dizymusic.ru/trending");
  }, []);

  return (
    <div className="min-h-screen text-white relative bg-black">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main>

          {/* HERO */}
          <section
            ref={hero.ref as React.RefObject<HTMLElement>}
            className={`pt-32 pb-16 md:pt-40 md:pb-24 transition-all duration-700 ${hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="container mx-auto px-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md p-6 md:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-transparent to-pink-950/20 pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 text-sm font-medium">Обновлено сегодня</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                        Сейчас{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                          в тренде
                        </span>
                      </h1>
                      <p className="text-zinc-400 text-lg max-w-xl">
                        Самые горящие ремиксы и треки DIZY MUSIC прямо сейчас. Подпишись — слушай и скачивай всё без ограничений.
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center min-w-[200px]">
                        <p className="text-zinc-400 text-sm mb-1">Подписка</p>
                        <p className="text-4xl font-bold text-white mb-1">500 ₽</p>
                        <p className="text-zinc-500 text-xs mb-4">в месяц</p>
                        <Button
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold"
                          asChild
                        >
                          <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                            Оформить подписку
                          </a>
                        </Button>
                        <p className="text-zinc-600 text-xs mt-2">3 трека бесплатно</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10">
                    {[
                      { label: "Треков в топе", value: "8" },
                      { label: "Слушателей в месяц", value: "18K+" },
                      { label: "Обновление", value: "Еженедельно" },
                      { label: "Качество", value: "WAV + MP3" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-zinc-500 text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ТРЕКИ */}
          <section
            ref={tracksSection.ref as React.RefObject<HTMLElement>}
            className={`py-12 md:py-16 transition-all duration-700 delay-100 ${tracksSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Топ недели</h2>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <Icon name="RefreshCw" size={13} />
                  <span>обновлено сегодня</span>
                </div>
              </div>

              <div className="space-y-2">
                {trending.map((track, idx) => (
                  <div
                    key={track.rank}
                    className={`group flex items-center gap-4 p-3 md:p-4 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-200 ${tracksSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    {/* Rank */}
                    <span className="text-zinc-600 font-bold text-sm w-6 text-center flex-shrink-0">{track.rank}</span>

                    {/* Cover */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${track.coverColor} flex-shrink-0 flex items-center justify-center relative overflow-hidden`}>
                      {playing === track.rank ? (
                        <div className="flex gap-0.5 items-end h-5">
                          {[1,2,3,4].map((b) => (
                            <span key={b} className="w-1 bg-white rounded-sm animate-bounce" style={{ height: `${[14,10,18,8][b-1]}px`, animationDelay: `${b*0.1}s` }} />
                          ))}
                        </div>
                      ) : (
                        <Icon name="Music2" size={18} className="text-white/70" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-white truncate">{track.title}</span>
                        {track.isNew && (
                          <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">NEW</span>
                        )}
                        {track.isHot && (
                          <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                            <Icon name="Flame" size={10} />HOT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-zinc-400 text-sm truncate">{track.artist}</span>
                        <span className="text-zinc-600 text-xs">{track.genre}</span>
                      </div>
                    </div>

                    {/* Plays */}
                    <div className="hidden sm:flex items-center gap-1 text-zinc-500 text-sm">
                      <Icon name="Play" size={12} />
                      <span>{track.plays}</span>
                    </div>

                    {/* Duration */}
                    <span className="text-zinc-500 text-sm hidden md:block w-10 text-right">{track.duration}</span>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => setPlaying(playing === track.rank ? null : track.rank)}
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors"
                      >
                        <Icon name={playing === track.rank ? "Pause" : "Play"} size={15} className="text-white" />
                      </button>
                      <a
                        href="https://t.me/dizymusic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                        title="Скачать (нужна подписка)"
                      >
                        <Icon name="Download" size={15} className="text-zinc-400 group-hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-zinc-500 text-sm">Для скачивания треков нужна подписка</p>
                <Button
                  className="mt-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl px-8"
                  asChild
                >
                  <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                    Оформить подписку — 500 ₽/мес
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* ПРЕИМУЩЕСТВА */}
          <section
            ref={benefitsSection.ref as React.RefObject<HTMLElement>}
            className={`py-16 md:py-24 transition-all duration-700 ${benefitsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Что входит в{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    подписку
                  </span>
                </h2>
                <p className="text-zinc-400 max-w-xl mx-auto">За 500 ₽ в месяц — полный доступ ко всем трендам DIZY MUSIC</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((b, idx) => (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur-md"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4">
                      <Icon name={b.icon} size={18} className="text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            ref={faqSection.ref as React.RefObject<HTMLElement>}
            className={`py-16 md:py-20 transition-all duration-700 ${faqSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-3xl font-bold text-center mb-10">Частые вопросы</h2>
              <div className="space-y-3">
                {faqs.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-zinc-900/60 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-white pr-4">{item.q}</span>
                      <Icon
                        name={openFaq === idx ? "ChevronUp" : "ChevronDown"}
                        size={16}
                        className="text-zinc-400 flex-shrink-0"
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            ref={ctaSection.ref as React.RefObject<HTMLElement>}
            className={`py-16 md:py-24 transition-all duration-700 ${ctaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="container mx-auto px-4">
              <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-pink-950/30 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                    <Icon name="Flame" size={14} className="text-orange-400" />
                    <span className="text-sm text-white/80">Подписка открыта</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Всё в тренде —{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      в одной подписке
                    </span>
                  </h2>
                  <p className="text-zinc-400 max-w-lg mx-auto mb-8">
                    500 ₽ в месяц — и ты всегда в курсе самой горячей музыки DIZY MUSIC. Слушай, скачивай, используй в своих проектах.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl px-8 py-5 text-base font-semibold"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Оформить за 500 ₽/мес →
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-xl px-8 py-5 text-base"
                      asChild
                    >
                      <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                        Задать вопрос
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}
