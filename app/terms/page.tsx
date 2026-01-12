'use client';

import { useState } from 'react';
import { Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const termsContent = {
  es: {
    title: 'Términos y Condiciones',
    intro: 'Marabunta Labs es un proyecto personal de experimentación y aprendizaje en público (Building in Public).',
    sections: [
      {
        heading: '1. Código y Proyectos',
        text: 'Todo el código y los proyectos compartidos aquí se ofrecen "tal cual" (as is), sin garantías de ningún tipo. Eres libre de usar el código open source bajo sus respectivas licencias (generalmente MIT), pero no me hago responsable si algo falla en tu entorno.'
      },
      {
        heading: '2. Donaciones',
        text: 'Las aportaciones a través de Ko-fi son donaciones voluntarias para apoyar la creación de contenido y el mantenimiento de los servidores. No otorgan derechos de propiedad sobre los proyectos ni garantizan servicios de consultoría privada.'
      },
      {
        heading: '3. Propiedad Intelectual',
        text: 'La marca "Marabunta Labs" y el contenido original del blog/newsletter son propiedad del autor. El código fuente está disponible en GitHub bajo licencias abiertas.'
      }
    ],
    back: 'Volver al laboratorio'
  },
  en: {
    title: 'Terms of Service',
    intro: 'Marabunta Labs is a personal project for experimentation and learning in public (Building in Public).',
    sections: [
      {
        heading: '1. Code and Projects',
        text: 'All code and projects shared here are provided "as is", without warranty of any kind. You are free to use the open-source code under its respective licenses (usually MIT), but I am not liable if something breaks in your environment.'
      },
      {
        heading: '2. Donations',
        text: 'Contributions via Ko-fi are voluntary donations to support content creation and server maintenance. They do not grant ownership rights over the projects nor guarantee private consulting services.'
      },
      {
        heading: '3. Intellectual Property',
        text: 'The "Marabunta Labs" brand and original blog/newsletter content are owned by the author. Source code is available on GitHub under open licenses.'
      }
    ],
    back: 'Back to the Lab'
  }
};

export default function TermsPage() {
  const [lang, setLang] = useState<'es' | 'en'>('en');
  const t = termsContent[lang];

  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500 selection:text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold">
                <ArrowLeft size={16} /> {t.back}
            </Link>

            <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 hover:border-indigo-500 text-sm font-mono transition-all text-slate-400 hover:text-white"
            >
                <Globe size={14} />
                {lang.toUpperCase()}
            </button>
        </div>

        {/* CONTENIDO */}
        <h1 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">{t.title}</h1>
        
        <p className="text-lg text-slate-400 leading-relaxed mb-10 border-b border-slate-800 pb-8">
            {t.intro}
        </p>
        
        <div className="space-y-10">
            {t.sections.map((section, idx) => (
                <div key={idx}>
                    <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
                    <p className="leading-relaxed text-slate-400">{section.text}</p>
                </div>
            ))}
        </div>

      </div>
    </main>
  );
}