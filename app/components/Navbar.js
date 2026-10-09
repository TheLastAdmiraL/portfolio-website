'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home', mark: '01' },
  { name: 'BMC', href: '#field-training', mark: '02' },
  { name: 'Experience', href: '#experience', mark: '03' },
  { name: 'Projects', href: '#projects', mark: '04' },
  { name: 'Skills', href: '#skills', mark: '05' },
  { name: 'Education', href: '#education', mark: '06' },
  { name: 'Contact', href: '#contact', mark: '07' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const item of navItems) {
        const section = item.href.slice(1);
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav aria-label="Section navigation" className="hidden lg:flex fixed right-7 top-1/2 -translate-y-1/2 z-50">
        <div className="glass rounded-2xl p-2 glow-blue-sm">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a key={item.name} href={item.href} title={item.name} className={`group flex items-center justify-end gap-2 rounded-xl px-2 py-2 transition ${isActive ? 'bg-cyan-400/15 text-cyan-300' : 'text-slate-500 hover:bg-slate-800/70 hover:text-cyan-300'}`}>
                  <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold opacity-0 transition-all group-hover:max-w-24 group-hover:opacity-100">{item.name}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-current text-[9px] font-bold">{item.mark}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen} className="lg:hidden fixed right-4 top-4 z-50 glass p-3 rounded-lg glow-blue-sm">
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-cyan-400 transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-full bg-cyan-400 transition ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-full bg-cyan-400 transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      <div className={`lg:hidden fixed right-0 top-0 h-full w-72 border-l border-cyan-400/20 bg-slate-950/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex h-full flex-col justify-center gap-3 px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Navigate</p>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={`flex items-center gap-4 rounded-xl px-4 py-3 font-semibold transition ${isActive ? 'bg-cyan-400/15 text-cyan-300' : 'text-slate-300 hover:bg-slate-800'}`}>
                <span className="text-xs text-slate-500">{item.mark}</span>{item.name}
              </a>
            );
          })}
        </div>
      </div>

      {isOpen && <button aria-label="Close navigation" className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30" onClick={() => setIsOpen(false)} />}
    </>
  );
}
