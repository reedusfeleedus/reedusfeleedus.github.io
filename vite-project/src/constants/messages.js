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
  WELCOME: `<div class="terminal-banner"> ⚠️ This is a Fake Terminal. </div>
 Use the site tutorial on the top to get started, or type 'help' to see available commands.
 The site comes with two modes:

1. AI ASSISTANT (For non-technical users): Type 'ai' to enter AI mode, type 'exit' to exit AI mode.
   AI mode allows you to chat with me in natural language about my experience and projects.
2. TERMINAL COMMANDS (For tech-savvy users): Use normal terminal commands like 'ls', 'cat', 'pwd', etc.

 Since this is a command line interface, it's designed for desktop viewing. Mobile experience will be limited.

Happy exploring! 🚀`,

  PWD: '/home/portfolio'
};