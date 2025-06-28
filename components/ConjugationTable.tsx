'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ConjugationTableProps {
  verb: {
    verb: string;
    tenses: {
      [tenseName: string]: {
        [moodName: string]: {
          [person: string]: string;
        };
      };
    };
  };
  tense: string;
  mood: string;
}

const ConjugationTable: React.FC<ConjugationTableProps> = ({ verb, tense, mood }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    setAnswers({});
    setShowAnswers(false);
  }, [verb, tense, mood]);

  const handleInputChange = (person: string, value: string) => {
    setAnswers({ ...answers, [person]: value });
  };

  const handleClear = () => {
    setAnswers({});
    setShowAnswers(false);
  };

  const handleCheck = () => {
    setShowAnswers(true);
  };

  const handleShow = () => {
    const correctAnswers = verb.tenses[tense][mood];
    setAnswers(correctAnswers);
    setShowAnswers(true);
  };

  const correctAnswers = verb.tenses[tense][mood];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-4">{verb.verb} - {mood} {tense}</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(correctAnswers).map((person) => (
          <div key={person} className="flex items-center">
            <span className="w-16 font-bold">{person}</span>
            <Input
              type="text"
              value={answers[person] || ''}
              onChange={(e) => handleInputChange(person, e.target.value)}
              className={`${showAnswers ? (answers[person] === correctAnswers[person] ? 'border-green-500' : 'border-red-500') : ''}`}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8 flex justify-center gap-4">
        <Button
          onClick={handleClear}
          variant="outline"
          className="cursor-pointer"
        >
          Clear
        </Button>
        <Button
          onClick={handleCheck}
          className="cursor-pointer"
        >
          Check
        </Button>
        <Button
          onClick={handleShow}
          variant="secondary"
          className="cursor-pointer"
        >
          Show Answers
        </Button>
      </div>
    </motion.div>
  );
};

export default ConjugationTable;
