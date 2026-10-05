import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const storeName = 'Playbox';

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <Navbar storeName={storeName} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="max-w-5xl w-full mx-auto px-4 py-8 flex-1">
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </main>

      <footer className="bg-[#1b2a49] text-white mt-12 border-t-4 border-[#ffc93c]">
        <div className="max-w-5xl mx-auto px-4 py-8 grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">🚀 {storeName}</h2>
            <p className="mt-2 text-sm opacity-80">
              Toko mainan online dengan banyak pilihan untuk semua usia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Menu</h3>
            <ul className="space-y-1 text-sm opacity-90">
              <li><Link to="/" className="hover:underline">Beranda</Link></li>
              <li><Link to="/cart" className="hover:underline">Keranjang</Link></li>
              <li><Link to="/checkout" className="hover:underline">Checkout</Link></li>
              <li><Link to="/admin" className="hover:underline">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Hubungi kami</h3>
            <ul className="space-y-1 text-sm opacity-90">
              <li>halo@playbox.id</li>
              <li>Buka: Senin - Sabtu, 09.00 - 17.00</li>
            </ul>
          </div>
        </div>

        <p className="border-t border-white/20 text-center text-sm py-4 opacity-80">
          © {new Date().getFullYear()} {storeName}. Prototipe tugas React.
        </p>
      </footer>
    </div>
  );
}