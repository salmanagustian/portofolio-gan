import { useState, useEffect } from 'react';

const TRANSITION_MS = 350;

export function useCyclingText(words, durationMs, enabled) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('visible');

  useEffect(() => {
    if (!enabled) return;

    let timer;
    if (phase === 'visible') {
      timer = setTimeout(() => setPhase('exit'), durationMs);
    } else if (phase === 'exit') {
      timer = setTimeout(() => {
        setIndex(i => (i + 1) % words.length);
        setPhase('enter');
      }, TRANSITION_MS);
    } else if (phase === 'enter') {
      timer = setTimeout(() => setPhase('visible'), TRANSITION_MS);
    }

    return () => clearTimeout(timer);
  }, [enabled, phase, durationMs, words.length]);

  return { word: words[index], phase };
}
