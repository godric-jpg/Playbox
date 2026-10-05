import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { products, formatRupiah } from "../../utils/data";
import { loadReviews, STORAGE_KEY } from "../../utils/reviews";

const field = "mt-1 w-full rounded-xl border-2 border-[#1b2a49] px-3 py-2";
const card = "bg-white rounded-2xl border-2 border-[#1b2a49] p-4";
const Stars = ({ value }) => (
  <span className="text-[#ffb400] text-lg">
    {"★".repeat(value)}
    <span className="text-gray-300">{"★".repeat(5 - value)}</span>
  </span>
);

export default function ProductDetail() {
  const { id } = useParams();
  const { items, addItem } = useCart();
  const [allReviews, setAllReviews] = useState(loadReviews);
  const [form, setForm] = useState({ name: "", rating: 0, text: "" });
  const [error, setError] = useState("");
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return (
      <p>
        Produk tidak ditemukan.{" "}
        <Link to="/" className="underline font-semibold">
          Kembali ke beranda
        </Link>
      </p>
    );
  }

  const inCart = items.find((i) => i.product.id === product.id);
  const reviews = allReviews[product.id] || [];
  const average =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.rating || !form.text.trim()) {
      return setError("Pilih bintang dan tulis ulasanmu dulu.");
    }
    const newReview = {
      id: Date.now(),
      date: new Date().toISOString(),
      name: form.name.trim() || "Pembeli",
      rating: form.rating,
      text: form.text.trim(),
    };
    const updated = { ...allReviews, [product.id]: [newReview, ...reviews] };
    setAllReviews(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); // simpan di browser
    setForm({ name: "", rating: 0, text: "" });
    setError("");
  };

  return (
    <div>
      <section className="max-w-2xl">
        <Link to="/" className="underline">
          ← Semua mainan
        </Link>
        <h2 className="text-3xl font-bold mt-3">{product.name}</h2>
        <p className="opacity-70">
          Merek: <span className="font-semibold">{product.brand}</span>,
          Kategori: {product.category}
        </p>
        <p className="mt-3 text-2xl font-bold text-[#e8432e]">
          {formatRupiah(product.price)}
        </p>
        <p className="mt-4">{product.desc}</p>

        <button
          onClick={() => addItem(product)}
          className="mt-5 rounded-full px-6 py-3 bg-[#e8432e] text-white font-semibold"
        >
          Masukkan keranjang
        </button>
        {inCart && (
          <p className="mt-3">
            {inCart.qty} item di keranjang.{" "}
            <Link to="/cart" className="underline font-semibold">
              Lihat keranjang
            </Link>
          </p>
        )}
      </section>

      <section className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-1">Ulasan pembeli</h3>
          {reviews.length > 0 && (
            <p className="mb-4 text-sm">
              ★ {average.toFixed(1)} dari {reviews.length} ulasan
            </p>
          )}

          {reviews.length === 0 ? (
            <p className={card}>
              Belum ada ulasan. Jadilah yang pertama menulis.
            </p>
          ) : (
            <ul className="space-y-3">
              {reviews.map((r) => (
                <li key={r.id} className={card}>
                  <div className="flex justify-between gap-2 flex-wrap">
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-sm opacity-70">
                      {new Date(r.date).toLocaleDateString("id-ID", {
                        dateStyle: "long",
                      })}
                    </p>
                  </div>
                  <Stars value={r.rating} />
                  <p className="mt-1">{r.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border-2 border-[#1b2a49] p-5 space-y-4"
        >
          <h3 className="text-xl font-bold">Tulis ulasan</h3>

          <label className="block">
            <span className="font-semibold">Nama (opsional)</span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
            />
          </label>

          <div>
            <p className="font-semibold">Rating</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setForm({ ...form, rating: star })}
                  aria-label={`${star} bintang`}
                  className={`text-3xl ${star <= form.rating ? "text-[#ffb400]" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="font-semibold">Ulasan</span>
            <textarea
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              rows={4}
              placeholder="Tulis pengalamanmu..."
              className={field}
            />
          </label>

          {error && <p className="text-[#e8432e] font-semibold">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-full py-2 bg-[#e8432e] text-white font-semibold"
          >
            Kirim ulasan
          </button>
        </form>
      </section>
    </div>
  );
}
