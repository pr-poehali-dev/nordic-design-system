import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  const isHome = window.location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLink = (id: string) => isHome ? undefined : `/#${id}`;

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    if (isHome) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const NavItem = ({ id, label }: { id: string; label: string }) => (
    <li>
      {isHome ? (
        <button
          onClick={() => handleNavClick(id)}
          className="text-white hover:text-purple-400 transition-colors text-base md:text-sm"
        >
          {label}
        </button>
      ) : (
        <a
          href={`/#${id}`}
          className="text-white hover:text-purple-400 transition-colors text-base md:text-sm"
        >
          {label}
        </a>
      )}
    </li>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/">
          <img
            src="https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/a75184fa-712c-4d0a-886c-474ee0ee4f7c.png"
            alt="DIZY MUSIC"
            className="h-10 md:h-36 w-auto"
          />
        </a>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-black/95 md:bg-transparent flex-col md:flex-row`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
            <NavItem id="ghost" label="Ghost Production" />
            <NavItem id="about" label="О лейбле" />
            <NavItem id="distribution" label="Дистрибуция" />

            {/* Услуги dropdown — desktop мегаменю */}
            <li ref={servicesRef} className="hidden md:block relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-white hover:text-purple-400 transition-colors text-sm"
              >
                Услуги
                <Icon name={isServicesOpen ? "ChevronUp" : "ChevronDown"} size={14} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-black/97 border border-white/10 rounded-2xl shadow-2xl p-5 backdrop-blur-md">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-1">

                    {/* Колонка 1 — Производство */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                        <Icon name="Mic2" size={13} className="text-purple-400" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">Производство</span>
                      </div>
                      <ul className="space-y-0.5">
                        {[
                          { href: "/beat-market", icon: "ShoppingBag", label: "Маркет битов" },
                          { href: "/album-ep", icon: "Album", label: "Выпуск альбома и EP" },
                          { href: "/mix-mastering", icon: "Sliders", label: "Сведение и мастеринг" },
                          { href: "/remixes", icon: "Shuffle", label: "Ремиксы на заказ" },
                          { href: "/custom-tracks", icon: "Music", label: "Треки на заказ" },
                          { href: "/covers", icon: "Image", label: "Обложки" },
                        ].map((item) => (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/8 transition-colors group"
                            >
                              <Icon name={item.icon} size={14} className="text-zinc-500 group-hover:text-purple-400 transition-colors shrink-0" />
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Колонка 2 — Продвижение */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                        <Icon name="TrendingUp" size={13} className="text-sky-400" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">Продвижение</span>
                      </div>
                      <ul className="space-y-0.5">
                        {[
                          { href: "/distribution", icon: "Globe", label: "Международная дистрибуция" },
                          { action: "pitching", icon: "Send", label: "Питчинг в плейлисты" },
                          { href: "/promotion", icon: "BarChart2", label: "Продвижение музыки" },
                          { href: "/radio-media", icon: "Radio", label: "Радио и СМИ" },
                          { href: "/artist-brand", icon: "Sparkles", label: "Артист-бренд" },
                        ].map((item) => (
                          <li key={item.href ?? item.action}>
                            {"href" in item ? (
                              <a
                                href={item.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/8 transition-colors group"
                              >
                                <Icon name={item.icon} size={14} className="text-zinc-500 group-hover:text-sky-400 transition-colors shrink-0" />
                                {item.label}
                              </a>
                            ) : (
                              <button
                                onClick={() => handleNavClick(item.action!)}
                                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/8 transition-colors group w-full text-left"
                              >
                                <Icon name={item.icon} size={14} className="text-zinc-500 group-hover:text-sky-400 transition-colors shrink-0" />
                                {item.label}
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Колонка 3 — Права и сделки */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                        <Icon name="Shield" size={13} className="text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Права и сделки</span>
                      </div>
                      <ul className="space-y-0.5">
                        {[
                          { href: "/career-management", icon: "Crown", label: "Управление карьерой" },
                          { action: "licenses", icon: "FileText", label: "Лицензии" },
                          { href: "/copyright", icon: "ShieldCheck", label: "Авторские права" },
                          { href: "/partnerships", icon: "Handshake", label: "Партнёрства с лейблами" },
                          { href: "/sync", icon: "Film", label: "Синхронизация (кино, ТВ)" },
                        ].map((item) => (
                          <li key={item.href ?? item.action}>
                            {"href" in item ? (
                              <a
                                href={item.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/8 transition-colors group"
                              >
                                <Icon name={item.icon} size={14} className="text-zinc-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                                {item.label}
                              </a>
                            ) : (
                              <button
                                onClick={() => handleNavClick(item.action!)}
                                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/8 transition-colors group w-full text-left"
                              >
                                <Icon name={item.icon} size={14} className="text-zinc-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                                {item.label}
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              )}
            </li>

            {/* Услуги — mobile */}
            <li className="md:hidden">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">Услуги</span>
              <div className="mt-3 space-y-4">

                {/* Производство */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Icon name="Mic2" size={12} className="text-purple-400" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">Производство</span>
                  </div>
                  <ul className="space-y-1 pl-3 border-l border-purple-400/30">
                    <li><a href="/beat-market" className="text-zinc-300 hover:text-white transition-colors text-sm">Маркет битов</a></li>
                    <li><a href="/album-ep" className="text-zinc-300 hover:text-white transition-colors text-sm">Выпуск альбома и EP</a></li>
                    <li><a href="/mix-mastering" className="text-zinc-300 hover:text-white transition-colors text-sm">Сведение и мастеринг</a></li>
                    <li><a href="/remixes" className="text-zinc-300 hover:text-white transition-colors text-sm">Ремиксы на заказ</a></li>
                    <li><a href="/custom-tracks" className="text-zinc-300 hover:text-white transition-colors text-sm">Треки на заказ</a></li>
                    <li><a href="/covers" className="text-zinc-300 hover:text-white transition-colors text-sm">Обложки</a></li>
                  </ul>
                </div>

                {/* Продвижение */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Icon name="TrendingUp" size={12} className="text-sky-400" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">Продвижение</span>
                  </div>
                  <ul className="space-y-1 pl-3 border-l border-sky-400/30">
                    <li><a href="/distribution" className="text-zinc-300 hover:text-white transition-colors text-sm">Международная дистрибуция</a></li>
                    <li>
                      <button onClick={() => handleNavClick("pitching")} className="text-zinc-300 hover:text-white transition-colors text-sm text-left">
                        Питчинг в плейлисты
                      </button>
                    </li>
                    <li><a href="/promotion" className="text-zinc-300 hover:text-white transition-colors text-sm">Продвижение музыки</a></li>
                    <li><a href="/radio-media" className="text-zinc-300 hover:text-white transition-colors text-sm">Радио и СМИ</a></li>
                    <li><a href="/artist-brand" className="text-zinc-300 hover:text-white transition-colors text-sm">Артист-бренд</a></li>
                  </ul>
                </div>

                {/* Права и сделки */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Icon name="Shield" size={12} className="text-emerald-400" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Права и сделки</span>
                  </div>
                  <ul className="space-y-1 pl-3 border-l border-emerald-400/30">
                    <li><a href="/career-management" className="text-zinc-300 hover:text-white transition-colors text-sm">Управление карьерой</a></li>
                    <li>
                      <button onClick={() => handleNavClick("licenses")} className="text-zinc-300 hover:text-white transition-colors text-sm text-left">
                        Лицензии
                      </button>
                    </li>
                    <li><a href="/copyright" className="text-zinc-300 hover:text-white transition-colors text-sm">Авторские права</a></li>
                    <li><a href="/partnerships" className="text-zinc-300 hover:text-white transition-colors text-sm">Партнёрства с лейблами</a></li>
                    <li><a href="/sync" className="text-zinc-300 hover:text-white transition-colors text-sm">Синхронизация (кино, ТВ)</a></li>
                  </ul>
                </div>

              </div>
            </li>

            <li className="md:hidden pt-2 border-t border-white/10 flex items-center gap-4">
              <a
                href="https://vk.com/dizymusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={22} />
              </a>
              <a
                href="https://t.me/dizymusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Icon name="Send" size={22} />
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
                  Сотрудничество
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                asChild
              >
                <a href="https://t.me/dizymusicchat" target="_blank" rel="noopener noreferrer">
                  Поддержка
                </a>
              </Button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://vk.com/dizymusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Icon name="MessageCircle" size={22} />
          </a>
          <a
            href="https://t.me/dizymusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Icon name="Send" size={22} />
          </a>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <a href="https://t.me/dizymusic" target="_blank" rel="noopener noreferrer">
              Сотрудничество
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white"
            asChild
          >
            <a href="https://t.me/dizymusicchat" target="_blank" rel="noopener noreferrer">
              Поддержка
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;