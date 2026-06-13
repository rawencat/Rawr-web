"use client"; // Pon esto arriba si estás usando Next.js App Router
import { handleDownloadClick } from "@/app/utils/analytics";
export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <nav className="bg-(--bkg-component)/80 backdrop-blur-md border border-(--bkg-border) fixed top-4 inset-x-0 mx-auto w-[90%]  text-white px-6 py-3.5 rounded-2xl z-50 shadow-xl shadow-black/20">
      <div className="w-full flex justify-between items-center">
        
        {/* Logo con un toque de brillo rojo */}
        <div className="text-2xl font-black tracking-tighter text-white cursor-pointer select-none">
          RAWR
        </div>

        {/* Links de Navegación + Botón de Acción */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection("features")}
            className="text-zinc-400 hover:text-white transition-colors duration-200 font-dm text-sm font-medium cursor-pointer"
          >
            Features
          </button>
          
          <button
            onClick={() => scrollToSection("faq")}
            className="text-zinc-400 hover:text-white transition-colors duration-200 font-dm text-sm font-medium cursor-pointer"
          >
            FAQ
          </button>

          <button
            onClick={handleDownloadClick}
            className="bg-red-600 cursor-pointer hover:bg-red-500 text-white font-dm text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-red-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Download
          </button>
        </div>

      </div>
    </nav>
  );
}