import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { MapPin, Clock, ArrowRight, Search } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="wrap flex h-[52px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#0F2540] text-white font-extrabold text-[14px]">T</span>
            <span className="font-bold text-[14px]">TernoAE Blog</span>
          </Link>
          <Link to="/" className="text-[13px] font-medium hover:underline">Kembali ke Pesan</Link>
        </div>
      </header>

      <section className="wrap pt-8 pb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2.5 py-1 text-[11px] font-bold">Berita & Tips Ojek Jepara</span>
        <h1 className="mt-3 text-[28px] sm:text-[36px] font-bold tracking-tight leading-[1.05] max-w-[20ch]">TernoAE Asli Jepara: Berita Ojek Termurah & Jasa Antar Jemput</h1>
        <p className="mt-3 max-w-[62ch] text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">Semua tentang <b>ojek termurah Jepara</b>, <b>jasa antar jemput Jepara</b>, <b>ojol Jepara</b>, <b>jasa antar</b> dan <b>jasa anjem antar jemput</b>. Tarif Rp5.000, GPS, QRIS, driver lokal asli Jepara.</p>
        <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1">ojek jepara</span>
          <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1">jasa antar jemput jepara</span>
          <span className="rounded-full bg-[#0F2540] text-white px-2.5 py-1">ojol jepara</span>
          <span className="rounded-full bg-[#FFC800] px-2.5 py-1 font-bold">jasa antar</span>
        </div>
        <div className="mt-6 flex items-center gap-2 text-[12px]"><Search size={14} /><span>{blogPosts.length} artikel - ojek, jasa antar jemput, ojol jepara</span></div>
      </section>

      <section className="wrap pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-[14px] border border-[hsl(var(--border))] bg-white hover:shadow-[var(--sh-md)] transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-[#F8FAFC]">
                <img src={post.ogImage} alt={post.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[11px] text-[hsl(var(--muted-foreground))]">
                  <span className="inline-flex items-center gap-1"><Clock size={11} />{post.readingTime}</span>
                  <span>•</span>
                  <span className="rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2 py-0.5 text-[10px] font-bold">{post.layout}</span>
                </div>
                <h2 className="mt-2 text-[15px] font-bold leading-[1.25] tracking-tight group-hover:text-[#0F2540] line-clamp-2">{post.title}</h2>
                <p className="mt-1.5 text-[12px] leading-[1.5] text-[hsl(var(--muted-foreground))] line-clamp-3">{post.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {post.keywords.slice(0,3).map(k => (
                    <span key={k} className="rounded-full bg-[hsl(var(--muted))] px-2 py-0.5 text-[10px] font-medium">{k}</span>
                  ))}
                </div>
                <div className="mt-auto pt-3 flex items-center gap-1 text-[12px] font-bold">Baca <ArrowRight size={12} /></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-[16px] bg-[#0F2540] text-white p-6 sm:p-8">
          <h3 className="text-[20px] font-bold">Ojek Termurah Jepara Cuma TernoAE - Jasa Antar Jemput</h3>
          <p className="mt-2 max-w-[60ch] text-[13px] leading-[1.6] text-white/80">TernoAE asli Jepara, bukan franchise luar. Tarif flat Rp5.000 + Rp2.000/km, driver lokal hafal gang, bisa QRIS & tunai, pesan tanpa aplikasi via GPS. Jasa antar jemput Jepara, jasa antar, ojol Jepara. Buka 06:00-22:00, malam standby 24 jam.</p>
          <Link to="/" className="mt-4 inline-flex rounded-full bg-[#FFC800] px-4 py-2 text-[13px] font-bold text-[#0F2540]">Pesan Ojek Sekarang - Ojol Jepara</Link>
        </div>
      </section>
    </div>
  );
}
