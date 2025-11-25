export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['Python', 'C/C++', 'Kotlin', 'Dart', 'JavaScript', 'Embedded C', 'Java'],
    },
    {
      title: 'Frameworks',
      icon: '🛠️',
      skills: ['OpenCV', 'PyTorch (inference)', 'MediaPipe', 'Flask', 'Streamlit', 'Next.js', 'Flutter', 'Jetpack Compose'],
    },
    {
      title: 'AI & CV Tools',
      icon: '🤖',
      skills: ['YOLOv5/YOLOv8', 'OpenCV DNN', 'DeepSORT', 'NumPy', 'Pandas', 'Matplotlib'],
    },
    {
      title: 'Mobile & Cloud',
      icon: '📱',
      skills: ['Firebase (Auth, Firestore, Analytics, AdMob)', 'Jetpack Compose'],
    },
    {
      title: 'Embedded & Hardware',
      icon: '⚡',
      skills: ['ESP32', 'Arduino', 'LPC1768 (ARM Cortex-M3)', 'Sensors (DHT22, MQ135, DS18B20)', 'BLE GATT'],
    },
    {
      title: 'Tools',
      icon: '🔧',
      skills: ['Git', 'Figma', 'Blender', 'Jupyter/Colab'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl glow-blue-sm glass-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold font-[var(--font-space-grotesk)] text-cyan-400">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-800/60 border border-cyan-400/30 text-slate-300 text-sm rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
