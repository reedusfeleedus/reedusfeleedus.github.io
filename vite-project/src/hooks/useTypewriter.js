import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 10) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    if (!text) return;
    
    let i = 0;
    setDisplayText(text[0]); 
    setIsComplete(false);
    
    const timer = setInterval(() => {
      if (i < text.length - 1) {
        i++;
        setDisplayText(text.substring(0, i + 1));
      } else {
        clearInterval(timer);
        setIsComplete(true);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return { displayText, isComplete };
}; 