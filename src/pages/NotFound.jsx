import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-20 space-y-4">
      <h1 className="text-6xl font-black text-indigo-600">404</h1>
      <h2 className="text-xl font-bold">Page Not Found</h2>
      <p className="text-slate-500 text-sm">
        The resource you are looking for does not exist in the bookstore portal.
      </p>
      <div>
        <Link
          to="/"
          className="inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
        >
          Return to Home Catalog
        </Link>
      </div>
    </div>
  );
}
