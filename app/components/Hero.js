'use client';

import Image from 'next/image';

export default function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';
  
  const scrollToBmc = () => {
    document.getElementById('field-training')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/30 glow-blue">
              <Image
                src={`${basePath}/profile.png`}
                alt="Amogh H"
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
            <span aria-hidden="true">▲</span>
            BMC Qualified · ABVIMAS · September 2026
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-space-grotesk)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 pb-2">
              Amogh H
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300">
              Embedded Systems & Field Engineer
            </h2>
          </div>

          <div className="space-y-4 max-w-xl">
            <p className="text-lg md:text-xl text-slate-400">
              ECE graduate combining hands-on electronics work with the resilience and discipline to operate in demanding field environments.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              I build and troubleshoot <span className="text-cyan-400 font-semibold">embedded and connected systems</span> across sensors, firmware, communication, and mobile interfaces. My Basic Mountaineering Course training strengthens my readiness for <span className="text-cyan-400 font-semibold">remote deployments, extensive travel, and mission-focused field work</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={scrollToBmc}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 glow-blue-sm hover:scale-105"
            >
              Explore Field Profile
            </button>
            <a
              href={`${basePath}/Amogh_H_Embedded_Field_Engineer_Resume.pdf`}
              download="Amogh_H_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
