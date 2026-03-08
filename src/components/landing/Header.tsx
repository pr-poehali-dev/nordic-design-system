import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

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
            className="h-20 w-auto"
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
            <li>
              <button
                onClick={() => scrollToSection("licenses")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Услуги
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("ghost")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Ghost Production
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                О лейбле
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Контакты
              </button>
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
        </div>
      </div>
    </header>
  );
};

export default Header;