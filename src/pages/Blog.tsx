import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";
import { Clock, ArrowRight, MapPin, Search } from "lucide-react";

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog TernoAE - Ojek Termurah Jepara & Jasa Antar Jemput | Berita Ojol Jepara</title>
        <meta name="description" content="Berita TernoAE ojek asli Jepara termurah, jasa antar jemput Jepara, ojol Jepara, jasa antar. Tarif Rp5.000, driver lokal, 24 jam." />
        <meta name="keywords" content="blog ojek jepara, ojek termurah jepara, jasa antar jemput jepara, jasa anjem antar jemput, ojol jepara, jasa antar jepara, ojek" />
        <link rel="canonical" href="https://ternoae.web.id/blog" />
      </Helmet>

      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="wrap flex h-[52px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#0F2540] text-white font-extrabold text-[14px]">T</span>
            <span className="font-bold text-[14px] tracking-tight">TernoAE Journal</span>
            <span className="hidden sm:inline-flex ml-2 rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2 py-0.5 text-[10px] font-bold">OJEK JEPARA</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-1 rounded-full bg-[#0F2540] text-white px-3 py-1.5 text-[12px] font-bold">Pesan Ojek <ArrowRight size={12} /></Link>
        </div>
      </header>

      <section className="wrap pt-8 sm:pt-12 pb-6">
        <span className="inline-flex rounded-full bg-[#0F2540] text-white px-3 py-1 text-[11px] font-bold tracking-wide">BERITA • OJEK TERMURAH JEPARA</span>
        <h1 className="mt-4 max-w-[22ch] text-[30px] sm:text-[46px] font-bold leading-[0.9] tracking-[-0.03em]">Cerita Ojek Asli Jepara dan Jasa Antar Jemput Lokal Paling Murah</h1>
        <p className="mt-4 max-w-[64ch] text-[15px] leading-[1.6] text-[hsl(var(--muted-foreground))]">Kumpulan cerita <b>ojek Jepara</b>, <b>jasa antar jemput Jepara</b>, <b>ojol Jepara</b> dan <b>jasa antar</b>. Dari tarif Rp5.000 transparan sampai driver lokal hafal gang. Ditulis untuk warga Jepara yang butuh <b>jasa anjem antar jemput</b> cepat tanpa ribet.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#FFC800] px-3 py-1 text-[11px] font-bold">jasa antar jemput jepara</span>
          <span className="rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 text-[11px]">ojol jepara</span>
          <span className="rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 text-[11px]">jasa antar jepara</span>
          <span className="rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 text-[11px]">jasa anjem antar jemput</span>
          <span className="rounded-full bg-[#0F2540] text-white px-3 py-1 text-[11px]">ojek</span>
        </div>
      </section>

      {/* Featured - editorial large */}
      <section className="wrap pb-10">
        <Link to={`/blog/${featured.slug}`} className="group grid gap-6 lg:grid-cols-[1.3fr_0.9fr] items-start rounded-[20px] border border-[hsl(var(--border))] bg-[#F8FAFC] p-3 sm:p-4 hover:shadow-[var(--sh-md)] transition-shadow">
          <div className="overflow-hidden rounded-[14px]">
            <img src={featured.ogImage} alt={featured.title} className="w-full aspect-[16/11] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
          </div>
          <div className="p-2 sm:p-4">
            <div className="flex items-center gap-2 text-[11px] text-[hsl(var(--muted-foreground))]"><Clock size={12} />{featured.readingTime} • {new Date(featured.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })} • Ojek Termurah</div>
            <h2 className="mt-3 text-[24px] sm:text-[30px] font-bold leading-[1.05] tracking-tight group-hover:text-[#0F2540]">{featured.title}</h2>
            <p className="mt-3 text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{featured.excerpt}</p>
            <p className="mt-3 text-[13px] leading-[1.6] line-clamp-3">{featured.content.lead}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0F2540] text-white px-4 py-2 text-[12px] font-bold">Baca Artikel <ArrowRight size={14} /></div>
          </div>
        </Link>
      </section>

      {/* List editorial - not cards grid, but numbered rows */}
      <section className="wrap pb-16">
        <div className="flex items-center gap-3 mb-6"><h2 className="font-bold text-[16px]">Semua Berita • Ojek & Jasa Antar Jemput</h2><span className="h-px flex-1 bg-[hsl(var(--border))]" /><Search size={14} className="text-[hsl(var(--muted-foreground))]" /></div>
        <div className="divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
          {rest.map((post, idx) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group grid gap-4 sm:grid-cols-[72px_120px_1fr_auto] py-6 items-start hover:bg-[#F8FAFC] -mx-2 px-2 sm:mx-0 sm:px-0 transition-colors">
              <div className="hidden sm:block"><div className="text-[11px] font-bold tracking-wide text-[hsl(var(--muted-foreground))]">0{idx+2}</div><div className="mt-1 text-[11px]">{post.readingTime}</div></div>
              <img src={post.ogImage} alt={post.title} className="h-24 w-full sm:w-[120px] rounded-[10px] object-cover shrink-0" loading="lazy" />
              <div className="min-w-0">
                <h3 className="text-[18px] sm:text-[19px] font-bold leading-[1.2] tracking-tight group-hover:text-[#0F2540] line-clamp-2">{post.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-[hsl(var(--muted-foreground))] line-clamp-2">{post.excerpt}</p>
                <div className="mt-2 flex flex-wrap gap-1.5"><span className="rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2 py-0.5 text-[10px] font-bold">jasa antar jemput jepara</span><span className="rounded-full bg-[hsl(var(--muted))] px-2 py-0.5 text-[10px]">ojol jepara</span><span className="rounded-full bg-[hsl(var(--muted))] px-2 py-0.5 text-[10px]">jasa antar</span></div>
              </div>
              <span className="hidden sm:grid h-8 w-8 place-items-center rounded-full border border-[hsl(var(--border))] group-hover:bg-[#0F2540] group-hover:text-white transition-colors"><ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[14px] bg-[#0F2540] text-white p-5"><div className="text-[12px] font-bold uppercase tracking-wide text-[#FFC800]">Ojek Jepara</div><div className="mt-2 text-[14px] font-bold">Ojek termurah Jepara mulai Rp5.000</div><div className="mt-1 text-[12px] text-white/70">Tanpa franchise, tarif flat, driver lokal hafal gang.</div></div>
          <div className="rounded-[14px] bg-[#FFF8DB] border border-[#FFE27A] p-5"><div className="text-[12px] font-bold uppercase">Jasa Antar Jemput</div><div className="mt-2 text-[14px] font-bold">Antar jemput se-Jawa Tengah</div><div className="mt-1 text-[12px] text-[hsl(var(--muted-foreground))]">Jepara-Kudus-Semarang flat Rp2.000/km, 24 jam.</div></div>
          <div className="rounded-[14px] bg-white border border-[hsl(var(--border))] p-5"><div className="text-[12px] font-bold uppercase">Ojol Jepara</div><div className="mt-2 text-[14px] font-bold">Tanpa aplikasi, GPS langsung</div><div className="mt-1 text-[12px] text-[hsl(var(--muted-foreground))]">Buka ternoae.web.id, tap GPS, pesan WA, QRIS/tunai.</div></div>
        </div>
      </section>

      <footer className="border-t border-[hsl(var(--border))] bg-white">
        <div className="wrap py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[hsl(var(--muted-foreground))]">
          <span>© {new Date().getFullYear()} TernoAE • Ojek asli Jepara • Jasa antar jemput Jepara • Ojol Jepara • Jasa antar • Ojek</span>
          <Link to="/" className="inline-flex items-center gap-1 font-bold text-[#0F2540]"><MapPin size={12} />Pesan Jasa Antar Jemput</Link>
        </div>
      </footer>
    </div>
  );
}
