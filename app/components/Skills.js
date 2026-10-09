const skillCategories = [
  {
    title: 'Embedded Systems',
    eyebrow: 'Core',
    skills: ['ESP32', 'LPC1768 ARM Cortex-M3', 'Arduino', 'Embedded C/C++', 'Firmware Development', 'PCB Debugging'],
  },
  {
    title: 'Sensors & Interfaces',
    eyebrow: 'Hardware',
    skills: ['DHT22', 'MQ135', 'DS18B20', 'Water-Level Sensors', 'ADC', 'UART', 'BLE GATT', 'Wi-Fi', 'Relays'],
  },
  {
    title: 'System Development',
    eyebrow: 'Field',
    skills: ['Hardware-Software Integration', 'Prototyping', 'Testing', 'Fault Diagnosis', 'Actuator Control', 'Technical Documentation'],
  },
  {
    title: 'Programming',
    eyebrow: 'Languages',
    skills: ['C/C++', 'Embedded C', 'Python', 'Kotlin', 'Dart', 'JavaScript'],
  },
  {
    title: 'AI & Computer Vision',
    eyebrow: 'Surveillance',
    skills: ['YOLOv5/v8', 'OpenCV', 'DeepSORT', 'MediaPipe', 'PyTorch Inference'],
  },
  {
    title: 'Software',
    eyebrow: 'Supporting',
    skills: ['Flutter', 'Jetpack Compose', 'Firebase', 'Git', 'APIs'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">Technical toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-white">Capabilities</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <article key={category.title} className={`rounded-2xl p-6 glass glass-hover ${index < 3 ? 'border-cyan-400/40' : ''}`}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{category.eyebrow}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
