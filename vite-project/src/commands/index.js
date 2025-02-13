import { AVAILABLE_FILES, FILES } from '../constants/files.js';
import { MESSAGES } from '../constants/messages.js';
import { PROFILE } from '../config/profile.js';
import { parseCommand, isValidFile, getCommandSuggestion } from './utils';
import { TERMINAL_COLORS, formatOutput } from '../styles/terminal';

// Quick lookup for special file handling
const SPECIAL_FILES = {
  'resume.pdf': '/resume.pdf'
};

// Core command implementations
const commands = {
  ls: (params = []) => {
    if (!params.length) {
      return formatOutput(AVAILABLE_FILES.join('    '), 'file');
    }
    return formatOutput(`ls: cannot access '${params[0]}': No such file or directory`, 'error');
  },

  cat: ([filename, ...rest]) => {
    if (!filename) return formatOutput(MESSAGES.MISSING_ARGS('cat'), 'error');
    
    if (!isValidFile(filename, AVAILABLE_FILES)) {
      return formatOutput(MESSAGES.FILE_NOT_FOUND(filename), 'error');
    }
    
    if (filename === 'resume.pdf') {
      window.open(SPECIAL_FILES[filename], '_blank');
      return `Opened resume at <a href="${SPECIAL_FILES[filename]}" target="_blank" class="text-blue-500 hover:underline">${SPECIAL_FILES[filename]}</a>`;
    }
    
    return formatFileContent(FILES[filename]);
  },

  pwd: () => formatOutput(MESSAGES.PWD, 'muted'),

  clear: () => 'CLEAR',

  help: () => `Available commands:
  ai                 Enter AI assistant mode (pls don't kill my credits) for non-technical users 
  ls                 List all files
  cat ＜filename＞   Display file contents
  pwd                Print working directory
  clear              Clear terminal screen
  help               Show this help message
  whoami             Display user information
  contact            Show contact information
  download resume    Download resume PDF`.trim(),

  whoami: () => `hopefully_my_future_employer@but.srsly.hire.me.please`,

  contact: () => {
    const { EMAIL, PHONE, LINKEDIN, GITHUB } = PROFILE.CONTACT;
    return `Email: ${EMAIL}
Phone: ${PHONE}
LinkedIn: ${formatOutput(LINKEDIN, 'link')}
GitHub: ${formatOutput(GITHUB, 'link')}`.trim();
  },

  download: ([type, ...rest]) => {
    if (type === 'resume') {
      window.open(SPECIAL_FILES['resume.pdf'], '_blank');
      return `Opened resume at <a href="${SPECIAL_FILES['resume.pdf']}" target="_blank" class="text-blue-500 hover:underline">${SPECIAL_FILES['resume.pdf']}</a>`;
    }
    return MESSAGES.COMMAND_NOT_FOUND(`download ${[type, ...rest].join(' ')}`);
  }
};

// Content formatting rules
const formatRules = [
  // Headers and separators
  [/^[A-Z\s]+$/, line => formatOutput(line, 'header')],
  [/^=+$/, line => line],
  
  // Education institutions
  [/(King's College London|Global Public School)/, (line, match) => 
    line.replace(match[0], formatOutput(match[0], 'error'))],
  
  // Dates and qualifications
  [/(Bachelor of Science|A Levels)/, line => formatOutput(line, 'date')],
  [/\((April|June\s+\d{4})\)/, (line, match) => 
    line.replace(match[0], `(${formatOutput(match[1], 'date')})`)],
  [/A\*/, (line, match) => line.replace(match[0], formatOutput(match[0], 'numbers'))],
  
  // Skills and tech
  [/^(Programming Languages:|Frameworks & Tools:)$/, line => formatOutput(line, 'label')],
  [/^Tech Stack:(.+)/, (line, match) => 
    `${formatOutput('Tech Stack:', 'label')}: ${match[1].split(',')
      .map(tech => formatOutput(tech.trim(), 'tech')).join(', ')}`],
  
  // Projects and bullet points
  [/^([A-Za-z\s]+)\s*(\([A-Za-z\s]+\d{4}\))/, (line, match) => 
    `${formatOutput(match[1].trim(), 'project')}${match[2]}`],
  [/^-\s*(.+)/, (line, match) => {
    const content = match[1];
    const bullet = formatOutput('-', 'bullet');
    
    // Tech stack bullets
    if (/Python|Java|React|SQL|Firebase|Assembly/.test(content)) {
      return `${bullet} ${content.split(', ')
        .map(tech => formatOutput(tech.trim(), 'tech')).join(', ')}`;
    }
    
    // Numbers and stats
    return `${bullet} ${content.replace(
      /\d+%|\d+\+|\d+k\+|\d+(?=\s*participants|\s*visitors|\s*students)/g, 
      stat => formatOutput(stat, 'numbers')
    )}`;
  }]
];

function formatFileContent(content) {
  return content.split('\n').map(line => {
    for (const [pattern, formatter] of formatRules) {
      const match = line.match(pattern);
      if (match) {
        return formatter(line, match);
      }
    }
    return line;
  }).join('\n');
}

export const executeCommand = (input) => {
  const { command, params } = parseCommand(input);
  const handler = commands[command];
  
  return handler ? handler(params) : formatOutput(getCommandSuggestion(input), 'error');
};