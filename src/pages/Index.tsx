import { useCallback, useEffect, useMemo, useState } from "react";
import RouteMap, { LatLng } from "@/components/RouteMap";
import LocationSearch from "@/components/LocationSearch";
import QRISModal from "@/components/QRISModal";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  MapPin,
  Flag,
  Clock3,
  ShieldCheck,
  Wallet,
  ArrowRight,
  Route as RouteIcon,
  LocateFixed,
  QrCode,
  Banknote,
  User,
  Phone,
  Check,
  Navigation,
  Search,
} from "lucide-react";

const BASE_FARE = 5000;
const PRICE_PER_KM = 1999;
const WHATSAPP_NUMBER = "6285155145788";
const formatIDR = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
const JATENG = { minLat: -8.3, maxLat: -5.7, minLng: 108.55, maxLng: 111.7 };
const isInJateng = (l: LatLng) => l.lat >= JATENG.minLat && l.lat <= JATENG.maxLat && l.lng >= JATENG.minLng && l.lng <= JATENG.maxLng;

function Stepper({ step }: { step: 1 | 2 | 3 }) {
  const items = [
    { n: 1, label: "Jemput", icon: MapPin, done: step > 1 },
    { n: 2, label: "Tujuan", icon: Flag, done: step > 2 },
    { n: 3, label: "Bayar", icon: Wallet, done: false },
  ] as const;
  return (
    <div className="flex items-center gap-2">
      {items.map((it, idx) => {
        const active = it.n === step;
        const done = it.done;
        return (
          <div key={it.n} className="flex items-center gap-2">
            {idx > 0 && <div className={`h-px w-5 ${done || active ? "bg-[#0F2540]" : "bg-[hsl(var(--border))]"}`} />}
            <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold transition-colors ${done ? "bg-[#0F2540] border-[#0F2540] text-white" : active ? "bg-[#FFC800] border-[#FFC800] text-[#0F2540]" : "bg-white border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]"}`}>
              {done ? <Check size={12} /> : <it.icon size={12} />}
              <span>{it.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Index() {
  const [pickup, setPickup] = useState<LatLng | null>(null);
  const [destination, setDestination] = useState<LatLng | null>(null);
  const [pickupLabel, setPickupLabel] = useState("");
  const [destLabel, setDestLabel] = useState("");
  const [selecting, setSelecting] = useState<"pickup" | "destination">("pickup");
  const [route, setRoute] = useState<LatLng[]>([]);
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [durationMin, setDurationMin] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"qris" | "tunai">("qris");
  const [qrisOpen, setQrisOpen] = useState(false);
  const [qrisLoading, setQrisLoading] = useState(false);
  const [qrisString, setQrisString] = useState<string | null>(null);
  const [qrisError, setQrisError] = useState<string | null>(null);

  useEffect(() => { document.title = "TernoAE - Pesan Ojek Jepara"; }, []);

  const reverseGeocode = useCallback(async (p: LatLng) => {
    try { const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${p.lat}&lon=${p.lng}`, { headers: { Accept: "application/json" } }); const d = await r.json(); return d.display_name || `${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}`; } catch { return `${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}`; }
  }, []);
  const checkJateng = (l: LatLng) => { if (!isInJateng(l)) { toast({ title: "Luar Jateng" }); return false; } return true; };
  const handleMapClick = useCallback(async (l: LatLng) => {
    if (!checkJateng(l)) return;
    if (selecting === "pickup") { setPickup(l); setPickupLabel("Memuat…"); setSelecting("destination"); setPickupLabel(await reverseGeocode(l)); } else { setDestination(l); setDestLabel("Memuat…"); setDestLabel(await reverseGeocode(l)); }
  }, [selecting, reverseGeocode]);
  const handlePickupDrag = useCallback(async (l: LatLng) => { if (!checkJateng(l)) return; setPickup(l); setPickupLabel("Memuat…"); setPickupLabel(await reverseGeocode(l)); }, [reverseGeocode]);
  const handleDestinationDrag = useCallback(async (l: LatLng) => { if (!checkJateng(l)) return; setDestination(l); setDestLabel("Memuat…"); setDestLabel(await reverseGeocode(l)); }, [reverseGeocode]);
  const useGPS = (target: "pickup" | "destination") => {
    if (!("geolocation" in navigator)) { toast({ title: "GPS tidak didukung" }); return; }
    toast({ title: "Mengambil GPS…" });
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const l = { lat: pos.coords.latitude, lng: pos.coords.longitude }; if (!checkJateng(l)) return;
      const label = await reverseGeocode(l); if (target === "pickup") { setPickup(l); setPickupLabel(label); } else { setDestination(l); setDestLabel(label); }
    }, () => toast({ title: "Gagal GPS" }), { enableHighAccuracy: true, timeout: 10000 });
  };
  useEffect(() => {
    if (!pickup || !destination) return;
    const ctrl = new AbortController();
    (async () => {
      setLoading(true);
      try {
        const url = `https://router.project-osrm.org/route/v1/driving/${pickup.lng},${pickup.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
        const res = await fetch(url, { signal: ctrl.signal }); const data = await res.json();
        if (data?.routes?.[0]) { const r = data.routes[0]; setRoute(r.geometry.coordinates.map((c: [number, number]) => ({ lat: c[1], lng: c[0] }))); setDistanceKm(r.distance / 1000); setDurationMin(r.duration / 60); } else toast({ title: "Rute tidak ketemu" });
      } catch { toast({ title: "Gagal muat rute" }); } finally { setLoading(false); }
    })();
    return () => ctrl.abort();
  }, [pickup, destination]);
  const price = useMemo(() => distanceKm == null ? null : Math.round(BASE_FARE + distanceKm * PRICE_PER_KM), [distanceKm]);
  const reset = () => { setPickup(null); setDestination(null); setPickupLabel(""); setDestLabel(""); setRoute([]); setDistanceKm(null); setDurationMin(null); setSelecting("pickup"); };
  const buildWA = () => [`*TernoAE*`, `Nama: ${name}`, `WA: ${phone}`, `Jemput: ${pickupLabel}`, `(${pickup?.lat.toFixed(6)}, ${pickup?.lng.toFixed(6)})`, `Tujuan: ${destLabel}`, `(${destination?.lat.toFixed(6)}, ${destination?.lng.toFixed(6)})`, `Jarak: ${distanceKm?.toFixed(2)} km`, `Estimasi: ${durationMin ? Math.round(durationMin) : "-"} mnt`, `Total: ${price != null ? formatIDR(price) : "-"}`, paymentMethod === "qris" ? "Bayar: QRIS" : "Bayar: Tunai"].join("\n");
  const openWA = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWA())}`, "_blank");
  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !destination || price == null) { toast({ title: "Lengkapi titik dulu" }); return; }
    if (!name.trim() || !phone.trim()) { toast({ title: "Isi nama & WA" }); return; }
    if (paymentMethod === "tunai") { openWA(); return; }
    setQrisOpen(true); setQrisLoading(true); setQrisError(null); setQrisString(null);
    try { const { data, error } = await supabase.functions.invoke("generate-qris", { body: { amount: price } }); if (error) throw new Error(error.message); if (!data?.qris_string) throw new Error("QRIS gagal"); setQrisString(data.qris_string); } catch (err) { setQrisError(err instanceof Error ? err.message : "Gagal"); } finally { setQrisLoading(false); }
  };
  const currentStep: 1 | 2 | 3 = !pickup ? 1 : !destination ? 2 : 3;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* FULL APP - no navbar */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.35fr_380px] min-h-screen">
        {/* MAP */}
        <div className="relative map-shell lg:sticky lg:top-0 lg:h-screen h-[46vh] sm:h-[50vh]">
          <div className="absolute inset-0">
            <RouteMap embedded pickup={pickup} destination={destination} route={route} selecting={selecting} onMapClick={handleMapClick} onPickupDrag={handlePickupDrag} onDestinationDrag={handleDestinationDrag} />
          </div>

          {/* Brand floating - compact, not navbar */}
          <div className="absolute left-3 top-3 z-[400] flex items-center gap-2">
            <span className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur border border-[hsl(var(--border))] px-3 py-1.5 shadow-sm">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0F2540] text-white font-extrabold text-[11px]">T</span>
              <span className="text-[11px] font-bold tracking-tight">TernoAE</span>
              <span className="h-3 w-px bg-[hsl(var(--border))]" />
              <span className="text-[10px] font-medium text-[hsl(var(--muted-foreground))]">Ojek termurah Jepara</span>
            </span>
          </div>

          <div className="absolute left-3 right-3 top-[48px] z-[400] flex items-center justify-between gap-2">
            <div className="rounded-full bg-white/95 backdrop-blur border border-[hsl(var(--border))] px-2 py-1 shadow-sm">
              <Stepper step={currentStep} />
            </div>
            <div className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#0F2540] text-white px-2.5 py-1 text-[10px] font-bold shadow-sm"><Navigation size={10} />{distanceKm != null ? `${distanceKm.toFixed(1)}km` : "0km"}·{durationMin != null ? `${Math.round(durationMin)}m` : "-"}</div>
          </div>

          <div className="absolute bottom-2 left-2 right-2 z-[400] flex items-center gap-1.5">
            <div className="flex items-center gap-1 rounded-full bg-white border border-[hsl(var(--border))] p-0.5 shadow-sm">
              <button type="button" onClick={() => setSelecting("pickup")} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${selecting === "pickup" ? "bg-[#FFC800] text-[#0F2540]" : "hover:bg-[hsl(var(--muted))]"}`}><MapPin size={12} />A</button>
              <button type="button" onClick={() => setSelecting("destination")} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${selecting === "destination" ? "bg-[#0F2540] text-white" : "hover:bg-[hsl(var(--muted))]"}`}><Flag size={11} />B</button>
            </div>
            <button type="button" onClick={reset} className="ml-auto rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1 text-[11px] font-semibold shadow-sm">Reset</button>
          </div>
        </div>

        {/* FORM PANEL */}
        <div className="panel-premium flex flex-col min-h-0 border-l border-[hsl(var(--border))]">
          <form onSubmit={submitOrder} className="flex-1 flex flex-col">
            <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
              <div className="space-y-1.5">
                <h1 className="text-[20px] font-bold leading-[1.05] tracking-tight">Mau ke mana hari ini?</h1>
                <p className="text-[11.5px] leading-[1.5] text-[hsl(var(--muted-foreground))]">Tap peta atau cari desa - harga langsung keluar. Cepat & aman.</p>
              </div>

              <div className="space-y-2.5">
                <div className="rounded-[10px] border border-[hsl(var(--border))] bg-white/80">
                  <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[hsl(var(--border))]/60"><span className="flex items-center gap-1 text-[10px] font-bold uppercase"><span className="grid h-4 w-4 place-items-center rounded-full bg-[#FFC800]"><MapPin size={10} /></span>Jemput</span><button type="button" onClick={() => useGPS("pickup")} className="inline-flex items-center gap-1 rounded-full bg-white border border-[hsl(var(--border))] px-2 py-0.5 text-[10px] font-bold"><LocateFixed size={10} />GPS</button></div>
                  <div className="p-2"><LocationSearch placeholder="Desa / alamat jemput…" value={pickupLabel} onChange={setPickupLabel} onSelect={(loc, lbl) => { setPickup(loc); setPickupLabel(lbl); setSelecting("destination"); }} variant="pickup" /></div>
                </div>
                <div className="flex justify-center -my-1.5"><span className="grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--border))] border-2 border-white shadow-sm"><ArrowRight size={10} className="rotate-90" /></span></div>
                <div className="rounded-[10px] border border-[hsl(var(--border))] bg-white/80">
                  <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[hsl(var(--border))]/60"><span className="flex items-center gap-1 text-[10px] font-bold uppercase"><span className="grid h-4 w-4 place-items-center rounded-full bg-[#0F2540] text-white"><Flag size={9} /></span>Tujuan</span><button type="button" onClick={() => useGPS("destination")} className="inline-flex items-center gap-1 rounded-full bg-white border border-[hsl(var(--border))] px-2 py-0.5 text-[10px] font-bold"><LocateFixed size={10} />GPS</button></div>
                  <div className="p-2"><LocationSearch placeholder="Tujuan…" value={destLabel} onChange={setDestLabel} onSelect={(loc, lbl) => { setDestination(loc); setDestLabel(lbl); }} variant="destination" /></div>
                </div>
              </div>

              <div className="rounded-[12px] border border-[hsl(var(--border))] overflow-hidden bg-white">
                <div className="flex items-center justify-between bg-[#0F2540] px-3 py-2 text-white"><span className="flex items-center gap-1 text-[10px] font-bold uppercase"><Wallet size={11} />Estimasi</span><span className="flex items-center gap-1 text-[10px] opacity-70"><RouteIcon size={10} />{distanceKm != null ? `${distanceKm.toFixed(2)}km` : "0km"}·<Clock3 size={10} />{durationMin != null ? `${Math.round(durationMin)}m` : "-"}</span></div>
                <div className="p-3 flex items-end justify-between gap-2"><div className="min-w-0"><div className="text-[22px] font-extrabold leading-none tracking-tight">{loading ? "…" : price != null ? formatIDR(price) : "-"}</div><div className="mt-1 text-[11px] text-[hsl(var(--muted-foreground))]">{formatIDR(BASE_FARE)} + {formatIDR(PRICE_PER_KM)}/km</div></div><div className="grid h-8 w-8 place-items-center rounded-full bg-[#FFF8DB] border border-[#FFE27A]"><Wallet size={14} /></div></div>
                {(!pickup || !destination) && <div className="mx-3 mb-3 rounded-[8px] bg-[#FFF8DB] border border-[#FFE27A] px-2.5 py-1.5 text-[11px] font-medium flex items-center gap-1"><Search size={11} />Lengkapi A & B untuk harga</div>}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <label className="block"><span className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase"><User size={10} />Nama</span><div className="relative"><User size={11} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" /><input value={name} onChange={e => setName(e.target.value)} placeholder="Nama" className="input !pl-7 !py-1.5 !text-[12px]" /></div></label>
                <label className="block"><span className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase"><Phone size={10} />WA</span><div className="relative"><Phone size={11} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" /><input value={phone} onChange={e => setPhone(e.target.value)} placeholder="08xxx" className="input !pl-7 !py-1.5 !text-[12px]" inputMode="numeric" /></div></label>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button type="button" onClick={() => setPaymentMethod("qris")} className={`flex items-center gap-2 rounded-[10px] border px-2.5 py-2 text-left ${paymentMethod === "qris" ? "border-[#0F2540] bg-[#0F2540] text-white" : "border-[hsl(var(--border))] bg-white"}`}><span className={`grid h-6 w-6 place-items-center rounded-[6px] ${paymentMethod === "qris" ? "bg-white/15" : "bg-[hsl(var(--muted))]"}`}><QrCode size={12} /></span><span><span className="block text-[11px] font-bold leading-none">QRIS</span><span className="block text-[9px] opacity-70">Scan</span></span></button>
                <button type="button" onClick={() => setPaymentMethod("tunai")} className={`flex items-center gap-2 rounded-[10px] border px-2.5 py-2 text-left ${paymentMethod === "tunai" ? "border-[#0F2540] bg-[#0F2540] text-white" : "border-[hsl(var(--border))] bg-white"}`}><span className={`grid h-6 w-6 place-items-center rounded-[6px] ${paymentMethod === "tunai" ? "bg-white/15" : "bg-[hsl(var(--muted))]"}`}><Banknote size={12} /></span><span><span className="block text-[11px] font-bold leading-none">Tunai</span><span className="block text-[9px] opacity-70">Driver</span></span></button>
              </div>

              <button type="submit" disabled={loading || price == null} className="btn btn--navy w-full !py-2.5 text-[12px] disabled:opacity-50"><span>{loading ? "Hitung…" : paymentMethod === "qris" ? "Pesan & QRIS" : "Pesan WA"}</span><ArrowRight size={13} /></button>
              <p className="text-center text-[10px] text-[hsl(var(--muted-foreground))] flex items-center justify-center gap-1"><ShieldCheck size={10} />Transparan · Driver Jepara</p>
            </div>
            <div className="border-t border-[hsl(var(--border))] bg-white/60 backdrop-blur px-3 py-2 text-[10px] text-[hsl(var(--muted-foreground))] flex items-center justify-between"><span>© {new Date().getFullYear()} TernoAE</span><a href="/intel" className="underline">Intel</a></div>
          </form>
        </div>
      </div>

      <QRISModal open={qrisOpen} onClose={() => setQrisOpen(false)} qrisString={qrisString} amount={price ?? 0} loading={qrisLoading} error={qrisError} onContinueToWhatsApp={openWA} />
    </div>
  );
}
