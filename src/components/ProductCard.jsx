import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function ProductCard({ product }) {
  const { darkMode } = useTheme?.() || { darkMode: false };

  return (
    <article
      className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-200 ${
        darkMode
          ? "bg-slate-900 border-slate-800 text-white hover:border-indigo-500"
          : "bg-white border-slate-200 text-slate-900 hover:border-indigo-300 shadow-xs"
      }`}
    >
      <div>
        <div className="h-44 w-full bg-slate-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-bold text-base line-clamp-1">{product.title}</h3>
          <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md shrink-0">
            ⭐ {product.rating}
          </span>
        </div>

        <p
          className={`text-xs line-clamp-2 mb-4 ${darkMode ? "text-slate-400" : "text-slate-500"}`}
        >
          {product.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">
          ${product.price?.toFixed(2)}
        </span>

        {/* TODO (Task 2): Link to dynamic product page `/product/${product.id}` */}
        <Link
          to={`/product/${product.id}`}
          className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}
