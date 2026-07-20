// app/irr-practice/answers.ts

export interface ConjugationForms {
  "1s": string;
  "2s": string;
  "3s": string;
  "1p": string;
  "2p": string;
  "3p": string;
}

export type ConjugationAnswer = string | ConjugationForms;

export const irregularAnswers: Record<string, Record<string, ConjugationAnswer>> = {
  "Present Indicative": {
    "ser": {
      "1s": "soy",
      "2s": "eres",
      "3s": "es",
      "1p": "somos",
      "2p": "sois",
      "3p": "son"
    },
    "estar": {
      "1s": "estoy",
      "2s": "estás",
      "3s": "está",
      "1p": "estamos",
      "2p": "estáis",
      "3p": "están"
    },
    "ir": {
      "1s": "voy",
      "2s": "vas",
      "3s": "va",
      "1p": "vamos",
      "2p": "vais",
      "3p": "van"
    },
    "haber": {
      "1s": "he",
      "2s": "has",
      "3s": "ha",
      "1p": "hemos",
      "2p": "habéis",
      "3p": "han"
    },
    "pensar": {
      "1s": "pienso",
      "2s": "piensas",
      "3s": "piensa",
      "1p": "pensamos",
      "2p": "pensáis",
      "3p": "piensan"
    },
    "querer": {
      "1s": "quiero",
      "2s": "quieres",
      "3s": "quiere",
      "1p": "queremos",
      "2p": "queréis",
      "3p": "quieren"
    },
    "entender": {
      "1s": "entiendo",
      "2s": "entiendes",
      "3s": "entiende",
      "1p": "entendemos",
      "2p": "entendéis",
      "3p": "entienden"
    },
    "empezar": {
      "1s": "empiezo",
      "2s": "empiezas",
      "3s": "empieza",
      "1p": "empezamos",
      "2p": "empezáis",
      "3p": "empiezan"
    },
    "sentir": {
      "1s": "siento",
      "2s": "sientes",
      "3s": "siente",
      "1p": "sentimos",
      "2p": "sentís",
      "3p": "sienten"
    },
    "preferir": {
      "1s": "prefiero",
      "2s": "prefieres",
      "3s": "prefiere",
      "1p": "preferimos",
      "2p": "preferís",
      "3p": "prefieren"
    },
    "cerrar": {
      "1s": "cierro",
      "2s": "cierras",
      "3s": "cierra",
      "1p": "cerramos",
      "2p": "cerráis",
      "3p": "cierran"
    },
    "perder": {
      "1s": "pierdo",
      "2s": "pierdes",
      "3s": "pierde",
      "1p": "perdemos",
      "2p": "perdéis",
      "3p": "pierden"
    },
    "poder": {
      "1s": "puedo",
      "2s": "puedes",
      "3s": "puede",
      "1p": "podemos",
      "2p": "podéis",
      "3p": "pueden"
    },
    "dormir": {
      "1s": "duermo",
      "2s": "duermes",
      "3s": "duerme",
      "1p": "dormimos",
      "2p": "dormís",
      "3p": "duermen"
    },
    "volver": {
      "1s": "vuelvo",
      "2s": "vuelves",
      "3s": "vuelve",
      "1p": "volvemos",
      "2p": "volvéis",
      "3p": "vuelven"
    },
    "almorzar": {
      "1s": "almuerzo",
      "2s": "almuerzas",
      "3s": "almuerza",
      "1p": "almorzamos",
      "2p": "almorzáis",
      "3p": "almuerzan"
    },
    "encontrar": {
      "1s": "encuentro",
      "2s": "encuentras",
      "3s": "encuentra",
      "1p": "encontramos",
      "2p": "encontráis",
      "3p": "encuentran"
    },
    "recordar": {
      "1s": "recuerdo",
      "2s": "recuerdas",
      "3s": "recuerda",
      "1p": "recordamos",
      "2p": "recordáis",
      "3p": "recuerdan"
    },
    "volar": {
      "1s": "vuelo",
      "2s": "vuelas",
      "3s": "vuela",
      "1p": "volamos",
      "2p": "voláis",
      "3p": "vuelan"
    },
    "morir": {
      "1s": "muero",
      "2s": "mueres",
      "3s": "muere",
      "1p": "morimos",
      "2p": "morís",
      "3p": "mueren"
    },
    "jugar": {
      "1s": "juego",
      "2s": "juegas",
      "3s": "juega",
      "1p": "jugamos",
      "2p": "jugáis",
      "3p": "juegan"
    },
    "adquirir": {
      "1s": "adquiero",
      "2s": "adquieres",
      "3s": "adquiere",
      "1p": "adquirimos",
      "2p": "adquirís",
      "3p": "adquieren"
    },
    "inquirir": {
      "1s": "inquiero",
      "2s": "inquieres",
      "3s": "inquiere",
      "1p": "inquirimos",
      "2p": "inquirís",
      "3p": "inquieren"
    },
    "pedir": {
      "1s": "pido",
      "2s": "pides",
      "3s": "pide",
      "1p": "pedimos",
      "2p": "pedís",
      "3p": "piden"
    },
    "servir": {
      "1s": "sirvo",
      "2s": "sirves",
      "3s": "sirve",
      "1p": "servimos",
      "2p": "servís",
      "3p": "sirven"
    },
    "repetir": {
      "1s": "repito",
      "2s": "repites",
      "3s": "repite",
      "1p": "repetimos",
      "2p": "repetís",
      "3p": "repiten"
    },
    "medir": {
      "1s": "mido",
      "2s": "mides",
      "3s": "mide",
      "1p": "medimos",
      "2p": "medís",
      "3p": "miden"
    },
    "vestir": {
      "1s": "visto",
      "2s": "vistes",
      "3s": "viste",
      "1p": "vestimos",
      "2p": "vestís",
      "3p": "visten"
    },
    "elegir": {
      "1s": "elijo",
      "2s": "eliges",
      "3s": "elige",
      "1p": "elegimos",
      "2p": "elegís",
      "3p": "eligen"
    },
    "corregir": {
      "1s": "corrijo",
      "2s": "corriges",
      "3s": "corrige",
      "1p": "corregimos",
      "2p": "corregís",
      "3p": "corrigen"
    },
    "seguir": {
      "1s": "sigo",
      "2s": "sigues",
      "3s": "sigue",
      "1p": "seguimos",
      "2p": "seguís",
      "3p": "siguen"
    },
    "poner": {
      "1s": "pongo",
      "2s": "pones",
      "3s": "pone",
      "1p": "ponemos",
      "2p": "ponéis",
      "3p": "ponen"
    },
    "salir": {
      "1s": "salgo",
      "2s": "sales",
      "3s": "sale",
      "1p": "salimos",
      "2p": "salís",
      "3p": "salen"
    },
    "traer": {
      "1s": "traigo",
      "2s": "traes",
      "3s": "trae",
      "1p": "traemos",
      "2p": "traéis",
      "3p": "traen"
    },
    "hacer": {
      "1s": "hago",
      "2s": "haces",
      "3s": "hace",
      "1p": "hacemos",
      "2p": "hacéis",
      "3p": "hacen"
    },
    "valer": {
      "1s": "valgo",
      "2s": "vales",
      "3s": "vale",
      "1p": "valemos",
      "2p": "valéis",
      "3p": "valen"
    },
    "tener": {
      "1s": "tengo",
      "2s": "tienes",
      "3s": "tiene",
      "1p": "tenemos",
      "2p": "tenéis",
      "3p": "tienen"
    },
    "venir": {
      "1s": "vengo",
      "2s": "vienes",
      "3s": "viene",
      "1p": "venimos",
      "2p": "venís",
      "3p": "vienen"
    },
    "decir": {
      "1s": "digo",
      "2s": "dices",
      "3s": "dice",
      "1p": "decimos",
      "2p": "decís",
      "3p": "dicen"
    },
    "conocer": {
      "1s": "conozco",
      "2s": "conoces",
      "3s": "conoce",
      "1p": "conocemos",
      "2p": "conocéis",
      "3p": "conocen"
    },
    "traducir": {
      "1s": "traduzco",
      "2s": "traduces",
      "3s": "traduce",
      "1p": "traducimos",
      "2p": "traducís",
      "3p": "traducen"
    },
    "parecer": {
      "1s": "parezco",
      "2s": "pareces",
      "3s": "parece",
      "1p": "parecemos",
      "2p": "parecéis",
      "3p": "parecen"
    },
    "ofrecer": {
      "1s": "ofrezco",
      "2s": "ofreces",
      "3s": "ofrece",
      "1p": "ofrecemos",
      "2p": "ofrecéis",
      "3p": "ofrecen"
    },
    "dirigir": {
      "1s": "dirijo",
      "2s": "diriges",
      "3s": "dirige",
      "1p": "dirigimos",
      "2p": "dirigís",
      "3p": "dirigen"
    },
    "escoger": {
      "1s": "escojo",
      "2s": "escoges",
      "3s": "escoge",
      "1p": "escogemos",
      "2p": "escogéis",
      "3p": "escogen"
    },
    "distinguir": {
      "1s": "distingo",
      "2s": "distingues",
      "3s": "distingue",
      "1p": "distinguimos",
      "2p": "distinguís",
      "3p": "distinguen"
    },
    "extinguir": {
      "1s": "extingo",
      "2s": "extingues",
      "3s": "extingue",
      "1p": "extinguimos",
      "2p": "extinguís",
      "3p": "extinguen"
    }
  },
  "Preterite": {
    "ser": {
      "1s": "fui",
      "2s": "fuiste",
      "3s": "fue",
      "1p": "fuimos",
      "2p": "fuisteis",
      "3p": "fueron"
    },
    "ir": {
      "1s": "fui",
      "2s": "fuiste",
      "3s": "fue",
      "1p": "fuimos",
      "2p": "fuisteis",
      "3p": "fueron"
    },
    "dar": {
      "1s": "di",
      "2s": "diste",
      "3s": "dio",
      "1p": "dimos",
      "2p": "disteis",
      "3p": "dieron"
    },
    "ver": {
      "1s": "vi",
      "2s": "viste",
      "3s": "vio",
      "1p": "vimos",
      "2p": "visteis",
      "3p": "vieron"
    },
    "andar": {
      "1s": "anduve",
      "2s": "anduviste",
      "3s": "anduvo",
      "1p": "anduvimos",
      "2p": "anduvisteis",
      "3p": "anduvieron"
    },
    "estar": {
      "1s": "estuve",
      "2s": "estuviste",
      "3s": "estuvo",
      "1p": "estuvimos",
      "2p": "estuvisteis",
      "3p": "estuvieron"
    },
    "tener": {
      "1s": "tuve",
      "2s": "tuviste",
      "3s": "tuvo",
      "1p": "tuvimos",
      "2p": "tuvisteis",
      "3p": "tuvieron"
    },
    "poder": {
      "1s": "pude",
      "2s": "pudiste",
      "3s": "pudo",
      "1p": "pudimos",
      "2p": "pudisteis",
      "3p": "pudieron"
    },
    "poner": {
      "1s": "puse",
      "2s": "pusiste",
      "3s": "puso",
      "1p": "pusimos",
      "2p": "pusisteis",
      "3p": "pusieron"
    },
    "saber": {
      "1s": "supe",
      "2s": "supiste",
      "3s": "supo",
      "1p": "supimos",
      "2p": "supisteis",
      "3p": "supieron"
    },
    "caber": {
      "1s": "cupe",
      "2s": "cupiste",
      "3s": "cupo",
      "1p": "cupimos",
      "2p": "cupisteis",
      "3p": "cupieron"
    },
    "haber": {
      "1s": "hube",
      "2s": "hubiste",
      "3s": "hubo",
      "1p": "hubimos",
      "2p": "hubisteis",
      "3p": "hubieron"
    },
    "hacer": {
      "1s": "hice",
      "2s": "hiciste",
      "3s": "hizo",
      "1p": "hicimos",
      "2p": "hicisteis",
      "3p": "hicieron"
    },
    "querer": {
      "1s": "quise",
      "2s": "quisiste",
      "3s": "quiso",
      "1p": "quisimos",
      "2p": "quisisteis",
      "3p": "quisieron"
    },
    "venir": {
      "1s": "vine",
      "2s": "viniste",
      "3s": "vino",
      "1p": "vinimos",
      "2p": "vinisteis",
      "3p": "vinieron"
    },
    "traer": {
      "1s": "traje",
      "2s": "trajiste",
      "3s": "trajo",
      "1p": "trajimos",
      "2p": "trajisteis",
      "3p": "trajeron"
    },
    "decir": {
      "1s": "dije",
      "2s": "dijiste",
      "3s": "dijo",
      "1p": "dijimos",
      "2p": "dijisteis",
      "3p": "dijeron"
    },
    "conducir": {
      "1s": "conduje",
      "2s": "condujiste",
      "3s": "condujo",
      "1p": "condujimos",
      "2p": "condujisteis",
      "3p": "condujeron"
    },
    "traducir": {
      "1s": "traduje",
      "2s": "tradujiste",
      "3s": "tradujo",
      "1p": "tradujimos",
      "2p": "tradujisteis",
      "3p": "tradujeron"
    },
    "producir": {
      "1s": "produje",
      "2s": "produjiste",
      "3s": "produjo",
      "1p": "produjimos",
      "2p": "produjisteis",
      "3p": "produjeron"
    },
    "pedir": {
      "1s": "pedí",
      "2s": "pediste",
      "3s": "pidió",
      "1p": "pedimos",
      "2p": "pedisteis",
      "3p": "pidieron"
    },
    "sentir": {
      "1s": "sentí",
      "2s": "sentiste",
      "3s": "sintió",
      "1p": "sentimos",
      "2p": "sentisteis",
      "3p": "sintieron"
    },
    "preferir": {
      "1s": "preferí",
      "2s": "preferiste",
      "3s": "prefirió",
      "1p": "preferimos",
      "2p": "preferisteis",
      "3p": "prefirieron"
    },
    "servir": {
      "1s": "serví",
      "2s": "serviste",
      "3s": "sirvió",
      "1p": "servimos",
      "2p": "servisteis",
      "3p": "sirvieron"
    },
    "repetir": {
      "1s": "repetí",
      "2s": "repetiste",
      "3s": "repitió",
      "1p": "repetimos",
      "2p": "repetisteis",
      "3p": "repitieron"
    },
    "dormir": {
      "1s": "dormí",
      "2s": "dormiste",
      "3s": "durmió",
      "1p": "dormimos",
      "2p": "dormisteis",
      "3p": "durmieron"
    },
    "morir": {
      "1s": "morí",
      "2s": "moriste",
      "3s": "murió",
      "1p": "morimos",
      "2p": "moristeis",
      "3p": "murieron"
    },
    "caer": {
      "1s": "caí",
      "2s": "caíste",
      "3s": "cayó",
      "1p": "caímos",
      "2p": "caísteis",
      "3p": "cayeron"
    },
    "leer": {
      "1s": "leí",
      "2s": "leíste",
      "3s": "leyó",
      "1p": "leímos",
      "2p": "leísteis",
      "3p": "leyeron"
    },
    "oír": {
      "1s": "oí",
      "2s": "oíste",
      "3s": "oyó",
      "1p": "oímos",
      "2p": "oísteis",
      "3p": "oyeron"
    },
    "creer": {
      "1s": "creí",
      "2s": "creíste",
      "3s": "creyó",
      "1p": "creímos",
      "2p": "creísteis",
      "3p": "creyeron"
    },
    "huir": {
      "1s": "huí",
      "2s": "huiste",
      "3s": "huyó",
      "1p": "huimos",
      "2p": "huisteis",
      "3p": "huyeron"
    },
    "concluir": {
      "1s": "concluí",
      "2s": "concluiste",
      "3s": "concluyó",
      "1p": "concluimos",
      "2p": "concluisteis",
      "3p": "concluyeron"
    }
  },
  "Imperfect": {
    "ser": {
      "1s": "era",
      "2s": "eras",
      "3s": "era",
      "1p": "éramos",
      "2p": "erais",
      "3p": "eran"
    },
    "ir": {
      "1s": "iba",
      "2s": "ibas",
      "3s": "iba",
      "1p": "íbamos",
      "2p": "ibais",
      "3p": "iban"
    },
    "ver": {
      "1s": "veía",
      "2s": "veías",
      "3s": "veía",
      "1p": "veíamos",
      "2p": "veíais",
      "3p": "veían"
    }
  },
  "Future": {
    "caber": {
      "1s": "cabré",
      "2s": "cabrás",
      "3s": "cabrá",
      "1p": "cabremos",
      "2p": "cabréis",
      "3p": "cabrán"
    },
    "haber": {
      "1s": "habré",
      "2s": "habrás",
      "3s": "habrá",
      "1p": "habremos",
      "2p": "habréis",
      "3p": "habrán"
    },
    "poder": {
      "1s": "podré",
      "2s": "podrás",
      "3s": "podrá",
      "1p": "podremos",
      "2p": "podréis",
      "3p": "podrán"
    },
    "querer": {
      "1s": "querré",
      "2s": "querrás",
      "3s": "querrá",
      "1p": "querremos",
      "2p": "querréis",
      "3p": "querrán"
    },
    "saber": {
      "1s": "sabré",
      "2s": "sabrás",
      "3s": "sabrá",
      "1p": "sabremos",
      "2p": "sabréis",
      "3p": "sabrán"
    },
    "poner": {
      "1s": "pondré",
      "2s": "pondrás",
      "3s": "pondrá",
      "1p": "pondremos",
      "2p": "pondréis",
      "3p": "pondrán"
    },
    "salir": {
      "1s": "saldré",
      "2s": "saldrás",
      "3s": "saldrá",
      "1p": "saldremos",
      "2p": "saldréis",
      "3p": "saldrán"
    },
    "tener": {
      "1s": "tendré",
      "2s": "tendrás",
      "3s": "tendrá",
      "1p": "tendremos",
      "2p": "tendréis",
      "3p": "tendrán"
    },
    "valer": {
      "1s": "valdré",
      "2s": "valdrás",
      "3s": "valdrá",
      "1p": "valdremos",
      "2p": "valdréis",
      "3p": "valdrán"
    },
    "venir": {
      "1s": "vendré",
      "2s": "vendrás",
      "3s": "vendrá",
      "1p": "vendremos",
      "2p": "vendréis",
      "3p": "vendrán"
    },
    "decir": {
      "1s": "diré",
      "2s": "dirás",
      "3s": "dirá",
      "1p": "diremos",
      "2p": "diréis",
      "3p": "dirán"
    },
    "hacer": {
      "1s": "haré",
      "2s": "harás",
      "3s": "hará",
      "1p": "haremos",
      "2p": "haréis",
      "3p": "harán"
    }
  },
  "Conditional": {
    "caber": {
      "1s": "cabría",
      "2s": "cabrías",
      "3s": "cabría",
      "1p": "cabríamos",
      "2p": "cabríais",
      "3p": "cabrían"
    },
    "haber": {
      "1s": "habría",
      "2s": "habrías",
      "3s": "habría",
      "1p": "habríamos",
      "2p": "habríais",
      "3p": "habrían"
    },
    "poder": {
      "1s": "podría",
      "2s": "podrías",
      "3s": "podría",
      "1p": "podríamos",
      "2p": "podríais",
      "3p": "podrían"
    },
    "querer": {
      "1s": "querría",
      "2s": "querrías",
      "3s": "querría",
      "1p": "querríamos",
      "2p": "querríais",
      "3p": "querrían"
    },
    "saber": {
      "1s": "sabría",
      "2s": "sabrías",
      "3s": "sabría",
      "1p": "sabríamos",
      "2p": "sabríais",
      "3p": "sabrían"
    },
    "poner": {
      "1s": "pondría",
      "2s": "pondrías",
      "3s": "pondría",
      "1p": "pondríamos",
      "2p": "pondríais",
      "3p": "pondrían"
    },
    "salir": {
      "1s": "saldría",
      "2s": "saldrías",
      "3s": "saldría",
      "1p": "saldríamos",
      "2p": "saldríais",
      "3p": "saldrían"
    },
    "tener": {
      "1s": "tendría",
      "2s": "tendrías",
      "3s": "tendría",
      "1p": "tendríamos",
      "2p": "tendríais",
      "3p": "tendrían"
    },
    "valer": {
      "1s": "valdría",
      "2s": "valdrías",
      "3s": "valdría",
      "1p": "valdríamos",
      "2p": "valdríais",
      "3p": "valdrían"
    },
    "venir": {
      "1s": "vendría",
      "2s": "vendrías",
      "3s": "vendría",
      "1p": "vendríamos",
      "2p": "vendríais",
      "3p": "vendrían"
    },
    "decir": {
      "1s": "diría",
      "2s": "dirías",
      "3s": "diría",
      "1p": "diríamos",
      "2p": "diríais",
      "3p": "dirían"
    },
    "hacer": {
      "1s": "haría",
      "2s": "harías",
      "3s": "haría",
      "1p": "haríamos",
      "2p": "haríais",
      "3p": "harían"
    }
  },
  "Present Subjunctive": {
    "dar": {
      "1s": "dé",
      "2s": "des",
      "3s": "dé",
      "1p": "demos",
      "2p": "deis",
      "3p": "den"
    },
    "ir": {
      "1s": "vaya",
      "2s": "vayas",
      "3s": "vaya",
      "1p": "vayamos",
      "2p": "vayáis",
      "3p": "vayan"
    },
    "ser": {
      "1s": "sea",
      "2s": "seas",
      "3s": "sea",
      "1p": "seamos",
      "2p": "seáis",
      "3p": "sean"
    },
    "haber": {
      "1s": "haya",
      "2s": "hayas",
      "3s": "haya",
      "1p": "hayamos",
      "2p": "hayáis",
      "3p": "hayan"
    },
    "estar": {
      "1s": "esté",
      "2s": "estés",
      "3s": "esté",
      "1p": "estemos",
      "2p": "estéis",
      "3p": "estén"
    },
    "saber": {
      "1s": "sepa",
      "2s": "sepas",
      "3s": "sepa",
      "1p": "sepamos",
      "2p": "sepáis",
      "3p": "sepan"
    }
  },
  "Affirmative Tú Commands": {
    "venir": "ven",
    "decir": "di",
    "salir": "sal",
    "hacer": "haz",
    "tener": "ten",
    "ir": "ve",
    "poner": "pon",
    "ser": "sé"
  },
  "Past Participle": {
    "abrir": "abierto",
    "cubrir": "cubierto",
    "decir": "dicho",
    "escribir": "escrito",
    "hacer": "hecho",
    "morir": "muerto",
    "poner": "puesto",
    "romper": "roto",
    "ver": "visto",
    "volver": "vuelto",
    "freír": "frito"
  }
};
