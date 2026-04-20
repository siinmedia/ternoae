import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="brutal-lg bg-background p-6 max-w-md w-full text-center">

        {/* TITLE */}
        <div className="text-5xl font-black mb-2">404</div>

        {/* SUBTITLE */}
        <div className="text-sm font-black uppercase mb-2">
          Halaman tidak ditemukan
        </div>

        {/* DESC */}
        <div className="text-xs opacity-70 mb-4 leading-relaxed">
          Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
          Periksa kembali alamat URL atau kembali ke halaman utama.
        </div>

        {/* PATH INFO (optional tapi keren) */}
        <div className="brutal bg-muted px-3 py-2 text-[10px] mb-4 break-all">
          {location.pathname}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2 justify-center">
          <Link
            to="/"
            className="brutal-btn bg-primary px-4 py-2 text-xs font-black uppercase"
          >
            Beranda
          </Link>

          <Link
            to="/intel"
            className="brutal-btn px-4 py-2 text-xs font-black uppercase"
          >
            Layanan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;