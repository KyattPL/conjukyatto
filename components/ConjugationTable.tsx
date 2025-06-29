'use client';

import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
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

export interface ConjugationTableHandles {
  clear: () => void;
  check: () => void;
  showAnswers: () => void;
}

const ConjugationTable = forwardRef<ConjugationTableHandles, ConjugationTableProps>(({ verb, tense, mood }, ref) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    setAnswers({});
    setShowAnswers(false);
  }, [verb, tense, mood]);

  const handleInputChange = (person: string, value: string) => {
    setAnswers({ ...answers, [person]: value });
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      setAnswers({});
      setShowAnswers(false);
    },
    check: () => {
      setShowAnswers(true);
    },
    showAnswers: () => {
      const correctAnswers = verb.tenses[tense][mood];
      setAnswers(correctAnswers);
      setShowAnswers(true);
    },
  }));

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
        <div className="flex flex-col gap-4">
          {['1s', '2s', '3s'].map((person) => (
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
        <div className="flex flex-col gap-4">
          {['1p', '2p', '3p'].map((person) => (
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
      </div>
      
    </motion.div>
  );
});

export default ConjugationTable;
