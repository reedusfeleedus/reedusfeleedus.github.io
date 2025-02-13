const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });
};

export const MESSAGES = {
  COMMAND_NOT_FOUND: (cmd) => `Command not found: ${cmd}`,
  FILE_NOT_FOUND: (file) => `File not found: ${file}`,
  MISSING_ARGS: (cmd) => `Usage: ${cmd} <filename>`,
  WELCOME: `You are connected to portfolio@ubuntu
Time connected: ${new Date().toLocaleTimeString()}

Welcome! This is a fake terminal. I thought it would be a fun way to explore my portfolio. 
There are two ways to do this:

AI ASSISTANT (Recommended for non-technical users): 
- Type 'ai' to enter AI mode
- Type 'exit' to exit AI mode
- Simply ask questions in natural language if you have any questions about my experience, skills, or projects
- Example: "What projects have you worked on?" or "Tell me about your backend experience"

TERMINAL COMMANDS (More fun if you're tech-savvy):
- Type 'help' to see all available commands
- Use 'ls' to view portfolio sections
- Read files with 'cat' (e.g. 'cat projects.txt')
- Tab completion and command history supported

Type 'clear' for a fresh start. Happy exploring! 🚀`,
  PWD: '/home/portfolio'
};