import { useState } from 'react';

const MAX_HISTORY = 50;

export const useCommandHistory = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState('');

  const addToHistory = (command) => {
    if (command.trim() && 
        (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== command)) {
      setCommandHistory(prev => {
        const newHistory = [...prev, command].slice(-MAX_HISTORY);
        return newHistory;
      });
    }
    setHistoryIndex(-1);
    setCurrentCommand('');
  };

  const navigateHistory = (direction) => {
    if (direction === 'up' && commandHistory.length > 0) {
      const newIndex = historyIndex < commandHistory.length - 1 
        ? historyIndex + 1 
        : historyIndex;
      
      setHistoryIndex(newIndex);
      return commandHistory[commandHistory.length - 1 - newIndex];
    }
    
    if (direction === 'down') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        return commandHistory[commandHistory.length - 1 - newIndex];
      } 
      if (historyIndex === 0) {
        setHistoryIndex(-1);
        return '';
      }
    }
    
    return null;
  };

  return {
    addToHistory,
    navigateHistory,
    historyIndex
  };
}; 