import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatRupiah } from "../utils/data";
import { getSummary } from "../utils/reviews";

export default function ProductCard({ product }) {
  const { items, addItem } = useCart();
  const inCart = items.find((i) => i.product.id === product.id);
  const summary = getSummary(product.id);

  return (
    <article className="bg-white rounded-3xl border-2 border-[#1b2a49] p-3 flex flex-col">
      <span className="self-start rounded-full bg-[#ffc93c] text-[#1b2a49] text-xs font-bold px-3 py-1">
        {product.category}
      </span>
      <h3 className="mt-3 text-base font-semibold min-h-[3rem]">
        {product.name}
      </h3>

      <p className="text-sm opacity-70">
        <span className="font-semibold">{product.brand}</span>
      </p>
      {summary ? (
        <p className="text-sm">
          ★ {summary.average.toFixed(1)} ({summary.count})
        </p>
      ) : (
        <p className="text-sm opacity-60">Belum ada ulasan</p>
      )}

      <p className="mt-1 font-bold text-[#e8432e]">
        {formatRupiah(product.price)}
      </p>

      <div className="mt-3 flex flex-col gap-2">
        <Link
          to={`/produk/${product.id}`}
          className="text-center rounded-full py-2 border-2 border-[#1b2a49] font-semibold"
        >
          Lihat detail
        </Link>
        <button
          onClick={() => addItem(product)}
          className="rounded-full py-2 bg-[#e8432e] text-white font-semibold"
        >
          {inCart
            ? `Tambah lagi (${inCart.qty} di keranjang)`
            : "Masukkan keranjang"}
        </button>
      </div>
    </article>
  );
}
