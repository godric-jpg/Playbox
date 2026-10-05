import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
  products as initialProducts,
  categories,
  formatRupiah,
} from "../../utils/data";
import ProductImage from "../../components/ProductImage";

// Props: label, value, tone
function StatCard({ label, value, tone }) {
  return (
    <div className={`rounded-3xl border-2 border-[#1b2a49] p-5 ${tone}`}>
      <p className="font-semibold">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

export default function AdminDashboard() {
  const { count } = useCart(); // useContext: data keranjang pembeli
  const [list, setList] = useState(initialProducts); // useState: daftar produk admin

  const remove = (id) => setList((prev) => prev.filter((p) => p.id !== id));

  const cheapest =
    list.length === 0
      ? "-"
      : formatRupiah(Math.min(...list.map((p) => p.price)));

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Dashboard Admin</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total produk" value={list.length} tone="bg-white" />
        <StatCard
          label="Jumlah kategori"
          value={categories.length - 1}
          tone="bg-[#ffc93c]"
        />
        <StatCard label="Harga termurah" value={cheapest} tone="bg-white" />
        <StatCard
          label="Item di keranjang pembeli"
          value={count}
          tone="bg-white"
        />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Kelola produk</h3>
      {/* Conditional rendering: tabel atau pesan kosong */}
      {list.length === 0 ? (
        <p>
          Semua produk sudah dihapus. Muat ulang halaman untuk mengembalikan
          data contoh.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-3xl border-2 border-[#1b2a49]">
          <table className="w-full text-left">
            <thead className="bg-[#ffc93c]">
              <tr>
                <th className="p-3">Produk</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Harga</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <ProductImage
                        emoji={p.emoji}
                        alt={p.name}
                        className="w-10 h-10 rounded-lg shrink-0 text-xl"
                      />
                      <div>
                        <p className="font-semibold">{p.name}</p>
                        <p className="text-sm opacity-70">{p.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3">{formatRupiah(p.price)}</td>
                  <td className="p-3">
                    <button
                      onClick={() => remove(p.id)}
                      className="font-semibold text-[#e8432e]"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
