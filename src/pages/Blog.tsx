import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Clock, ArrowRight, MapPin } from "lucide-react";

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="wrap flex h-[52px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#0F2540] text-white font-extrabold text-[14px]">T</span>
            <span className="font-bold text-[14px] tracking-tight">TernoAE Journal</span>
          </Link>
          <Link to="/" className="text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))]">Pesan Ojek</Link>
        </div>
      </header>

      {/* Hero Editorial */}
      <section className="wrap pt-8 sm:pt-12 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-3 py-1 text-[11px] font-bold tracking-wide">BERITA ASLI JEPARA • OJEK TERMURAH</span>
        <h1 className="mt-4 max-w-[20ch] text-[32px] sm:text-[44px] font-bold leading-[0.95] tracking-[-0.03em]">Cerita di Balik Ojek Termurah Jepara dan Jasa Antar Jemput Lokal</h1>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6] text-[hsl(var(--muted-foreground))]">Bukan sekadar <b>ojek</b>. Ini cerita tentang <b>jasa antar jemput Jepara</b>, <b>ojol Jepara</b> yang lahir dari gang kecil Mlonggo, dan kenapa warga pilih TernoAE dibanding franchise Jakarta. Ditulis untuk warga Jepara yang butuh <b>jasa antar</b> cepat.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#0F2540] text-white font-medium">ojek jepara</span>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-[hsl(var(--muted))]">jasa antar jemput jepara</span>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-[hsl(var(--muted))]">ojol jepara</span>
        </div>
      </section>

      {/* Featured Article - Editorial, not card */}
      <section className="wrap pb-8">
        <Link to={`/blog/${featured.slug}`} className="group grid gap-6 lg:grid-cols-[1.25fr_0.9fr] items-start border-t-2 border-[#0F2540] pt-6">
          <div className="overflow-hidden rounded-[16px] bg-[#F8FAFC]">
            <img src={featured.ogImage} alt={featured.title} className="w-full aspect-[16/11] object-cover group-hover:scale-[1.01] transition-transform duration-500" />
          </div>
          <div className="pt-2">
            <div className="flex items-center gap-2 text-[11px] text-[hsl(var(--muted-foreground))]"><Clock size={12} />{featured.readingTime} • {new Date(featured.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</div>
            <h2 className="mt-3 text-[26px] sm:text-[30px] font-bold leading-[1.05] tracking-tight group-hover:text-[#0F2540]">{featured.title}</h2>
            <p className="mt-3 text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{featured.excerpt}</p>
            <p className="mt-3 text-[13px] leading-[1.6]">{featured.content.lead}</p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold">Baca cerita lengkap <ArrowRight size={14} /></div>
          </div>
        </Link>
      </section>

      {/* List Editorial - Not cards, but editorial rows */}
      <section className="wrap pb-16">
        <div className="border-t border-[hsl(var(--border))]">
          {rest.map((post, idx) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group grid gap-4 sm:grid-cols-[88px_1fr_auto] items-start py-6 border-b border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))]/50 -mx-2 px-2 sm:mx-0 sm:px-0 transition-colors">
              <div className="hidden sm:block text-[11px] font-bold tracking-wide text-[hsl(var(--muted-foreground))]">0{idx + 2} • {post.readingTime}</div>
              <div className="flex gap-4">
                <img src={post.ogImage} alt={post.title} className="hidden sm:block h-20 w-20 rounded-[10px] object-cover shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.2] tracking-tight group-hover:text-[#0F2540]">{post.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-[hsl(var(--muted-foreground))] line-clamp-2">{post.excerpt}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {post.keywords.slice(0,4).map(k => <span key={k} className="text-[10px] px-2 py-0.5 rounded-full bg-[hsl(var(--muted))]">{k}</span>)}
                  </div>
                </div>
              </div>
              <span className="hidden sm:grid h-8 w-8 place-items-center rounded-full border border-[hsl(var(--border))] group-hover:bg-[#0F2540] group-hover:text-white group-hover:border-[#0F2540] transition-colors"><ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-[16px] bg-[#0F2540] text-white p-6 sm:p-8 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFC800] opacity-10 blur-2xl" />
          <h3 className="relative text-[22px] font-bold leading-[1.1]">Butuh Ojek / Jasa Antar Jemput Sekarang?</h3>
          <p className="relative mt-2 max-w-[60ch] text-[13px] leading-[1.6] text-white/70">TernoAE asli Jepara, tarif flat Rp5.000 + Rp2.000/km untuk ojek dan jasa antar jemput Jepara, ojol Jepara, jasa antar. Pesan GPS tanpa aplikasi, bayar QRIS/tunai.</p>
          <Link to="/" className="relative mt-5 inline-flex items-center gap-1 rounded-full bg-[#FFC800] px-5 py-2.5 text-[13px] font-bold text-[#0F2540]">Pesan Ojol Jepara <ArrowRight size={14} /></Link>
        </div>
      </section>

      <footer className="border-t border-[hsl(var(--border))] bg-white">
        <div className="wrap py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[hsl(var(--muted-foreground))]">
          <span>© {new Date().getFullYear()} TernoAE • Ojek asli Jepara • Jasa antar jemput Jepara • Ojol Jepara</span>
          <Link to="/" className="inline-flex items-center gap-1 font-bold text-[#0F2540]"><MapPin size={12} />Pesan Ojek Termurah</Link>
        </div>
      </footer>
    </div>
  );
}
