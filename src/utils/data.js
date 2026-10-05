export const products = [
  // CATEGORY 1: Mainan Edukatif
  { id: 1, name: "Fisher-Price Kick & Play Piano Gym", brand: "Fisher-Price", category: "Mainan Edukatif", price: 699000, emoji: "🎹", desc: "Matras edukasi bayi dengan tuts piano musik interaktif, kaca aman bayi, dan gantungan stimulasi sensorik." },
  { id: 2, name: "Melissa & Doug Wooden Shapes Puzzle", brand: "Melissa & Doug", category: "Mainan Edukatif", price: 299000, emoji: "🧩", desc: "Puzzle papan kayu klasik dengan potongan bentuk geometris warna-warni dari bahan alami non-toxic." },
  { id: 3, name: "Hape Pound & Tap Bench Xylophone", brand: "Hape", category: "Mainan Edukatif", price: 450000, emoji: "🎵", desc: "Mainan kayu serbaguna: dapat dipukul bola kayu atau dimainkan sebagai xylophone musik balita." },
  { id: 4, name: "LeapFrog LeapStart Learning System", brand: "LeapFrog", category: "Mainan Edukatif", price: 899000, emoji: "📖", desc: "Sistem belajar interaktif dengan pena elektronik yang membaca buku cerita, angka, dan matematika anak." },
  { id: 5, name: "4M Solar System Planetarium STEM Kit", brand: "4M", category: "Mainan Edukatif", price: 279000, emoji: "🪐", desc: "Kit eksperimen STEM tata surya yang bisa dirakit dan dicat glow-in-the-dark oleh anak-anak." },
  
  // CATEGORY 2: Mainan Blok & Konstruksi
  { id: 6, name: "LEGO City Police Station 60316", brand: "LEGO", category: "Mainan Blok & Konstruksi", price: 1299000, emoji: "🚓", desc: "Set balok susun kantor polisi LEGO 3 lantai lengkap dengan helikopter, mobil patroli, dan 5 minifigure." },
  { id: 7, name: "LEGO Star Wars Millennium Falcon 75257", brand: "LEGO", category: "Mainan Blok & Konstruksi", price: 3299000, emoji: "🚀", desc: "Koleksi ikonik kapal Star Wars Millennium Falcon dengan detail interior lengkap dan minifigure Chewbacca." },
  { id: 8, name: "LEGO Ninjago Lloyd Green Mech Dragon", brand: "LEGO", category: "Mainan Blok & Konstruksi", price: 749000, emoji: "🐉", desc: "Naga robot tempur Lloyd dari serial Ninjago dengan artikulasi gerak penuh." },
  { id: 9, name: "LEGO Harry Potter Hogwarts Express 76423", brand: "LEGO", category: "Mainan Blok & Konstruksi", price: 2299000, emoji: "🚂", desc: "Kereta api sihir Hogwarts Express lengkap dengan Stasiun Hogsmeade dan minifigure karakter utama." },
  { id: 10, name: "LEGO Marvel Avengers Quinjet 76248", brand: "LEGO", category: "Mainan Blok & Konstruksi", price: 1799000, emoji: "🛩️", desc: "Pesawat jet ikonik Avengers dengan dudukan pajangan, roda mendarat, dan minifigure superhero." },

  // CATEGORY 3: Action Figure
  { id: 11, name: "Bandai Gundam HG 1/144 Aerial Rebuild", brand: "Bandai", category: "Action Figure", price: 349000, emoji: "🦾", desc: "Model kit plastik robot Gundam Aerial dari serial Witch from Mercury rakitan tanpa lem." },
  { id: 12, name: "Bandai S.H.Figuarts Spider-Man Tobey", brand: "Bandai", category: "Action Figure", price: 1499000, emoji: "🕷️", desc: "Action figure Spider-Man posabel tinggi 15cm lengkap efek jaring Spider-Man No Way Home." },
  { id: 13, name: "Funko POP! Marvel Spider-Man", brand: "Funko", category: "Action Figure", price: 269000, emoji: "🦸", desc: "Boneka kepala bergoyang Vinyl Funko Pop karakter superhero Marvel original." },
  { id: 14, name: "Marvel Legends Doctor Doom Secret Wars Retro", brand: "Hasbro", category: "Action Figure", price: 499000, emoji: "🦹", desc: "Action figure Marvel Legends skala 6 inci terinspirasi seri komik Secret Wars 1980-an, lengkap dengan tangan pengganti, blaster, dan perisai." },
  { id: 15, name: "Transformers Age of the Primes Deluxe Class Blast Off", brand: "Hasbro", category: "Action Figure", price: 549000, emoji: "🤖", desc: "Action figure Transformers Deluxe Class yang bisa diubah dari robot ke kendaraan, dari lini Age of the Primes 2026." },

  // CATEGORY 4: Kendaraan & RC Remote Control
  { id: 16, name: "Hot Wheels 10-Car Variety Pack", brand: "Hot Wheels", category: "Kendaraan & RC Remote Control", price: 329000, emoji: "🚗", desc: "Paket isi 10 mobil diecast Hot Wheels skala 1:64 variasi mobil sport, muscle car, dan truk balap." },
  { id: 17, name: "Rastar RC Car 1:14 Lamborghini Sian FKP 37", brand: "Rastar", category: "Kendaraan & RC Remote Control", price: 550000, emoji: "🏎️", desc: "Mobil remote control resmi lisensi Lamborghini dengan pintu scissor yang dapat dibuka manual dan lampu LED." },
  { id: 18, name: "Hot Wheels Track Builder Unlimited Loop", brand: "Hot Wheels", category: "Kendaraan & RC Remote Control", price: 529000, emoji: "🏁", desc: "Lintasan balap lintasan melingkar 360 derajat lengkap dengan peluncur pendorong mobil cepat." },
  { id: 19, name: "Monster Jam Grave Digger RC 1:15 Scale", brand: "Spin Master", category: "Kendaraan & RC Remote Control", price: 799000, emoji: "🚙", desc: "Truk monster remote control ban raksasa siap menerjang segala medan tanah dan rumput." },
  { id: 20, name: "Hot Wheels Monster Trucks Stunt Tire", brand: "Hot Wheels", category: "Kendaraan & RC Remote Control", price: 449000, emoji: "🛞", desc: "Arena atraksi lipat bentuk ban raksasa isi peluncur dan 2 mobil monster truck." },

  // CATEGORY 5: Mainan Role Play
  { id: 41, name: "KitchenAid Wooden Toy Kitchen Set by KidKraft", brand: "KidKraft", category: "Mainan Role Play", price: 2899000, emoji: "🍳", desc: "Dapur kayu mewah anak lisensi KitchenAid dengan kulkas, kompor bercahaya, dan oven tombol berbunyi." },
  { id: 42, name: "Nerf Elite 2.0 Commander RD-6 Blaster", brand: "Nerf", category: "Mainan Role Play", price: 299000, emoji: "🎯", desc: "Blaster Nerf drum putar 6 peluru busa aman dengan jangkauan tembak hingga 27 meter." },
  { id: 45, name: "Doctor Medical Playset Stethoscope Light", brand: "Playgro", category: "Mainan Role Play", price: 220000, emoji: "🩺", desc: "Koper perlengkapan dokter cilik lengkap stetoskop dengan efek detak jantung dan lampu." },
  { id: 46, name: "Nerf Ultra One Motorized Blaster 25 Darts", brand: "Nerf", category: "Mainan Role Play", price: 899000, emoji: "🥅", desc: "Blaster otomatis bertenaga baterai dengan magazin drum isi 25 peluru jangkauan jauh." },
  { id: 50, name: "Marvel Iron Man Arc FX Mask & Gauntlet", brand: "Hasbro", category: "Mainan Role Play", price: 520000, emoji: "🦿", desc: "Topeng dan sarung tangan Iron Man bersuara efek tembakan repulsor superhero." },

  // CATEGORY 6: Boneka
  { id: 51, name: "Barbie Dreamhouse Dollhouse 75+ Accessories", brand: "Barbie", category: "Boneka", price: 3999000, emoji: "🏰", desc: "Istana rumah Barbie 3 lantai tinggi 1 meter lebih dengan perosotan kolam renang, lift, dan efek lampu." },
  { id: 52, name: "Barbie Color Reveal Mermaid Series Doll", brand: "Barbie", category: "Boneka", price: 329000, emoji: "🧜‍♀️", desc: "Boneka Barbie putri duyung misterius yang berubah warna saat dicelup air hangat." },
  { id: 53, name: "Baby Alive Lulu Achoo Interactive Doll", brand: "Baby Alive", category: "Boneka", price: 899000, emoji: "🍼", desc: "Boneka bayi bersuara yang bisa bersin, menggerakkan tangan, dan memberikan respons hidung merah." },
  { id: 54, name: "Rainbow High Fashion Doll - Ruby Anderson", brand: "MGA Entertainment", category: "Boneka", price: 579000, emoji: "🌈", desc: "Boneka fesyen artikulasi tinggi dengan pakaian gaya streetwear merah berkilau premium." },
  { id: 55, name: "L.O.L. Surprise! O.M.G. Fashion Doll", brand: "MGA Entertainment", category: "Boneka", price: 520000, emoji: "💄", desc: "Unboxing 20 kejutan fesyen sepatu, baju, dan aksesori gaya glamor anak muda." },
];

export const categories = ['Semua', ...new Set(products.map((p) => p.category))];

export function formatRupiah(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}