import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { MapPin, Flag, Clock, ArrowLeft, Check, Wallet, Route as RouteIcon, ShieldCheck, Search, Zap, ArrowRight, Phone } from "lucide-react";

function LayoutRenderer({ post }: { post: typeof blogPosts[0] }) {
  if (post.layout === "hero-split") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <span className="inline-flex rounded-full bg-[#FFC800] px-2.5 py-1 text-[11px] font-bold">Asli Jepara • Jasa Antar Jemput</span>
          <h1 className="mt-3 text-[26px] sm:text-[32px] font-bold leading-[1.05] tracking-tight">{post.title}</h1>
          <p className="mt-3 text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{post.content.lead}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1 text-[11px]">ojek jepara</span>
            <span className="rounded-full bg-[#0F2540] text-white px-2.5 py-1 text-[11px]">jasa antar jemput jepara</span>
            <span className="rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2.5 py-1 text-[11px] font-bold">ojol jepara</span>
          </div>
        </div>
        <div className="rounded-[16px] overflow-hidden border border-[hsl(var(--border))] bg-white">
          <img src={post.ogImage} alt={post.title} className="w-full aspect-[4/3] object-cover" />
          <div className="p-3 text-[11px] flex items-center gap-1"><MapPin size={12} />Jasa antar jemput Jepara • Mlonggo • Tahunan • Ojol Jepara</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-[26px] sm:text-[32px] font-bold leading-[1.05] tracking-tight">{post.title}</h1>
      <p className="mt-3 text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{post.content.lead}</p>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="wrap flex h-[52px] items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 text-[13px] font-medium"><ArrowLeft size={14} />Blog Ojek Jepara</Link>
          <Link to="/" className="rounded-full bg-[#0F2540] text-white px-3 py-1.5 text-[12px] font-bold">Pesan Ojol Jepara</Link>
        </div>
      </header>

      <article className="wrap py-8">
        <div className="flex items-center gap-2 text-[11px] text-[hsl(var(--muted-foreground))]">
          <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2 py-0.5">{post.readingTime}</span>
          <span className="flex items-center gap-1"><Clock size={11} />{new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>

        <div className="mt-6">
          <LayoutRenderer post={post} />
        </div>

        <div className="mt-8 grid gap-4">
          {post.content.sections.map((sec, i) => (
            <div key={i} className="rounded-[12px] bg-white border border-[hsl(var(--border))] p-4 sm:p-5">
              {sec.heading && <h2 className="font-bold text-[16px] flex items-center gap-2">{sec.heading} <span className="rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2 py-0.5 text-[10px]">ojek • jasa antar</span></h2>}
              <p className="mt-2 text-[13.5px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{sec.body}</p>
              {sec.bullets && <ul className="mt-3 space-y-1.5">{sec.bullets.map(b => <li key={b} className="flex gap-2 text-[13px]"><Check size={14} className="mt-0.5 text-green-600 shrink-0" />{b}</li>)}</ul>}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[12px] bg-[#0F2540] text-white p-4">
          <h3 className="font-bold text-[14px] flex items-center gap-2"><Zap size={14} className="text-[#FFC800]" />Keyword Target: ojek, jasa antar jemput Jepara, ojol Jepara</h3>
          <p className="mt-2 text-[12px] leading-[1.5] text-white/80">Artikel ini mengandung keyword: {post.keywords.join(", ")}. Cocok untuk pencarian jasa anjem antar jemput, ojek, jasa antar, ojol jepara di Jepara.</p>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-[15px]">FAQ - {post.title}</h3>
          <div className="mt-3 grid gap-3">
            {post.content.faqs.map(([q,a]) => (
              <div key={q} className="rounded-[12px] border border-[hsl(var(--border))] bg-white p-4">
                <div className="font-semibold text-[13px]">{q}</div>
                <div className="mt-1 text-[12.5px] leading-[1.5] text-[hsl(var(--muted-foreground))]">{a}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {post.keywords.map(k => (
            <span key={k} className="rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2.5 py-1 text-[11px] font-medium">{k}</span>
          ))}
        </div>

        <div className="mt-10 rounded-[14px] bg-[#0F2540] text-white p-5">
          <h3 className="font-bold text-[16px]">Butuh Ojek / Jasa Antar Sekarang?</h3>
          <p className="mt-1 text-[13px] text-white/70">TernoAE ojek termurah Jepara & jasa antar jemput Jepara, tarif mulai Rp5.000 + Rp2.000/km, GPS, QRIS, driver lokal. Pesan langsung tanpa aplikasi.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/" className="inline-flex items-center gap-1 rounded-full bg-[#FFC800] px-4 py-2 text-[13px] font-bold text-[#0F2540]">Pesan Ojol Jepara <ArrowRight size={14} /></Link>
            <a href="https://wa.me/6285155145788" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-[13px] font-bold text-white"><Phone size={14} />Chat WA</a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[hsl(var(--border))] pt-6 text-[13px]">
          <Link to="/blog" className="font-medium hover:underline flex items-center gap-1"><ArrowLeft size={14} />Semua Artikel Ojek Jepara</Link>
          <Link to="/" className="flex items-center gap-1 font-bold"><MapPin size={14} />Pesan Ojek<ArrowRight size={14} /></Link>
        </div>
      </article>
    </div>
  );
}
