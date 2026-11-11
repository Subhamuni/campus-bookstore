import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  // =========================================================================
  // TASK 3: Axios API Integration (10 Points)
  // =========================================================================
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO (Task 3):
    // 1. Set loading to true and clear any previous error.
    // 2. Use axios.get("https://dummyjson.com/products?limit=6")
    // 3. Update products state with response.data.products.
    // 4. Handle error with catch block.
    // 5. In finally block, set loading to false.
    let isMounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get("https://dummyjson.com/products?limit=6");
        if (isMounted) {
          setProducts(res.data.products || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load products from API.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Featured Course Materials & Tech Supplies
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Explore campus bookstore essentials loaded live from DummyJSON REST
          API.
        </p>
      </div>

      {/* Loading Skeleton UI */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 h-80 animate-pulse flex flex-col justify-between"
            >
              <div className="h-44 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
              <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded-xl"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error Alert UI */}
      {!loading && error && (
        <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-300 rounded-2xl p-6 text-center max-w-md mx-auto my-8">
          <p className="text-2xl mb-1">⚠️</p>
          <h3 className="font-bold text-sm">Failed to Load Catalog</h3>
          <p className="text-xs mt-1 text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* Product Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
