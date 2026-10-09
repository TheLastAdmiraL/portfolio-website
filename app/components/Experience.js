const primaryExperiences = [
  {
    role: 'Embedded & Mobile Systems Intern',
    company: 'Genius Industrial Services',
    duration: 'Sep 2025 – Jan 2026',
    location: 'Mysuru, Karnataka · Hybrid',
    description: [
      'Developed and tested an ESP32-based connected control system integrating temperature sensing, water-level sensing, relays, BLE, and Wi-Fi.',
      'Built firmware for real-time sensing, equipment control, and communication with a Flutter mobile application.',
      'Performed sensor integration, firmware debugging, and hardware-software troubleshooting during prototype development and testing.',
      'Worked across electronics, firmware, and mobile layers to diagnose issues and improve operational reliability.',
    ],
    skills: ['ESP32', 'Embedded C/C++', 'BLE GATT', 'Wi-Fi', 'Sensors', 'Relays', 'Flutter'],
  },
  {
    role: 'Embedded Systems Intern',
    company: '3ZERO',
    duration: 'Jul 2024 – Jan 2025',
    location: 'Mysuru, Karnataka · On-site',
    description: [
      'Worked hands-on with sensor interfacing, actuator control, microcontrollers, and embedded firmware.',
      'Performed PCB-level debugging and troubleshooting during prototype development.',
      'Supported integration and testing across mechanical, electrical, and software subsystems.',
      'Helped take embedded prototypes from initial development through functional system testing and real-hardware fault diagnosis.',
    ],
    skills: ['Embedded C/C++', 'Microcontrollers', 'Sensors', 'Actuators', 'PCB Debugging'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">Hands-on electronics</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Embedded Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {primaryExperiences.map((experience) => (
            <article key={experience.company} className="glass rounded-2xl p-7 md:p-8 glow-blue-sm glass-hover">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">{experience.company}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{experience.role}</h3>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
                <span>{experience.duration}</span>
                <span>{experience.location}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {experience.description.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <span className="text-cyan-300">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-700 pt-5">
                {experience.skills.map((skill) => (
                  <span key={skill} className="rounded border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/60 p-7 md:p-8">
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">Additional product experience</p>
              <h3 className="mt-3 text-xl font-bold text-white">App Development Intern</h3>
              <p className="mt-1 font-semibold text-purple-300">Regain</p>
              <p className="mt-3 text-sm text-slate-400">Jan 2026 – Apr 2026 · Bengaluru · On-site</p>
            </div>
            <div>
              <p className="leading-relaxed text-slate-300">
                Contributed to production features across the Regain and BrainPal applications, implementing and refining user-facing functionality in an existing product codebase while collaborating on testing, troubleshooting, and releases.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Kotlin', 'Jetpack Compose', 'Firebase', 'APIs'].map((skill) => (
                  <span key={skill} className="rounded border border-purple-400/30 bg-purple-400/10 px-2.5 py-1 text-xs text-purple-200">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
