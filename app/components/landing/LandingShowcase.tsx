import { handleDownloadClick } from "@/app/utils/analytics";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Showcase() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const images = ["/showcase1.png", "/showcase2.png", "/showcase3.png"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
             <div className="container mx-auto pt-32 pb-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] relative z-10">
               {/*  Texto */}
               <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center z-20 ">
                 <h1 className="text-5xl md:text-6xl   font-extrabold mb-4 tracking-tight text-white">
                   Welcome to <span className="text-red-500">RAWR</span>
                 </h1>
                 <p className="text-lg text-zinc-400 mb-8 max-w-md font-dm">
                   Your ultimate Valorant tracker, designed for performance and user
                   experience. Join our community and elevate your gameplay!
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
                   <button
                     onClick={() => handleDownloadClick()}
                     rel="noopener noreferrer"
                     className="cursor-pointer inline-block bg-(--bkg-border) hover:bg-red-500/20 text-center text-white font-bold py-3 px-8 rounded-lg border border-(--bkg-border) transition-all duration-300 hover:-translate-y-1 shadow-xl"
                   >
                     Download
                   </button>
                   <a
                     href="https://discord.gg/aVjwDjcw6A"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block bg-(--bkg-border) hover:bg-blue-500/60 text-center text-white font-bold py-3 px-8 rounded-lg border border-(--bkg-border) transition-all duration-300 hover:-translate-y-1 shadow-xl"
                   >
                     Join Community
                   </a>
                 </div>
               </div>
       
               {/*  Showcase */}
               <div className="w-full hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-100 flex justify-center items-center p-6 bg-(--bkg-component) border border-(--bkg-border) rounded-2xl aspect-square md:aspect-auto z-20">
                 <div className="w-full h-full relative flex justify-center items-center">
                   <Image
                     src={images[currentIdx]}
                     alt="Landing Image"
                     width={700}
                     height={700}
                     unoptimized
                     className="w-full h-auto object-contain rounded-lg"
                     priority
                   />
                 </div>
               </div>
             </div>
    );
}