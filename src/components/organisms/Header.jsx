import { Moon, Sun, Zap } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-primary text-white rounded-lg shadow-lg group-hover:rotate-12 transition-transform">
            <Zap size={20} fill="currentColor" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Poké<span className="text-primary">App</span>
          </h1>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-neutral-700"
          aria-label="Cambiar tema"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </header>
  );
};