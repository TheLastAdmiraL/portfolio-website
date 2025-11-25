export default function Projects() {
  const projects = [
    {
      title: 'TimerX App',
      subtitle: 'Screen Time Management App',
      tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Google Analytics', 'Next.js'],
      description: [
        'Built a production-ready Android productivity app to manage screen time using timers, overlays, wait locks, and app-usage tracking.',
        'Implemented Firebase Analytics to study user behaviour and optimise usage flows.',
        'Published on Play Store with consistent updates and feature rollouts.',
      ],
      links: [{ label: 'View on Play Store', url: 'https://play.google.com/store/apps/details?id=com.equinoxdev.timerx' }],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Vodel',
      subtitle: 'Cross-Platform Day Counter & Habit Tracker',
      tech: ['Flutter', 'Firebase Auth', 'Firestore', 'Next.js', 'AdMob'],
      description: [
        'Developed a full-stack, cross-platform day counter and habit-tracking app for Android and Web, backed by Firebase services.',
        'Implemented real-time sync using Firestore, secure authentication, and platform-consistent data structures.',
        'Built and deployed a responsive Next.js web app on a custom domain with routed navigation and SEO-friendly pages.',
      ],
      links: [
        { label: 'View on Play Store', url: 'https://play.google.com/store/apps/details?id=com.equinoxdev.vodel' },
        { label: 'Open Web App', url: 'https://www.vodelapp.com/app' },
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI-Powered Behaviour Detection System',
      subtitle: 'Intelligent Surveillance System',
      tech: ['YOLOv8', 'DeepSORT', 'MediaPipe', 'PyTorch', 'OpenCV'],
      description: [
        'Building an intelligent surveillance system capable of detecting abnormal actions like running, fighting, and loitering.',
        'Implemented a multi-object tracking pipeline using YOLOv8 + DeepSORT with stable ID association.',
        'Integrated pose estimation for behaviour classification and event pattern detection.',
        'Target output: alerting dashboard with incident snapshots and downloadable video clips.',
      ],
      links: [],
      gradient: 'from-cyan-500 to-purple-500',
    },
    {
      title: 'Real-Time Object Detection Using YOLO',
      subtitle: 'Computer Vision Pipeline',
      tech: ['Python', 'OpenCV', 'YOLOv5/YOLOv8', 'NumPy'],
      description: [
        'Implemented real-time object detection pipelines for images and live video using YOLO models.',
        'Performed preprocessing, inference, post-processing, and bounding-box visualisation using OpenCV.',
        'Achieved ~20–30 FPS on webcam with YOLOv5s while exploring speed–accuracy tradeoffs and model scaling.',
        'Evaluated CPU/GPU performance and tuned inference for deployment use cases.',
      ],
      links: [],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'IoT-Based Real-Time Environmental Monitoring System',
      subtitle: 'Embedded Systems Project',
      tech: ['ARM Cortex-M3 (LPC1768)', 'DHT22', 'MQ135', 'UART', 'ADC'],
      description: [
        'Designed and developed an embedded environmental monitoring system capable of measuring temperature, humidity, and air quality in real time.',
        'Implemented 12-bit ADC interfacing for MQ-135 to compute CO₂ ppm values and a UART communication layer for serial data output.',
        'Programmed precise timing-based data acquisition for the DHT22 sensor (start pulse, response phases, 40-bit data sequence).',
        'Demonstrated accurate environment readings with real-time alerts for threshold breaches.',
      ],
      links: [],
      gradient: 'from-green-500 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-8 rounded-xl glow-blue-sm glass-hover group"
            >
              {/* Title with gradient accent */}
              <div className="mb-4">
                <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}></div>
                <h3 className="text-2xl font-bold font-[var(--font-space-grotesk)] text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-sm font-semibold">{project.subtitle}</p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-800/60 border border-cyan-400/30 text-cyan-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-6">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <span className="text-cyan-400 mt-1.5">▹</span>
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-semibold rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
