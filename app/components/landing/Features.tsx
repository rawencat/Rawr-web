import { features } from "@/app/utils/features";


export default function Features() {
    return (
            <div className="container mx-auto pt-32 pb-12 px-6 flex flex-col gap-12 relative z-10 " id="features">
        <div className="text-center md:text-left flex flex-col items-center justify-center z-20 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Why choose <span className="text-red-500">RAWR?</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-2 max-w-xl font-dm text-center">
            RAWR offers real-time tracking, analytics, and a vibrant community
            (new) to help you improve your Valorant gameplay. Join us and take
            your skills to the next level!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`w-full flex flex-col justify-between p-6 rounded-2xl z-20 relative overflow-hidden transition-all duration-300 border min-h-[200px] ${
                feature.upcoming
                  ? "bg-zinc-900/40 border-zinc-800/50 opacity-60 grayscale-[50%] cursor-not-allowed"
                  : "bg-(--bkg-component) border-(--bkg-border) hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1"
              }`}
            >
              <div className="w-full h-full flex flex-col justify-start items-start">
                <div className="w-full flex justify-between items-start mb-6">
                  <div
                    className={`p-3 rounded-xl border ${
                      feature.upcoming
                        ? "bg-zinc-800/50 border-zinc-700/50"
                        : "bg-red-500/10 border-red-500/20"
                    }`}
                  >
                    {feature.icon}
                  </div>

                  {feature.upcoming && (
                    <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 uppercase tracking-widest backdrop-blur-md">
                      Soon
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p
                  className={`font-dm text-sm leading-relaxed ${
                    feature.upcoming ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}