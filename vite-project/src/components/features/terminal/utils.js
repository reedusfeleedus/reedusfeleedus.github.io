export const formatText = text => {
  if (!text) return '';
  
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/^- (.*?)$/gm, '• $1')
    .replace(/\n/g, '<br/>');
};

export const moveCaretToEnd = element => {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}; 