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

👋 Welcome! 
This is a fake terminal - I thought it would be a fun way to explore my portfolio.
⚠️  Since this is a terminal interface, it's designed for desktop viewing. Mobile experience will be limited.

I would suggest checking out the site tutorial on the top to get started, or type 'help' to see available commands.
This site comes with two modes:

1. AI ASSISTANT (For non-technical users): Type 'ai' to enter AI mode, type 'exit' to exit AI mode.
2. TERMINAL COMMANDS (For tech-savvy users): Use normal terminal commands like 'ls', 'cat', 'pwd', etc.

Happy exploring! 🚀`,
  PWD: '/home/portfolio'
};