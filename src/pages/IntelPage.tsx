import { useState } from "react";
import { Link } from "react-router-dom";

const WHATSAPP = "6285155145788";

const services = [
  {
    id: "osint",
    title: "OSINT Data",
    desc: "Pencarian informasi dari sumber publik seperti media sosial dan website.",
    price: 20000,
  },
  {
    id: "background",
    title: "Cek Latar Belakang",
    desc: "Verifikasi identitas dan reputasi secara legal.",
    price: 30000,
  },
  {
    id: "digital",
    title: "Jejak Digital",
    desc: "Audit keberadaan online individu atau brand.",
    price: 25000,
  },
  {
    id: "security",
    title: "Konsultasi Keamanan",
    desc: "Saran perlindungan data dan privasi.",
    price: 20000,
  },
  {
    id: "suruh",
    title: "Jasa Suruh",
    desc: "Pengambilan barang atau tugas ringan di wilayah Jepara.",
    price: 20000,
  },
  {
    id: "lapangan",
    title: "Verifikasi Lapangan",
    desc: "Pengecekan alamat atau lokasi usaha secara langsung.",
    price: 50000,
  },
];

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export default function IntelPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const order = (s: any) => {
    const text = `
Permintaan Intel Service

Layanan: ${s.title}
Harga: ${formatIDR(s.price)}

Detail:
- (isi kebutuhan)
`;
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* HEADER */}
      <div className="border-b-[1.3px] border-black bg-primary">
        <div className="container py-4 flex items-center justify-between">
          
          {/* LEFT: HOME */}
          <Link
            to="/"
            className="text-xs font-black uppercase underline"
          >
            Home
          </Link>

          {/* CENTER: TITLE */}
          <div className="text-center">
            <div className="text-xl font-black uppercase">
              Intel Service
            </div>
            <div className="text-[10px] opacity-80">
              Riset data & verifikasi berbasis permintaan
            </div>
          </div>

          {/* RIGHT: kosong biar balance */}
          <div className="w-[40px]" />
        </div>
      </div>

      <main className="container py-6 space-y-4">

        {/* LIST MENU */}
        <div className="brutal-lg bg-background divide-y-[1.3px] divide-black">
          {services.map((s) => (
            <div
              key={s.id}
              className={`flex items-start gap-3 p-4 ${
                selected === s.id ? "bg-primary" : ""
              }`}
            >
              {/* LEFT */}
              <div className="flex-1">
                <div className="text-sm font-black uppercase">
                  {s.title}
                </div>

                <div className="text-xs opacity-70 mt-1">
                  {s.desc}
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right shrink-0">
                <div className="text-sm font-black">
                  {formatIDR(s.price)}
                </div>

                <button
                  onClick={() => {
                    setSelected(s.id);
                    order(s);
                  }}
                  className="brutal-btn mt-2 px-3 py-1 text-[10px] font-black uppercase"
                >
                  Pesan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bawah */}
        <div className="brutal-lg bg-background p-4">
          <div className="text-sm font-black uppercase mb-2">
            Permintaan Khusus
          </div>

          <div className="text-xs opacity-70 mb-3">
            Untuk kebutuhan di luar daftar layanan, kirim permintaan custom.
          </div>

          <button
            onClick={() => {
              const text = "Permintaan khusus Intel Service:\n\n- ";
              window.open(
                `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
            className="brutal-btn bg-primary px-4 py-2 text-xs font-black uppercase"
          >
            Ajukan Permintaan
          </button>
        </div>

      </main>
    </div>
  );
}