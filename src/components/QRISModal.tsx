import { QRCodeSVG } from "qrcode.react";

type Props = {
  open: boolean;
  onClose: () => void;
  qrisString: string | null;
  amount: number;
  loading: boolean;
  error: string | null;
  onContinueToWhatsApp: () => void;
  paymentLink?: string | null;
};

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const QRISModal = ({ open, onClose, qrisString, amount, loading, error, onContinueToWhatsApp, paymentLink }: Props) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[2000] flex items-end justify-center bg-[#0F2540]/60 p-3 backdrop-blur-[2px] sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[380px] rounded-[16px] border border-[hsl(var(--border))] bg-white p-4 shadow-[var(--sh-md)] sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[14px] font-bold tracking-tight">Bayar dengan QRIS</h3>
            <p className="mt-1 text-[12px] font-medium text-[hsl(var(--muted-foreground))]">
              Total <span className="font-bold text-[hsl(var(--foreground))]">{formatIDR(amount)}</span>
            </p>
          </div>
          <button onClick={onClose} className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[hsl(var(--border))] bg-white text-[12px] font-bold" aria-label="Tutup">✕</button>
        </div>

        <div className="mt-3 flex flex-col items-center justify-center rounded-[12px] border border-[hsl(var(--border))] bg-[#F8FAFC] p-3">
          {loading && <div className="py-8 text-[12px] font-semibold text-[hsl(var(--muted-foreground))]">Membuat QRIS…</div>}
          {!loading && error && <div className="py-6 text-center text-[12px] font-semibold text-[hsl(var(--destructive))]">{error}</div>}
          {!loading && !error && qrisString && (
            <>
              <div className="rounded-[10px] bg-white p-2.5 shadow-sm border border-[hsl(var(--border))]">
                <QRCodeSVG value={qrisString} size={200} level="M" includeMargin={false} />
              </div>
              <div className="mt-2 text-center">
                <div className="text-[11px] font-bold">Scan dengan e-wallet / m-banking</div>
                <div className="text-[10px] text-[hsl(var(--muted-foreground))]">BCA • BRI • Mandiri • Gopay • OVO • Dana dll</div>
              </div>
              {paymentLink && (
                <a href={paymentLink} target="_blank" rel="noreferrer" className="mt-3 block w-full break-all rounded-[8px] bg-white border border-[hsl(var(--border))] px-2.5 py-2 text-center text-[11px] font-medium text-[#0F2540] underline underline-offset-2">
                  {paymentLink}
                </a>
              )}
            </>
          )}
        </div>



        <button
          type="button"
          disabled={loading || !!error || !qrisString}
          onClick={onContinueToWhatsApp}
          className="mt-3 w-full rounded-full bg-[#0F2540] px-4 py-2.5 text-[12px] font-bold text-white disabled:opacity-50"
        >
          Lanjut Konfirmasi WA
        </button>
      </div>
    </div>
  );
};

export default QRISModal;
