import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, MapPin, Clock, Check, ArrowRight, Phone, Quote } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="wrap flex h-[52px] items-center justify-between">
          <Link to="/blog" className="flex items-center gap-1.5 text-[13px] font-medium hover:underline"><ArrowLeft size={14} />Journal</Link>
          <Link to="/" className="rounded-full bg-[#0F2540] text-white px-3.5 py-1.5 text-[12px] font-bold">Pesan Ojek</Link>
        </div>
      </header>

      <article>
        {/* Header Editorial */}
        <div className="wrap pt-8 sm:pt-12 pb-6">
          <div className="max-w-[720px]">
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="rounded-full bg-[#FFC800] px-2.5 py-1 font-bold tracking-wide">OJEK JEPARA</span>
              <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1">{post.readingTime} • {new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="hidden sm:inline-flex rounded-full bg-[hsl(var(--muted))] px-2.5 py-1">{post.layout}</span>
            </div>
            <h1 className="mt-4 text-[30px] sm:text-[42px] font-bold leading-[0.95] tracking-[-0.03em]">{post.title}</h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.5] text-[hsl(var(--muted-foreground))] font-medium">{post.content.lead}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {post.keywords.map(k => (
                <span key={k} className="rounded-full bg-[hsl(var(--muted))] px-2.5 py-1 text-[11px]">{k}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Cover Image - Full width editorial */}
        <div className="wrap pb-8">
          <div className="overflow-hidden rounded-[16px] sm:rounded-[20px] border border-[hsl(var(--border))]">
            <img src={post.ogImage} alt={post.title} className="w-full aspect-[16/9] sm:aspect-[2/1] object-cover" />
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#F8FAFC] text-[11px] text-[hsl(var(--muted-foreground))] border-t border-[hsl(var(--border))]">
              <span className="flex items-center gap-1"><MapPin size={11} />Foto: {post.title} • TernoAE asli Jepara</span>
              <span className="hidden sm:inline">jasa antar jemput Jepara • ojol Jepara</span>
            </div>
          </div>
        </div>

        {/* Article Body - Different layout per post but all article style */}
        <div className="wrap pb-6">
          <div className="mx-auto max-w-[720px]">
            {/* Intro */}
            <div className="prose prose-neutral max-w-none">
              <p className="text-[16px] leading-[1.7] font-medium">Banyak yang tanya kenapa <b>TernoAE</b> bisa jadi <b>ojek termurah Jepara</b>. Jawabannya sederhana: kami bukan franchise Jakarta, kami warga Jepara yang bikin <b>jasa antar jemput Jepara</b> untuk tetangga sendiri.</p>
            </div>

            {/* Sections with varied editorial treatment */}
            <div className="mt-10 space-y-12">
              {post.content.sections.map((sec, idx) => {
                // Alternate layout per section index for variety
                const isEven = idx % 2 === 0;
                return (
                  <section key={idx} className={`${isEven ? "" : "sm:pl-6 sm:border-l-2 sm:border-[#FFC800]/50"}`}>
                    {sec.heading && (
                      <h2 className="text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-tight flex items-start gap-2">
                        <span className="mt-1 hidden sm:grid h-6 w-6 place-items-center rounded-full bg-[#0F2540] text-white text-[11px] font-bold shrink-0">{idx + 1}</span>
                        {sec.heading}
                      </h2>
                    )}
                    <p className="mt-3 text-[15px] leading-[1.7] text-[hsl(var(--foreground))]">{sec.body}</p>
                    {sec.bullets && (
                      <div className="mt-4 grid gap-2">
                        {sec.bullets.map(b => (
                          <div key={b} className="flex gap-2.5 rounded-[10px] bg-[#F8FAFC] border border-[hsl(var(--border))]/60 p-3">
                            <Check size={16} className="mt-0.5 text-[#0F2540] shrink-0" />
                            <span className="text-[14px] leading-[1.5]">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {idx === 0 && (
                      <blockquote className="mt-6 flex gap-3 rounded-[12px] bg-[#FFF8DB] border border-[#FFE27A] p-4">
                        <Quote size={18} className="shrink-0 text-[#0F2540]" />
                        <p className="text-[13px] leading-[1.6] italic">“Warga Jepara butuh ojek yang murah tapi tetap aman. Bukan ojek luar yang tidak hafal gang. Makanya TernoAE lahir sebagai <b>jasa antar jemput Jepara</b> asli.” — Tim TernoAE, Sekuro, Mlonggo</p>
                      </blockquote>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Keyword highlight box */}
            <div className="mt-12 rounded-[14px] bg-[#0F2540] text-white p-5 sm:p-6">
              <h3 className="font-bold text-[14px]">Kenapa disebut jasa anjem antar jemput?</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-white/80">Banyak warga ngetik salah <b>jasa anjem antar jemput</b> di Google. Kami sengaja tetap layani keyword itu biar yang typo tetap ketemu <b>jasa antar jemput Jepara</b> yang asli. Mau tulis <b>ojek</b>, <b>jasa antar</b>, <b>ojol jepara</b> — semua ketemu TernoAE.</p>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h3 className="font-bold text-[18px]">Pertanyaan Warga Jepara</h3>
              <div className="mt-4 grid gap-3">
                {post.content.faqs.map(([q,a]) => (
                  <details key={q} className="group rounded-[12px] border border-[hsl(var(--border))] bg-white p-4 open:bg-[#F8FAFC]">
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-semibold text-[14px]">{q}<span className="grid h-6 w-6 place-items-center rounded-full border border-[hsl(var(--border))] group-open:rotate-45 transition-transform">+</span></summary>
                    <p className="mt-3 text-[13px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2 border-t border-[hsl(var(--border))] pt-6">
              {post.keywords.map(k => (
                <span key={k} className="rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 text-[11px] font-medium hover:bg-[hsl(var(--muted))] transition-colors">{k}</span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-[16px] bg-[#0F2540] text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FFC800] opacity-10 blur-xl" />
              <h3 className="relative text-[20px] font-bold leading-[1.1]">Pesan Ojek / Jasa Antar Jemput Sekarang — Ojol Jepara</h3>
              <p className="relative mt-2 text-[13px] leading-[1.6] text-white/70">TernoAE ojek termurah Jepara & jasa antar jemput Jepara, tarif mulai Rp5.000 + Rp2.000/km, GPS, QRIS, driver lokal. Tanpa aplikasi.</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                <Link to="/" className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC800] px-5 py-2.5 text-[13px] font-bold text-[#0F2540]">Pesan Sekarang <ArrowRight size={14} /></Link>
                <a href="https://wa.me/6285155145788" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-[13px] font-bold text-white"><Phone size={14} />Chat WA</a>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between text-[13px] border-t border-[hsl(var(--border))] pt-6">
              <Link to="/blog" className="font-medium hover:underline flex items-center gap-1"><ArrowLeft size={14} />Kembali ke Journal</Link>
              <Link to="/" className="font-bold flex items-center gap-1">Pesan Ojek <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
