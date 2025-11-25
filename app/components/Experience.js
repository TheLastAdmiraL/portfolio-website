export default function Experience() {
  const experiences = [
    {
      role: 'Embedded & Mobile Software Intern',
      company: 'Genius Industrial Services',
      duration: 'Sep 2025 – Present',
      location: 'Mysore, Karnataka | Hybrid',
      status: 'Ongoing — Ending Soon',
      description: [
        'Developed Flutter app with BLE GATT for real-time heater control and sensor monitoring.',
        'Built ESP32 firmware with WiFi, DS18B20 sensing, and relay-based control, improving stability and reducing BLE drops.',
        'Collaborated with hardware + product teams to integrate mobile, firmware, and backend components for pilot deployment.',
      ],
      skills: ['Flutter', 'BLE GATT', 'ESP32', 'Firmware', 'Firebase'],
      color: 'cyan',
    },
    {
      role: 'Embedded Systems Intern',
      company: '3Zero',
      duration: 'Jul 2024 – Jan 2025',
      location: 'Mysore, Karnataka | On-Site',
      status: '',
      description: [
        'Delivered embedded solutions involving sensor interfacing, PCB debugging, actuator control, and microcontroller firmware.',
        'Supported prototype-to-production work across mechanical, electrical, and software teams.',
        'Strengthened embedded C/C++, hardware debugging, and real-world system integration skills.',
      ],
      skills: ['Embedded C/C++', 'Microcontrollers', 'Sensors & Actuators', 'PCB Debugging'],
      color: 'purple',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950 glow-blue-sm"></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="glass p-6 rounded-xl glow-blue-sm glass-hover">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold font-[var(--font-space-grotesk)] text-white">
                          {exp.role}
                        </h3>
                        {exp.status && (
                          <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-400 text-cyan-400 text-xs rounded-full">
                            {exp.status}
                          </span>
                        )}
                      </div>
                      <p className={`text-lg font-semibold text-${exp.color}-400 mb-1`}>
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-slate-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                        <span className="flex items-center">
                          <span className="mr-2">📅</span>
                          {exp.duration}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">📍</span>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <span className={`text-${exp.color}-400 mt-1.5`}>▹</span>
                          <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-slate-700">
                      <p className="text-slate-400 text-xs mb-2">Skills Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-2 py-1 bg-${exp.color}-500/10 border border-${exp.color}-400/30 text-${exp.color}-300 text-xs rounded`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
