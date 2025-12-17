// app/cheat-sheet/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Conjugation Cheat Sheet",
  description: "A comprehensive, compact chart of Spanish verb conjugation rules and usage.",
};

const CheatSheetPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            Spanish Verb <span className="text-indigo-600">Master Sheet</span>
          </h1>
          <p className="text-slate-500 text-lg">Conjugations, Irregularities, and Usage Rules</p>
        </header>

        {/* Masonry Layout for Compactness */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          
          {/* Present Indicative */}
          <TenseCard
            title="Present Indicative"
            color="indigo"
            usage={[
              "Facts, general truths, and current states.",
              "Habits and routines (I walk every day).",
              "Actions happening near the future (I leave tomorrow).",
            ]}
          >
            <div className="grid grid-cols-3 gap-2 mb-4">
              <CompactConjugationTable title="-AR" endings={["o", "as", "a", "amos", "áis", "an"]} />
              <CompactConjugationTable title="-ER" endings={["o", "es", "e", "emos", "éis", "en"]} />
              <CompactConjugationTable title="-IR" endings={["o", "es", "e", "imos", "ís", "en"]} />
            </div>
            <IrregularBox>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Stem-changing:</strong> <em>e→ie</em> (quiero), <em>o→ue</em> (duermo), <em>e→i</em> (pido). (Boot verbs: no change in nosotros/vosotros).</li>
                <li><strong>Yo-irregular:</strong> tengo, hago, pongo, salgo, conozco.</li>
                <li><strong>Highly Irregular:</strong> ser, estar, ir, haber.</li>
              </ul>
            </IrregularBox>
          </TenseCard>

          {/* Preterite */}
          <TenseCard
            title="Preterite (Past)"
            color="emerald"
            usage={[
              "Completed actions in the past.",
              "Actions that happened at a specific time.",
              "A sequence of events (I woke up, ate, and left).",
              "Interruptions to ongoing actions."
            ]}
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              <CompactConjugationTable title="-AR" endings={["é", "aste", "ó", "amos", "asteis", "aron"]} />
              <CompactConjugationTable title="-ER / -IR" endings={["í", "iste", "ió", "imos", "isteis", "ieron"]} />
            </div>
            <IrregularBox>
              <p className="mb-2"><strong>Irregular Stems (No accents):</strong></p>
              <div className="grid grid-cols-2 gap-x-2 text-xs">
                <span>estar → estuv-</span>
                <span>tener → tuv-</span>
                <span>poder → pud-</span>
                <span>poner → pus-</span>
                <span>hacer → hic- (3s: hizo)</span>
                <span>querer → quis-</span>
                <span>venir → vin-</span>
                <span>decir → dij- (3p: -eron)</span>
              </div>
              <div className="mt-2 pt-2 border-t border-emerald-200">
                <strong>Ser/Ir:</strong> fui, fuiste, fue, fuimos, fuisteis, fueron.
              </div>
            </IrregularBox>
          </TenseCard>

          {/* Imperfect */}
          <TenseCard
            title="Imperfect (Past)"
            color="teal"
            usage={[
              "Ongoing past actions (was walking).",
              "Past habits (used to walk).",
              "Descriptions (age, weather, feelings, appearance).",
              "Setting the scene for a story."
            ]}
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              <CompactConjugationTable title="-AR" endings={["aba", "abas", "aba", "ábamos", "abais", "aban"]} />
              <CompactConjugationTable title="-ER / -IR" endings={["ía", "ías", "ía", "íamos", "íais", "ían"]} />
            </div>
            <NoteBox>
              <p className="font-bold text-sm">Only 3 Irregulars!</p>
              <ul className="text-xs mt-1 space-y-1">
                <li><strong>Ser:</strong> era, eras, era, éramos, erais, eran</li>
                <li><strong>Ir:</strong> iba, ibas, iba, íbamos, ibais, iban</li>
                <li><strong>Ver:</strong> veía, veías, veía, veíamos, veíais, veían</li>
              </ul>
            </NoteBox>
          </TenseCard>

          {/* Future */}
          <TenseCard
            title="Future Indicative"
            color="cyan"
            usage={[
              "Actions that will happen (I will go).",
              "Solemn commands (You shall not pass).",
              "Probability/Wonder in the present (It must be 5 PM / ¿Qué hora será?)."
            ]}
          >
            <div className="text-center mb-3">
              <span className="font-bold text-lg text-cyan-700">Infinitive + Ending</span>
            </div>
            <div className="mb-4">
              <CompactConjugationTable title="All Verbs (-AR/-ER/-IR)" endings={["é", "ás", "á", "emos", "éis", "án"]} />
            </div>
            <IrregularBox>
              <p className="mb-1"><strong>Irregular Stems:</strong></p>
              <p className="text-xs italic mb-2">Add endings to these stems instead of infinitive.</p>
              <div className="grid grid-cols-2 gap-x-2 text-xs">
                <span>Hacer → har-</span>
                <span>Decir → dir-</span>
                <span>Tener → tendr-</span>
                <span>Poner → pondr-</span>
                <span>Salir → saldr-</span>
                <span>Venir → vendr-</span>
                <span>Poder → podr-</span>
                <span>Saber → sabr-</span>
                <span>Querer → querr-</span>
                <span>Haber → habr-</span>
              </div>
            </IrregularBox>
          </TenseCard>

          {/* Conditional */}
          <TenseCard
            title="Conditional Indicative"
            color="fuchsia"
            usage={[
              "Hypothetical actions (I would go).",
              "Politeness (Could you help me?).",
              "Probability/Wonder in the past (It must have been 5 PM / ¿Qué hora sería?)."
            ]}
          >
            <div className="text-center mb-3">
              <span className="font-bold text-lg text-fuchsia-700">Infinitive + Ending</span>
            </div>
            <div className="mb-4">
              <CompactConjugationTable title="All Verbs (-AR/-ER/-IR)" endings={["ía", "ías", "ía", "íamos", "íais", "ían"]} />
            </div>
            <NoteBox>
              <p className="font-bold text-sm">Same Irregulars as Future!</p>
              <p className="text-xs mt-1">
                Use the same stems (har-, tendr-, dir-, etc.) but add the conditional endings.
                <br/>
                <em>Ex: haría, tendría, diría.</em>
              </p>
            </NoteBox>
          </TenseCard>

          {/* Present Subjunctive */}
          <TenseCard
            title="Present Subjunctive"
            color="purple"
            usage={[
              "W.E.I.R.D.O: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt, Ojalá.",
              "Subject change usually required (I want YOU to go).",
              "Negative commands (No comas)."
            ]}
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              <CompactConjugationTable title="-AR" endings={["e", "es", "e", "emos", "éis", "en"]} />
              <CompactConjugationTable title="-ER / -IR" endings={["a", "as", "a", "amos", "áis", "an"]} />
            </div>
            <IrregularBox>
              <p><strong>Formation:</strong> Start with <em>Yo</em> form of present indicative, drop 'o', add opposite ending.</p>
              <p className="mt-2 text-xs"><strong>DISHES (Irregulars):</strong></p>
              <p className="text-xs italic">Dar (dé), Ir (vaya), Ser (sea), Haber (haya), Estar (esté), Saber (sepa).</p>
            </IrregularBox>
          </TenseCard>

          {/* Commands */}
          <TenseCard
            title="Imperative (Commands)"
            color="orange"
            usage={[
              "Giving direct orders or instructions.",
              "Giving advice.",
              "Granting permission."
            ]}
          >
            <div className="space-y-3">
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <h4 className="font-bold text-orange-800 text-sm mb-1">Tú (Informal)</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-xs text-gray-500">Affirmative</span>
                    <span className="font-medium">3rd Person Ind.</span>
                    <span className="block text-xs text-gray-400 italic">habla, come</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500">Negative</span>
                    <span className="font-medium">Subjunctive</span>
                    <span className="block text-xs text-gray-400 italic">no hables</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-orange-700">
                  <strong>Irregular (+):</strong> di, haz, ve, pon, sal, sé, ten, ven.
                </div>
              </div>

              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <h4 className="font-bold text-orange-800 text-sm mb-1">Usted / Nosotros / Vosotros</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>Ud/Uds/Nos:</strong> Use Subjunctive form.</li>
                  <li><strong>Vosotros (+):</strong> Infinitive - 'r' + 'd' (Hablad).</li>
                </ul>
              </div>
            </div>
          </TenseCard>

          {/* Progressive */}
          <TenseCard
            title="Progressive Tenses"
            color="blue"
            usage={[
              "Actions happening at this exact moment.",
              "Emphasizing the ongoing nature of an action.",
              "Never used for future (unlike English)."
            ]}
          >
            <div className="text-center mb-3">
              <span className="font-bold text-lg text-blue-700">Estar + Gerund</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-white p-2 rounded border text-center">
                <span className="block text-xs text-gray-500">-AR</span>
                <span className="font-bold">-ando</span>
              </div>
              <div className="bg-white p-2 rounded border text-center">
                <span className="block text-xs text-gray-500">-ER / -IR</span>
                <span className="font-bold">-iendo</span>
              </div>
            </div>
            <IrregularBox>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Double Vowels:</strong> leer → leyendo, traer → trayendo.</li>
                <li><strong>Stem-changing -IR:</strong> dormir → durmiendo, pedir → pidiendo.</li>
              </ul>
            </IrregularBox>
          </TenseCard>

          {/* Perfect Tenses */}
          <TenseCard
            title="Perfect Tenses"
            color="rose"
            usage={[
              "Present Perfect: 'Have done' (relevant to now).",
              "Past Perfect: 'Had done' (before another past action).",
              "Future Perfect: 'Will have done'."
            ]}
          >
            <div className="text-center mb-3">
              <span className="font-bold text-lg text-rose-700">Haber + Participle</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
               <div className="bg-white p-2 rounded border text-center">
                <span className="block text-xs text-gray-500">-AR</span>
                <span className="font-bold">-ado</span>
              </div>
              <div className="bg-white p-2 rounded border text-center">
                <span className="block text-xs text-gray-500">-ER / -IR</span>
                <span className="font-bold">-ido</span>
              </div>
            </div>

            <div className="bg-rose-50 p-2 rounded text-sm">
              <p className="font-bold text-rose-800 mb-1">Irregular Participles:</p>
              <div className="grid grid-cols-2 gap-x-2 text-xs italic text-gray-700">
                <span>abierto (abrir)</span>
                <span>muerto (morir)</span>
                <span>dicho (decir)</span>
                <span>puesto (poner)</span>
                <span>escrito (escribir)</span>
                <span>roto (romper)</span>
                <span>hecho (hacer)</span>
                <span>visto (ver)</span>
                <span>vuelto (volver)</span>
                <span>cubierto (cubrir)</span>
              </div>
            </div>
          </TenseCard>

        </div>
      </div>
    </main>
  );
};

// --- Components ---

const TenseCard = ({ 
  title, 
  color, 
  children, 
  usage 
}: { 
  title: string; 
  color: string; 
  children: React.ReactNode; 
  usage: string[] 
}) => {
  // Map color names to Tailwind classes dynamically
  const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
    indigo: { border: "border-indigo-200", bg: "bg-indigo-50", text: "text-indigo-800", badge: "bg-indigo-100 text-indigo-700" },
    emerald: { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-800", badge: "bg-emerald-100 text-emerald-700" },
    teal: { border: "border-teal-200", bg: "bg-teal-50", text: "text-teal-800", badge: "bg-teal-100 text-teal-700" },
    purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-800", badge: "bg-purple-100 text-purple-700" },
    orange: { border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-800", badge: "bg-orange-100 text-orange-700" },
    blue: { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-800", badge: "bg-blue-100 text-blue-700" },
    rose: { border: "border-rose-200", bg: "bg-rose-50", text: "text-rose-800", badge: "bg-rose-100 text-rose-700" },
    // Added for Future/Conditional
    cyan: { border: "border-cyan-200", bg: "bg-cyan-50", text: "text-cyan-800", badge: "bg-cyan-100 text-cyan-700" },
    fuchsia: { border: "border-fuchsia-200", bg: "bg-fuchsia-50", text: "text-fuchsia-800", badge: "bg-fuchsia-100 text-fuchsia-700" },
  };

  const theme = colorMap[color] || colorMap.indigo;

  return (
    <section className={`break-inside-avoid bg-white rounded-xl shadow-sm border ${theme.border} overflow-hidden flex flex-col`}>
      <div className={`p-3 border-b ${theme.border} ${theme.bg} flex justify-between items-center`}>
        <h2 className={`text-xl font-bold ${theme.text}`}>{title}</h2>
      </div>
      
      <div className="p-4 flex-grow">
        {/* Usage Section */}
        <div className="mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">When to use</h3>
          <ul className="space-y-1">
            {usage.map((u, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start">
                <span className={`mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${theme.bg.replace('bg-', 'bg-slate-400')}`}></span>
                {u}
              </li>
            ))}
          </ul>
        </div>

        {children}
      </div>
    </section>
  );
};

const CompactConjugationTable = ({ title, endings }: { title: string; endings: string[] }) => {
  const pronouns = ["yo", "tú", "él/ella", "nos.", "vos.", "ellos"];
  
  return (
    <div className="border rounded-lg overflow-hidden text-sm">
      <div className="bg-gray-100 text-center font-bold py-1 text-gray-600 text-xs">{title}</div>
      <div className="bg-white">
        {pronouns.map((p, i) => (
          <div key={p} className={`flex justify-between px-2 py-0.5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <span className="text-gray-400 text-xs">{p}</span>
            <span className="font-semibold text-gray-800">{endings[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const IrregularBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r text-sm text-red-900">
    {children}
  </div>
);

const NoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r text-sm text-yellow-900">
    {children}
  </div>
);

export default CheatSheetPage;