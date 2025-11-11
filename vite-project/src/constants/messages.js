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
  WELCOME: `<div class="terminal-banner">⚠️ This is a Fake Terminal.</div>
👋 Hi, my name is Pranav Subash and this is an interactive way to explore my work.

📚 Quick Start
• Use the tutorial at the top of the site, or type 'help' for the command list.

📋 Two Ways to Explore
1️⃣ AI ASSISTANT (best for casual visitors): Type 'ai' to start chatting. Type 'exit' when you're done.
2️⃣ TERMINAL COMMANDS (for techies): Try familiar commands like 'ls', 'cat', 'pwd', and more.

📱 Heads up: This command-line experience is designed for desktop. Mobile support is limited.

🚀 Ready when you are, have fun exploring!`,

  PWD: '/home/portfolio'
};