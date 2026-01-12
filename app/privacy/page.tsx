'use client';

import { useState } from 'react';
import { Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const privacyContent = {
  es: {
    title: 'Política de Privacidad',
    intro: 'En Marabunta Labs, me tomo tu privacidad en serio. No hay letra pequeña.',
    sections: [
      {
        heading: '1. Qué datos recojo',
        text: 'Solo recojo tu correo electrónico cuando te suscribes voluntariamente a la newsletter para recibir actualizaciones del reto. No utilizo cookies de rastreo invasivas.'
      },
      {
        heading: '2. Quién guarda tus datos',
        text: 'Uso Kit (anteriormente ConvertKit) como proveedor de servicios de email marketing. Tus datos se almacenan de forma segura en sus servidores. No vendo, alquilo ni comparto tu email con terceros.'
      },
      {
        heading: '3. Tus derechos',
        text: 'Puedes darte de baja en cualquier momento haciendo clic en el enlace "Unsubscribe" que aparece al final de cualquier correo que te envíe, o escribiéndome directamente.'
      }
    ],
    back: 'Volver al laboratorio'
  },
  en: {
    title: 'Privacy Policy',
    intro: 'At Marabunta Labs, I take your privacy seriously. No fine print.',
    sections: [
      {
        heading: '1. What data I collect',
        text: 'I only collect your email address when you voluntarily subscribe to the newsletter to receive challenge updates. I do not use invasive tracking cookies.'
      },
      {
        heading: '2. Who holds your data',
        text: 'I use Kit (formerly ConvertKit) as my email marketing service provider. Your data is securely stored on their servers. I do not sell, rent, or share your email with third parties.'
      },
      {
        heading: '3. Your rights',
        text: 'You can unsubscribe at any time by clicking the "Unsubscribe" link at the bottom of any email I send, or by contacting me directly.'
      }
    ],
    back: 'Back to the Lab'
  }
};

export default function PrivacyPage() {
  const [lang, setLang] = useState<'es' | 'en'>('en'); // Por defecto inglés
  const t = privacyContent[lang];

  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500 selection:text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER: Botón Volver y Toggle Idioma */}
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