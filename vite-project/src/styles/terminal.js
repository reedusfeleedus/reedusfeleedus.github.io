export const TERMINAL_COLORS = {
  text: '#FFFFFF',           // Default white text
  error: '#E06C75',         // Error messages
  success: '#89CA78',       // Success messages
  files: '#4FA6ED',         // Files and links
  headers: '#E6E6E6',       // Section headers
  muted: '#ABB2BF',        // Command outputs
  bullet: '#5C6370',       // Bullet points
  date: '#C678DD',         // Dates
  role: '#98C379',         // Job titles/roles
  numbers: '#E5C07B',      // Statistics/numbers
  label: '#61AFEF',        // Labels like "Tech Stack:"
  tech: '#56B6C2',         // Technology names
  project: '#E06C75'       // Project titles
};

export const formatOutput = (text, type) => {
  switch (type) {
    case 'error':
      return `<span style="color: ${TERMINAL_COLORS.error}">${text}</span>`;
    case 'success':
      return `<span style="color: ${TERMINAL_COLORS.success}">${text}</span>`;
    case 'file':
      return `<span style="color: ${TERMINAL_COLORS.files}">${text}</span>`;
    case 'header':
      return `<span style="color: ${TERMINAL_COLORS.headers}; font-weight: bold">${text}</span>`;
    case 'link':
      return `<span style="color: ${TERMINAL_COLORS.files}; text-decoration: underline">${text}</span>`;
    case 'date':
      return `<span style="color: ${TERMINAL_COLORS.date}">${text}</span>`;
    case 'role':
      return `<span style="color: ${TERMINAL_COLORS.role}">${text}</span>`;
    case 'numbers':
      return `<span style="color: ${TERMINAL_COLORS.numbers}">${text}</span>`;
    case 'muted':
      return `<span style="color: ${TERMINAL_COLORS.muted}">${text}</span>`;
    case 'bullet':
      return `<span style="color: ${TERMINAL_COLORS.bullet}">-</span>`;
    case 'label':
      return `<span style="color: ${TERMINAL_COLORS.label}">${text}</span>`;
    case 'tech':
      return `<span style="color: ${TERMINAL_COLORS.tech}">${text}</span>`;
    case 'project':
      return `<span style="color: ${TERMINAL_COLORS.project}; font-weight: bold">${text}</span>`;
    default:
      return text;
  }
}; 