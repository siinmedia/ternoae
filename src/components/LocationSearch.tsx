import { useEffect, useRef, useState } from "react";
import type { LatLng } from "./RouteMap";
import { LocateFixed, MapPin, Flag } from "lucide-react";

export type SearchResult = { display_name: string; lat: string; lon: string; };
type Props = {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onSelect: (loc: LatLng, label: string) => void;
  onUseGPS?: () => void;
  variant: "pickup" | "destination";
};
const JATENG_VIEWBOX = "108.55,-8.30,111.70,-5.70";

export default function LocationSearch({ placeholder, value, onChange, onSelect, onUseGPS, variant }: Props) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const out = (e: MouseEvent) => { if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", out); return () => document.removeEventListener("mousedown", out);
  }, []);

  const search = (q: string) => {
    if (!q || q.trim().length < 3) { setResults([]); return; }
    setLoading(true);
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("format", "jsonv2"); url.searchParams.set("q", q); url.searchParams.set("addressdetails", "1");
    url.searchParams.set("limit", "6"); url.searchParams.set("countrycodes", "id"); url.searchParams.set("viewbox", JATENG_VIEWBOX); url.searchParams.set("bounded", "1");
    fetch(url.toString(), { headers: { Accept: "application/json" } }).then(r => r.json()).then((d: SearchResult[]) => { setResults(d || []); setOpen(true); }).catch(() => setResults([])).finally(() => setLoading(false));
  };
  const handleChange = (v: string) => { onChange(v); if (debounceRef.current) window.clearTimeout(debounceRef.current); debounceRef.current = window.setTimeout(() => search(v), 350); };

  return (
    <div ref={wrapRef} className="relative">
      <div className="relative">
        <span className={`pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 grid h-6 w-6 place-items-center rounded-full ${variant === "pickup" ? "bg-[#FFC800] text-[#0F2540]" : "bg-[#0F2540] text-white"}`}>
          {variant === "pickup" ? <MapPin size={12} /> : <Flag size={11} />}
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => results.length && setOpen(true)}
          placeholder={placeholder}
          className="input !pl-10 !pr-[68px] !py-[10px] !text-[13px]"
        />
        {onUseGPS && (
          <button type="button" onClick={onUseGPS} className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-full bg-white border border-[hsl(var(--border))] px-2.5 py-1 text-[11px] font-bold hover:bg-[hsl(var(--muted))] shadow-sm">
            <LocateFixed size={12} /> GPS
          </button>
        )}
      </div>

      {open && (loading || results.length > 0) && (
        <div className="absolute z-20 mt-1.5 max-h-56 w-full overflow-hidden rounded-[12px] border border-[hsl(var(--border))] bg-white shadow-[var(--sh-md)]">
          <div className="max-h-56 overflow-y-auto">
            {loading && <div className="px-3 py-2.5 text-[12px] font-medium text-[hsl(var(--muted-foreground))]">Mencari lokasi…</div>}
            {!loading && results.map((r, i) => (
              <button key={`${r.lat}-${r.lon}-${i}`} type="button" onClick={() => { onSelect({ lat: parseFloat(r.lat), lng: parseFloat(r.lon) }, r.display_name); setOpen(false); }} className="flex w-full gap-2 border-b border-[hsl(var(--border))]/60 px-3 py-2.5 text-left hover:bg-[hsl(var(--muted))] last:border-b-0">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[hsl(var(--muted-foreground))]" />
                <span className="text-[12px] leading-[1.4] line-clamp-2">{r.display_name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
