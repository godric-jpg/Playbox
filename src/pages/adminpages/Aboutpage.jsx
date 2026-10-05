const concepts = [
  {
    name: "React Component",
    where: "Navbar, Sidebar, ProductCard, layouts, dan semua halaman",
  },
  {
    name: "Passing Props",
    where:
      "Navbar (storeName), ProductCard (product), Sidebar (title, menus), Field (label, error), StatCard (label, value)",
  },
  {
    name: "Conditional Rendering",
    where:
      "Badge keranjang, menu mobile, rating hanya jika ada ulasan, hasil pencarian kosong, keranjang kosong, pesan error checkout, pesanan berhasil",
  },
  {
    name: "useState",
    where:
      "Pencarian, form checkout, form ulasan, menu mobile, tema gelap/terang, daftar produk admin",
  },
  {
    name: "useContext",
    where: "CartContext dipakai Navbar, ProductCard, ProductDetail, Cart, Checkout, AdminDashboard",
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-2">Tentang prototipe</h2>
      <p className="mb-6">
        Playbox adalah prototipe e-commerce mainan anak untuk tugas React. Data
        produk disimpan di <code>utils/data.js</code>, tanpa database.
      </p>
      <ul className="space-y-3">
        {concepts.map((c) => (
          <li
            key={c.name}
            className="bg-white rounded-2xl border-2 border-[#1b2a49] p-4"
          >
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm opacity-80">{c.where}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}