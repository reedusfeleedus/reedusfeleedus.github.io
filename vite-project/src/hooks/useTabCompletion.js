import { AVAILABLE_FILES } from '../constants/files';
import { COMMANDS } from '../constants/commands';

const FILE_COMMANDS = ['cat'];  // Commands that accept file arguments
const NO_COMPLETION_COMMANDS = ['ls', 'pwd', 'clear', 'whoami'];  // Commands that don't need completion

export const useTabCompletion = () => {
  const handleTabCompletion = (inputText) => {
    if (!inputText.trim()) {
      return { matches: [], type: null };
    }

    const parts = inputText.trim().split(' ');
    const firstWord = parts[0].toLowerCase();

    // If we only have one word, try to complete a command
    if (parts.length === 1) {
      const matches = COMMANDS.filter(cmd => 
        cmd.toLowerCase().startsWith(firstWord)
      );
      return { matches, type: 'command' };
    }

    // Handle file completion for cat command
    if (firstWord === 'cat') {
      const filePartial = parts[1] || '';
      // Show all files if no partial filename
      if (!filePartial) {
        return { matches: AVAILABLE_FILES, type: 'file' };
      }
      // Filter files based on partial input
      const matches = AVAILABLE_FILES.filter(file =>
        file.toLowerCase().startsWith(filePartial.toLowerCase())
      );
      return { matches, type: 'file' };
    }

    return { matches: [], type: null };
  };

  const applyCompletion = (currentInput, completion) => {
    const { matches, type } = completion;
    
    if (matches.length === 0) {
      return { newInput: currentInput, showMatches: false };
    }

    if (matches.length === 1) {
      // Single match - complete the input
      const parts = currentInput.trim().split(' ');
      if (type === 'command') {
        return { newInput: matches[0], showMatches: false };
      } else if (type === 'file') {
        parts[parts.length - 1] = matches[0];
        return { newInput: parts.join(' '), showMatches: false };
      }
    }

    // Multiple matches - show all possibilities
    return { newInput: currentInput, showMatches: true, matches };
  };

  return {
    handleTabCompletion,
    applyCompletion
  };
}; 