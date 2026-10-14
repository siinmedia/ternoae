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
    excerpt: "TernoAE bukan franchise luar, asli Jepara dengan driver lokal. Kenapa asli Jepara lebih murah, cepat, dan paham jalan tikus? Jasa antar jemput Jepara asli.",
    description: "TernoAE adalah ojek asli Jepara, bukan dari luar kota. Dibuat warga Jepara untuk warga Jepara, tarif termurah karena tanpa potongan franchise. Driver lokal hafal gang, pasar, sekolah. Jasa antar jemput Jepara dan ojol Jepara terpercaya.",
    publishedAt: "2026-10-10T08:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["ojek jepara", "ojek termurah jepara", "ternoae asli jepara", "ojek online jepara", "driver lokal jepara", "jasa antar jemput jepara", "jasa anjem antar jemput", "ojol jepara", "jasa antar jepara", "ojek"],
    ogImage: "/og/blog-asli-jepara.jpg",
    layout: "hero-split",
    readingTime: "4 menit",
    author: "TernoAE",
    content: {
      lead: "Banyak ojek online di Jepara adalah cabang dari Jakarta. TernoAE beda: lahir di Jepara, untuk Jepara. Sebagai jasa antar jemput Jepara asli dan ojol Jepara termurah, tanpa biaya franchise tarif bisa paling murah se-Jepara. Ojek dan jasa antar Jepara jadi satu.",
      sections: [
        { heading: "Kenapa Asli Jepara Lebih Murah?", body: "Ojek franchise luar potong 20-30% untuk pusat. TernoAE sebagai jasa anjem antar jemput asli Jepara tidak ada potongan franchise, jadi tarif Rp5.000 + Rp2.000/km bisa dipertahankan. Uang tetap di Jepara, bukan ke Jakarta. Ini jasa antar jemput Jepara paling efisien.", bullets: ["Tanpa potongan franchise 20-30% - ojek termurah", "Driver ojol Jepara dapat 100% lebih", "Jasa antar Jepara transparan, no surge pricing malam Minggu"] },
        { heading: "Driver Lokal Hafal Jalan Tikus", body: "Driver TernoAE tinggal di Mlonggo, Tahunan, Jepara Kota, Bangsri. Sebagai ojol Jepara dan ojek, hafal jalan tikus, jam macet pasar, sampai gang buntu. Jasa antar jemput Jepara jadi cepat. Tidak perlu share loc 5x, cukup sebut patokan warung." },
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
    excerpt: "Bongkar tarif TernoAE: Rp5.000 + Rp2.000/km, no hidden fee. Jasa antar jemput murah Jepara, bandingkan dengan ojol lain yang naik saat hujan.",
    description: "Tarif ojek Jepara TernoAE transparan: Rp5.000 base fare + Rp2.000 per km. Contoh hitungan Jepara Kota ke Tahunan 5km cuma Rp15.000. Jasa antar Jepara dan ojol Jepara termurah no hidden fee.",
    publishedAt: "2026-10-11T08:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["tarif ojek jepara", "ojek murah jepara", "harga ojek jepara", "ojek termurah jepara", "tarif ojek online jepara", "jasa antar jemput jepara", "jasa anjem antar jemput", "ojol jepara", "jasa antar jepara", "ojek"],
    ogImage: "/og/blog-tarif-5000.jpg",
    layout: "comparison",
    readingTime: "5 menit",
    author: "TernoAE",
    content: {
      lead: "Paling sebel pas pesan ojek, harga di awal Rp12.000 eh di akhir jadi Rp20.000. Di TernoAE sebagai jasa antar jemput Jepara dan ojol Jepara tidak ada drama itu. Tarif flat dan transparan untuk ojek dan jasa antar.",
      sections: [
        { heading: "Rumus Tarif Ojek dan Jasa Antar Jemput", body: "Total = Rp5.000 (buka) + Rp2.000 x jarak km. Jarak dari OSRM, bukan garis lurus, jadi akurat. Rumus ini untuk ojek, jasa antar, jasa anjem antar jemput sama.", bullets: ["0-1 km ojek = Rp5.000", "5 km jasa antar jemput = Rp5.000 + 5xRp2.000 = Rp15.000", "10 km ojol Jepara = Rp25.000", "15 km Jepara-Kudus jasa antar = Rp35.000"] },
        { heading: "Bandingkan dengan Ojol Lain", body: "Platform besar pakai surge pricing: saat hujan atau malam Minggu bisa 1.5x-2x. TernoAE sebagai ojol Jepara dan jasa antar jemput flat 24 jam, sama harga pagi dan tengah malam untuk ojek termurah.", bullets: ["TernoAE ojek: hujan Rp15.000 tetap Rp15.000", "Ojol lain: hujan Rp15.000 jadi Rp22.000", "Jasa antar Jepara transparan sebelum pesan"] },
      ],
      faqs: [
        ["Apakah ada biaya tambahan malam?", "Tidak ada. Rp5.000 + Rp2.000/km sama 24 jam, tidak ada biaya malam."],
        ["Bagaimana hitung jarak?", "Pakai OSRM routing, ngikut jalan beneran, bukan garis lurus. Jadi akurat."],
      ],
    },
  },
  {
    slug: "ojek-online-24-jam-jepara-antar-jemput-jateng",
    title: "Ojek Online 24 Jam Jepara: Jasa Antar Jemput se-Jawa Tengah",
    excerpt: "Butuh ojek jam 2 pagi di Jepara? TernoAE 24 jam, cakupan se-Jawa Tengah, jasa antar jemput Jepara dari Bangsri sampai Semarang. Ojol Jepara siap.",
    description: "Ojek online 24 jam di Jepara cuma TernoAE. Driver standby malam, jasa antar jemput se-Jawa Tengah: Jepara, Kudus, Demak, Pati, Semarang. Ojol Jepara dan jasa antar terpercaya.",
    publishedAt: "2026-10-12T08:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["ojek online 24 jam jepara", "ojek jepara 24 jam", "antar jemput jepara", "jasa antar jemput jepara", "jasa anjem antar jemput", "ojol jepara", "jasa antar jepara", "ojek", "ojek jepara kudus", "ojek jepara semarang"],
    ogImage: "/og/blog-24-jam-jateng.jpg",
    layout: "timeline",
    readingTime: "4 menit",
    author: "TernoAE",
    content: {
      lead: "Jam 2 pagi butuh ke RSUD Jepara atau ke terminal? Ojek lain tidur, TernoAE sebagai ojek online 24 jam dan jasa antar jemput Jepara masih buka. Driver malam standby khusus area Jepara Kota dan Tahunan untuk ojek dan jasa antar.",
      sections: [
        { heading: "Cakupan Jasa Antar Jemput se-Jawa Tengah", body: "Tidak cuma dalam kota. Sebagai jasa anjem antar jemput dan ojol Jepara, TernoAE melayani Jepara-Kudus, Jepara-Demak, Jepara-Pati, sampai Jepara-Semarang. Validasi Jateng biar tidak nyasar. Ojek dan jasa antar satu pintu.", bullets: ["Jepara dalam kota 0-10 km jasa antar jemput", "Jepara-Kudus 25 km ojol Jepara", "Jepara-Semarang 75 km jasa antar", "Semua tarif ojek flat Rp2.000/km"] },
        { heading: "Timeline Pesan Ojek dan Jasa Antar", body: "06:00-22:00 driver aktif penuh untuk ojek dan jasa antar jemput, 22:00-06:00 driver malam standby dengan konfirmasi WA dulu untuk ojol Jepara.", bullets: ["Siang ojek: respon <2 menit", "Malam jasa antar: respon 3-5 menit", "Hujan ojol Jepara tetap jalan pakai jas hujan"] },
      ],
      faqs: [
        ["Apakah ada ojek 24 jam di Jepara?", "Ada, TernoAE buka 24 jam. Malam ada driver standby khusus, konfirmasi via WhatsApp dulu."],
        ["Bisa antar ke Semarang?", "Bisa, se-Jawa Tengah. Jepara-Semarang 75km = Rp155.000, lebih murah dari travel."],
      ],
    },
  },
  {
    slug: "cara-pesan-ojek-jepara-gps-tanpa-aplikasi",
    title: "Cara Pesan Ojek Jepara via GPS Tanpa Install Aplikasi - Jasa Antar Jemput",
    excerpt: "Tidak perlu install Gojek/Grab. Buka ternoae.web.id, tap GPS, atur jemput & tujuan, harga langsung keluar. Ojol Jepara praktis.",
    description: "Cara pesan ojek di Jepara tanpa aplikasi: buka ternoae.web.id, aktifkan GPS, tap peta A & B, isi nama & WA, pilih QRIS/tunai. Jasa antar jemput Jepara dan jasa antar mudah via WA.",
    publishedAt: "2026-10-13T07:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["cara pesan ojek jepara", "ojek jepara tanpa aplikasi", "pesan ojek gps jepara", "ojek online jepara tanpa aplikasi", "jasa antar jemput jepara", "jasa anjem antar jemput", "ojol jepara", "jasa antar jepara", "ojek"],
    ogImage: "/og/blog-cara-pesan-gps.jpg",
    layout: "checklist",
    readingTime: "3 menit",
    author: "TernoAE",
    content: {
      lead: "HP kentang memori penuh tidak bisa install aplikasi? TernoAE sebagai jasa antar jemput Jepara dan ojol Jepara tidak perlu install. Buka web langsung jadi, simpan ke home screen jadi kayak app ojek.",
      sections: [
        { heading: "3 Langkah Pesan Ojek dan Jasa Antar Jemput", body: "Dirancang untuk kakek-nenek pun bisa pesan ojek dan jasa antar. Tidak ada form panjang untuk ojol Jepara.", bullets: ["Langkah 1: Tap GPS atau cari desa (contoh: Alun-alun Jepara) untuk jasa anjem antar jemput", "Langkah 2: Tap peta tujuan atau cari Pasar Jepara untuk jasa antar", "Langkah 3: Isi nama & WA, pilih QRIS/tunai, pesan ojek"] },
        { heading: "Tanpa Aplikasi, Tetap Seperti App Ojol", body: "Pakai PWA: pertama buka di Chrome, muncul banner Install. Klik install, icon TernoAE muncul di home screen, buka tanpa browser bar, bisa offline cache untuk pesan ojek dan jasa antar jemput." },
      ],
      faqs: [
        ["Perlu install aplikasi?", "Tidak perlu. Buka ternoae.web.id langsung pesan. Tapi bisa install PWA biar kayak app."],
        ["Bagaimana kalau GPS tidak akurat?", "Pin A & B bisa di-drag, atau cari alamat manual pakai pencarian nama tempat."],
      ],
    },
  },
  {
    slug: "driver-lokal-jepara-aman-cepat-qris-tunai",
    title: "Driver Lokal Jepara Aman & Cepat: Bayar QRIS atau Tunai - Ojol Jepara",
    excerpt: "Driver TernoAE semua KTP Jepara, hafal gang, bisa QRIS semua bank & e-wallet atau tunai ke driver. Jasa antar Jepara aman.",
    description: "Keamanan ojek Jepara: driver lokal KTP Jepara, hafal gang, rating internal, bayar bisa QRIS dinamis semua bank/e-wallet atau tunai. Jasa antar jemput dan ojol Jepara terpercaya.",
    publishedAt: "2026-10-13T09:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["driver ojek jepara", "ojek jepara aman", "ojek jepara qris", "ojek jepara tunai", "driver lokal jepara", "jasa antar jemput jepara", "jasa anjem antar jemput", "ojol jepara", "jasa antar jepara", "ojek"],
    ogImage: "/og/blog-driver-lokal.jpg",
    layout: "cards",
    readingTime: "4 menit",
    author: "TernoAE",
    content: {
      lead: "Naik ojek dengan orang asing takut? Driver TernoAE semua warga Jepara, KTP Jepara, rumah di Jepara. Bukan driver luar yang tidak tahu jalan. Sebagai jasa antar jemput Jepara dan ojol Jepara, keamanan nomor satu.",
      sections: [
        { heading: "Kenapa Jasa Antar Jemput Aman?", body: "Seleksi driver ojol Jepara: KTP Jepara, SIM C, SKCK, dan tes hafal jalan. Setiap perjalanan ojek dan jasa antar tercatat WA, share live location bisa untuk jasa antar jemput.", bullets: ["KTP Jepara asli untuk ojek dan jasa antar", "Hafal gang dan perumahan - ojol Jepara lokal", "Rating internal ojek, kalau nakal langsung out"] },
        { heading: "Bayar Fleksibel untuk Ojek dan Jasa Antar", body: "Bisa QRIS dinamis: BCA, BRI, Mandiri, BSI, Gopay, OVO, Dana, LinkAja semua masuk untuk ojek dan jasa anjem antar jemput. Atau tunai ke driver ojol Jepara.", bullets: ["QRIS dinamis jasa antar jemput via inv.ternoae.web.id", "Tunai ojek: kembalian disiapkan driver", "Invoice resmi ojek dengan QR"] },
      ],
      faqs: [
        ["Apakah bisa bayar QRIS?", "Bisa, QRIS dinamis per pesanan, scan pakai semua m-banking dan e-wallet."],
        ["Driver dari mana?", "Semua dari Jepara: Mlonggo, Bangsri, Tahunan, Jepara Kota. Hafal jalan tikus."],
      ],
    },
  },
  {
    slug: "kenapa-ojek-jepara-pilih-ternoae-murah",
    title: "Kenapa Warga Jepara Pilih TernoAE? Murah, Cepat, Tanpa Ribet - Ojol Jepara",
    excerpt: "5 alasan warga Jepara pindah ke TernoAE: murah Rp5.000, cepat 3 menit, tanpa aplikasi, driver lokal, QRIS. Jasa antar jemput terbaik.",
    description: "Alasan pilih ojek Jepara TernoAE dibanding lain: murah flat, cepat driver 3 menit, tanpa install aplikasi, driver lokal, bisa QRIS/tunai. Jasa antar jemput Jepara, jasa antar dan ojol Jepara paling murah.",
    publishedAt: "2026-10-14T07:00:00+07:00",
    modifiedAt: "2026-10-14T08:00:00+07:00",
    keywords: ["kenapa pilih ojek jepara", "ojek murah jepara", "ojek cepat jepara", "ojek jepara terbaik", "ternoae vs gojek jepara", "jasa antar jemput jepara", "jasa anjem antar jemput", "ojol jepara", "jasa antar jepara", "ojek"],
    ogImage: "/og/blog-kenapa-pilih.jpg",
    layout: "centered",
    readingTime: "5 menit",
    author: "TernoAE",
    content: {
      lead: "Dari 450+ pesanan jasa antar jemput Jepara per bulan, 80% adalah pelanggan ojol Jepara yang balik lagi. Kenapa ojek dan jasa antar pilih TernoAE? Karena murah, cepat, dan tidak ribet.",
      sections: [
        { heading: "5 Alasan Pilih Jasa Antar Jemput TernoAE", body: "Kami tanya 100 pelanggan kenapa pilih TernoAE sebagai ojol Jepara dibanding Gojek/Grab di Jepara untuk ojek dan jasa antar. Ini jawaban top 5.", bullets: ["1. Murah: jasa anjem antar jemput Rp5.000 flat, ojek tidak naik saat hujan", "2. Cepat: driver ojol Jepara <3 menit sampai, hafal gang", "3. Tanpa aplikasi: buka web langsung pesan ojek dan jasa antar", "4. Lokal: driver Jepara asli, bukan luar kota - jasa antar jemput asli", "5. Fleksibel: ojek bisa QRIS, tunai, ada catatan untuk driver jasa antar"] },
        { heading: "Testimoni Jasa Antar Jemput Warga Jepara", body: "Ibu Siti di Tahunan pakai jasa antar jemput: 'Biasanya pesan Gojek mahal Rp18.000, di TernoAE ojek cuma Rp11.000, driver ojol Jepara tetangga sendiri jadi aman'. Mas Angga di Mlonggo pakai jasa antar: 'Pesan jam 1 pagi buat ke RSUD masih ada ojek, gak perlu nunggu lama'." },
      ],
      faqs: [
        ["Lebih murah dari Gojek/Grab?", "Di Jepara iya, karena tanpa potongan franchise 20-30%. Gojek Rp15.000 bisa jadi Rp11.000 di TernoAE untuk rute sama."],
        ["Apakah ada promo?", "Sering ada promo Jepara: kode JEPARA20 dan promo tarif flat malam. Cek di blog."],
      ],
    },
  },
];
