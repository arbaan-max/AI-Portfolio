import { useEffect, useState } from 'react';

export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let index = 0;
    let interval: number | undefined;

    const starter = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          setDone(true);
          if (interval) {
            window.clearInterval(interval);
          }
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(starter);
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [speed, startDelay, text]);

  return { displayed, done };
}
