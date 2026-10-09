const featuredProjects = [
  {
    title: 'IoT-Based Environmental Monitoring System',
    subtitle: 'Embedded sensing and real-time telemetry',
    tech: ['LPC1768', 'ARM Cortex-M3', 'DHT22', 'MQ135', 'UART', 'ADC'],
    description: [
      'Developed a real-time temperature, humidity, and air-quality monitoring system.',
      'Interfaced DHT22 and MQ135 sensors with an LPC1768 microcontroller and implemented 12-bit ADC acquisition.',
      'Built UART data output, sensor timing logic, threshold alerts, and tested system response under changing conditions.',
    ],
  },
  {
    title: 'AI Behaviour Detection & Surveillance',
    subtitle: 'Detection, tracking, and event analysis',
    tech: ['YOLOv8', 'DeepSORT', 'MediaPipe', 'PyTorch', 'OpenCV'],
    description: [
      'Developed a surveillance pipeline for detecting and tracking people and identifying running, fighting, and loitering events.',
      'Combined YOLO detection with DeepSORT multi-object tracking and stable target IDs.',
      'Integrated pose estimation and behavioural analysis around real-time monitoring and automated alerts.',
    ],
  },
];

const additionalProducts = [
  {
    title: 'TimerX',
    description: 'Android screen-time management app built with Kotlin, Jetpack Compose, and Firebase.',
    url: 'https://play.google.com/store/apps/details?id=com.equinoxdev.timerx',
  },
  {
    title: 'Vodel',
    description: 'Cross-platform day counter and habit tracker built with Flutter, Firestore, and Next.js.',
    url: 'https://www.vodelapp.com/app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">Selected technical work</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-white">Field-Relevant Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className="glass rounded-2xl p-8 glow-blue-sm glass-hover">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Featured 0{index + 1}</span>
              <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-1 text-sm font-semibold text-cyan-300">{project.subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded bg-slate-800 px-2.5 py-1 text-xs text-cyan-200">{tech}</span>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {project.description.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <span className="text-cyan-300">▹</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-lg font-bold text-slate-200">Additional software products</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalProducts.map((product) => (
              <a key={product.title} href={product.url} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-slate-700 bg-slate-950/60 p-5 transition hover:border-purple-400/50 hover:bg-slate-900">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-purple-300">{product.title}</h4>
                    <p className="mt-1 text-sm text-slate-400">{product.description}</p>
                  </div>
                  <span className="text-purple-300">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
