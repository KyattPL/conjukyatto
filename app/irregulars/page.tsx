// app/irregulars/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irregular Spanish Verbs",
  description: "A chart of common irregular Spanish verbs by tense.",
};

const IrregularsPage = () => {
  return (
    <main className="flex-grow bg-gray-100 flex flex-col items-center p-2 sm:p-4">
      <div className="w-full max-w-7xl p-4 sm:p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Chart of Common Irregular Spanish Verbs
        </h1>

        {/* Present Indicative */}
        <TenseSection
          title="Present Indicative Irregulars"
          gradient="from-[#a8edea] to-[#fed6e3]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <VerbCard title="Ser (to be)">
              <p><strong>yo:</strong> soy, <strong>tú:</strong> eres, <strong>él:</strong> es, <strong>nos:</strong> somos, <strong>vos:</strong> sois, <strong>ellos:</strong> son</p>
            </VerbCard>
            <VerbCard title="Estar (to be)">
              <p><strong>yo:</strong> estoy, <strong>tú:</strong> estás, <strong>él:</strong> está, <strong>nos:</strong> estamos, <strong>vos:</strong> estáis, <strong>ellos:</strong> están</p>
            </VerbCard>
            <VerbCard title="Ir (to go)">
              <p><strong>yo:</strong> voy, <strong>tú:</strong> vas, <strong>él:</strong> va, <strong>nos:</strong> vamos, <strong>vos:</strong> vais, <strong>ellos:</strong> van</p>
            </VerbCard>
            <VerbCard title="Haber (to have - aux.)">
              <p><strong>yo:</strong> he, <strong>tú:</strong> has, <strong>él:</strong> ha, <strong>nos:</strong> hemos, <strong>vos:</strong> habéis, <strong>ellos:</strong> han</p>
            </VerbCard>
          </div>
          <NoteCard title='"Yo-Go" Verbs' className="mt-6">
            <p>Many verbs are only irregular in the "yo" form, often ending in -go, -zco, or being otherwise unique. The other forms are regular.</p>
            <Example><strong>Tener:</strong> tengo; <strong>Poner:</strong> pongo; <strong>Hacer:</strong> hago; <strong>Salir:</strong> salgo; <strong>Traer:</strong> traigo; <strong>Decir:</strong> digo; <strong>Saber:</strong> sé; <strong>Ver:</strong> veo</Example>
          </NoteCard>
        </TenseSection>

        {/* Preterite */}
        <TenseSection
          title="Preterite Irregulars"
          gradient="from-[#ffecd2] to-[#fcb69f]"
        >
          <NoteCard title="Irregular Stem & Endings" className="mb-6">
            <p>Many preterite irregulars use a new stem and share a special set of endings: <strong>-e, -iste, -o, -imos, -isteis, -ieron</strong> (or <strong>-eron</strong> for j-stems).</p>
          </NoteCard>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <VerbCard title="U-Stem Verbs">
              <p><strong>Estar:</strong> estuv- (estuve)</p>
              <p><strong>Tener:</strong> tuv- (tuve)</p>
              <p><strong>Andar:</strong> anduv- (anduve)</p>
              <p><strong>Poder:</strong> pud- (pude)</p>
              <p><strong>Poner:</strong> pus- (puse)</p>
              <p><strong>Saber:</strong> sup- (supe)</p>
            </VerbCard>
            <VerbCard title="I-Stem Verbs">
              <p><strong>Querer:</strong> quis- (quise)</p>
              <p><strong>Hacer:</strong> hic- (hice, but <strong>hizo</strong> for él/ella)</p>
              <p><strong>Venir:</strong> vin- (vine)</p>
            </VerbCard>
            <VerbCard title="J-Stem Verbs">
              <p><strong>Decir:</strong> dij- (dije)</p>
              <p><strong>Traer:</strong> traj- (traje)</p>
              <p><strong>Conducir:</strong> conduj- (conduje)</p>
              <p>(Note: ellos form ends in <strong>-eron</strong>, e.g., dijeron)</p>
            </VerbCard>
            <VerbCard title='"Super" Irregulars'>
              <p><strong>Ser/Ir:</strong> fui, fuiste, fue, fuimos, fuisteis, fueron</p>
              <p><strong>Dar:</strong> di, diste, dio, dimos, disteis, dieron</p>
              <p><strong>Ver:</strong> vi, viste, vio, vimos, visteis, vieron</p>
            </VerbCard>
          </div>
        </TenseSection>

        {/* Imperfect */}
        <TenseSection
          title="Imperfect Irregulars"
          gradient="from-[#ffcbf0] to-[#ffffff]"
        >
          <NoteCard title="Only Three!" className="mb-6">
            <p>The imperfect tense is the most regular. Only these three verbs are irregular.</p>
          </NoteCard>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <VerbCard title="Ser (to be)">
              <p>era, eras, era, éramos, erais, eran</p>
            </VerbCard>
            <VerbCard title="Ir (to go)">
              <p>iba, ibas, iba, íbamos, ibais, iban</p>
            </VerbCard>
            <VerbCard title="Ver (to see)">
              <p>veía, veías, veía, veíamos, veíais, veían</p>
            </VerbCard>
          </div>
        </TenseSection>

        {/* Subjunctive & Command */}
        <TenseSection
          title="Present Subjunctive & Command Irregulars"
          gradient="from-[#89f7fe] to-[#66a6ff]"
        >
          <NoteCard title="A Shared Irregularity" className="mb-6">
            <p>The same six verbs are irregular in the Present Subjunctive and most Command forms (Negative Tú, all Ud./Uds., and Nosotros).</p>
          </NoteCard>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <VerbCard title="Dar"><p>dé, des, dé, demos, deis, den</p></VerbCard>
            <VerbCard title="Ir"><p>vaya, vayas, vaya, vayamos, vayáis, vayan</p></VerbCard>
            <VerbCard title="Saber"><p>sepa, sepas, sepa, sepamos, sepáis, sepan</p></VerbCard>
            <VerbCard title="Haber"><p>haya, hayas, haya, hayamos, hayáis, hayan</p></VerbCard>
            <VerbCard title="Estar"><p>esté, estés, esté, estemos, estéis, estén</p></VerbCard>
            <VerbCard title="Ser"><p>sea, seas, sea, seamos, seáis, sean</p></VerbCard>
          </div>
        </TenseSection>

        {/* Unique Command & Gerund */}
        <TenseSection
          title="Unique Command & Gerund Irregulars"
          gradient="from-[#f6d365] to-[#fda085]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <VerbCard title="Irregular Affirmative Tú Commands">
              <p>These 8 verbs have a unique, one-word command form.</p>
              <p><strong>Venir → ven</strong> (Come)</p>
              <p><strong>Decir → di</strong> (Say)</p>
              <p><strong>Salir → sal</strong> (Leave)</p>
              <p><strong>Hacer → haz</strong> (Do/Make)</p>
              <p><strong>Tener → ten</strong> (Have)</p>
              <p><strong>Ir → ve</strong> (Go)</p>
              <p><strong>Poner → pon</strong> (Put)</p>
              <p><strong>Ser → sé</strong> (Be)</p>
            </VerbCard>
            <VerbCard title="Irregular Gerunds (-ing form)">
              <p>These verbs have irregular stems in the gerund form.</p>
              <p><strong>Ir → yendo</strong> (going)</p>
              <p><strong>Poder → pudiendo</strong> (being able)</p>
              <p><strong>Venir → viniendo</strong> (coming)</p>
              <p><strong>Decir → diciendo</strong> (saying)</p>
              <p><strong>Dormir → durmiendo</strong> (sleeping)</p>
              <p><strong>Morir → muriendo</strong> (dying)</p>
              <p><strong>Pedir → pidiendo</strong> (asking for)</p>
            </VerbCard>
          </div>
        </TenseSection>
        {/* Irregular Past Participles */}
        <TenseSection
          title="Irregular Past Participles"
          gradient="from-[#e0c3fc] to-[#8ec5fc]"
        >
          <NoteCard title="Used for Perfect Tenses & Adjectives" className="mb-6">
            <p>These verbs have irregular past participles. These forms are used with the verb <strong>haber</strong> to create the perfect tenses (e.g., Present Perfect: <em>he dicho</em>) and can also be used as adjectives (e.g., <em>la puerta está abierta</em>).</p>
          </NoteCard>
          <VerbCard title="The Irregulars List">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              <p><strong>abrir</strong> → abierto</p>
              <p><strong>cubrir</strong> → cubierto</p>
              <p><strong>decir</strong> → dicho</p>
              <p><strong>escribir</strong> → escrito</p>
              <p><strong>freír</strong> → frito</p>
              <p><strong>hacer</strong> → hecho</p>
              <p><strong>morir</strong> → muerto</p>
              <p><strong>poner</strong> → puesto</p>
              <p><strong>pudrir</strong> → podrido</p>
              <p><strong>romper</strong> → roto</p>
              <p><strong>ver</strong> → visto</p>
              <p><strong>volver</strong> → vuelto</p>
            </div>
            <Example>Verbs derived from these also follow the pattern: <strong>describir → descrito</strong>, <strong>componer → compuesto</strong>.</Example>
          </VerbCard>
        </TenseSection>
      </div>
    </main>
  );
};

// Helper Components
const TenseSection = ({ title, gradient, children }: { title: string; gradient: string; children: React.ReactNode }) => (
  <section className={`mb-10 p-6 rounded-xl shadow-lg bg-gradient-to-br ${gradient}`}>
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">{title}</h2>
    {children}
  </section>
);

const VerbCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/80 p-6 rounded-lg border-2 border-blue-500 h-full">
    <h3 className="text-xl font-bold text-center text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">{title}</h3>
    <div className="space-y-2 text-gray-700 [&>p>strong]:text-blue-600">{children}</div>
  </div>
);

const NoteCard = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-yellow-500/10 border-2 border-yellow-400 rounded-lg p-4 ${className}`}>
    <h4 className="font-bold text-yellow-700 mb-2 text-lg">{title}</h4>
    <div className="text-gray-700 space-y-2">{children}</div>
  </div>
);

const Example = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm italic text-gray-600 mt-2 p-2 bg-gray-500/5 rounded">{children}</p>
);

export default IrregularsPage;