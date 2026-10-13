import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";

const makePinIcon = (label: "A" | "B", color: string, textColor = "#0F2540") => {
  const svg = `<svg width="34" height="44" viewBox="0 0 36 48" xmlns="http://www.w3.org/2000/svg"><path d="M18 2 C8 2 2 9 2 18 C2 30 18 46 18 46 C18 46 34 30 34 18 C34 9 28 2 18 2 Z" fill="${color}" stroke="#0F2540" stroke-width="1.8" stroke-linejoin="round"/><circle cx="18" cy="18" r="9" fill="#fff" stroke="#0F2540" stroke-width="1.4"/><text x="18" y="22.5" font-family="DM Sans, sans-serif" font-size="12" font-weight="800" text-anchor="middle" fill="${textColor}">${label}</text></svg>`;
  return new L.DivIcon({
    className: "",
    html: `<div style="filter: drop-shadow(0 2px 8px rgba(15,37,64,.22));">${svg}</div>`,
    iconSize: [34, 44],
    iconAnchor: [17, 42],
    popupAnchor: [0, -36],
  });
};
const pickupIcon = makePinIcon("A", "#FFC800", "#0F2540");
const destIcon = makePinIcon("B", "#0F2540", "#fff");
export type LatLng = { lat: number; lng: number };
type Props = {
  pickup: LatLng | null;
  destination: LatLng | null;
  route: LatLng[];
  selecting: "pickup" | "destination";
  onMapClick: (latlng: LatLng) => void;
  onPickupDrag: (l: LatLng) => void;
  onDestinationDrag: (l: LatLng) => void;
  embedded?: boolean;
};
function ClickHandler({ onClick }: { onClick: (l: LatLng) => void }) {
  useMapEvents({ click(e) { onClick({ lat: e.latlng.lat, lng: e.latlng.lng }); } });
  return null;
}
function FitBounds({ points, route }: { points: LatLng[]; route: LatLng[] }) {
  const map = useMap();
  useEffect(() => { setTimeout(() => map.invalidateSize(), 60); }, [map]);
  useEffect(() => {
    const all = route.length > 1 ? route : points;
    if (all.length < 1) return;
    if (all.length === 1) { map.setView([all[0].lat, all[0].lng], 14, { animate: true }); return; }
    const bounds = L.latLngBounds(all.map((p) => [p.lat, p.lng] as [number, number]));
    const pad: [number, number] = window.innerWidth < 1024 ? [24, 24] : [48, 48];
    map.fitBounds(bounds, { padding: pad });
  }, [points, route, map]);
  return null;
}
const RouteMap = ({ pickup, destination, route, selecting: _selecting, onMapClick, onPickupDrag, onDestinationDrag, embedded = false }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 0); return () => clearTimeout(t); }, []);
  const center = useMemo<[number, number]>(() => [-6.9667, 110.4167], []);
  const allPoints = [pickup, destination].filter(Boolean) as LatLng[];
  if (embedded) {
    return (
      <div className="h-full w-full relative">
        <div className="h-full w-full">
          {mounted && (
            <MapContainer center={center} zoom={11} style={{ height: "100%", width: "100%" }} scrollWheelZoom zoomControl={false} attributionControl={false}>
              <TileLayer attribution='&copy; OSM' url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" maxZoom={19} />
              <ClickHandler onClick={onMapClick} />
              {pickup && <Marker position={[pickup.lat, pickup.lng]} icon={pickupIcon} draggable eventHandlers={{ dragend: (e) => { const ll = e.target.getLatLng(); onPickupDrag({ lat: ll.lat, lng: ll.lng }); } }} />}
              {destination && <Marker position={[destination.lat, destination.lng]} icon={destIcon} draggable eventHandlers={{ dragend: (e) => { const ll = e.target.getLatLng(); onDestinationDrag({ lat: ll.lat, lng: ll.lng }); } }} />}
              {route.length > 1 && <Polyline positions={route.map((p) => [p.lat, p.lng] as [number, number])} pathOptions={{ color: "#0F2540", weight: 8, opacity: 1, lineCap: "round", lineJoin: "round" }} />}
              {route.length > 1 && <Polyline positions={route.map((p) => [p.lat, p.lng] as [number, number])} pathOptions={{ color: "#FFC800", weight: 4, opacity: 1, lineCap: "round", lineJoin: "round" }} />}
              <FitBounds points={allPoints} route={route} />
            </MapContainer>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-[16px] border border-[hsl(var(--border))] bg-white shadow-[var(--sh-sm)]">
      <div className="h-[360px] w-full lg:h-[420px]">
        {mounted && (
          <MapContainer center={center} zoom={10} style={{ height: "100%", width: "100%" }} scrollWheelZoom zoomControl={false} attributionControl={false}>
            <TileLayer attribution='&copy; OSM' url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" maxZoom={19} />
            <ClickHandler onClick={onMapClick} />
            {pickup && <Marker position={[pickup.lat, pickup.lng]} icon={pickupIcon} draggable eventHandlers={{ dragend: (e) => { const ll = e.target.getLatLng(); onPickupDrag({ lat: ll.lat, lng: ll.lng }); } }} />}
            {destination && <Marker position={[destination.lat, destination.lng]} icon={destIcon} draggable eventHandlers={{ dragend: (e) => { const ll = e.target.getLatLng(); onDestinationDrag({ lat: ll.lat, lng: ll.lng }); } }} />}
            {route.length > 1 && <Polyline positions={route.map((p) => [p.lat, p.lng] as [number, number])} pathOptions={{ color: "#0F2540", weight: 8, opacity: 1, lineCap: "round", lineJoin: "round" }} />}
            {route.length > 1 && <Polyline positions={route.map((p) => [p.lat, p.lng] as [number, number])} pathOptions={{ color: "#FFC800", weight: 4, opacity: 1, lineCap: "round", lineJoin: "round" }} />}
            <FitBounds points={allPoints} route={route} />
          </MapContainer>
        )}
      </div>
    </div>
  );
};
export default RouteMap;
