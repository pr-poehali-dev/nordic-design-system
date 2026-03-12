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
            src="https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/5a627555-b6f6-4f69-81b3-d64887e6ed30.png"
            alt="DIZY MUSIC"
            className="h-12 md:h-20 w-auto"
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

            {/* Услуги dropdown — desktop */}
            <li ref={servicesRef} className="hidden md:block relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-white hover:text-purple-400 transition-colors text-sm"
              >
                Услуги
                <Icon name={isServicesOpen ? "ChevronUp" : "ChevronDown"} size={14} />
              </button>
              {isServicesOpen && (
                <ul className="absolute top-full left-0 mt-2 w-52 bg-black/95 border border-white/10 rounded-lg overflow-hidden shadow-xl">
                  <li>
                    <button
                      onClick={() => handleNavClick("pitching")}
                      className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-purple-400 transition-colors"
                    >
                      Питчинг
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("licenses")}
                      className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-purple-400 transition-colors"
                    >
                      Лицензии
                    </button>
                  </li>
                  <li>
                    <a
                      href="/mix-mastering"
                      className="block px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-purple-400 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Сведение и мастеринг
                    </a>
                  </li>
                  <li>
                    <a
                      href="/remixes"
                      className="block px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-purple-400 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Ремиксы на заказ
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Услуги — mobile */}
            <li className="md:hidden">
              <span className="text-white/50 text-sm uppercase tracking-wider">Услуги</span>
              <ul className="mt-2 space-y-2 pl-3 border-l border-white/10">
                <li>
                  <button
                    onClick={() => handleNavClick("pitching")}
                    className="text-white hover:text-purple-400 transition-colors text-base"
                  >
                    Питчинг
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("licenses")}
                    className="text-white hover:text-purple-400 transition-colors text-base"
                  >
                    Лицензии
                  </button>
                </li>
                <li>
                  <a
                    href="/mix-mastering"
                    className="text-white hover:text-purple-400 transition-colors text-base"
                  >
                    Сведение и мастеринг
                  </a>
                </li>
                <li>
                  <a
                    href="/remixes"
                    className="text-white hover:text-purple-400 transition-colors text-base"
                  >
                    Ремиксы на заказ
                  </a>
                </li>
              </ul>
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