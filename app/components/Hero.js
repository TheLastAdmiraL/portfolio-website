'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
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
                src="/profile.png"
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
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-space-grotesk)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 pb-2">
              Amogh H
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300">
              Full-Stack Mobile, AI & Embedded Systems Engineer
            </h2>
          </div>

          <div className="space-y-4 max-w-xl">
            <p className="text-lg md:text-xl text-slate-400">
              Building intelligent systems at the intersection of AI, mobile, and embedded hardware.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              I specialize in developing <span className="text-cyan-400 font-semibold">real-time computer vision systems</span> with YOLO and DeepSORT, crafting <span className="text-cyan-400 font-semibold">production-ready mobile applications</span> with Kotlin and Flutter, and building <span className="text-cyan-400 font-semibold">robust embedded solutions</span> for IoT and industrial applications. From concept to deployment, I deliver scalable, intelligent systems that solve real-world problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 glow-blue-sm hover:scale-105"
            >
              View Projects
            </button>
            <a
              href="/resume.pdf"
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
