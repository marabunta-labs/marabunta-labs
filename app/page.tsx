'use client';

import { useState } from 'react';
import { Hammer, Lock, ExternalLink, Mail, Bug, Globe, ArrowDown } from 'lucide-react';
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

// --- CONFIGURACIÓN DE DATOS ---
const content = {
  es: {
    // SECCIÓN 1: IDENTIDAD DE MARCA
    brand: {
      title: 'Marabunta Labs',
      tagline: 'Caos, código y construcción constante.',
      description: 'Marabunta es un ejército de hormigas migratorias que no construye nidos permanentes, sino que avanza arrasando con todo. Este es mi laboratorio de experimentación personal: un avance imparable para lanzar productos sin mirar atrás.',
    },
    // SECCIÓN 2: EL RETO ACTUAL
    challenge: {
      badge: 'Misión Actual: Reto 2026',
      titlePrefix: '12 Proyectos en',
      titleSuffix: '12 Meses',
      subtitle: 'El objetivo es simple: construir y lanzar un producto tecnológico cada 30 días en público.',
      placeholder: 'Tu mejor email...',
      button: 'Notificarme con las novedades',
      disclaimer: 'Únete a la marabunta y sé uno de los primeros en seguir el reto.',
    },
    // SECCIÓN 3: PROYECTOS & GENERAL
    common: {
      statusBuild: 'Construyendo',
      viewProject: 'Ver Proyecto',
      footerText: '© 2026 Marabunta Labs — construido con café ☕',
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    },
    projectsData: [
      { 
        title: 'AWS CDK Visualizer', 
        desc: 'Extensión para VS Code para visualizar infraestructura como código.', 
        status: 'building', 
        link: 'https://github.com/tu-usuario/aws-cdk-viz' 
      },
      { 
        title: 'Bot Secreto', 
        desc: 'Automatización para comunidades de Telegram.', 
        status: 'locked', 
        link: '#' 
      },
      // ... resto de proyectos ...
      { title: '???', desc: 'SaaS Tool', status: 'locked', link: '#' },
      { title: '???', desc: 'IA App', status: 'locked', link: '#' },
      { title: '???', desc: 'App Móvil', status: 'locked', link: '#' },
      { title: '???', desc: 'Micro-SaaS', status: 'locked', link: '#' },
      { title: '???', desc: 'Herramienta Dev', status: 'locked', link: '#' },
      { title: '???', desc: 'App Productividad', status: 'locked', link: '#' },
      { title: '???', desc: 'Analytics Tool', status: 'locked', link: '#' },
      { title: '???', desc: 'E-commerce Plugin', status: 'locked', link: '#' },
      { title: '???', desc: 'Juego Web', status: 'locked', link: '#' },
      { title: '???', desc: 'Grand Finale', status: 'locked', link: '#' },
    ]
  },
  en: {
    brand: {
      title: 'Marabunta Labs',
      tagline: 'Chaos, code, and constant construction.',
      description: 'Marabunta refers to a legion of army ants that do not build permanent nests but march constantly, devouring everything. This lab is my unstoppable march to launch personal projects without looking back.',
    },
    challenge: {
      badge: 'Current Mission: Challenge 2026',
      titlePrefix: '12 Projects in',
      titleSuffix: '12 Months',
      subtitle: 'The goal is simple: build and ship a tech product every 30 days in public.',
      placeholder: 'Your best email...',
      button: 'Notify me of updates',
      disclaimer: 'Join the marabunta and be among the first to follow the challenge.',
    },
    common: {
      statusBuild: 'Building',
      viewProject: 'View Project',
      footerText: '© 2026 Marabunta Labs — built with coffee ☕',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    projectsData: [
      { 
        title: 'AWS CDK Visualizer', 
        desc: 'VS Code Extension for infra visualization.', 
        status: 'building', 
        link: 'https://github.com/tu-usuario/aws-cdk-viz/blob/main/README_EN.md' 
      },
      { 
        title: 'Secret Bot', 
        desc: 'Telegram Automation Community Tool.', 
        status: 'locked', 
        link: '#' 
      },
      // ... resto de proyectos ...
      { title: '???', desc: 'SaaS Tool', status: 'locked', link: '#' },
      { title: '???', desc: 'AI App', status: 'locked', link: '#' },
      { title: '???', desc: 'Mobile App', status: 'locked', link: '#' },
      { title: '???', desc: 'Micro-SaaS', status: 'locked', link: '#' },
      { title: '???', desc: 'Dev Tool', status: 'locked', link: '#' },
      { title: '???', desc: 'Productivity App', status: 'locked', link: '#' },
      { title: '???', desc: 'Analytics Tool', status: 'locked', link: '#' },
      { title: '???', desc: 'E-commerce Plugin', status: 'locked', link: '#' },
      { title: '???', desc: 'Web Game', status: 'locked', link: '#' },
      { title: '???', desc: 'Grand Finale', status: 'locked', link: '#' },
    ]
  }
};

export default function Home() {
    // Redes sociales centralizadas
    const socialLinks = [
      {
        href: 'https://x.com/marabunta_labs',
        label: 'X',
        icon: <FaXTwitter size={20} />,
        iconFooter: <FaXTwitter size={18} />,
      },
      {
        href: 'https://github.com/marabunta-labs',
        label: 'GitHub',
        icon: <FaGithub size={20} />,
        iconFooter: <FaGithub size={18} />,
      },
      {
        href: 'https://linkedin.com/in/parodo',
        label: 'LinkedIn',
        icon: <FaLinkedin size={20} />,
        iconFooter: <FaLinkedin size={18} />,
      },
    ];
  const [lang, setLang] = useState<'es' | 'en'>('en'); // Idioma por defecto
  const t = content[lang];

  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto z-50 relative">
        <div className="flex gap-4">
          {socialLinks.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 hover:border-indigo-500 text-sm font-mono transition-all active:scale-95"
        >
          <Globe size={14} />
          {lang.toUpperCase()}
        </button>
      </nav>

      {/* --- SECCIÓN 1: BRAND HERO (MARABUNTA LABS) --- */}
      <section className="relative max-w-4xl mx-auto px-6 pt-10 pb-16 text-center">
        
        {/* Logo / Icono Principal */}
        <div className="flex justify-center mb-6">
          <div className="p-5 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
            <Bug size={48} className="text-indigo-400" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
          {t.brand.title}
        </h1>
        
        <p className="text-indigo-400 font-mono text-sm md:text-base mb-6 tracking-wide uppercase opacity-90">
          {t.brand.tagline}
        </p>

        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {t.brand.description}
        </p>

        {/* Flecha decorativa para bajar */}
        <div className="mt-12 flex justify-center opacity-30 animate-bounce">
            <ArrowDown size={24} />
        </div>
      </section>

      {/* Separador Visual */}
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-4"></div>

      {/* --- SECCIÓN 2: CHALLENGE 2026 --- */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
        
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-900/30 text-indigo-300 text-sm font-bold mb-8 border border-indigo-500/30">
          <Hammer size={24} />
          <span className="text-lg md:text-2xl font-extrabold">{t.challenge.badge}</span>
        </span>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          {t.challenge.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{t.challenge.titleSuffix}</span>
        </h2>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.challenge.subtitle}
        </p>
        
        {/* Newsletter */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 max-w-lg mx-auto backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto mb-4">
              <input 
                type="email" 
                placeholder={t.challenge.placeholder} 
                className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 w-full transition-all text-white placeholder:text-slate-600"
              />
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-indigo-500/20">
                <Mail size={18} /> {t.challenge.button}
              </button>
            </div>
            <p className="text-xs text-slate-500 font-medium">{t.challenge.disclaimer}</p>
        </div>
      </section>

      {/* --- SECCIÓN 3: GRID DE PROYECTOS --- */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`relative border rounded-xl p-6 transition-all duration-300 flex flex-col justify-between ${
                project.status === 'locked' 
                  ? 'bg-slate-900/30 border-slate-800/50 opacity-50' 
                  : 'bg-slate-900 border-slate-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 group transform hover:-translate-y-1'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-slate-800 px-2 py-1 rounded">
                      {t.common.months[index]}
                  </span>
                  {project.status === 'locked' ? (
                    <Lock size={16} className="text-slate-600" />
                  ) : (
                    <div className="bg-amber-500/10 text-amber-400 text-xs px-2 py-1 rounded border border-amber-500/20 flex items-center gap-1 animate-pulse">
                      <Hammer size={12} /> {t.common.statusBuild}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                  {project.desc}
                </p>
              </div>

              {project.status !== 'locked' && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                >
                  {t.common.viewProject} <ExternalLink size={14} className="ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm font-mono text-center md:text-left">
            {t.common.footerText}
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
              >
                {item.iconFooter}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}