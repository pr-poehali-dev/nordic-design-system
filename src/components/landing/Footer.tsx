import { Youtube, Instagram, Music2 } from "lucide-react";

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DIZY MUSIC. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://t.me/dizymusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="BeatStars"
            >
              <Music2 />
            </a>
            <a
              href="https://promodj.com/dizymusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              aria-label="PromoDJ"
            >
              PromoDJ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;