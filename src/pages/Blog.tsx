import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";
import { canonicalLink, localBusinessSchema, itemListSchema, websiteSchema } from "@/lib/seo";
import { MapPin, Clock, ArrowRight, Search } from "lucide-react";

export default function Blog() {
  const canonical = canonicalLink("/blog");
  const title = "Blog TernoAE - Berita Ojek Termurah Jepara | Tips & Info";
  const desc = "Berita terbaru TernoAE ojek asli Jepara termurah. Info tarif Rp5.000, cara pesan GPS tanpa aplikasi, driver lokal aman, ojek 24 jam se-Jawa Tengah.";
  const ogImage = "https://ternoae.web.id/og-image.png";

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content="blog ojek jepara, berita ojek jepara, ojek termurah jepara, ternoae asli jepara, tarif ojek jepara" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema(blogPosts.map(p => ({ title: p.title, slug: p.slug }))))}</script>
      </Helmet>

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
        <span className="eyebrow">Berita & Tips</span>
        <h1 className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-[1.05] max-w-[18ch]">TernoAE Asli Jepara: Ojek Termurah, Info & Cerita Driver Lokal</h1>
        <p className="mt-3 max-w-[60ch] text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">Semua tentang ojek termurah Jepara. Tarif transparan Rp5.000, cara pesan GPS tanpa aplikasi, driver lokal aman, ojek online 24 jam se-Jawa Tengah. Ditulis untuk warga Jepara.</p>

        <div className="mt-6 flex items-center gap-2 text-[12px]"><Search size={14} /><span>{blogPosts.length} artikel · Ojek Jepara termurah asli Jepara</span></div>
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
                <h2 className="mt-2 text-[16px] font-bold leading-[1.25] tracking-tight group-hover:text-[#0F2540]">{post.title}</h2>
                <p className="mt-1.5 text-[12.5px] leading-[1.5] text-[hsl(var(--muted-foreground))] line-clamp-3">{post.excerpt}</p>
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
          <h3 className="text-[20px] font-bold">Ojek Termurah Jepara Cuma TernoAE</h3>
          <p className="mt-2 max-w-[60ch] text-[13px] leading-[1.6] text-white/80">TernoAE asli Jepara, bukan franchise luar. Tarif flat Rp5.000 + Rp2.000/km, driver lokal hafal gang, bisa QRIS & tunai, pesan tanpa aplikasi via GPS. Buka 06:00-22:00, malam standby 24 jam untuk darurat.</p>
          <Link to="/" className="mt-4 inline-flex rounded-full bg-[#FFC800] px-4 py-2 text-[13px] font-bold text-[#0F2540]">Pesan Ojek Sekarang</Link>
        </div>
      </section>
    </div>
  );
}
