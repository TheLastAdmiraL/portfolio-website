export default function About() {
  const strengths = [
    'Field deployment and remote-site readiness',
    'Hands-on hardware and firmware troubleshooting',
    'Sensor integration, testing, and system debugging',
    'Cross-functional engineering teamwork',
    'Systematic fault diagnosis and documentation',
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Engineering Profile
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main About Card */}
          <div className="md:col-span-2 glass p-8 rounded-xl glow-blue-sm glass-hover space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am an Electronics and Communication Engineering graduate focused on <span className="text-cyan-400 font-semibold">embedded systems, field engineering, and real-world hardware</span>. I have developed and tested systems using ESP32, LPC1768, BLE, Wi-Fi, relays, and environmental sensors.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              At Genius Industrial Services and 3ZERO, I worked across <span className="text-cyan-400 font-semibold">electronics, firmware, sensors, actuators, PCB debugging, and system integration</span>, diagnosing issues on physical prototypes and supporting functional testing.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              Completing the Basic Mountaineering Course developed my ability to work with discipline in physically demanding, remote environments. I am open to relocation, extensive field travel, equipment setup, and on-site troubleshooting.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              I am especially interested in <span className="text-cyan-400 font-semibold">defence, UAVs, autonomous systems, surveillance, and mission-critical field engineering</span>, where reliable hardware-software integration matters under real operating constraints.
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
