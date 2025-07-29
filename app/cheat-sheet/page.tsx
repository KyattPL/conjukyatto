// app/cheat-sheet/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Conjugation Cheat Sheet",
  description: "A comprehensive chart of Spanish verb conjugation rules.",
};

const CheatSheetPage = () => {
  return (
    <main className="flex-grow bg-gray-100 flex flex-col items-center p-2 sm:p-4">
      <div className="w-full max-w-7xl p-4 sm:p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Spanish Verb Conjugation Chart
        </h1>

        {/* Present Indicative */}
        <TenseSection
          title="Present Indicative"
          gradient="from-[#a8edea] to-[#fed6e3]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <VerbTypeCard title="-AR Verbs">
              <ConjugationRow pronoun="yo" ending="-o" />
              <ConjugationRow pronoun="tú" ending="-as" />
              <ConjugationRow pronoun="él/ella" ending="-a" />
              <ConjugationRow pronoun="nosotros" ending="-amos" />
              <ConjugationRow pronoun="vosotros" ending="-áis" />
              <ConjugationRow pronoun="ellos/ellas" ending="-an" />
            </VerbTypeCard>
            <VerbTypeCard title="-ER Verbs">
              <ConjugationRow pronoun="yo" ending="-o" />
              <ConjugationRow pronoun="tú" ending="-es" />
              <ConjugationRow pronoun="él/ella" ending="-e" />
              <ConjugationRow pronoun="nosotros" ending="-emos" />
              <ConjugationRow pronoun="vosotros" ending="-éis" />
              <ConjugationRow pronoun="ellos/ellas" ending="-en" />
            </VerbTypeCard>
            <VerbTypeCard title="-IR Verbs">
              <ConjugationRow pronoun="yo" ending="-o" />
              <ConjugationRow pronoun="tú" ending="-es" />
              <ConjugationRow pronoun="él/ella" ending="-e" />
              <ConjugationRow pronoun="nosotros" ending="-imos" />
              <ConjugationRow pronoun="vosotros" ending="-ís" />
              <ConjugationRow pronoun="ellos/ellas" ending="-en" />
            </VerbTypeCard>
            <IrregularInfoCard title="Common Irregularities">
              <IrregularItem title="Stem-changing verbs: e→ie, o→ue, e→i">
                querer → quiero, dormir → duermo, pedir → pido
              </IrregularItem>
              <IrregularItem title="Yo-form irregulars: -go, -zco, -jo">
                tener → tengo, conocer → conozco, traer → traigo
              </IrregularItem>
              <IrregularItem title="Completely irregular:">
                ser, estar, ir, haber
              </IrregularItem>
            </IrregularInfoCard>
          </div>
        </TenseSection>

        {/* Preterite */}
        <TenseSection
          title="Preterite"
          gradient="from-[#ffecd2] to-[#fcb69f]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <VerbTypeCard title="-AR Verbs">
              <ConjugationRow pronoun="yo" ending="-é" />
              <ConjugationRow pronoun="tú" ending="-aste" />
              <ConjugationRow pronoun="él/ella" ending="-ó" />
              <ConjugationRow pronoun="nosotros" ending="-amos" />
              <ConjugationRow pronoun="vosotros" ending="-asteis" />
              <ConjugationRow pronoun="ellos/ellas" ending="-aron" />
            </VerbTypeCard>
            <VerbTypeCard title="-ER / -IR Verbs">
              <ConjugationRow pronoun="yo" ending="-í" />
              <ConjugationRow pronoun="tú" ending="-iste" />
              <ConjugationRow pronoun="él/ella" ending="-ió" />
              <ConjugationRow pronoun="nosotros" ending="-imos" />
              <ConjugationRow pronoun="vosotros" ending="-isteis" />
              <ConjugationRow pronoun="ellos/ellas" ending="-ieron" />
            </VerbTypeCard>
            <IrregularInfoCard title="Irregularities" className="lg:col-span-2">
              <IrregularItem title="Popular irregular verbs:">
                andar, caber, estar, hacer, poder, poner, querer, saber, tener,
                venir, decir, producir, traer, dar, ir, ser
                <Example>
                  estar → estuve, hacer → hice, tener → tuve, venir → vine
                </Example>
              </IrregularItem>
              <IrregularItem title="-IR verbs with stem changes: Only in él/ella and ellos/ellas">
                <Example>
                  dormir → durmió/durmieron, pedir → pidió/pidieron
                </Example>
              </IrregularItem>
            </IrregularInfoCard>
          </div>
        </TenseSection>

        {/* Imperfect */}
        <TenseSection
          title="Imperfect"
          gradient="from-[#d299c2] to-[#fef9d7]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <VerbTypeCard title="-AR Verbs">
              <ConjugationRow pronoun="yo" ending="-aba" />
              <ConjugationRow pronoun="tú" ending="-abas" />
              <ConjugationRow pronoun="él/ella" ending="-aba" />
              <ConjugationRow pronoun="nosotros" ending="-ábamos" />
              <ConjugationRow pronoun="vosotros" ending="-abais" />
              <ConjugationRow pronoun="ellos/ellas" ending="-aban" />
            </VerbTypeCard>
            <VerbTypeCard title="-ER / -IR Verbs">
              <ConjugationRow pronoun="yo" ending="-ía" />
              <ConjugationRow pronoun="tú" ending="-ías" />
              <ConjugationRow pronoun="él/ella" ending="-ía" />
              <ConjugationRow pronoun="nosotros" ending="-íamos" />
              <ConjugationRow pronoun="vosotros" ending="-íais" />
              <ConjugationRow pronoun="ellos/ellas" ending="-ían" />
            </VerbTypeCard>
            <NoteCard title="Important Note" className="lg:col-span-2">
              <p>The imperfect is extremely regular! Only three verbs are irregular:</p>
              <IrregularItem type="note">
                <strong>ser:</strong> era, eras, era, éramos, erais, eran
              </IrregularItem>
              <IrregularItem type="note">
                <strong>ir:</strong> iba, ibas, iba, íbamos, ibais, iban
              </IrregularItem>
              <IrregularItem type="note">
                <strong>ver:</strong> veía, veías, veía, veíamos, veíais, veían
              </IrregularItem>
            </NoteCard>
          </div>
        </TenseSection>

        {/* Present Subjunctive */}
        <TenseSection
          title="Present Subjunctive"
          gradient="from-[#89f7fe] to-[#66a6ff]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <VerbTypeCard title="-AR Verbs">
              <ConjugationRow pronoun="yo" ending="-e" />
              <ConjugationRow pronoun="tú" ending="-es" />
              <ConjugationRow pronoun="él/ella" ending="-e" />
              <ConjugationRow pronoun="nosotros" ending="-emos" />
              <ConjugationRow pronoun="vosotros" ending="-éis" />
              <ConjugationRow pronoun="ellos/ellas" ending="-en" />
            </VerbTypeCard>
            <VerbTypeCard title="-ER / -IR Verbs">
              <ConjugationRow pronoun="yo" ending="-a" />
              <ConjugationRow pronoun="tú" ending="-as" />
              <ConjugationRow pronoun="él/ella" ending="-a" />
              <ConjugationRow pronoun="nosotros" ending="-amos" />
              <ConjugationRow pronoun="vosotros" ending="-áis" />
              <ConjugationRow pronoun="ellos/ellas" ending="-an" />
            </VerbTypeCard>
            <IrregularInfoCard title="Formation & Irregularities" className="lg:col-span-2">
              <IrregularItem title="Stem changes: Same as indicative + -IR verbs change nosotros/vosotros too">
                <Example>dormir → duerma, durmamos; pedir → pida, pidamos</Example>
              </IrregularItem>
              <IrregularItem title="-ER and -IR verbs with -g- or -zc- in the yo form:">
                conozco, digo, hago, pongo, salgo, tengo, traigo, vengo
                <Example>tener → tengo → tenga, conocer → conozco → conozca</Example>
              </IrregularItem>
              <IrregularItem title="Completely irregular verbs:">
                dar, estar, ir, saber, ser, haber
                <Example>ser → sea, estar → esté, ir → vaya, haber → haya</Example>
              </IrregularItem>
            </IrregularInfoCard>
          </div>
        </TenseSection>

        {/* Progressive Tenses */}
        <TenseSection
          title="Progressive Tenses"
          gradient="from-[#d4fc79] to-[#96e6a1]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <VerbTypeCard title="Gerund Formation">
              <ConjugationRow pronoun="-AR Verbs" ending="-ando" />
              <Example className="text-center">hablar → hablando</Example>
              <ConjugationRow pronoun="-ER/-IR Verbs" ending="-iendo" />
              <Example className="text-center">comer → comiendo, vivir → viviendo</Example>
            </VerbTypeCard>
            <VerbTypeCard title="Formula">
              <p className="text-center text-lg font-bold">Estar + Gerund</p>
              <Example className="text-center">
                The progressive tenses describe actions in progress. They are formed by conjugating the verb <strong>estar</strong> in the desired tense (present, imperfect) and adding the gerund.
              </Example>
            </VerbTypeCard>
            <IrregularInfoCard title="Irregular Gerunds" className="lg:col-span-2">
              <IrregularItem title="Stem-changing -IR verbs: The vowel in the stem changes (e→i, o→u).">
                <Example>pedir → pidiendo, dormir → durmiendo, decir → diciendo</Example>
              </IrregularItem>
              <IrregularItem title="Orthographic changes (-yendo): For -ER and -IR verbs where the stem ends in a vowel, -iendo becomes -yendo.">
                <Example>leer → leyendo, oír → oyendo, traer → trayendo</Example>
              </IrregularItem>
              <IrregularItem title="Irregular: The gerund for the verb ir (to go) is yendo.">
                <Example>ir → yendo</Example>
              </IrregularItem>
            </IrregularInfoCard>
          </div>
        </TenseSection>

        {/* Commands */}
        <TenseSection
          title="Commands (Imperative)"
          gradient="from-[#ffe8a2] to-[#fff6f4]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <VerbTypeCard title="Tú (Informal You)">
              <ConjugationRow pronoun="Affirmative" ending="él/ella ind." />
              <Example className="text-center">hablar → habla, comer → come</Example>
              <ConjugationRow pronoun="Negative" ending="no + tú sub." />
              <Example className="text-center">hablar → no hables</Example>
              <IrregularInfoCard title="Irregular Affirmatives" className="p-2 mt-2 text-sm">
                <p className="text-xs">decir→di, hacer→haz, ir→ve, poner→pon, salir→sal, ser→sé, tener→ten, venir→ven</p>
              </IrregularInfoCard>
            </VerbTypeCard>
            <VerbTypeCard title="Usted (Formal You)">
              <ConjugationRow pronoun="Affirmative" ending="Ud. sub." />
              <Example className="text-center">hable, coma, pida</Example>
              <ConjugationRow pronoun="Negative" ending="no + Ud. sub." />
              <Example className="text-center">no hable, no coma</Example>
            </VerbTypeCard>
            <VerbTypeCard title="Nosotros (Let's...)">
              <ConjugationRow pronoun="Affirmative" ending="nos. sub." />
              <Example className="text-center">hablemos, comamos</Example>
              <ConjugationRow pronoun="Negative" ending="no + nos.sub." />
              <Example className="text-center">no hablemos</Example>
            </VerbTypeCard>
            <VerbTypeCard title="Vosotros (Spain)">
              <ConjugationRow pronoun="Affirmative" ending="inf -r +d" />
              <Example className="text-center">hablar → hablad</Example>
              <ConjugationRow pronoun="Negative" ending="no + vos.sub." />
              <Example className="text-center">no habléis</Example>
            </VerbTypeCard>
          </div>
          <NoteCard title="Pronoun Placement with Commands" className="mt-4">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Affirmative commands:</strong> Pronouns are attached to the end of the verb. An accent mark is often needed to maintain the original stress.
                <Example><strong>Dime.</strong> (Tell me.) → <strong>Dímelo.</strong> (Tell it to me.)</Example>
                <Example><strong>Levántate.</strong> (Get up.)</Example>
              </li>
              <li>
                <strong>Negative commands:</strong> Pronouns come before the verb and after "no".
                <Example><strong>No me digas.</strong> (Don't tell me.) → <strong>No me lo digas.</strong> (Don't tell it to me.)</Example>
              </li>
            </ul>
          </NoteCard>
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

const VerbTypeCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/80 p-4 rounded-lg border-2 border-blue-500 h-full">
    <h3 className="text-lg font-bold text-center mb-3 text-gray-800">{title}</h3>
    {children}
  </div>
);

const ConjugationRow = ({ pronoun, ending }: { pronoun: string; ending: string }) => (
  <div className="flex justify-between items-center my-1 p-2 rounded bg-blue-500/10">
    <span className="font-semibold text-gray-700 min-w-[90px]">{pronoun}</span>
    <span className="font-mono bg-blue-500 text-white px-2 py-1 rounded font-bold text-sm">{ending}</span>
  </div>
);

const IrregularInfoCard = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-red-500/10 border-2 border-red-400 rounded-lg p-4 ${className}`}>
    <h4 className="font-bold text-red-600 mb-2">{title}</h4>
    <div className="space-y-3">{children}</div>
  </div>
);

const IrregularItem = ({ title, children, type = 'error' }: { title?: string; children: React.ReactNode; type?: 'error' | 'note' }) => {
  const baseClasses = "p-2 rounded";
  const typeClasses = type === 'error' 
    ? "bg-red-500/10 border-l-4 border-red-500" 
    : "bg-yellow-500/10 border-l-4 border-yellow-500";
  return (
    <div className={`${baseClasses} ${typeClasses}`}>
      {title && <strong className="block text-sm">{title}</strong>}
      <div className="text-sm text-gray-700 italic">{children}</div>
    </div>
  );
};

const NoteCard = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-yellow-500/10 border-2 border-yellow-400 rounded-lg p-4 ${className}`}>
    <h4 className="font-bold text-yellow-700 mb-2">{title}</h4>
    <div className="text-gray-700">{children}</div>
  </div>
);

const Example = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-sm italic text-gray-600 mt-1 ${className}`}>{children}</p>
);

export default CheatSheetPage;