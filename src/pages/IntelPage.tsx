import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Search, FileCheck, MapPinned, Package, Lock, ArrowRight, Menu, X, Zap } from "lucide-react";

const WHATSAPP = "6285155145788";

const services = [
  { id: "osint", title: "OSINT Data", desc: "Pencarian informasi dari sumber publik seperti media sosial & website - legal & hati-hati.", price: 20000, Icon: Search },
  { id: "background", title: "Cek Latar Belakang", desc: "Verifikasi identitas dan reputasi secara legal.", price: 30000, Icon: Shield },
  { id: "digital", title: "Jejak Digital", desc: "Audit keberadaan online individu atau brand.", price: 25000, Icon: FileCheck },
  { id: "security", title: "Konsultasi Keamanan", desc: "Saran perlindungan data dan privasi yang praktis.", price: 20000, Icon: Lock },
  { id: "suruh", title: "Jasa Suruh", desc: "Pengambilan barang / tugas ringan di wilayah Jepara.", price: 20000, Icon: Package },
  { id: "lapangan", title: "Verifikasi Lapangan", desc: "Pengecekan alamat atau lokasi usaha secara langsung.", price: 50000, Icon: MapPinned },
] as const;

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export default function IntelPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Intel Service - TernoAE";
    document.documentElement.classList.add("js-reveal");
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const order = (s: (typeof services)[number]) => {
    const text = `Permintaan Intel Service\n\nLayanan: ${s.title}\nHarga: ${formatIDR(s.price)}\n\nDetail:\n- (isi kebutuhan)`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="site-head">
        <div className="wrap site-head__inner">
          <a href="/" className="brand" aria-label="TernoAE Beranda">
            <span className="brand__logo">T</span>
            <span className="brand__text"><span className="brand__name">TernoAE</span><span className="brand__tag">Intel Service</span></span>
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li><a href="/" className="nav__link">Beranda</a></li>
              <li><a href="/#pesan" className="nav__link">Pesan</a></li>
              <li><a href="/intel" className="nav__link">Intel</a></li>
              <li style={{ marginLeft: 10 }}><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn btn--gold"><span>WhatsApp</span></a></li>
            </ul>
          </nav>
          <button className="nav-toggle" type="button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <div className={`nav-drawer ${menuOpen ? "is-open" : ""}`}>
          <div className="nav-drawer__inner">
            <ul className="nav-drawer__list">
              <li><Link to="/" className="nav-drawer__link" onClick={() => setMenuOpen(false)}><ArrowLeft size={16} /> Beranda</Link></li>
              <li><a href="/#pesan" className="nav-drawer__link" onClick={() => setMenuOpen(false)}>Pesan Ojek</a></li>
            </ul>
            <div className="nav-drawer__cta"><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn btn--gold btn--block">Chat WhatsApp</a></div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__copy reveal">
            <span className="eyebrow">Layanan Tambahan · Legal & Hati-hati</span>
            <h1 className="hero__title">Intel Service <span className="hl">Riset & Verifikasi</span></h1>
            <p className="hero__lead">Butuh cek latar belakang, jejak digital, atau verifikasi lapangan di Jepara? Pilih layanan, harga transparan, proses bertanggung jawab.</p>
            <div className="hero__actions">
              <a href="#layanan" className="btn btn--gold btn--lg">Lihat Layanan <ArrowRight size={18} /></a>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Permintaan khusus Intel Service:\n\n- ")}`} target="_blank" rel="noreferrer" className="btn btn--outline btn--lg">Ajukan Custom</a>
            </div>
            <div className="hero__stats">
              <div><span className="hero__stat-num">6</span><span className="hero__stat-label">Layanan siap</span></div>
              <div><span className="hero__stat-num">Mulai 20k</span><span className="hero__stat-label">Harga transparan</span></div>
              <div><span className="hero__stat-num">Jepara</span><span className="hero__stat-label">Fokus lokal</span></div>
            </div>
          </div>
          <div className="hero__media reveal">
            <div className="card" style={{ minHeight: 380 }}>
              <span className="card__icon card__icon--gold"><Zap size={20} /></span>
              <span className="card__title">Proses hati-hati</span>
              <span className="card__text">Semua layanan berbasis sumber publik & permintaan resmi. Tanpa akses ilegal, tanpa janji berlebihan. Komunikasi jelas via WhatsApp.</span>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-[12px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-3">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-[hsl(var(--muted-foreground))]">Respon</div>
                  <div className="mt-1 font-semibold">Cepat via WA</div>
                </div>
                <div className="rounded-[12px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-3">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-[hsl(var(--muted-foreground))]">Legalitas</div>
                  <div className="mt-1 font-semibold">Legal & aman</div>
                </div>
              </div>
            </div>
            <div className="hero__badge">
              <span className="hero__badge-icon"><Shield size={20} /></span>
              <span><span className="hero__badge-title">Aman & Bertanggung Jawab</span><span className="hero__badge-text">Fokus Jepara, tanpa akses ilegal.</span></span>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="section section--paper">
        <div className="wrap">
          <div className="sec-head sec-head--rule reveal">
            <span className="sec-index">01</span>
            <div><span className="eyebrow">Daftar Layanan</span><h2 className="sec-title">Pilih yang kamu butuh</h2></div>
          </div>
          <ul className="elist reveal">
            {services.map((s, i) => (
              <li key={s.id} className="elist__item">
                <span className="elist__num">0{i + 1}</span>
                <span className="elist__body">
                  <span className="elist__title flex items-center gap-2"><s.Icon size={18} /> {s.title} · {formatIDR(s.price)}</span>
                  <span className="elist__text">{s.desc}</span>
                </span>
                <button type="button" onClick={() => order(s)} className="elist__go" aria-label={`Pesan ${s.title}`}><ArrowRight size={14} /></button>
              </li>
            ))}
          </ul>
          <div className="mt-8 reveal">
            <div className="cta">
              <span className="eyebrow eyebrow--light">Custom Request</span>
              <h2 className="cta__title">Butuh di luar daftar?</h2>
              <p className="cta__text">Ceritakan kebutuhanmu - kami bantu carikan solusi legal & aman, spesifik untuk Jepara.</p>
              <div className="flex flex-wrap gap-3">
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Permintaan khusus Intel Service:\n\n- ")}`} target="_blank" rel="noreferrer" className="btn btn--gold btn--lg">Ajukan Permintaan</a>
                <Link to="/" className="btn btn--ghost-light btn--lg">Kembali ke Beranda</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap"><div className="foot__bottom"><p>© {new Date().getFullYear()} TernoAE · Intel Service</p><Link to="/">Beranda →</Link></div></div>
      </footer>
    </div>
  );
}
