import { Link } from "react-router-dom";
// TODO (Task 1): Import useTheme hook
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  // TODO (Task 1): Read darkMode and toggleTheme from useTheme()
  const { darkMode, toggleTheme } = useTheme?.() || {
    darkMode: false,
    toggleTheme: () => {},
  };

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-colors duration-200 ${
        darkMode
          ? "bg-slate-900 border-slate-800 text-white"
          : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Link */}
        <Link to="/" className="flex items-center gap-2 text-decoration-none">
          <span className="text-2xl">📚</span>
          <span className="font-extrabold text-lg tracking-tight">
            Mekong<span className="text-indigo-600">Bookstore</span>
          </span>
        </Link>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* TODO (Task 1): Connect onClick to toggleTheme */}
          <button
            onClick={toggleTheme}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Cart Counter Button */}
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer">
            <span>🛒 Cart</span>
            <span className="bg-white text-indigo-700 px-1.5 py-0.5 rounded-full text-[10px] font-black">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
