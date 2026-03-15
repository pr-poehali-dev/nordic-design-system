import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Header, Footer, InteractiveBackground } from "@/components/landing";

const GENRES = ["Все", "Trap", "Hip-Hop", "R&B", "Drill", "Phonk", "Pop", "Afrobeat", "Lo-Fi", "Dark Trap", "Cloud Rap"];

const MOODS = ["Все настроения", "Агрессивный", "Меланхоличный", "Энергичный", "Романтичный", "Мрачный", "Атмосферный"];

const beats = [
  { id: 1, title: "Midnight Haze", bpm: 140, key: "Am", genre: "Trap", mood: "Мрачный", price: 2990, exclusive: 14900, duration: "2:34", tags: ["808", "dark", "heavy"], plays: 1240, new: true },
  { id: 2, title: "Gold Rush", bpm: 92, key: "Dm", genre: "Hip-Hop", mood: "Энергичный", price: 1990, exclusive: 9900, duration: "3:12", tags: ["boom-bap", "classic", "live"], plays: 870, new: false },
  { id: 3, title: "Cherry Blossom", bpm: 78, key: "C", genre: "R&B", mood: "Романтичный", price: 2490, exclusive: 12900, duration: "2:58", tags: ["smooth", "vocal", "vibe"], plays: 2100, new: true },
  { id: 4, title: "Street Code", bpm: 148, key: "Fm", genre: "Drill", mood: "Агрессивный", price: 3490, exclusive: 17900, duration: "2:45", tags: ["uk", "heavy", "808"], plays: 650, new: false },
  { id: 5, title: "Phantom Drive", bpm: 130, key: "Bm", genre: "Phonk", mood: "Агрессивный", price: 1990, exclusive: 9900, duration: "3:05", tags: ["drift", "viral", "dark"], plays: 4300, new: false },
  { id: 6, title: "Neon Rain", bpm: 85, key: "Em", genre: "Lo-Fi", mood: "Меланхоличный", price: 1490, exclusive: 7900, duration: "2:28", tags: ["chill", "study", "rain"], plays: 3200, new: true },
  { id: 7, title: "Arctic Flex", bpm: 145, key: "Gm", genre: "Dark Trap", mood: "Мрачный", price: 3990, exclusive: 19900, duration: "2:52", tags: ["cold", "epic", "hard"], plays: 980, new: true },
  { id: 8, title: "Ocean Drift", bpm: 105, key: "F", genre: "Afrobeat", mood: "Атмосферный", price: 2990, exclusive: 14900, duration: "3:18", tags: ["dance", "summer", "groove"], plays: 1750, new: false },
  { id: 9, title: "Cloud Nine", bpm: 72, key: "Ab", genre: "Cloud Rap", mood: "Меланхоличный", price: 2490, exclusive: 12900, duration: "2:42", tags: ["dreamy", "soft", "floating"], plays: 2890, new: false },
  { id: 10, title: "Saturn Ring", bpm: 118, key: "C#m", genre: "Pop", mood: "Энергичный", price: 3490, exclusive: 17900, duration: "2:55", tags: ["radio", "hook", "bright"], plays: 1430, new: true },
  { id: 11, title: "Hollow Blade", bpm: 152, key: "Dm", genre: "Drill", mood: "Агрессивный", price: 2990, exclusive: 14900, duration: "2:37", tags: ["uk", "dark", "808"], plays: 760, new: false },
  { id: 12, title: "Velvet Hours", bpm: 88, key: "Bb", genre: "R&B", mood: "Романтичный", price: 1990, exclusive: 9900, duration: "3:22", tags: ["smooth", "late-night", "soulful"], plays: 1920, new: true },
];

const licenses = [
  {
    name: "Базовая",
    price: "от 1 490 ₽",
    color: "border-zinc-700",
    accent: "text-zinc-300",
    badge: null,
    features: [
      "MP3 + WAV файлы",
      "До 100 000 стримов",
      "Некоммерческое использование",
      "Кредит продюсера обязателен",
      "1 музыкальное видео",
    ],
    cta: "Купить базовую",
    variant: "outline" as const,
  },
  {
    name: "Премиум",
    price: "от 2 990 ₽",
    color: "border-purple-500",
    accent: "text-purple-400",
    badge: "Популярно",
    features: [
      "MP3 + WAV + Стемы",
      "До 500 000 стримов",
      "Коммерческое использование",
      "Кредит продюсера обязателен",
      "Неограниченно видео",
    ],
    cta: "Купить премиум",
    variant: "default" as const,
  },
  {
    name: "Эксклюзив",
    price: "от 7 900 ₽",
    color: "border-yellow-500",
    accent: "text-yellow-400",
    badge: "Только у тебя",
    features: [
      "Все форматы + стемы",
      "Неограниченные стримы",
      "Полные права на бит",
      "Без кредита продюсера",
      "Передача авторских прав",
    ],
    cta: "Купить эксклюзив",
    variant: "outline" as const,
  },
];

const stats = [
  { value: "200+", label: "битов в каталоге" },
  { value: "50+", label: "жанров и стилей" },
  { value: "1 000+", label: "довольных артистов" },
  { value: "24 ч", label: "доставка файлов" },
];

export default function BeatMarket() {
  const [activeGenre, setActiveGenre] = useState("Все");
  const [activeMood, setActiveMood] = useState("Все настроения");
  const [search, setSearch] = useState("");
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [sort, setSort] = useState<"popular" | "new" | "price_asc" | "price_desc">("popular");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filtered = beats
    .filter((b) => {
      const matchGenre = activeGenre === "Все" || b.genre === activeGenre;
      const matchMood = activeMood === "Все настроения" || b.mood === activeMood;
      const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.tags.some((t) => t.includes(search.toLowerCase()));
      return matchGenre && matchMood && matchSearch;
    })
    .sort((a, b) => {
      if (sort === "popular") return b.plays - a.plays;
      if (sort === "new") return (b.new ? 1 : 0) - (a.new ? 1 : 0);
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      return 0;
    });

  const togglePlay = (id: number) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {}, []);

  return (
    <>
      <Helmet>
        <title>Маркет битов — купить бит онлайн | DIZY MUSIC</title>
        <meta name="description" content="Маркет битов DIZY MUSIC — купить бит онлайн. Trap, Hip-Hop, R&B, Drill, Phonk и 50+ жанров. Базовые, премиум и эксклюзивные лицензии. Мгновенная доставка файлов." />
        <meta name="keywords" content="купить бит, маркет битов, биты для рэпа, trap beat, drill beat, rnb beat, phonk beat, эксклюзивный бит, WAV бит, лицензия на бит" />
        <link rel="canonical" href="https://dizymusic.ru/beat-market" />
        <meta property="og:title" content="Маркет битов — DIZY MUSIC" />
        <meta property="og:description" content="200+ лицензионных битов от продюсеров DIZY MUSIC. Слушай, выбирай, покупай онлайн." />
        <meta property="og:url" content="https://dizymusic.ru/beat-market" />
        <meta property="og:type" content="website" />
      </Helmet>
    <div className="min-h-screen bg-black text-white">
      <InteractiveBackground />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute top-32 right-1/4 w-80 h-80 bg-pink-600/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <Icon name="ShoppingBag" size={14} />
            Маркет битов
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            КУПИ БИТ<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              ДЛЯ СВОЕГО ТРЕКА
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Профессиональные биты от продюсеров DIZY MUSIC. Trap, Drill, R&B, Phonk и ещё 50+ жанров. Мгновенная доставка файлов.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Каталог */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Фильтры */}
          <div className="bg-zinc-900/60 border border-white/8 rounded-2xl p-5 mb-6 backdrop-blur-sm space-y-4">
            {/* Поиск и сортировка */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Поиск по названию или тегам..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-purple-500/50 cursor-pointer"
              >
                <option value="popular">По популярности</option>
                <option value="new">Сначала новые</option>
                <option value="price_asc">Цена: по возрастанию</option>
                <option value="price_desc">Цена: по убыванию</option>
              </select>
            </div>

            {/* Жанры */}
            <div className="flex flex-wrap gap-2">
              {GENRES.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGenre(g)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeGenre === g
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* Настроения */}
            <div className="flex flex-wrap gap-2">
              {MOODS.map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMood(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    activeMood === m
                      ? "bg-pink-600/80 text-white"
                      : "bg-white/5 text-zinc-500 hover:bg-white/8 hover:text-zinc-300"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Результат */}
          <div className="text-xs text-zinc-600 mb-4">Найдено {filtered.length} {filtered.length === 1 ? "бит" : "битов"}</div>

          {/* Список битов */}
          <div className="space-y-2">
            {filtered.map((beat) => (
              <div
                key={beat.id}
                className={`group flex items-center gap-4 bg-zinc-900/40 hover:bg-zinc-800/60 border rounded-xl px-4 py-3 transition-all cursor-default ${
                  playingId === beat.id ? "border-purple-500/40 bg-zinc-800/60" : "border-white/5 hover:border-white/10"
                }`}
              >
                {/* Play */}
                <button
                  onClick={() => togglePlay(beat.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    playingId === beat.id
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-zinc-400 hover:bg-purple-600/80 hover:text-white"
                  }`}
                >
                  <Icon name={playingId === beat.id ? "Pause" : "Play"} size={16} />
                </button>

                {/* Waveform placeholder */}
                <div className="hidden sm:flex items-end gap-0.5 h-8 w-20 shrink-0">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm transition-colors ${
                        playingId === beat.id ? "bg-purple-500/60" : "bg-white/10"
                      }`}
                      style={{ height: `${20 + Math.sin(i * 0.8 + beat.id) * 14 + Math.cos(i * 1.3) * 10}%` }}
                    />
                  ))}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-white text-sm truncate">{beat.title}</span>
                    {beat.new && (
                      <span className="px-1.5 py-0.5 bg-purple-600/30 text-purple-300 text-[10px] rounded font-medium">NEW</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                    <span className="text-xs text-zinc-500">{beat.genre}</span>
                    <span className="text-xs text-zinc-600">{beat.bpm} BPM</span>
                    <span className="text-xs text-zinc-600">{beat.key}</span>
                    <span className="text-xs text-zinc-700">{beat.duration}</span>
                    <div className="hidden md:flex gap-1 flex-wrap">
                      {beat.tags.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 bg-white/5 text-zinc-600 text-[10px] rounded">#{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Plays */}
                <div className="hidden lg:flex items-center gap-1 text-zinc-600 text-xs shrink-0">
                  <Icon name="Headphones" size={12} />
                  {beat.plays.toLocaleString("ru")}
                </div>

                {/* Price + Buy */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="text-right hidden sm:block">
                    <div className="text-sm font-bold text-white">{beat.price.toLocaleString("ru")} ₽</div>
                    <div className="text-[10px] text-zinc-600">Экскл. {beat.exclusive.toLocaleString("ru")} ₽</div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-1.5 h-auto rounded-lg"
                  >
                    <Icon name="ShoppingCart" size={13} className="mr-1" />
                    Купить
                  </Button>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-20 text-zinc-600">
                <Icon name="Music" size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">Биты не найдены</p>
                <p className="text-sm mt-1">Попробуй изменить фильтры</p>
              </div>
            )}
          </div>

          {/* Кнопка загрузить больше */}
          {filtered.length > 0 && (
            <div className="text-center mt-10">
              <Button variant="outline" className="border-white/10 text-zinc-400 hover:text-white hover:border-white/20 px-8">
                <Icon name="Plus" size={16} className="mr-2" />
                Загрузить ещё биты
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Лицензии */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Типы лицензий</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Выбери подходящий формат — от некоммерческого использования до полного выкупа прав</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {licenses.map((lic) => (
              <div
                key={lic.name}
                className={`relative rounded-2xl border-2 ${lic.color} bg-zinc-900/50 p-7 flex flex-col ${
                  lic.name === "Премиум" ? "scale-105 shadow-2xl shadow-purple-900/30" : ""
                }`}
              >
                {lic.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold ${
                    lic.name === "Эксклюзив" ? "bg-yellow-500 text-black" : "bg-purple-600 text-white"
                  }`}>
                    {lic.badge}
                  </div>
                )}
                <div className={`text-2xl font-black mb-1 ${lic.accent}`}>{lic.name}</div>
                <div className="text-3xl font-black text-white mb-6">{lic.price}</div>
                <ul className="space-y-3 flex-1 mb-8">
                  {lic.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <Icon name="Check" size={14} className={`mt-0.5 shrink-0 ${lic.accent}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={lic.variant}
                  className={`w-full ${
                    lic.name === "Премиум"
                      ? "bg-purple-600 hover:bg-purple-500 text-white border-transparent"
                      : lic.name === "Эксклюзив"
                      ? "border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                      : "border-white/15 text-zinc-300 hover:text-white"
                  }`}
                >
                  {lic.cta}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-700 mt-8">
            После оплаты файлы доставляются на email в течение 24 часов. Нужен нестандартный договор? <a href="/#contacts" className="text-purple-400 hover:underline">Напиши нам</a>
          </p>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-center mb-12">Как купить бит</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", icon: "Search", title: "Слушай", desc: "Выбирай бит в каталоге — фильтруй по жанру, BPM и настроению" },
              { num: "02", icon: "ShoppingCart", title: "Выбирай лицензию", desc: "Базовая, премиум или эксклюзив — в зависимости от твоих планов" },
              { num: "03", icon: "CreditCard", title: "Оплачивай", desc: "Безопасная оплата картой или по счёту для юридических лиц" },
              { num: "04", icon: "Download", title: "Скачивай", desc: "Файлы приходят на email: MP3, WAV и стемы (по лицензии)" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size={22} className="text-purple-400" />
                </div>
                <div className="text-xs text-purple-600 font-mono mb-1">{step.num}</div>
                <div className="font-bold text-white mb-2">{step.title}</div>
                <div className="text-xs text-zinc-500 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-zinc-950/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-center mb-10">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: "Могу ли я использовать бит в коммерческих целях?", a: "Да, при покупке Премиум или Эксклюзивной лицензии. Базовая лицензия — только для некоммерческого использования (SoundCloud, YouTube без монетизации)." },
              { q: "Что такое стемы и зачем они нужны?", a: "Стемы — это отдельные дорожки бита: барабаны, бас, мелодия. Они нужны для профессионального сведения и дают больше гибкости на студии." },
              { q: "Могу ли я слушать бит до покупки?", a: "Да! В каталоге ты можешь прослушать превью каждого бита. После покупки получаешь полный файл без водяных знаков." },
              { q: "Что значит «эксклюзивная лицензия»?", a: "После продажи эксклюзива бит убирается из каталога и больше никому не продаётся. Ты получаешь полные права, включая передачу авторства." },
              { q: "Как быстро я получу файлы?", a: "Обычно в течение 24 часов на email, часто быстрее. Если задержка — пишите нам в поддержку." },
            ].map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/20 rounded-3xl p-12">
            <Icon name="Headphones" size={40} className="text-purple-400 mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-black mb-4">Нужен бит под заказ?</h2>
            <p className="text-zinc-400 mb-8">Создадим уникальный бит специально под твой стиль, голос и образ — без шаблонов</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-purple-600 hover:bg-purple-500 text-white px-8">
                <a href="/custom-tracks">Трек на заказ</a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-zinc-300 hover:text-white px-8">
                <a href="/#contacts">Написать продюсеру</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-zinc-200 hover:bg-white/3 transition-colors"
      >
        {q}
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={16} className="text-zinc-500 shrink-0 ml-3" />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-zinc-500 leading-relaxed">{a}</div>
      )}
    </div>
  );
}