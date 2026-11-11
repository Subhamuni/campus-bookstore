import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

export default function ProductDetail() {
  // =========================================================================
  // TASK 2 & 3: useParams, useNavigate, and Single Item API Fetch
  // =========================================================================
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme?.() || { darkMode: false };

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function loadItem() {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        if (isMounted) setProduct(res.data);
      } catch (err) {
        if (isMounted) setError(err.message || "Product not found");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadItem();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="animate-pulse py-12 max-w-xl mx-auto space-y-4">
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/4"></div>
        <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
        <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-2/3"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12 space-y-4">
        <h2 className="text-xl font-bold text-red-600">
          Product #{id} Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold cursor-pointer"
        >
          ← Return to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* TODO (Task 2): Use navigate(-1) on the back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
      >
        ← Go Back
      </button>

      <div
        className={`rounded-3xl border p-6 sm:p-8 space-y-6 ${
          darkMode
            ? "bg-slate-900 border-slate-800 text-white"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="h-64 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
              {product.category}
            </span>
            <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md">
              ⭐ {product.rating}
            </span>
          </div>

          <h1 className="text-2xl font-black">{product.title}</h1>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <span className="text-xs text-slate-400 block">
              Stock Available
            </span>
            <span className="text-sm font-bold">{product.stock} units</span>
          </div>
          <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
            ${product.price?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
