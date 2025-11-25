export default function Contact() {

  const contactInfo = [
    {
      icon: '👤',
      label: 'Name',
      value: 'Amogh H',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Mysuru, Karnataka, India',
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'amogh.harsha2501@gmail.com',
      link: 'mailto:amogh.harsha2501@gmail.com',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/TheLastAdmiraL',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amogh-h-62b40b244/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="glass p-8 rounded-xl glow-blue-sm">
            <h3 className="text-2xl font-bold font-[var(--font-space-grotesk)] text-cyan-400 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-200 hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-200">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="glass p-8 rounded-xl glow-purple">
            <h3 className="text-2xl font-bold font-[var(--font-space-grotesk)] text-purple-400 mb-6">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/60 border border-purple-400/30 text-purple-400 rounded-lg hover:bg-purple-400/10 hover:border-purple-400 hover:scale-110 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-400 text-sm">
          © 2025 Amogh H. Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}
