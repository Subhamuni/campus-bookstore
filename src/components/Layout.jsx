import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";

export default function Layout() {
  const { darkMode } = useTheme?.() || { darkMode: false };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* TODO (Task 2): Render matching child route using <Outlet /> */}
        <Outlet />
      </main>

      <footer
        className={`border-t py-6 text-center text-xs transition-colors ${
          darkMode
            ? "border-slate-800 text-slate-500"
            : "border-slate-200 text-slate-400"
        }`}
      >
        © {new Date().getFullYear()} Mekong Campus Bookstore • React Practical
        Final Exam
      </footer>
    </div>
  );
}
