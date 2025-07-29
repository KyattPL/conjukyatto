import "./irregulars.css";

export default function Irregulars() {
    
    return (
    <div className="container">
        <h1>Chart of Common Irregular Spanish Verbs</h1>

        <div className="tense-section present">
            <div className="tense-title">Present Indicative Irregulars</div>
            <div className="verb-grid">
                <div className="verb-card">
                    <h3>Ser (to be)</h3>
                    <p><strong>yo:</strong> soy, <strong>tú:</strong> eres, <strong>él:</strong> es, <strong>nos:</strong> somos, <strong>vos:</strong> sois, <strong>ellos:</strong> son</p>
                </div>
                <div className="verb-card">
                    <h3>Estar (to be)</h3>
                    <p><strong>yo:</strong> estoy, <strong>tú:</strong> estás, <strong>él:</strong> está, <strong>nos:</strong> estamos, <strong>vos:</strong> estáis, <strong>ellos:</strong> están</p>
                </div>
                <div className="verb-card">
                    <h3>Ir (to go)</h3>
                    <p><strong>yo:</strong> voy, <strong>tú:</strong> vas, <strong>él:</strong> va, <strong>nos:</strong> vamos, <strong>vos:</strong> vais, <strong>ellos:</strong> van</p>
                </div>
                <div className="verb-card">
                    <h3>Haber (to have - aux.)</h3>
                    <p><strong>yo:</strong> he, <strong>tú:</strong> has, <strong>él:</strong> ha, <strong>nos:</strong> hemos, <strong>vos:</strong> habéis, <strong>ellos:</strong> han</p>
                </div>
            </div>
            <div className="note">
                <div className="note-title">"Yo-Go" Verbs</div>
                <div>Many verbs are only irregular in the "yo" form, often ending in -go, -zco, or being otherwise unique. The other forms are regular.</div>
                <div className="example"><strong>Tener:</strong> tengo; <strong>Poner:</strong> pongo; <strong>Hacer:</strong> hago; <strong>Salir:</strong> salgo; <strong>Traer:</strong> traigo; <strong>Decir:</strong> digo; <strong>Saber:</strong> sé; <strong>Ver:</strong> veo</div>
            </div>
        </div>
        
        <div className="tense-section preterite">
            <div className="tense-title">Preterite Irregulars</div>
            <div className="note">
                <div className="note-title">Irregular Stem & Endings</div>
                <div>Many preterite irregulars use a new stem and share a special set of endings: <strong>-e, -iste, -o, -imos, -isteis, -ieron</strong> (or <strong>-eron</strong> for j-stems).</div>
            </div>
            <div className="verb-grid">
                <div className="verb-card">
                    <h3>U-Stem Verbs</h3>
                    <p><strong>Estar:</strong> estuv- (estuve)</p>
                    <p><strong>Tener:</strong> tuv- (tuve)</p>
                    <p><strong>Andar:</strong> anduv- (anduve)</p>
                    <p><strong>Poder:</strong> pud- (pude)</p>
                    <p><strong>Poner:</strong> pus- (puse)</p>
                    <p><strong>Saber:</strong> sup- (supe)</p>
                </div>
                <div className="verb-card">
                    <h3>I-Stem Verbs</h3>
                    <p><strong>Querer:</strong> quis- (quise)</p>
                    <p><strong>Hacer:</strong> hic- (hice, but <strong>hizo</strong> for él/ella)</p>
                    <p><strong>Venir:</strong> vin- (vine)</p>
                </div>
                <div className="verb-card">
                    <h3>J-Stem Verbs</h3>
                    <p><strong>Decir:</strong> dij- (dije)</p>
                    <p><strong>Traer:</strong> traj- (traje)</p>
                    <p><strong>Conducir:</strong> conduj- (conduje)</p>
                    <p>(Note: ellos form ends in <strong>-eron</strong>, e.g., dijeron)</p>
                </div>
                <div className="verb-card">
                    <h3>"Super" Irregulars</h3>
                    <p><strong>Ser/Ir:</strong> fui, fuiste, fue, fuimos, fuisteis, fueron</p>
                    <p><strong>Dar:</strong> di, diste, dio, dimos, disteis, dieron</p>
                    <p><strong>Ver:</strong> vi, viste, vio, vimos, visteis, vieron</p>
                </div>
            </div>
        </div>
        
        <div className="tense-section imperfect">
            <div className="tense-title">Imperfect Irregulars</div>
            <div className="note">
                <div className="note-title">Only Three!</div>
                <div>The imperfect tense is the most regular. Only these three verbs are irregular.</div>
            </div>
            <div className="verb-grid">
                <div className="verb-card">
                    <h3>Ser (to be)</h3>
                    <p>era, eras, era, éramos, erais, eran</p>
                </div>
                <div className="verb-card">
                    <h3>Ir (to go)</h3>
                    <p>iba, ibas, iba, íbamos, ibais, iban</p>
                </div>
                <div className="verb-card">
                    <h3>Ver (to see)</h3>
                    <p>veía, veías, veía, veíamos, veíais, veían</p>
                </div>
            </div>
        </div>

        <div className="tense-section subjunctive">
            <div className="tense-title">Present Subjunctive & Command Irregulars</div>
            <div className="note">
                <div className="note-title">A Shared Irregularity</div>
                <div>The same six verbs are irregular in the Present Subjunctive and most Command forms (Negative Tú, all Ud./Uds., and Nosotros).</div>
            </div>
            <div className="verb-grid">
                <div className="verb-card"><h3>Dar (to give)</h3><p>dé, des, dé, demos, deis, den</p></div>
                <div className="verb-card"><h3>Ir (to go)</h3><p>vaya, vayas, vaya, vayamos, vayáis, vayan</p></div>
                <div className="verb-card"><h3>Saber (to know)</h3><p>sepa, sepas, sepa, sepamos, sepáis, sepan</p></div>
                <div className="verb-card"><h3>Haber (to have)</h3><p>haya, hayas, haya, hayamos, hayáis, hayan</p></div>
                <div className="verb-card"><h3>Estar (to be)</h3><p>esté, estés, esté, estemos, estéis, estén</p></div>
                <div className="verb-card"><h3>Ser (to be)</h3><p>sea, seas, sea, seamos, seáis, sean</p></div>
            </div>
        </div>

        <div className="tense-section commands">
            <div className="tense-title">Unique Command & Gerund Irregulars</div>
            <div className="verb-grid">
                <div className="verb-card">
                    <h3>Irregular Affirmative Tú Commands</h3>
                    <p>These 8 verbs have a unique, one-word command form.</p>
                    <p><strong>Venir → ven</strong> (Come)</p>
                    <p><strong>Decir → di</strong> (Say)</p>
                    <p><strong>Salir → sal</strong> (Leave)</p>
                    <p><strong>Hacer → haz</strong> (Do/Make)</p>
                    <p><strong>Tener → ten</strong> (Have)</p>
                    <p><strong>Ir → ve</strong> (Go)</p>
                    <p><strong>Poner → pon</strong> (Put)</p>
                    <p><strong>Ser → sé</strong> (Be)</p>
                </div>
                <div className="verb-card">
                    <h3>Irregular Gerunds (-ing form)</h3>
                    <p>These verbs have irregular stems in the gerund form.</p>
                    <p><strong>Ir → yendo</strong> (going)</p>
                    <p><strong>Poder → pudiendo</strong> (being able)</p>
                    <p><strong>Venir → viniendo</strong> (coming)</p>
                    <p><strong>Decir → diciendo</strong> (saying)</p>
                    <p><strong>Dormir → durmiendo</strong> (sleeping)</p>
                    <p><strong>Morir → muriendo</strong> (dying)</p>
                    <p><strong>Pedir → pidiendo</strong> (asking for)</p>
                </div>
            </div>
        </div>

    </div>)
}