export const parseCommand = (input) => {
  const args = input.trim().toLowerCase().split(' ');
  const command = args[0];
  const params = args.slice(1);
  return { command, params };
};

export const isValidFile = (filename, availableFiles) => {
  return availableFiles.includes(filename);
};

// New validation utilities
export const getCommandSuggestion = (input) => {
  const baseCommands = ['ls', 'cat', 'pwd', 'clear', 'help', 'whoami', 'contact', 'download', 'ai'];
  const inputCommand = input.split(' ')[0].toLowerCase();
  
  // Don't suggest anything for 'exit' command
  if (inputCommand === 'exit') {
    return `Command 'exit' can only be used in AI mode`;
  }

  // Check if input matches a file name (with or without extension)
  const fileNames = {
    'education': 'education.txt',
    'experience': 'experience.txt',
    'projects': 'projects.txt',
    'skills': 'skills.txt',
    'extracurriculars': 'extracurriculars.txt',
    'contact': 'contact.txt',
    'resume': 'resume.pdf'
  };

  // Check for exact file names (with extension)
  if (Object.values(fileNames).includes(inputCommand)) {
    return `Command '${input}' not found. Did you mean: cat ${inputCommand}`;
  }

  // Check for file names without extension
  if (Object.keys(fileNames).includes(inputCommand)) {
    return `Command '${input}' not found. Did you mean: cat ${fileNames[inputCommand]}`;
  }
  
  // Find closest matching command
  const closestMatch = baseCommands.find(cmd => 
    cmd.startsWith(inputCommand) || 
    levenshteinDistance(inputCommand, cmd) <= 2
  );

  if (closestMatch) {
    return `Command '${input}' not found, did you mean:\n  command '${closestMatch}' from package 'portfolio-utils'`;
  }
  return `Command '${input}' not found`;
};

// Helper function to calculate string similarity
const levenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}; 