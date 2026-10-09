const capabilities = [
  'Physically demanding outdoor and remote environments',
  'Field deployments, equipment setup, and on-site troubleshooting',
  'Teamwork, discipline, endurance, and operational readiness',
  'Open to relocation and extensive field travel',
];

export default function FieldTraining() {
  return (
    <section id="field-training" className="relative overflow-hidden py-24 px-4 bg-slate-900/40">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full text-cyan-400" aria-hidden="true">
          <path fill="currentColor" d="M0,288L180,176L300,240L520,72L690,226L840,128L1030,248L1190,96L1440,272L1440,320L0,320Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-amber-300">Primary credential</p>
          <h2 className="text-4xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white">
            Basic Mountaineering Course
          </h2>
          <p className="mt-4 text-xl text-cyan-300">ABVIMAS · September 2026</p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
          <div className="glass rounded-2xl p-8 md:p-10 glow-blue-sm">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-200">
              Completed the Basic Mountaineering Course in September 2026 at the Atal Bihari Vajpayee Institute of Mountaineering and Allied Sports, building practical readiness for demanding outdoor, remote, and field-based work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Field Ready', 'Remote Environments', 'Operational Discipline', 'Team Resilience'].map((item) => (
                <span key={item} className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/75 p-8">
            <h3 className="mb-6 text-xl font-bold text-cyan-300">Field capabilities</h3>
            <ul className="space-y-5">
              {capabilities.map((capability) => (
                <li key={capability} className="flex gap-3 text-slate-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-xs text-cyan-300">✓</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
