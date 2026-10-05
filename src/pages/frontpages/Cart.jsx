import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { formatRupiah } from "../../utils/data";
import ProductImage from "../../components/ProductImage";

export default function Cart() {
  const { items, changeQty, removeItem, total } = useCart();

  return (
    <section className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">Keranjang</h2>

      {/* Conditional rendering: kosong atau berisi */}
      {items.length === 0 ? (
        <p>
          Keranjang masih kosong.{" "}
          <Link to="/" className="underline font-semibold">
            Pilih mainan dulu
          </Link>
        </p>
      ) : (
        <div className="bg-white rounded-3xl border-2 border-[#1b2a49] p-5">
          <ul className="space-y-3">
            {items.map(({ product, qty }) => (
              <li
                key={product.id}
                className="flex items-center gap-3 border-b pb-3"
              >
                <ProductImage
                  emoji={product.emoji}
                  alt={product.name}
                  className="w-14 h-14 rounded-xl shrink-0 text-3xl"
                />
                <div className="flex-1">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm">{formatRupiah(product.price * qty)}</p>
                </div>
                <button
                  onClick={() => changeQty(product.id, -1)}
                  className="w-7 h-7 rounded-full bg-[#eaf4ff] font-bold"
                >
                  −
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => changeQty(product.id, 1)}
                  className="w-7 h-7 rounded-full bg-[#eaf4ff] font-bold"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(product.id)}
                  className="text-sm text-[#e8432e]"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          <p className="flex justify-between text-lg font-bold mt-4">
            <span>Total</span>
            <span>{formatRupiah(total)}</span>
          </p>
          <Link
            to="/checkout"
            className="block text-center mt-3 w-full rounded-full py-3 bg-[#e8432e] text-white font-semibold"
          >
            Lanjut ke checkout
          </Link>
        </div>
      )}
    </section>
  );
}
