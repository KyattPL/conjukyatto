'use client';

import React, { useState, useEffect } from 'react';
import ConjugationTable from '@/components/ConjugationTable';
import { transformVerbData, Verb } from '@/lib/utils/dataTransformer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [verbs, setVerbs] = useState<Verb[]>([]);
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);
  const [selectedTense, setSelectedTense] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [currentVerb, setCurrentVerb] = useState<Verb | null>(null);
  const [currentTense, setCurrentTense] = useState<string | null>(null);
  const [currentMood, setCurrentMood] = useState<string | null>(null);

  useEffect(() => {
    fetch('/conjukyatto/data.json')
      .then((response) => response.json())
      .then((rawData) => {
        const transformedData = transformVerbData(rawData);
        setVerbs(transformedData);
        handleInitialRandomSelection(transformedData);
      })
      .catch((error) => console.error('Error loading verbs:', error));
  }, []);

  const handleRandomVerb = () => {
    if (verbs.length === 0) return;
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    setSelectedVerb(randomVerb.verb);
    setCurrentVerb(randomVerb);

    const availableTensesForVerb = Object.keys(randomVerb.tenses);
    const newTense = selectedTense && availableTensesForVerb.includes(selectedTense) ? selectedTense : availableTensesForVerb[0];
    setSelectedTense(newTense);
    setCurrentTense(newTense);

    const availableMoodsForTense = Object.keys(randomVerb.tenses[newTense]);
    const newMood = selectedMood && availableMoodsForTense.includes(selectedMood) ? selectedMood : availableMoodsForTense[0];
    setSelectedMood(newMood);
    setCurrentMood(newMood);
  };

  const handleRandomTense = () => {
    if (!currentVerb) {
      handleRandomVerb(); // If no verb is selected, select a random verb first
      return;
    }
    const availableTensesForVerb = Object.keys(currentVerb.tenses);
    const randomTense = availableTensesForVerb[Math.floor(Math.random() * availableTensesForVerb.length)];
    setSelectedTense(randomTense);
    const availableMoodsForTense = Object.keys(currentVerb.tenses[randomTense]);
    const randomMood = availableMoodsForTense[Math.floor(Math.random() * availableMoodsForTense.length)];
    setSelectedMood(randomMood);
    setCurrentTense(randomTense);
    setCurrentMood(randomMood);
  };

  const handleRandomMood = () => {
    if (!currentVerb || !currentTense) {
      handleInitialRandomSelection(verbs);
      return;
    }
    const availableMoodsForTense = Object.keys(currentVerb.tenses[currentTense]);
    const randomMood = availableMoodsForTense[Math.floor(Math.random() * availableMoodsForTense.length)];
    setSelectedMood(randomMood);
    setCurrentMood(randomMood);
  };

  const handleVerbChange = (verbName: string) => {
    setSelectedVerb(verbName);
    const verbObj = verbs.find(v => v.verb === verbName);
    setCurrentVerb(verbObj || null);
    if (verbObj) {
      const availableTensesForVerb = Object.keys(verbObj.tenses);
      const newTense = selectedTense && availableTensesForVerb.includes(selectedTense) ? selectedTense : availableTensesForVerb[0];
      setSelectedTense(newTense);
      setCurrentTense(newTense);

      const availableMoodsForTense = Object.keys(verbObj.tenses[newTense]);
      const newMood = selectedMood && availableMoodsForTense.includes(selectedMood) ? selectedMood : availableMoodsForTense[0];
      setSelectedMood(newMood);
      setCurrentMood(newMood);
    } else {
      setCurrentTense(null);
      setCurrentMood(null);
    }
  };

  const handleTenseChange = (tenseName: string) => {
    setSelectedTense(tenseName);
    setCurrentTense(tenseName);
    if (currentVerb) {
      const availableMoodsForTense = Object.keys(currentVerb.tenses[tenseName]);
      const newMood = selectedMood && availableMoodsForTense.includes(selectedMood) ? selectedMood : availableMoodsForTense[0];
      setSelectedMood(newMood);
      setCurrentMood(newMood);
    }
  };

  const handleMoodChange = (moodName: string) => {
    setSelectedMood(moodName);
    setCurrentMood(moodName);
  };

  const handleInitialRandomSelection = (allVerbs: Verb[]) => {
    if (allVerbs.length === 0) return;
    const randomVerb = allVerbs[Math.floor(Math.random() * allVerbs.length)];
    const availableTensesForVerb = Object.keys(randomVerb.tenses);
    const randomTense = availableTensesForVerb[Math.floor(Math.random() * availableTensesForVerb.length)];
    const availableMoodsForTense = Object.keys(randomVerb.tenses[randomTense]);
    const randomMood = availableMoodsForTense[Math.floor(Math.random() * availableMoodsForTense.length)];

    setSelectedVerb(randomVerb.verb);
    setSelectedTense(randomTense);
    setSelectedMood(randomMood);
    setCurrentVerb(randomVerb);
    setCurrentTense(randomTense);
    setCurrentMood(randomMood);
  };

  useEffect(() => {
    fetch('/conjukyatto/data.json')
      .then((response) => response.json())
      .then((rawData) => {
        const transformedData = transformVerbData(rawData);
        setVerbs(transformedData);
        handleInitialRandomSelection(transformedData);
      })
      .catch((error) => console.error('Error loading verbs:', error));
  }, []);

  const availableTenses = currentVerb ? Object.keys(currentVerb.tenses) : [];
  const availableMoods = (currentVerb && currentTense) ? Object.keys(currentVerb.tenses[currentTense]) : [];

  return (
    <div className="flex-grow bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-5xl p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Spanish Verb Conjugation</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-[200px] justify-between"
                >
                  {selectedVerb
                    ? verbs.find((verb) => verb.verb === selectedVerb)?.verb
                    : "Select verb..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search verb..." />
                  <CommandList>
                    <CommandEmpty>No verb found.</CommandEmpty>
                    <CommandGroup>
                      {verbs.map((verb) => (
                        <CommandItem
                          key={verb.verb}
                          value={verb.verb}
                          onSelect={(currentValue) => {
                            handleVerbChange(currentValue === selectedVerb ? "" : currentValue);
                          }}
                        >
                          {verb.verb}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Button onClick={handleRandomVerb} className="cursor-pointer">
              Random Verb
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Select onValueChange={handleTenseChange} value={selectedTense || ""}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a tense" />
              </SelectTrigger>
              <SelectContent>
                {availableTenses.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleRandomTense} className="cursor-pointer">
              Random Tense
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Select onValueChange={handleMoodChange} value={selectedMood || ""}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a mood" />
              </SelectTrigger>
              <SelectContent>
                {availableMoods.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleRandomMood} className="cursor-pointer">
              Random Mood
            </Button>
          </div>
        </div>

        {currentVerb && currentTense && currentMood && (
          <ConjugationTable verb={currentVerb} tense={currentTense} mood={currentMood} />
        )}
      </div>
    </div>
  );
}
