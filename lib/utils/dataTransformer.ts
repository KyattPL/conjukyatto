interface RawConjugation {
  mood: string;
  tense: string;
  [key: string]: string;
}

interface RawVerbData {
  conj: RawConjugation[];
}

interface RawData {
  [verbName: string]: RawVerbData;
}

export interface Verb {
  verb: string;
  tenses: {
    [tenseName: string]: {
      [moodName: string]: {
        [person: string]: string;
      };
    };
  };
}

export const transformVerbData = (rawData: RawData): Verb[] => {
  const transformedVerbs: Verb[] = [];

  for (const verbName in rawData) {
    if (rawData.hasOwnProperty(verbName)) {
      const verbData = rawData[verbName];
      const tenses: Verb['tenses'] = {};

      verbData.conj.forEach((conjugation) => {
        const { mood, tense, ...forms } = conjugation;
        if (!tenses[tense]) {
          tenses[tense] = {};
        }
        tenses[tense][mood] = forms;
      });

      transformedVerbs.push({
        verb: verbName,
        tenses,
      });
    }
  }
  return transformedVerbs;
};
