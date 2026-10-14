import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, MapPin, Clock, Check, ArrowRight, Phone, Quote, Search } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.title} | TernoAE - Ojek Jepara</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://ternoae.web.id/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={`https://ternoae.web.id/blog/${post.slug}`} />
        <meta property="og:image" content={`https://ternoae.web.id${post.ogImage}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="wrap flex h-[52px] items-center justify-between">
          <Link to="/blog" className="flex items-center gap-1.5 text-[13px] font-medium hover:underline"><ArrowLeft size={14} />Blog</Link>
          <div className="flex items-center gap-2">
            <Link to="/" className="hidden sm:inline-flex text-[12px]">Beranda</Link>
            <Link to="/" className="rounded-full bg-[#0F2540] text-white px-3.5 py-1.5 text-[12px] font-bold">Pesan Ojek</Link>
          </div>
        </div>
      </header>

      <article>
        <div className="wrap pt-8 sm:pt-12">
          <div className="max-w-[760px]">
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="rounded-full bg-[#FFC800] px-2.5 py-1 font-bold">OJEK JEPARA</span>
              <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1 flex items-center gap-1"><Clock size={11} />{post.readingTime}</span>
              <span className="rounded-full bg-[hsl(var(--muted))] px-2.5 py-1">{new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>

            <h1 className="mt-4 text-[30px] sm:text-[42px] font-bold leading-[0.95] tracking-[-0.03em]">{post.title}</h1>
            
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-[#0F2540] text-white px-2.5 py-1 text-[11px]">jasa antar jemput jepara</span>
              <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1 text-[11px]">ojol jepara</span>
              <span className="rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1 text-[11px]">jasa antar jepara</span>
              <span className="rounded-full bg-[#FFF8DB] border border-[#FFE27A] px-2.5 py-1 text-[11px] font-bold">ojek</span>
            </div>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.5] font-medium text-[hsl(var(--foreground))] border-l-4 border-[#FFC800] pl-4">{post.content.lead}</p>

            <div className="mt-6 flex items-center gap-3 text-[12px] text-[hsl(var(--muted-foreground))]">
              <span className="flex items-center gap-1"><span className="h-6 w-6 rounded-full bg-[#0F2540] text-white grid place-items-center text-[10px] font-bold">T</span>TernoAE • Ojek Asli Jepara</span>
              <span>•</span>
              <span className="flex items-center gap-1"><MapPin size={11} />Jepara, Jawa Tengah</span>
            </div>
          </div>
        </div>

        <div className="wrap mt-8">
          <div className="max-w-[760px] mx-auto overflow-hidden rounded-[16px] sm:rounded-[20px] border border-[hsl(var(--border))]">
            <img src={post.ogImage} alt={`${post.title} - ojek jepara jasa antar jemput jepara ojol jepara`} className="w-full aspect-[16/10] object-cover" />
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#F8FAFC] text-[11px] text-[hsl(var(--muted-foreground))] border-t border-[hsl(var(--border))]">
              <span>Foto: {post.title} • TernoAE asli Jepara</span>
              <span className="hidden sm:inline">jasa anjem antar jemput • ojek • jasa antar</span>
            </div>
          </div>
        </div>

        <div className="wrap mt-10 pb-12 grid gap-8 lg:grid-cols-[1fr_220px] items-start">
          <div className="max-w-[720px]">
            <div className="prose max-w-none">
              <p className="text-[16px] leading-[1.7]">Kalau cari <b>ojek jepara</b> di Google, banyak yang muncul franchise luar. <b>TernoAE</b> beda: ini <b>jasa antar jemput Jepara</b> asli, dibuat warga Sekuro Mlonggo untuk warga Jepara. Bukan cuma <b>ojek</b>, tapi juga <b>jasa antar</b> barang, makanan, dokumen. Semua disebut warga dengan berbagai istilah: <b>ojol jepara</b>, <b>jasa anjem antar jemput</b> (typo yang sering), <b>jasa antar jemput jepara</b>. Kami tangkap semua keyword itu biar yang butuh <b>ojek termurah Jepara</b> tetap ketemu TernoAE.</p>
            </div>

            <div className="mt-10 space-y-12">
              {post.content.sections.map((sec, idx) => (
                <section key={idx} id={`sec-${idx}`} className="scroll-mt-[80px]">
                  {sec.heading && (
                    <h2 className="text-[20px] sm:text-[24px] font-bold leading-[1.2] tracking-tight flex gap-3">
                      <span className="hidden sm:grid h-7 w-7 place-items-center rounded-full bg-[#0F2540] text-white text-[12px] font-bold shrink-0 mt-0.5">{idx + 1}</span>
                      <span>{sec.heading} <span className="text-[#FFC800]">•</span> <span className="text-[12px] font-medium text-[hsl(var(--muted-foreground))]">ojek jepara</span></span>
                    </h2>
                  )}
                  <p className="mt-3 text-[15px] leading-[1.7] text-[hsl(var(--foreground))]">{sec.body}</p>
                  {sec.bullets && (
                    <div className="mt-4 grid gap-2.5">
                      {sec.bullets.map(b => (
                        <div key={b} className="flex gap-3 rounded-[12px] bg-[#F8FAFC] border border-[hsl(var(--border))]/60 p-3.5">
                          <Check size={16} className="mt-0.5 text-[#0F2540] shrink-0" />
                          <span className="text-[14px] leading-[1.5]">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {idx === 0 && (
                    <blockquote className="mt-6 flex gap-3 rounded-[14px] bg-[#0F2540] text-white p-5">
                      <Quote size={20} className="shrink-0 text-[#FFC800]" />
                      <div>
                        <p className="text-[14px] leading-[1.6] italic">Warga Jepara butuh <b>ojek</b> yang murah tapi tetap aman. Bukan ojek luar yang tidak hafal gang. Makanya TernoAE lahir sebagai <b>jasa antar jemput Jepara</b> asli dan <b>ojol Jepara</b> lokal.</p>
                        <div className="mt-2 text-[11px] text-white/60">— Tim TernoAE, Sekuro, Mlonggo • Ojek Asli Jepara</div>
                      </div>
                    </blockquote>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-[14px] border border-[#FFE27A] bg-[#FFF8DB] p-5">
              <h3 className="font-bold text-[14px] flex items-center gap-2">Kenapa tangkap typo jasa anjem antar jemput? <span className="rounded-full bg-[#0F2540] text-white px-2 py-0.5 text-[10px]">SEO</span></h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-[hsl(var(--muted-foreground))]">Banyak warga salah ketik <b>jasa anjem antar jemput</b> di Google. Kami sengaja buat artikel ini mengandung keyword typo itu, plus <b>jasa antar jemput jepara</b>, <b>jasa antar jepara</b>, <b>ojol jepara</b>, dan <b>ojek</b> agar yang butuh ojek tetap ketemu TernoAE asli Jepara. Ini strategi SEO page one untuk ojek Jepara.</p>
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-[18px]">FAQ - Ojek Jepara & Jasa Antar Jemput</h3>
              <p className="mt-1 text-[13px] text-[hsl(var(--muted-foreground))]">Pertanyaan paling sering tentang <b>ojek</b>, <b>jasa antar jemput Jepara</b>, <b>ojol Jepara</b>, <b>jasa antar</b>.</p>
              <div className="mt-4 grid gap-3">
                {post.content.faqs.map(([q,a]) => (
                  <details key={q} className="group rounded-[12px] border border-[hsl(var(--border))] bg-white p-4 open:bg-[#F8FAFC] open:shadow-sm">
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-semibold text-[14px]">{q}<span className="grid h-6 w-6 place-items-center rounded-full border border-[hsl(var(--border))] group-open:rotate-45 transition-transform">+</span></summary>
                    <p className="mt-3 text-[13px] leading-[1.6] text-[hsl(var(--muted-foreground))]">{a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 border-t border-[hsl(var(--border))] pt-6">
              {post.keywords.map(k => (
                <span key={k} className="rounded-full bg-white border border-[hsl(var(--border))] px-3 py-1 text-[11px] font-medium hover:bg-[#0F2540] hover:text-white hover:border-[#0F2540] transition-colors">{k}</span>
              ))}
            </div>

            <div className="mt-10 rounded-[16px] bg-[#0F2540] text-white p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FFC800] opacity-10 blur-xl" />
              <h3 className="relative text-[20px] font-bold leading-[1.1]">Butuh Ojek / Jasa Antar Jemput Sekarang? Ojol Jepara Siap.</h3>
              <p className="relative mt-2 text-[13px] leading-[1.6] text-white/70">TernoAE ojek termurah Jepara & jasa antar jemput Jepara, tarif mulai Rp5.000 + Rp2.000/km, GPS, QRIS, driver lokal. Pesan langsung tanpa aplikasi di ternoae.web.id.</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                <Link to="/" className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC800] px-5 py-2.5 text-[13px] font-bold text-[#0F2540]">Pesan Ojol Jepara <ArrowRight size={14} /></Link>
                <a href="https://wa.me/6285155145788" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-[13px] font-bold text-white"><Phone size={14} />Chat WA Ojek</a>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block sticky top-[80px] space-y-4">
            <div className="rounded-[12px] border border-[hsl(var(--border))] bg-white p-4">
              <h4 className="font-bold text-[13px]">Daftar Isi</h4>
              <ol className="mt-3 space-y-2">
                {post.content.sections.map((s, i) => (
                  <li key={i}><a href={`#sec-${i}`} className="text-[12px] leading-[1.4] text-[hsl(var(--muted-foreground))] hover:text-[#0F2540] hover:underline">{i+1}. {s.heading || `Bagian ${i+1}`}</a></li>
                ))}
                <li><a href="#" className="text-[12px] text-[hsl(var(--muted-foreground))] hover:text-[#0F2540]">FAQ - Ojek Jepara</a></li>
              </ol>
            </div>
            <div className="rounded-[12px] bg-[#FFF8DB] border border-[#FFE27A] p-4">
              <div className="font-bold text-[13px]">Jasa Antar Jemput Jepara</div>
              <div className="mt-1 text-[11px] leading-[1.4] text-[hsl(var(--muted-foreground))]">Ojek, jasa antar, ojol Jepara, jasa anjem antar jemput — semua satu pintu di TernoAE.</div>
              <Link to="/" className="mt-3 inline-flex rounded-full bg-[#0F2540] text-white px-3 py-1.5 text-[11px] font-bold">Pesan Sekarang</Link>
            </div>
          </aside>
        </div>

        <div className="wrap mt-16 pb-12">
          <h3 className="font-bold text-[16px]">Baca Juga - Ojek Jepara & Jasa Antar Jemput</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map(r => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="group rounded-[12px] border border-[hsl(var(--border))] bg-white overflow-hidden hover:shadow-[var(--sh-sm)] transition-shadow">
                <img src={r.ogImage} alt={r.title} className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform" />
                <div className="p-3"><div className="text-[12px] font-bold line-clamp-2 leading-[1.3]">{r.title}</div><div className="mt-1 text-[11px] text-[hsl(var(--muted-foreground))] line-clamp-2">{r.excerpt}</div></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="wrap pb-12 flex items-center justify-between border-t border-[hsl(var(--border))] pt-6 text-[13px]">
          <Link to="/blog" className="font-medium hover:underline flex items-center gap-1"><ArrowLeft size={14} />Semua Berita Ojek Jepara</Link>
          <Link to="/" className="font-bold flex items-center gap-1"><MapPin size={14} />Pesan Jasa Antar Jemput<ArrowRight size={14} /></Link>
        </div>
      </article>
    </div>
  );
}
