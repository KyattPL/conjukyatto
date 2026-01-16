// app/quiz/page.tsx

"use client";

import { useState } from "react";
import type { Metadata } from "next";

const verbs = {
  "Present Indicative": [
    "ser", "estar", "ir", "haber",
    "pensar", "querer", "entender", "empezar", "sentir", "preferir", "cerrar", "perder",
    "poder", "dormir", "volver", "almorzar", "encontrar", "recordar", "volar", "morir",
    "jugar",
    "adquirir", "inquirir",
    "pedir", "servir", "repetir", "medir", "vestir", "elegir", "corregir", "seguir",
    "poner", "salir", "traer", "hacer", "valer", "tener", "venir", "decir", "conocer", "traducir", "parecer", "ofrecer", "dirigir", "escoger", "distinguir", "extinguir"
  ],
  "Preterite": [
    "ser", "ir", "dar", "ver",
    "andar", "estar", "tener", "poder", "poner", "saber", "caber", "haber", "hacer", "querer", "venir", "traer", "decir", "conducir", "traducir", "producir",
    "pedir", "sentir", "preferir", "servir", "repetir", "dormir", "morir", "caer", "leer", "oír", "creer", "huir", "concluir"
  ],
  "Imperfect": [
    "ser", "ir", "ver"
  ],
  "Future": [
    "caber", "haber", "poder", "querer", "saber", "poner", "salir", "tener", "valer", "venir", "decir", "hacer"
  ],
  "Conditional": [
    "caber", "haber", "poder", "querer", "saber", "poner", "salir", "tener", "valer", "venir", "decir", "hacer"
  ],
  "Present Subjunctive": [
    "dar", "ir", "ser", "haber", "estar", "saber"
  ],
  "Affirmative Tú Commands": [
    "venir", "decir", "salir", "hacer", "tener", "ir", "poner", "ser"
  ],
  "Past Participle": [
    "abrir", "cubrir", "decir", "escribir", "hacer", "morir", "poner", "romper", "ver", "volver", "freír"
  ]
};

const tenseColors: Record<string, { border: string; bg: string; text: string; badgeBg: string; badgeText: string }> = {
  "Present Indicative": { border: "border-indigo-300", bg: "bg-indigo-50", text: "text-indigo-900", badgeBg: "bg-indigo-100", badgeText: "text-indigo-700" },
  "Preterite": { border: "border-emerald-300", bg: "bg-emerald-50", text: "text-emerald-900", badgeBg: "bg-emerald-100", badgeText: "text-emerald-700" },
  "Imperfect": { border: "border-teal-300", bg: "bg-teal-50", text: "text-teal-900", badgeBg: "bg-teal-100", badgeText: "text-teal-700" },
  "Future": { border: "border-cyan-300", bg: "bg-cyan-50", text: "text-cyan-900", badgeBg: "bg-cyan-100", badgeText: "text-cyan-700" },
  "Conditional": { border: "border-cyan-300", bg: "bg-cyan-50", text: "text-cyan-900", badgeBg: "bg-cyan-100", badgeText: "text-cyan-700" },
  "Present Subjunctive": { border: "border-purple-300", bg: "bg-purple-50", text: "text-purple-900", badgeBg: "bg-purple-100", badgeText: "text-purple-700" },
  "Affirmative Tú Commands": { border: "border-orange-300", bg: "bg-orange-50", text: "text-orange-900", badgeBg: "bg-orange-100", badgeText: "text-orange-700" },
  "Past Participle": { border: "border-rose-300", bg: "bg-rose-50", text: "text-rose-900", badgeBg: "bg-rose-100", badgeText: "text-rose-700" },
};

const QuizPage = () => {
  const [currentTense, setCurrentTense] = useState<string>("Click 'Next Verb' to start");
  const [currentVerb, setCurrentVerb] = useState<string>("¡Vamos!");
  const [isInitial, setIsInitial] = useState(true);

  const getRandomVerb = () => {
    const tenses = Object.keys(verbs);
    const randomTense = tenses[Math.floor(Math.random() * tenses.length)] as keyof typeof verbs;
    const verbList = verbs[randomTense];
    const randomVerb = verbList[Math.floor(Math.random() * verbList.length)];
    
    setCurrentTense(randomTense);
    setCurrentVerb(randomVerb);
    setIsInitial(false);
  };

  const theme = isInitial 
    ? { border: "border-slate-300", bg: "bg-slate-50", text: "text-slate-900", badgeBg: "bg-slate-100", badgeText: "text-slate-700" }
    : tenseColors[currentTense] || tenseColors["Present Indicative"];

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            Irregular Verb <span className="text-rose-600">Quiz</span>
          </h1>
          <p className="text-slate-500 text-lg">Practice your irregular Spanish verbs</p>
        </header>

        {/* Quiz Card */}
        <div className={`bg-white rounded-xl shadow-lg border-2 ${theme.border} overflow-hidden mb-6 transition-colors duration-300`}>
          <div className={`p-6 border-b-2 ${theme.border} ${theme.bg} transition-colors duration-300`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${theme.badgeBg} ${theme.badgeText} font-bold text-sm uppercase tracking-wider transition-colors duration-300`}>
              {currentTense}
            </div>
          </div>
          
          <div className="p-12 md:p-16 text-center">
            <div className={`text-6xl md:text-7xl font-extrabold ${theme.text} transition-colors duration-300`}>
              {currentVerb}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={getRandomVerb}
          className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-xl py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
        >
          Next Verb
        </button>

        {/* Stats or Info Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-bold text-slate-700 mb-3 text-lg">Tense Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {Object.entries(verbs).map(([tense, verbList]) => (
              <div key={tense} className="flex flex-col">
                <span className="text-slate-500 text-xs mb-1">{tense}</span>
                <span className="font-bold text-slate-800">{verbList.length} verbs</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuizPage;