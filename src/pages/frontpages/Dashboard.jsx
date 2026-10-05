import { useState } from 'react';
import { products } from '../../utils/data';
import ProductCard from '../../components/ProductCard';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', ...new Set(products.map((item) => item.category))];

  const filteredProducts = selectedCategory === 'Semua'
    ? products
    : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-100 rounded-3xl p-8 flex items-center justify-between shadow-sm">
        <div>
          <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
            ✨ 100% Brand Original
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900">Toko Mainan Terlengkap dan Terpercaya</h1>
          <p className="text-gray-500 text-sm mt-1">
            Koleksi resmi LEGO, Hot Wheels, Pop Mart, Barbie, Fisher-Price, dan brand populer lainnya.
          </p>
        </div>
        <div className="text-5xl">🚀</div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Pilih Kategori Mainan</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">{selectedCategory}</h2>
          <span className="text-xs font-bold text-gray-400">
            Menampilkan {filteredProducts.length} Produk
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;