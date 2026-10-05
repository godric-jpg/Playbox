import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const THEME_KEY = "playbox-theme";

export default function Navbar({ storeName, searchQuery, setSearchQuery }) {
  const { count } = useCart();
  const [open, setOpen] = useState(false); 
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  const linkClass = ({ isActive }) =>
    `block rounded-full px-4 py-2 font-semibold ${
      isActive ? "bg-[#1b2a49] text-white" : "text-[#1b2a49] hover:bg-black/10"
    }`;
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-10 bg-[#ffc93c] border-b-4 border-[#1b2a49]">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold">🚀 {storeName}</h1>
        <div className="relative flex-1 max-w-xs min-w-[180px]">
          <input
            type="text"
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            placeholder="Cari mainan..."
            className="w-full pl-8 pr-7 py-1.5 text-sm rounded-full border-2 border-[#1b2a49] bg-white text-[#1b2a49] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1b2a49]"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs">
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-black font-bold"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 ml-auto md:ml-0 md:order-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
            className="w-10 h-10 rounded-full bg-[#1b2a49] text-white grid place-items-center"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
            aria-expanded={open}
            className="md:hidden w-10 h-10 rounded-full bg-[#1b2a49] text-white text-xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex w-full md:w-auto md:order-2 flex-col md:flex-row md:items-center gap-1`}
        >
          <NavLink to="/" end className={linkClass} onClick={close}>
            Beranda
          </NavLink>
          <NavLink to="/cart" className={linkClass} onClick={close}>
            Keranjang
            {count > 0 && (
              <span className="ml-2 inline-grid place-items-center min-w-6 h-6 px-1 rounded-full bg-[#e8432e] text-white text-sm">
                {count}
              </span>
            )}
          </NavLink>
          <NavLink to="/checkout" className={linkClass} onClick={close}>
            Checkout
          </NavLink>
          <NavLink to="/admin" className={linkClass} onClick={close}>
            Admin
          </NavLink>
        </div>
      </nav>
    </header>
  );
}