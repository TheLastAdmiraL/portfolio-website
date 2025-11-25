export default function About() {
  const strengths = [
    'Rapid prototyping & problem solving',
    'Strong debugging ability (firmware & software)',
    'End-to-end product development',
    'Clean architecture & scalable design',
    'Self-driven, fast learner, execution-focused',
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main About Card */}
          <div className="md:col-span-2 glass p-8 rounded-xl glow-blue-sm glass-hover space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a versatile engineer who bridges the gap between <span className="text-cyan-400 font-semibold">artificial intelligence</span>, <span className="text-cyan-400 font-semibold">mobile development</span>, and <span className="text-cyan-400 font-semibold">embedded systems</span>. My expertise spans from building intelligent computer vision pipelines to deploying production-ready applications used by thousands of users.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              In <span className="text-cyan-400 font-semibold">AI & Computer Vision</span>, I've developed real-time detection and tracking systems using YOLOv5/v8, DeepSORT, and MediaPipe, implementing multi-object tracking with stable ID association and behavior classification. I work extensively with PyTorch for inference optimization and OpenCV for advanced image processing.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              On the <span className="text-cyan-400 font-semibold">mobile front</span>, I've published apps on the Play Store using Kotlin with Jetpack Compose and Flutter, integrating Firebase services (Auth, Firestore, Analytics, AdMob) for full-stack solutions. I build cross-platform applications with responsive web counterparts using Next.js.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              In <span className="text-cyan-400 font-semibold">embedded systems</span>, I design and program microcontroller-based solutions with ESP32, Arduino, and ARM Cortex-M3 platforms. I handle sensor interfacing (DHT22, MQ135, DS18B20), wireless communication (BLE GATT, WiFi), ADC/UART protocols, and firmware development for industrial IoT applications.
            </p>
          </div>

          {/* Strengths Card */}
          <div className="glass p-8 rounded-xl glow-purple glass-hover">
            <h3 className="text-2xl font-bold font-[var(--font-space-grotesk)] text-purple-400 mb-6">
              Strengths
            </h3>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
