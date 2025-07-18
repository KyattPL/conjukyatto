'use client';

import React, { useState, useEffect, useRef } from 'react';
import ConjugationTable, { ConjugationTableHandles } from '@/components/ConjugationTable';
import { transformVerbData, Verb } from '@/lib/utils/dataTransformer';

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
import { Switch } from "@/components/ui/switch";

export default function Home() {
  const [verbs, setVerbs] = useState<Verb[]>([]);
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);
  const [currentVerb, setCurrentVerb] = useState<Verb | null>(null);
  const [selectedTenseMoodCombinations, setSelectedTenseMoodCombinations] = useState<string[]>([]);
  const [allTenseMoodCombinations, setAllTenseMoodCombinations] = useState<string[]>([]);
  const [isMultiTenseMode, setIsMultiTenseMode] = useState(false);
  const singleTableRef = useRef<ConjugationTableHandles>(null);
  
  const multiTableRefs = useRef<Map<string, React.RefObject<ConjugationTableHandles | null>>>(new Map());

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

  useEffect(() => {
    if (verbs.length > 0) {
      const combinations = new Set<string>();
      verbs.forEach(verb => {
        Object.entries(verb.tenses).forEach(([tense, moods]) => {
          Object.keys(moods).forEach(mood => {
            combinations.add(`${mood}|${tense}`);
          });
        });
      });
      setAllTenseMoodCombinations(Array.from(combinations).sort());
    }
  }, [verbs]);

  const handleRandomVerb = () => {
    if (verbs.length === 0) return;
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    setSelectedVerb(randomVerb.verb);
    setCurrentVerb(randomVerb);
  };

  const handleVerbChange = (verbName: string) => {
    setSelectedVerb(verbName);
    const verbObj = verbs.find(v => v.verb === verbName);
    setCurrentVerb(verbObj || null);
    if (verbObj && !isMultiTenseMode) {
      const availableTensesForVerb = Object.keys(verbObj.tenses);
      const newTense = availableTensesForVerb[0];
      const availableMoodsForTense = Object.keys(verbObj.tenses[newTense]);
      const newMood = availableMoodsForTense[0];
      setSelectedTenseMoodCombinations([`${newMood}|${newTense}`]);
    } else if (verbObj && isMultiTenseMode) {
      setSelectedTenseMoodCombinations([]);
    } else if (!verbObj) {
      setSelectedTenseMoodCombinations([]);
    }
  };

  const handleInitialRandomSelection = (allVerbs: Verb[]) => {
    if (allVerbs.length === 0) return;
    const randomVerb = allVerbs[Math.floor(Math.random() * allVerbs.length)];
    const availableTensesForVerb = Object.keys(randomVerb.tenses);
    const randomTense = availableTensesForVerb[Math.floor(Math.random() * availableTensesForVerb.length)];
    const availableMoodsForTense = Object.keys(randomVerb.tenses[randomTense]);
    const randomMood = availableMoodsForTense[Math.floor(Math.random() * availableMoodsForTense.length)];

    setSelectedVerb(randomVerb.verb);
    setCurrentVerb(randomVerb);
    setSelectedTenseMoodCombinations([`${randomMood}|${randomTense}`]);
  };

  

  const handleMultiTenseModeChange = (checked: boolean) => {
    setIsMultiTenseMode(checked);
    if (!checked) {
      // When switching back to single tense mode, reset multi-tense selections
      
      multiTableRefs.current.clear();
      // And set a default single tense/mood if a verb is selected
      if (currentVerb) {
        const availableTensesForVerb = Object.keys(currentVerb.tenses);
        const randomTense = availableTensesForVerb[0];
        const availableMoodsForTense = Object.keys(currentVerb.tenses[randomTense]);
        const randomMood = availableMoodsForTense[0];
        setSelectedTenseMoodCombinations([`${randomMood}|${randomTense}`]);
      } else {
        setSelectedTenseMoodCombinations([]);
      }
    } else {
      // When switching to multi-tense mode, clear single selection
      setSelectedTenseMoodCombinations([]);
    }
  };

  return (
    <div className="flex-grow bg-gray-100 flex flex-col items-center p-2 sm:p-4">
      <div className={`w-full p-4 sm:p-8 bg-white shadow-md rounded-lg ${isMultiTenseMode ? 'max-w-[1400px]' : 'max-w-5xl'}`}>
        <h1 className="text-4xl font-bold text-center mb-8">Spanish Verb Conjugation</h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
          <span>Single Tense Mode</span>
          <Switch
            checked={isMultiTenseMode}
            onCheckedChange={handleMultiTenseModeChange}
          />
          <span>Multi-Tense Mode</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8 justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-2">
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

          <div className="flex flex-col sm:flex-row items-center gap-2">
            {!isMultiTenseMode && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="justify-between"
                  >
                    {selectedTenseMoodCombinations.length > 0
                      ? selectedTenseMoodCombinations[0]
                      : "Select tense/mood..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search tense/mood..." />
                    <CommandList>
                      <CommandEmpty>No tense/mood found.</CommandEmpty>
                      <CommandGroup>
                        {allTenseMoodCombinations.map((combination) => (
                          <CommandItem
                            key={combination}
                            value={combination}
                            onSelect={(currentValue) => {
                              setSelectedTenseMoodCombinations([currentValue]);
                            }}
                          >
                            {combination}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            )}
            {isMultiTenseMode && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="justify-between"
                  >
                    {selectedTenseMoodCombinations.length > 0
                      ? `${selectedTenseMoodCombinations.length} selected`
                      : "Select tense/moods..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search tense/mood..." />
                    <CommandList>
                      <CommandEmpty>No tense/mood found.</CommandEmpty>
                      <CommandGroup>
                        {allTenseMoodCombinations.map((combination) => (
                          <CommandItem
                            key={combination}
                            value={combination}
                            onSelect={(currentValue) => {
                              setSelectedTenseMoodCombinations(prev =>
                                prev.includes(currentValue)
                                  ? prev.filter(item => item !== currentValue)
                                  : [...prev, currentValue]
                              );
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={selectedTenseMoodCombinations.includes(combination)}
                              readOnly
                              className="mr-2"
                            />
                            {combination}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            )}
            <Button onClick={() => {
              if (currentVerb && allTenseMoodCombinations.length > 0) {
                const randomCombination = allTenseMoodCombinations[Math.floor(Math.random() * allTenseMoodCombinations.length)];
                if (isMultiTenseMode) {
                  setSelectedTenseMoodCombinations(prev => [...prev, randomCombination]);
                } else {
                  setSelectedTenseMoodCombinations([randomCombination]);
                }
              }
            }} className="cursor-pointer">
              Random Tense/Mood
            </Button>
          </div>
        </div>

        {isMultiTenseMode && currentVerb ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedTenseMoodCombinations.map((combination) => {
              const [mood, tense] = combination.split('|');
              const key = `${currentVerb.verb}-${tense}-${mood}`;
              if (!multiTableRefs.current.has(key)) {
                multiTableRefs.current.set(key, React.createRef<ConjugationTableHandles | null>());
              }
              return (
                <div key={key} className="relative">
                  <ConjugationTable
                    ref={multiTableRefs.current.get(key) as React.RefObject<ConjugationTableHandles>}
                    verb={currentVerb}
                    tense={tense}
                    mood={mood}
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setSelectedTenseMoodCombinations(prev => prev.filter(item => item !== combination))}
                  >
                    Remove
                  </Button>
                </div>
              );
            })}
          </div>
        ) : (
          currentVerb && selectedTenseMoodCombinations.length > 0 && (
            <ConjugationTable
              ref={singleTableRef}
              verb={currentVerb}
              tense={selectedTenseMoodCombinations[0].split('|')[1]}
              mood={selectedTenseMoodCombinations[0].split('|')[0]}
            />
          )
        )}

        <div className="flex justify-center gap-4 mt-8">
          <Button className='cursor-pointer' onClick={() => {
            if (isMultiTenseMode) {
              selectedTenseMoodCombinations.forEach((combination) => {
                if (currentVerb) {
                  const [mood, tense] = combination.split('|');
                  const key = `${currentVerb.verb}-${tense}-${mood}`;
                  multiTableRefs.current.get(key)?.current?.clear();
                }
              });
            } else {
              singleTableRef.current?.clear();
            }
          }}>
            Clear
          </Button>
          <Button className='cursor-pointer' onClick={() => {
            if (isMultiTenseMode) {
              selectedTenseMoodCombinations.forEach((combination) => {
                if (currentVerb) {
                  const [mood, tense] = combination.split('|');
                  const key = `${currentVerb.verb}-${tense}-${mood}`;
                  multiTableRefs.current.get(key)?.current?.check();
                }
              });
            } else {
              singleTableRef.current?.check();
            }
          }}>
            Check
          </Button>
          <Button className='cursor-pointer' onClick={() => {
            if (isMultiTenseMode) {
              selectedTenseMoodCombinations.forEach((combination) => {
                if (currentVerb) {
                  const [mood, tense] = combination.split('|');
                  const key = `${currentVerb.verb}-${tense}-${mood}`;
                  multiTableRefs.current.get(key)?.current?.showAnswers();
                }
              });
            } else {
              singleTableRef.current?.showAnswers();
            }
          }}>
            Show Answers
          </Button>
        </div>
      </div>
    </div>
  );
}
