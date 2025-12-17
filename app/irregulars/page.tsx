// app/irregulars/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irregular Spanish Verbs",
  description: "A compact chart of common irregular Spanish verbs and patterns.",
};

const IrregularsPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            Irregular <span className="text-rose-600">Verb Chart</span>
          </h1>
          <p className="text-slate-500 text-lg">Common irregularities, stem changes, and mnemonics</p>
        </header>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

          {/* Present Indicative */}
          <TenseCard
            title="Present Indicative"
            color="indigo"
            patterns={[
              "The 'Big 4' are completely irregular.",
              "'Yo-Go' verbs only change in the first person (yo).",
              "Boot verbs (stem-changers) do NOT change in nosotros/vosotros."
            ]}
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              <CompactConjugationTable title="Ser" forms={["soy", "eres", "es", "somos", "sois", "son"]} />
              <CompactConjugationTable title="Estar" forms={["estoy", "estás", "está", "estamos", "estáis", "están"]} />
              <CompactConjugationTable title="Ir" forms={["voy", "vas", "va", "vamos", "vais", "van"]} />
              <CompactConjugationTable title="Haber" forms={["he", "has", "ha", "hemos", "habéis", "han"]} />
            </div>
            <IrregularBox title='"Yo-Go" & ZCO Verbs'>
              <p className="mb-1 text-xs text-gray-600">Irregular only in <strong>Yo</strong> form:</p>
              <div className="grid grid-cols-2 gap-x-2 text-sm font-medium">
                <span>Tener → <strong>tengo</strong></span>
                <span>Hacer → <strong>hago</strong></span>
                <span>Poner → <strong>pongo</strong></span>
                <span>Salir → <strong>salgo</strong></span>
                <span>Traer → <strong>traigo</strong></span>
                <span>Decir → <strong>digo</strong></span>
                <span>Conocer → <strong>conozco</strong></span>
                <span>Saber → <strong>sé</strong></span>
              </div>
            </IrregularBox>
          </TenseCard>

          {/* Preterite */}
          <TenseCard
            title="Preterite (Past)"
            color="emerald"
            patterns={[
              "Irregular stems have NO accents.",
              "Endings for irregular stems: -e, -iste, -o, -imos, -isteis, -ieron.",
              "J-stems drop the 'i' in ellos form (-eron)."
            ]}
          >
            <div className="space-y-3">
              <div className="bg-emerald-50 p-2 rounded border border-emerald-100">
                <h4 className="font-bold text-emerald-800 text-sm mb-1">The "Super" Irregulars</h4>
                <div className="grid grid-cols-1 gap-2">
                  <CompactConjugationTable title="Ser / Ir" forms={["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"]} />
                  <div className="text-xs grid grid-cols-2 gap-2 mt-1">
                    <p><strong>Dar:</strong> di, diste, dio...</p>
                    <p><strong>Ver:</strong> vi, viste, vio...</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded border">
                  <span className="block text-xs font-bold text-gray-500 mb-1">U-Stem</span>
                  <ul className="text-sm space-y-0.5">
                    <li>Estar → <strong>estuv-</strong></li>
                    <li>Tener → <strong>tuv-</strong></li>
                    <li>Poder → <strong>pud-</strong></li>
                    <li>Poner → <strong>pus-</strong></li>
                    <li>Saber → <strong>sup-</strong></li>
                  </ul>
                </div>
                <div className="bg-white p-2 rounded border">
                  <span className="block text-xs font-bold text-gray-500 mb-1">I-Stem & J-Stem</span>
                  <ul className="text-sm space-y-0.5">
                    <li>Hacer → <strong>hic-</strong> <span className="text-[10px] text-gray-400">(3s: hizo)</span></li>
                    <li>Querer → <strong>quis-</strong></li>
                    <li>Venir → <strong>vin-</strong></li>
                    <li className="border-t pt-1 mt-1">Decir → <strong>dij-</strong></li>
                    <li>Traer → <strong>traj-</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </TenseCard>

          {/* Imperfect */}
          <TenseCard
            title="Imperfect (Past)"
            color="teal"
            patterns={[
              "The most regular tense in Spanish.",
              "Only three verbs are irregular."
            ]}
          >
            <div className="grid grid-cols-1 gap-2">
              <CompactConjugationTable title="Ser" forms={["era", "eras", "era", "éramos", "erais", "eran"]} />
              <CompactConjugationTable title="Ir" forms={["iba", "ibas", "iba", "íbamos", "ibais", "iban"]} />
              <CompactConjugationTable title="Ver" forms={["veía", "veías", "veía", "veíamos", "veíais", "veían"]} />
            </div>
          </TenseCard>

          {/* Future & Conditional */}
          <TenseCard
            title="Future & Conditional Stems"
            color="cyan"
            patterns={[
              "These two tenses share the EXACT same irregular stems.",
              "Endings are added to these stems instead of the infinitive.",
              "There are three main patterns of irregularity."
            ]}
          >
            <div className="space-y-3">
              <div className="bg-cyan-50 p-2 rounded border border-cyan-100">
                <h4 className="font-bold text-cyan-800 text-sm mb-1">1. Drop the 'E'</h4>
                <div className="grid grid-cols-2 gap-x-2 text-sm">
                  <span>Poder → <strong>podr-</strong></span>
                  <span>Querer → <strong>querr-</strong></span>
                  <span>Saber → <strong>sabr-</strong></span>
                  <span>Haber → <strong>habr-</strong></span>
                  <span>Caber → <strong>cabr-</strong></span>
                </div>
              </div>

              <div className="bg-cyan-50 p-2 rounded border border-cyan-100">
                <h4 className="font-bold text-cyan-800 text-sm mb-1">2. Swap vowel for 'D'</h4>
                <div className="grid grid-cols-2 gap-x-2 text-sm">
                  <span>Tener → <strong>tendr-</strong></span>
                  <span>Poner → <strong>pondr-</strong></span>
                  <span>Salir → <strong>saldr-</strong></span>
                  <span>Venir → <strong>vendr-</strong></span>
                  <span>Valer → <strong>valdr-</strong></span>
                </div>
              </div>

              <div className="bg-cyan-50 p-2 rounded border border-cyan-100">
                <h4 className="font-bold text-cyan-800 text-sm mb-1">3. Shorten the Stem</h4>
                <div className="grid grid-cols-2 gap-x-2 text-sm">
                  <span>Hacer → <strong>har-</strong></span>
                  <span>Decir → <strong>dir-</strong></span>
                </div>
              </div>
            </div>
          </TenseCard>

          {/* Subjunctive */}
          <TenseCard
            title="Present Subjunctive"
            color="purple"
            patterns={[
              "DISHES: The acronym for the 6 irregular verbs.",
              "Used for Wishes, Emotions, Doubts (WEIRDO)."
            ]}
          >
            <div className="grid grid-cols-2 gap-2 mb-2">
              <CompactConjugationTable title="Dar" forms={["dé", "des", "dé", "demos", "deis", "den"]} />
              <CompactConjugationTable title="Estar" forms={["esté", "estés", "esté", "estemos", "estéis", "estén"]} />
              <CompactConjugationTable title="Haber" forms={["haya", "hayas", "haya", "hayamos", "hayáis", "hayan"]} />
              <CompactConjugationTable title="Ir" forms={["vaya", "vayas", "vaya", "vayamos", "vayáis", "vayan"]} />
              <CompactConjugationTable title="Saber" forms={["sepa", "sepas", "sepa", "sepamos", "sepáis", "sepan"]} />
              <CompactConjugationTable title="Ser" forms={["sea", "seas", "sea", "seamos", "seáis", "sean"]} />
            </div>
          </TenseCard>

          {/* Commands */}
          <TenseCard
            title="Affirmative 'Tú' Commands"
            color="orange"
            patterns={[
              "Short, punchy, one-syllable words.",
              "Mnemonic: 'Vin Diesel has ten weapons' (Ven Di Sal Haz Ten Ve Pon Sé)."
            ]}
          >
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <span className="block text-xs text-gray-500">Venir</span>
                <span className="font-bold text-orange-800">Ven</span>
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <span className="block text-xs text-gray-500">Decir</span>
                <span className="font-bold text-orange-800">Di</span>
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <span className="block text-xs text-gray-500">Salir</span>
                <span className="font-bold text-orange-800">Sal</span>
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <span className="block text-xs text-gray-500">Hacer</span>
                <span className="font-bold text-orange-800">Haz</span>
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <span className="block text-xs text-gray-500">Tener</span>
                <span className="font-bold text-orange-800">Ten</span>
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <span className="block text-xs text-gray-500">Ir</span>
                <span className="font-bold text-orange-800">Ve</span>
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <span className="block text-xs text-gray-500">Poner</span>
                <span className="font-bold text-orange-800">Pon</span>
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-100">
                <span className="block text-xs text-gray-500">Ser</span>
                <span className="font-bold text-orange-800">Sé</span>
              </div>
            </div>
          </TenseCard>

          {/* Gerunds */}
          <TenseCard
            title="Irregular Gerunds"
            color="blue"
            patterns={[
              "Used with 'Estar' for progressive tenses.",
              "Stem changes: o→u, e→i.",
              "I becomes Y between vowels."
            ]}
          >
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <h4 className="font-bold text-blue-800 text-xs mb-1">Stem Changing</h4>
                <ul className="space-y-1">
                  <li>Dormir → <strong>durmiendo</strong></li>
                  <li>Morir → <strong>muriendo</strong></li>
                  <li>Pedir → <strong>pidiendo</strong></li>
                  <li>Decir → <strong>diciendo</strong></li>
                  <li>Poder → <strong>pudiendo</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-800 text-xs mb-1">Orthographic (Y)</h4>
                <ul className="space-y-1">
                  <li>Ir → <strong>yendo</strong></li>
                  <li>Leer → <strong>leyendo</strong></li>
                  <li>Traer → <strong>trayendo</strong></li>
                  <li>Oír → <strong>oyendo</strong></li>
                  <li>Creer → <strong>creyendo</strong></li>
                </ul>
              </div>
            </div>
          </TenseCard>

          {/* Past Participles */}
          <TenseCard
            title="Irregular Past Participles"
            color="rose"
            patterns={[
              "Used in Perfect tenses (he comido) and as adjectives.",
              "Rhyming groups help memorization."
            ]}
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Abrir</span> <span className="font-bold text-rose-700">abierto</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Cubrir</span> <span className="font-bold text-rose-700">cubierto</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Decir</span> <span className="font-bold text-rose-700">dicho</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Hacer</span> <span className="font-bold text-rose-700">hecho</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Escribir</span> <span className="font-bold text-rose-700">escrito</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Freír</span> <span className="font-bold text-rose-700">frito</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Morir</span> <span className="font-bold text-rose-700">muerto</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Poner</span> <span className="font-bold text-rose-700">puesto</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Romper</span> <span className="font-bold text-rose-700">roto</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Ver</span> <span className="font-bold text-rose-700">visto</span>
              </div>
              <div className="flex justify-between border-b border-rose-100 pb-1">
                <span>Volver</span> <span className="font-bold text-rose-700">vuelto</span>
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
  patterns 
}: { 
  title: string; 
  color: string; 
  children: React.ReactNode; 
  patterns: string[] 
}) => {
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
        {/* Patterns Section */}
        <div className="mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Patterns & Mnemonics</h3>
          <ul className="space-y-1">
            {patterns.map((p, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start">
                <span className={`mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${theme.bg.replace('bg-', 'bg-slate-400')}`}></span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {children}
      </div>
    </section>
  );
};

const CompactConjugationTable = ({ title, forms }: { title: string; forms: string[] }) => {
  const pronouns = ["yo", "tú", "él", "nos", "vos", "ellos"];
  
  return (
    <div className="border rounded-lg overflow-hidden text-sm">
      <div className="bg-gray-100 text-center font-bold py-1 text-gray-600 text-xs">{title}</div>
      <div className="bg-white">
        {pronouns.map((p, i) => (
          <div key={p} className={`flex justify-between px-2 py-0.5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <span className="text-gray-400 text-[10px] uppercase tracking-wide w-8">{p}</span>
            <span className="font-semibold text-gray-800">{forms[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const IrregularBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r text-sm text-red-900">
    <h4 className="font-bold text-red-800 mb-1">{title}</h4>
    {children}
  </div>
);

export default IrregularsPage;