export type BlogLayout = "hero-split" | "centered" | "timeline" | "checklist" | "comparison" | "cards";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  modifiedAt: string;
  keywords: string[];
  ogImage: string; // public path /og/blog-xxx.jpg
  layout: BlogLayout;
  readingTime: string;
  author: string;
  content: {
    lead: string;
    sections: { heading?: string; body: string; bullets?: string[] }[];
    faqs: [string, string][];
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ternoae-asli-jepara-ojek-termurah",
    title: "TernoAE Asli Jepara: Ojek Termurah dengan Driver Lokal",
    excerpt: "TernoAE bukan franchise luar, asli Jepara dengan driver lokal. Kenapa asli Jepara lebih murah, cepat, dan paham jalan tikus?",
    description: "TernoAE adalah ojek asli Jepara, bukan dari luar kota. Dibuat warga Jepara untuk warga Jepara, tarif termurah karena tanpa potongan franchise. Driver lokal hafal gang, pasar, sekolah.",
    publishedAt: "2026-10-10T08:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["ojek jepara", "ojek termurah jepara", "ternoae asli jepara", "ojek online jepara", "driver lokal jepara"],
    ogImage: "/og/blog-asli-jepara.jpg",
    layout: "hero-split",
    readingTime: "4 menit",
    author: "TernoAE",
    content: {
      lead: "Banyak ojek online di Jepara adalah cabang dari Jakarta. TernoAE beda: lahir di Jepara, untuk Jepara. Tanpa biaya franchise, tarif bisa paling murah se-Jepara.",
      sections: [
        { heading: "Kenapa Asli Jepara Lebih Murah?", body: "Ojek franchise luar potong 20-30% untuk pusat. TernoAE tidak ada potongan franchise, jadi tarif Rp5.000 + Rp2.000/km bisa dipertahankan. Uang tetap di Jepara, bukan ke Jakarta.", bullets: ["Tanpa potongan franchise 20-30%", "Driver dapat 100% lebih dari platform besar", "Tarif transparan, no surge pricing malam Minggu"] },
        { heading: "Driver Lokal Hafal Jalan Tikus", body: "Driver TernoAE tinggal di Mlonggo, Tahunan, Jepara Kota, Bangsri. Hafal jalan tikus, jam macet pasar, sampai gang buntu. Tidak perlu share loc 5x, cukup sebut patokan warung." },
      ],
      faqs: [
        ["Apakah TernoAE asli Jepara?", "Ya, TernoAE dibuat di Jepara tahun 2024 oleh tim lokal Jepara, bukan franchise luar. Kantor di Sekuro, Mlonggo."],
        ["Kenapa bisa termurah?", "Tanpa potongan franchise dan operasional ramping, tarif mulai Rp5.000 + Rp2.000/km flat, bukan dinamis mahal saat hujan."],
      ],
    },
  },
  {
    slug: "tarif-ojek-jepara-mulai-5000-transparan",
    title: "Tarif Ojek Jepara Mulai Rp5.000: Transparan Tanpa Biaya Tersembunyi",
    excerpt: "Bongkar tarif TernoAE: Rp5.000 + Rp2.000/km, no hidden fee. Bandingkan dengan ojek lain yang naik saat hujan.",
    description: "Tarif ojek Jepara TernoAE transparan: Rp5.000 base fare + Rp2.000 per km. Contoh hitungan Jepara Kota ke Tahunan 5km cuma Rp15.000. No hidden fee.",
    publishedAt: "2026-10-11T08:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["tarif ojek jepara", "ojek murah jepara", "harga ojek jepara", "ojek termurah jepara", "tarif ojek online jepara"],
    ogImage: "/og/blog-tarif-5000.jpg",
    layout: "comparison",
    readingTime: "5 menit",
    author: "TernoAE",
    content: {
      lead: "Paling sebel pas pesan ojek, harga di awal Rp12.000 eh di akhir jadi Rp20.000. Di TernoAE tidak ada drama itu. Tarif flat dan transparan.",
      sections: [
        { heading: "Rumus Tarif", body: "Total = Rp5.000 (buka) + Rp2.000 x jarak km. Jarak dari OSRM, bukan garis lurus, jadi akurat.", bullets: ["0-1 km = Rp5.000", "5 km = Rp5.000 + 5xRp2.000 = Rp15.000", "10 km = Rp25.000", "15 km Jepara-Kudus = Rp35.000"] },
        { heading: "Bandingkan dengan Lain", body: "Platform besar pakai surge pricing: saat hujan atau malam Minggu bisa 1.5x-2x. TernoAE flat 24 jam, sama harga pagi dan tengah malam.", bullets: ["TernoAE: hujan Rp15.000 tetap Rp15.000", "Lain: hujan Rp15.000 jadi Rp22.000", "Transparan sebelum pesan, bukan sesudah"] },
      ],
      faqs: [
        ["Apakah ada biaya tambahan malam?", "Tidak ada. Rp5.000 + Rp2.000/km sama 24 jam, tidak ada biaya malam."],
        ["Bagaimana hitung jarak?", "Pakai OSRM routing, ngikut jalan beneran, bukan garis lurus. Jadi akurat."],
      ],
    },
  },
  {
    slug: "ojek-online-24-jam-jepara-antar-jemput-jateng",
    title: "Ojek Online 24 Jam Jepara: Antar Jemput se-Jawa Tengah",
    excerpt: "Butuh ojek jam 2 pagi di Jepara? TernoAE 24 jam, cakupan se-Jawa Tengah, dari Bangsri sampai Semarang.",
    description: "Ojek online 24 jam di Jepara cuma TernoAE. Driver standby malam, antar jemput se-Jawa Tengah: Jepara, Kudus, Demak, Pati, Semarang.",
    publishedAt: "2026-10-12T08:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["ojek online 24 jam jepara", "ojek jepara 24 jam", "antar jemput jepara", "ojek jepara kudus", "ojek jepara semarang"],
    ogImage: "/og/blog-24-jam-jateng.jpg",
    layout: "timeline",
    readingTime: "4 menit",
    author: "TernoAE",
    content: {
      lead: "Jam 2 pagi butuh ke RSUD Jepara atau ke terminal? Ojek lain tidur, TernoAE masih buka. Driver malam standby khusus area Jepara Kota dan Tahunan.",
      sections: [
        { heading: "Cakupan se-Jawa Tengah", body: "Tidak cuma dalam kota. TernoAE melayani Jepara-Kudus, Jepara-Demak, Jepara-Pati, sampai Jepara-Semarang. Validasi Jateng biar tidak nyasar.", bullets: ["Jepara dalam kota 0-10 km", "Jepara-Kudus 25 km", "Jepara-Semarang 75 km", "Semua tarif flat Rp2.000/km"] },
        { heading: "Timeline Pesan", body: "06:00-22:00 driver aktif penuh, 22:00-06:00 driver malam standby dengan konfirmasi WA dulu.", bullets: ["Siang: respon <2 menit", "Malam: respon 3-5 menit", "Hujan: tetap jalan pakai jas hujan"] },
      ],
      faqs: [
        ["Apakah ada ojek 24 jam di Jepara?", "Ada, TernoAE buka 24 jam. Malam ada driver standby khusus, konfirmasi via WhatsApp dulu."],
        ["Bisa antar ke Semarang?", "Bisa, se-Jawa Tengah. Jepara-Semarang 75km = Rp155.000, lebih murah dari travel."],
      ],
    },
  },
  {
    slug: "cara-pesan-ojek-jepara-gps-tanpa-aplikasi",
    title: "Cara Pesan Ojek Jepara via GPS Tanpa Install Aplikasi",
    excerpt: "Tidak perlu install Gojek/Grab. Buka ternoae.web.id, tap GPS, atur jemput & tujuan, harga langsung keluar.",
    description: "Cara pesan ojek di Jepara tanpa aplikasi: buka ternoae.web.id, aktifkan GPS, tap peta A & B, isi nama & WA, pilih QRIS/tunai, pesan WA.",
    publishedAt: "2026-10-13T07:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["cara pesan ojek jepara", "ojek jepara tanpa aplikasi", "pesan ojek gps jepara", "ojek online jepara tanpa aplikasi"],
    ogImage: "/og/blog-cara-pesan-gps.jpg",
    layout: "checklist",
    readingTime: "3 menit",
    author: "TernoAE",
    content: {
      lead: "HP kentang memori penuh tidak bisa install aplikasi? TernoAE tidak perlu install. Buka web langsung jadi, simpan ke home screen jadi kayak app.",
      sections: [
        { heading: "3 Langkah Pesan", body: "Dirancang untuk kakek-nenek pun bisa. Tidak ada form panjang.", bullets: ["Langkah 1: Tap GPS atau cari desa (contoh: Alun-alun Jepara)", "Langkah 2: Tap peta tujuan atau cari Pasar Jepara", "Langkah 3: Isi nama & WA, pilih QRIS/tunai, pesan"] },
        { heading: "Tanpa Aplikasi, Tetap Seperti App", body: "Pakai PWA: pertama buka di Chrome, muncul banner Install. Klik install, icon TernoAE muncul di home screen, buka tanpa browser bar, bisa offline cache." },
      ],
      faqs: [
        ["Perlu install aplikasi?", "Tidak perlu. Buka ternoae.web.id langsung pesan. Tapi bisa install PWA biar kayak app."],
        ["Bagaimana kalau GPS tidak akurat?", "Pin A & B bisa di-drag, atau cari alamat manual pakai pencarian nama tempat."],
      ],
    },
  },
  {
    slug: "driver-lokal-jepara-aman-cepat-qris-tunai",
    title: "Driver Lokal Jepara Aman & Cepat: Bayar QRIS atau Tunai",
    excerpt: "Driver TernoAE semua KTP Jepara, hafal gang, bisa QRIS semua bank & e-wallet atau tunai ke driver.",
    description: "Keamanan ojek Jepara: driver lokal KTP Jepara, hafal gang, rating internal, bayar bisa QRIS dinamis semua bank/e-wallet atau tunai.",
    publishedAt: "2026-10-13T09:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["driver ojek jepara", "ojek jepara aman", "ojek jepara qris", "ojek jepara tunai", "driver lokal jepara"],
    ogImage: "/og/blog-driver-lokal.jpg",
    layout: "cards",
    readingTime: "4 menit",
    author: "TernoAE",
    content: {
      lead: "Naik ojek dengan orang asing takut? Driver TernoAE semua warga Jepara, KTP Jepara, rumah di Jepara. Bukan driver luar yang tidak tahu jalan.",
      sections: [
        { heading: "Kenapa Aman?", body: "Seleksi driver: KTP Jepara, SIM C, SKCK, dan tes hafal jalan. Setiap perjalanan tercatat WA, share live location bisa.", bullets: ["KTP Jepara asli", "Hafal gang dan perumahan", "Rating internal, kalau nakal langsung out"] },
        { heading: "Bayar Fleksibel", body: "Bisa QRIS dinamis: BCA, BRI, Mandiri, BSI, Gopay, OVO, Dana, LinkAja semua masuk. Atau tunai ke driver.", bullets: ["QRIS dinamis per nominal via inv.ternoae.web.id", "Tunai: kembalian disiapkan driver", "Invoice resmi dengan QR"] },
      ],
      faqs: [
        ["Apakah bisa bayar QRIS?", "Bisa, QRIS dinamis per pesanan, scan pakai semua m-banking dan e-wallet."],
        ["Driver dari mana?", "Semua dari Jepara: Mlonggo, Bangsri, Tahunan, Jepara Kota. Hafal jalan tikus."],
      ],
    },
  },
  {
    slug: "kenapa-ojek-jepara-pilih-ternoae-murah",
    title: "Kenapa Warga Jepara Pilih TernoAE? Murah, Cepat, Tanpa Ribet",
    excerpt: "5 alasan warga Jepara pindah ke TernoAE: murah Rp5.000, cepat 3 menit, tanpa aplikasi, driver lokal, QRIS.",
    description: "Alasan pilih ojek Jepara TernoAE dibanding lain: murah flat, cepat driver 3 menit, tanpa install aplikasi, driver lokal, bisa QRIS/tunai.",
    publishedAt: "2026-10-14T07:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["kenapa pilih ojek jepara", "ojek murah jepara", "ojek cepat jepara", "ojek jepara terbaik", "ternoae vs gojek jepara"],
    ogImage: "/og/blog-kenapa-pilih.jpg",
    layout: "centered",
    readingTime: "5 menit",
    author: "TernoAE",
    content: {
      lead: "Dari 450+ pesanan per bulan di Jepara, 80% adalah pelanggan yang balik lagi. Kenapa? Karena murah, cepat, dan tidak ribet.",
      sections: [
        { heading: "5 Alasan Pilih TernoAE", body: "Kami tanya 100 pelanggan kenapa pilih TernoAE dibanding Gojek/Grab di Jepara. Ini jawaban top 5.", bullets: ["1. Murah: Rp5.000 flat, tidak naik saat hujan", "2. Cepat: driver <3 menit sampai, hafal gang", "3. Tanpa aplikasi: buka web langsung pesan", "4. Lokal: driver Jepara asli, bukan luar kota", "5. Fleksibel: bisa QRIS, tunai, ada catatan untuk driver"] },
        { heading: "Testimoni Warga Jepara", body: "Ibu Siti di Tahunan: 'Biasanya pesan Gojek mahal Rp18.000, di TernoAE cuma Rp11.000, drivernya tetangga sendiri jadi aman'. Mas Angga di Mlonggo: 'Pesan jam 1 pagi buat ke RSUD masih ada, gak perlu nunggu lama'." },
      ],
      faqs: [
        ["Lebih murah dari Gojek/Grab?", "Di Jepara iya, karena tanpa potongan franchise 20-30%. Gojek Rp15.000 bisa jadi Rp11.000 di TernoAE untuk rute sama."],
        ["Apakah ada promo?", "Sering ada promo Jepara: kode JEPARA20 dan promo tarif flat malam. Cek di blog."],
      ],
    },
  },
];
