import { QRCodeSVG } from "qrcode.react";

type Props = {
  open: boolean;
  onClose: () => void;
  qrisString: string | null;
  amount: number;
  loading: boolean;
  error: string | null;
  onContinueToWhatsApp: () => void;
};

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const QRISModal = ({ open, onClose, qrisString, amount, loading, error, onContinueToWhatsApp }: Props) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[2000] flex items-end justify-center bg-[#0F2540]/60 p-3 backdrop-blur-[2px] sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[380px] rounded-[20px] border border-[hsl(var(--border))] bg-white p-4 shadow-[var(--sh-md)] sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[15px] font-bold tracking-tight">Bayar dengan QRIS</h3>
            <p className="mt-1 text-xs font-medium text-[hsl(var(--muted-foreground))]">
              Total <span className="font-bold text-[hsl(var(--foreground))]">{formatIDR(amount)}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[hsl(var(--border))] bg-white text-sm font-bold hover:bg-[hsl(var(--muted))]"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center rounded-[16px] border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-4">
          {loading && <div className="py-10 text-sm font-semibold text-[hsl(var(--muted-foreground))]">Membuat QRIS…</div>}
          {!loading && error && <div className="py-6 text-center text-sm font-semibold text-[hsl(var(--destructive))]">{error}</div>}
          {!loading && !error && qrisString && (
            <div className="rounded-[12px] bg-white p-3 shadow-[var(--sh-sm)]">
              <QRCodeSVG value={qrisString} size={220} level="M" includeMargin={false} />
            </div>
          )}
        </div>

        <p className="mt-3 text-center text-[11px] font-medium leading-relaxed text-[hsl(var(--muted-foreground))]">
          Scan dengan e-wallet / m-banking yang mendukung QRIS.
        </p>

        <button
          type="button"
          disabled={loading || !!error || !qrisString}
          onClick={onContinueToWhatsApp}
          className="btn-pill btn-primary mt-4 w-full disabled:opacity-50"
        >
          Lanjut ke WhatsApp
        </button>
      </div>
    </div>
  );
};

export default QRISModal;
