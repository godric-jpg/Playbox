import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { formatRupiah } from "../../utils/data";

const METHODS = ["Transfer Bank", "E-Wallet", "Bayar di Tempat (COD)"];
const inputClass = "mt-1 w-full rounded-xl border-2 border-[#1b2a49] px-3 py-2";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="font-semibold">{label}</span>
      {children}
      {error && (
        <span className="block text-sm text-[#e8432e] font-semibold">
          {error}
        </span>
      )}
    </label>
  );
}

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    method: METHODS[0],
  });
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();

    const found = {};
    if (form.name.trim().length < 3) found.name = "Nama minimal 3 karakter.";
    if (!/^(\+62|62|0)8\d{8,11}$/.test(form.phone.replace(/[\s-]/g, "")))
      found.phone = "Nomor HP tidak valid, contoh 081234567890.";
    if (form.address.trim().length < 10)
      found.address = "Alamat minimal 10 karakter.";

    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setOrder({ name: form.name, method: form.method, total });
    clearCart();
  };

  if (order) {
    return (
      <section className="max-w-xl bg-[#2fa66a] text-white rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Pesanan berhasil dibuat</h2>
        <p className="mt-2">
          Terima kasih, {order.name}. Total {formatRupiah(order.total)} via{" "}
          {order.method}.
        </p>
        <Link to="/" className="inline-block mt-4 underline font-semibold">
          Belanja lagi
        </Link>
      </section>
    );
  }
  if (items.length === 0) {
    return (
      <p>
        Belum ada yang bisa di-checkout.{" "}
        <Link to="/" className="underline font-semibold">
          Pilih mainan dulu
        </Link>
      </p>
    );
  }

  return (
    <section className="max-w-xl">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl border-2 border-[#1b2a49] p-5 space-y-4"
      >
        <Field label="Nama penerima" error={errors.name}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </Field>
        <Field label="Nomor HP" error={errors.phone}>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </Field>
        <Field label="Alamat pengiriman" error={errors.address}>
          <textarea
            name="address"
            rows={3}
            value={form.address}
            onChange={handleChange}
            className={inputClass}
          />
        </Field>
        <Field label="Metode pembayaran">
          <select
            name="method"
            value={form.method}
            onChange={handleChange}
            className={inputClass}
          >
            {METHODS.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </Field>
        <p className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{formatRupiah(total)}</span>
        </p>
        <button
          type="submit"
          className="w-full rounded-full py-3 bg-[#e8432e] text-white font-semibold"
        >
          Bayar sekarang
        </button>
      </form>
    </section>
  );
}
