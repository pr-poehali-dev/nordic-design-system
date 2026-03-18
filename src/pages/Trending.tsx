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

// v2
export default function Trending() {
  const hero = useVisible(0.1);
  const benefitsSection = useVisible(0.1);
  const faqSection = useVisible(0.1);
  const ctaSection = useVisible(0.1);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePlayer, setActivePlayer] = useState<number | null>(null);

  const players = [
    { id: 1, src: "https://mixupload.com/track/regina-peppy-gansta-rave-radio-edit-8939595/embed", title: "Gansta Rave", artist: "Regina Peppy", label: "ТОП 1", cover: "https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/a91de633-d14a-4051-90f4-585aee7a187d.jpg" },
    { id: 2, src: "https://mixupload.com/track/ksenia-ray-i-want-you-radio-edit-8939599/embed", title: "I Want You", artist: "Ksenia Ray", label: "ТОП 2", cover: "https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/6715b747-30aa-453d-8a92-5f7c5a8a096e.jpg" },
    { id: 3, src: "https://mixupload.com/track/dron-get-down-original-mix-8939597/embed", title: "Get Down", artist: "Dron", label: "ТОП 3", cover: "https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/a91de633-d14a-4051-90f4-585aee7a187d.jpg" },
    { id: 4, src: "https://mixupload.com/track/regina-peppy-gansta-mashine-radio-edit-8939594/embed", title: "Gansta Mashine", artist: "Regina Peppy", label: "ТОП 4", cover: "https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/a91de633-d14a-4051-90f4-585aee7a187d.jpg" },
  ];

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
                      { label: "Треков в топе", value: "4" },
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

          {/* ПЛЕЕРЫ */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {players.map((p, idx) => {
                  const isActive = activePlayer === p.id;
                  const medals = ["🏆", "🥈", "🥉", "4️⃣"];
                  return (
                    <div key={p.id} className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border transition-all duration-300 ${isActive ? "border-white/30 shadow-2xl shadow-white/10 scale-[1.02]" : "border-white/8 hover:border-white/20 hover:scale-[1.01]"}`}>

                      {/* Обложка */}
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={p.cover}
                          alt={p.title}
                          className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
                        />
                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isActive ? "opacity-60" : "opacity-0 group-hover:opacity-40"}`} />

                        {/* Rank badge */}
                        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                          <span className="text-xs">{medals[idx]}</span>
                          <span className="text-white text-xs font-bold">{p.label}</span>
                        </div>

                        {/* Equalizer when active */}
                        {isActive && (
                          <div className="absolute bottom-3 right-3 flex gap-0.5 items-end h-5">
                            {[10, 16, 8, 14, 6].map((h, i) => (
                              <span key={i} className="w-1 bg-white rounded-sm animate-bounce"
                                style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }} />
                            ))}
                          </div>
                        )}

                        {/* Play button overlay */}
                        {!isActive && (
                          <button
                            onClick={() => setActivePlayer(p.id)}
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
                              <Icon name="Play" size={22} className="text-white ml-1" />
                            </div>
                          </button>
                        )}
                      </div>

                      {/* Info + iframe */}
                      <div className="p-3">
                        <p className="text-white font-semibold text-sm truncate leading-tight">{p.title}</p>
                        <p className="text-zinc-400 text-xs truncate mt-0.5">{p.artist}</p>

                        {!isActive && (
                          <button
                            onClick={() => setActivePlayer(p.id)}
                            className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 transition-colors text-xs text-zinc-300"
                          >
                            <Icon name="Play" size={12} className="text-white" />
                            Слушать
                          </button>
                        )}

                        {isActive && (
                          <div className="mt-2 -mx-3 -mb-3">
                            <iframe key={`active-${p.id}`} width="100%" height="120" scrolling="no" frameBorder="0"
                              src={p.src} className="block rounded-b-2xl" allow="autoplay" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
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
                      <Icon name={openFaq === idx ? "ChevronUp" : "ChevronDown"} size={16} className="text-zinc-400 flex-shrink-0" />
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