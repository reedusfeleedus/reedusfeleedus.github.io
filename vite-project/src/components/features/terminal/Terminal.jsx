import { useRef } from 'react';
import { MESSAGES } from '../../../constants/messages';
import { useTypewriter } from '../../../hooks/useTypewriter';
import { formatText } from './utils';

const Terminal = ({ 
  state,
  onCommand,
  onKeyDown,
  onClick,
  inputRef
}) => {
  const { displayText, isComplete } = useTypewriter(state.currentResponse, 10);
  const sortedOutput = [...state.outputHistory, ...state.aiOutputHistory]
    .sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div className="terminal-container" onClick={onClick}>
      <div className="terminal-line">{MESSAGES.WELCOME}</div>
      
      {sortedOutput.map((entry, idx) => (
        <div key={`entry-${idx}`}>
          <div className="terminal-line">
            <span className={`terminal-prompt ${entry.type === 'ai' ? 'ai-mode' : ''}`} />
            <span className={entry.type === 'ai' ? 'ai-question' : ''}>
              {entry.command}
            </span>
          </div>
          <div 
            className={`terminal-line output-line ${
              entry.type === 'system' ? 'ai-system-message' :
              entry.type === 'ai' ? 'ai-response' : ''
            }`}
            dangerouslySetInnerHTML={{
              __html: entry === state.aiOutputHistory[state.aiOutputHistory.length - 1] 
                && entry.type === 'ai' 
                && !isComplete 
                && state.currentResponse
                  ? formatText(displayText)
                  : formatText(entry.output)
            }}
          />
        </div>
      ))}

      {state.completionMatches.length > 0 && (
        <div className="terminal-line completion-line">
          {state.completionMatches.join('  ')}
        </div>
      )}

      <div className="terminal-line">
        <span className={`terminal-prompt ${state.isAIMode ? 'ai-mode' : ''}`} />
        <span
          ref={inputRef}
          className={`terminal-input ${state.isAIMode ? 'ai-question' : ''}`}
          contentEditable
          onKeyDown={onKeyDown}
          suppressContentEditableWarning
        />
      </div>
    </div>
  );
};

export default Terminal; 