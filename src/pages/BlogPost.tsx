import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";
import { canonicalLink, articleSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/seo";
import { MapPin, Flag, Clock, ArrowLeft, Check, Wallet, Route as RouteIcon, ShieldCheck, Search, Zap, ArrowRight, Phone } from "lucide-react";

function LayoutHeroSplit({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
      <div>
        <span className="inline-flex rounded-full bg-[#FFC800] px-2.5 py-1 text-[11px] font-bold">Asli Jepara</span>
        <h1 className="mt-3 text-[26px] sm:text-[32px] font-bold leading-[1.05] tracking-tight">{post.title}</h1>
        <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{post.content.lead}</p>
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="rounded-[12px] border border-[hsl(var(--border))] bg-white p-3"><div className="text-[11px] font-bold uppercase">Tanpa Franchise</div><div className="mt-1 text-[13px] font-semibold">100% Lokal Jepara</div></div>
          <div className="rounded-[12px] border border-[hsl(var(--border))] bg-white p-3"><div className="text-[11px] font-bold uppercase">Tarif</div><div className="mt-1 text-[13px] font-semibold">Mulai Rp5.000</div></div>
          <div className="rounded-[12px] border border-[hsl(var(--border))] bg-white p-3"><div className="text-[11px] font-bold uppercase">Driver</div><div className="mt-1 text-[13px] font-semibold">KTP Jepara</div></div>
        </div>
      </div>
      <div className="rounded-[16px] overflow-hidden border border-[hsl(var(--border))] bg-white">
        <img src={post.ogImage} alt={post.title} className="w-full aspect-[4/3] object-cover" />
        <div className="p-4"><div className="flex items-center gap-2 text-[11px]"><MapPin size={12} />Jepara • Mlonggo • Tahunan</div></div>
      </div>
    </div>
  );
}

function LayoutComparison({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div>
      <h1 className="text-[26px] sm:text-[32px] font-bold leading-[1.05] tracking-tight max-w-[18ch]">{post.title}</h1>
      <p className="mt-3 max-w-[60ch] text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{post.content.lead}</p>
      <div className="mt-6 overflow-hidden rounded-[12px] border border-[hsl(var(--border))]">
        <div className="grid grid-cols-3 bg-[#0F2540] text-white text-[11px] font-bold uppercase"><div className="p-3">Jarak</div><div className="p-3">TernoAE</div><div className="p-3">Ojek Lain</div></div>
        {[["1 km","Rp5.000","Rp8.000-12.000"],["5 km","Rp15.000","Rp20.000-25.000"],["10 km","Rp25.000","Rp35.000-45.000"],["15 km","Rp35.000","Rp55.000+" ]].map(([j,t,l]) => (
          <div key={j} className="grid grid-cols-3 border-t border-[hsl(var(--border))] text-[13px]"><div className="p-3 font-medium">{j}</div><div className="p-3 font-bold bg-[#FFF8DB]">{t}</div><div className="p-3 text-[hsl(var(--muted-foreground))]">{l}</div></div>
        ))}
      </div>
    </div>
  );
}

function LayoutTimeline({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div>
      <h1 className="text-[26px] sm:text-[32px] font-bold leading-[1.05] tracking-tight">{post.title}</h1>
      <p className="mt-3 text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{post.content.lead}</p>
      <div className="mt-6 relative border-l-2 border-[hsl(var(--border))] pl-6 space-y-6">
        {post.content.sections[0]?.bullets?.map((b, i) => (
          <div key={i} className="relative"><span className="absolute -left-[29px] top-1 grid h-5 w-5 place-items-center rounded-full bg-[#FFC800] text-[10px] font-bold">{i+1}</span><div className="text-[13px] font-semibold">{b}</div></div>
        ))}
        <div className="rounded-[12px] bg-[#0F2540] text-white p-4 text-[13px]">Jam 22:00-06:00 tetap ada driver malam standby — cocok untuk ojek 24 jam Jepara.</div>
      </div>
    </div>
  );
}

function LayoutChecklist({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div>
      <h1 className="text-[26px] sm:text-[32px] font-bold leading-[1.05] tracking-tight">{post.title}</h1>
      <p className="mt-3 text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{post.content.lead}</p>
      <div className="mt-6 grid gap-3">
        {post.content.sections[0]?.bullets?.map((b, i) => (
          <div key={i} className="flex gap-3 rounded-[12px] border border-[hsl(var(--border))] bg-white p-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#0F2540] text-white font-bold text-[12px] shrink-0">{i+1}</span><span className="text-[13px] leading-[1.5]">{b}</span><Check size={16} className="ml-auto text-green-600 shrink-0" /></div>
        ))}
      </div>
    </div>
  );
}

function LayoutCards({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div>
      <h1 className="text-[26px] sm:text-[32px] font-bold leading-[1.05] tracking-tight">{post.title}</h1>
      <p className="mt-3 text-[14px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{post.content.lead}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {post.content.sections.map((s, i) => (
          <div key={i} className="rounded-[14px] border border-[hsl(var(--border))] bg-white p-4">
            <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFF8DB] border border-[#FFE27A]"><ShieldCheck size={14} /></span><h3 className="font-bold text-[14px]">{s.heading}</h3></div>
            <p className="mt-2 text-[13px] leading-[1.5] text-[hsl(var(--muted-foreground))]">{s.body}</p>
            {s.bullets && <ul className="mt-2 space-y-1">{s.bullets.map(b => <li key={b} className="flex gap-1.5 text-[12px]"><span className="text-green-600">•</span>{b}</li>)}</ul>}
          </div>
        ))}
      </div>
    </div>
  );
}

function LayoutCentered({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div className="mx-auto max-w-[700px] text-center">
      <span className="inline-flex rounded-full bg-[#0F2540] text-white px-3 py-1 text-[11px] font-bold">Kenapa Pilih TernoAE?</span>
      <h1 className="mt-4 text-[28px] sm:text-[36px] font-bold leading-[1.05] tracking-tight">{post.title}</h1>
      <p className="mt-4 text-[15px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{post.content.lead}</p>
      <div className="mt-8 text-left rounded-[16px] bg-white border border-[hsl(var(--border))] p-5">
        <h2 className="font-bold text-[16px]">5 Alasan Warga Jepara Pilih TernoAE</h2>
        <ol className="mt-3 space-y-2">
          {post.content.sections[0]?.bullets?.map((b, i) => <li key={i} className="flex gap-2 text-[13px]"><span className="font-bold">{i+1}.</span>{b}</li>)}
        </ol>
        <blockquote className="mt-6 border-l-4 border-[#FFC800] pl-4 text-[13px] italic leading-[1.5] text-[hsl(var(--muted-foreground))]">"{post.content.sections[1]?.body}"</blockquote>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const canonical = canonicalLink(`/blog/${post.slug}`);
  const ogImage = `https://ternoae.web.id${post.ogImage}`;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Helmet>
        <title>{`${post.title} | TernoAE Ojek Jepara`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.modifiedAt} />
        <meta property="article:tag" content={post.keywords.join(", ")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema({ title: post.title, description: post.description, slug: post.slug, publishedTime: post.publishedAt, modifiedTime: post.modifiedAt, image: ogImage, keywords: post.keywords }))}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: "Beranda", url: canonicalLink("/") }, { name: "Blog", url: canonicalLink("/blog") }, { name: post.title, url: canonical }]))}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema(post.content.faqs))}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema())}</script>
      </Helmet>

      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="wrap flex h-[52px] items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 text-[13px] font-medium"><ArrowLeft size={14} />Blog</Link>
          <Link to="/" className="rounded-full bg-[#0F2540] text-white px-3 py-1.5 text-[12px] font-bold">Pesan Ojek</Link>
        </div>
      </header>

      <article className="wrap py-8">
        <div className="flex items-center gap-2 text-[11px] text-[hsl(var(--muted-foreground))]">
          <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2 py-0.5">{post.readingTime}</span>
          <span className="flex items-center gap-1"><Clock size={11} />{new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>

        <div className="mt-6">
          {post.layout === "hero-split" && <LayoutHeroSplit post={post} />}
          {post.layout === "comparison" && <LayoutComparison post={post} />}
          {post.layout === "timeline" && <LayoutTimeline post={post} />}
          {post.layout === "checklist" && <LayoutChecklist post={post} />}
          {post.layout === "cards" && <LayoutCards post={post} />}
          {post.layout === "centered" && <LayoutCentered post={post} />}
        </div>

        <div className="mt-8 grid gap-6">
          {post.content.sections.slice(post.layout === "hero-split" ? 0 : post.layout === "centered" ? 1 : 1).map((sec, i) => (
            <div key={i} className="rounded-[12px] bg-white border border-[hsl(var(--border))] p-4 sm:p-5">
              {sec.heading && <h2 className="font-bold text-[16px]">{sec.heading}</h2>}
              <p className="mt-2 text-[13.5px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{sec.body}</p>
              {sec.bullets && <ul className="mt-3 space-y-1.5">{sec.bullets.map(b => <li key={b} className="flex gap-2 text-[13px]"><Check size={14} className="mt-0.5 text-green-600 shrink-0" />{b}</li>)}</ul>}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[14px] bg-[#0F2540] text-white p-5 sm:p-6">
          <h3 className="font-bold text-[16px]">Butuh Ojek Sekarang?</h3>
          <p className="mt-1 text-[13px] text-white/70">TernoAE ojek termurah Jepara, tarif mulai Rp5.000 + Rp2.000/km, GPS, QRIS, driver lokal. Pesan langsung tanpa aplikasi.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/" className="inline-flex items-center gap-1 rounded-full bg-[#FFC800] px-4 py-2 text-[13px] font-bold text-[#0F2540]">Pesan di TernoAE <ArrowRight size={14} /></Link>
            <a href="https://wa.me/6285155145788" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-[13px] font-bold text-white">Chat WA</a>
          </div>
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

        <div className="mt-12 flex flex-wrap gap-2">
          {post.keywords.map(k => (
            <span key={k} className="rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2.5 py-1 text-[11px] font-medium">{k}</span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[hsl(var(--border))] pt-6 text-[13px]">
          <Link to="/blog" className="font-medium hover:underline flex items-center gap-1"><ArrowLeft size={14} />Semua Artikel</Link>
          <Link to="/" className="flex items-center gap-1 font-bold"><MapPin size={14} />Pesan Ojek Jepara<ArrowRight size={14} /></Link>
        </div>
      </article>
    </div>
  );
}
