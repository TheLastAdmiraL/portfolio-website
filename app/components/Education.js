export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Education
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass p-8 rounded-xl glow-blue-sm glass-hover">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold font-[var(--font-space-grotesk)] text-white mb-2">
                  B.E. in Electronics and Communication Engineering
                </h3>
                <p className="text-cyan-400 text-lg font-semibold mb-2">
                  National Institute of Engineering (NIE), Mysuru
                </p>
              </div>
              <div className="text-slate-400 text-sm md:text-right">
                <p className="flex items-center md:justify-end">
                  <span className="mr-2">📅</span>
                  2022 – 2026 (June)
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-2xl">🎓</span>
                <p className="text-sm">
                  Pursuing a comprehensive degree in Electronics & Communication with focus on embedded systems, signal processing, and communication technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
