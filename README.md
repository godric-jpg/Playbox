# Playbox: E-Commerce Storefront & Merchant Dashboard

Prototipe toko mainan online dengan pilihan brand dunia, dibuat dengan React, Vite, dan Tailwind CSS.

- Demo: _isi URL Vercel_
- Repository: _isi URL GitHub_
    
## Fitur
- Katalog produk dengan pencarian (nama atau brand) dan filter kategori
- Halaman detail produk dengan ulasan dan rating (tersimpan di localStorage)
- Keranjang: tambah, ubah jumlah, hapus, dan total harga dinamis
- Checkout dengan metode pembayaran dan validasi sisi klien
- Navigasi responsif (menu hamburger di mobile) dan toggle Dark/Light Mode
- Dashboard admin sederhana di `/admin`

## Tech Stack
React, Vite, Tailwind CSS, React Router DOM, Context API, localStorage

## Menjalankan
```bash
npm install
npm run dev
```

## Struktur Komponen
```
src/
├── main.jsx                 BrowserRouter + CartProvider
├── App.jsx                  Daftar rute
├── index.css                Tailwind + gaya dark mode
├── components/
│   ├── Navbar.jsx           Navigasi responsif, badge keranjang, toggle tema
│   ├── Sidebar.jsx          Menu halaman admin
│   ├── ProductCard.jsx      Kartu produk di katalog
│   └── ProductImage.jsx     Tampilan emoji/gambar produk
├── context/
│   └── CartContext.jsx      State keranjang (items, total, aksi)
├── layouts/
│   ├── MainLayout.jsx       Navbar + halaman + footer
│   └── AdminLayout.jsx      Sidebar + halaman admin
├── pages/
│   ├── frontpages/          Dashboard, ProductDetail, Cart, Checkout
│   └── adminpages/          AdminDashboard, AboutPage
└── utils/
    ├── data.js              Data produk dan format rupiah
    └── reviews.js           Baca dan hitung ulasan dari localStorage
```

## Rute
| Rute | Halaman |
|---|---|
| `/` | Katalog |
| `/produk/:id` | Detail produk |
| `/cart` | Keranjang |
| `/checkout` | Checkout |
| `/admin`, `/admin/about` | Dashboard admin |

## Konsep React yang dipakai
- **Component dan Props**: `ProductCard`, `Navbar`, `Sidebar`, `Field`, `StatCard`
- **Conditional Rendering**: badge keranjang, menu mobile, pesan error, keranjang kosong, rating hanya jika ada ulasan
- **useState**: pencarian, form checkout, ulasan, menu mobile, tema, daftar produk admin
- **useContext**: `CartContext` dipakai Navbar, ProductCard, ProductDetail, Cart, Checkout, dan AdminDashboard