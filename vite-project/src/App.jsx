import { useState, useRef, useEffect } from 'react';
import { executeCommand } from './commands';
import { MESSAGES } from './constants/messages';
import { useCommandHistory } from './hooks/useCommandHistory';
import { useTabCompletion } from './hooks/useTabCompletion';
import { useTypewriter } from './hooks/useTypewriter';
import { generateAIResponse } from './services/openai';
import { moveCaretToEnd } from './components/features/terminal/utils';
import Blog from './components/features/blog/Blog';
import Terminal from './components/features/terminal/Terminal';
import Navigation from './components/layout/Navigation';
import HelpCarousel from './components/features/help/HelpCarousel';

// Main application component
function App() {
  const inputRef = useRef(null);
  const { addToHistory, navigateHistory } = useCommandHistory();
  const { handleTabCompletion, applyCompletion } = useTabCompletion();
  
  const [state, setState] = useState({
    outputHistory: [],
    aiOutputHistory: [],
    activeMenu: null,
    isMenuBarActive: false,
    isAIMode: false,
    isLoading: false,
    currentResponse: '',
    showBlog: false,
    showHelpCarousel: true,
    completionMatches: [],
    ghostSuggestion: ''
  });

  const { displayText, isComplete } = useTypewriter(state.currentResponse, 10);

  const menuConfig = {
    about: {
      label: 'About Me',
      items: ['Bio', 'Skills', 'Resume', 'Contact Me']
    },
    work: {
      label: 'Quick Links',
      items: ['Education', 'Projects', 'Experience']
    },
    blog: {
      label: 'Blog',
      items: ['View Blog'],
      onClick: () => setState(s => ({ ...s, showBlog: true }))
    },
    random: {
      label: 'Random Tid-bits',
      items: ['Bug Report', 'Work-Life Balance']
    },
    help: {
      label: 'Site Tutorial',
      items: [],
      onClick: () => setState(s => ({ ...s, showHelpCarousel: true }))
    }
  };

  const getGhostSuggestion = (inputText = '') => {
    const value = inputText ?? '';
    if (!value) return '';

    const completion = handleTabCompletion(value);
    const { matches, type } = completion;

    if (!matches?.length) {
      return '';
    }

    const firstMatch = matches[0];

    if (type === 'command') {
      const trimmed = value.trim();
      if (!trimmed) return '';
      if (!firstMatch.toLowerCase().startsWith(trimmed.toLowerCase())) return '';
      if (firstMatch.length === trimmed.length) return '';
      return value + firstMatch.slice(trimmed.length);
    }

    if (type === 'file') {
      const lastSpaceIndex = value.lastIndexOf(' ');
      const partial = lastSpaceIndex === -1 ? value : value.slice(lastSpaceIndex + 1);
      const base = lastSpaceIndex === -1 ? '' : value.slice(0, lastSpaceIndex + 1);
      if (!firstMatch.toLowerCase().startsWith(partial.toLowerCase())) return '';
      if (firstMatch.length === partial.length) return '';
      return base + firstMatch;
    }

    return '';
  };

  const handleInputChange = () => {
    if (!inputRef.current) return;
    const value = inputRef.current.textContent || '';
    const ghostText = getGhostSuggestion(value);

    setState(s => {
      if (s.ghostSuggestion === ghostText && s.completionMatches.length === 0) {
        return s;
      }
      return {
        ...s,
        ghostSuggestion: ghostText,
        completionMatches: []
      };
    });
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isComplete || !state.currentResponse) return;

    setState(s => {
      const newHistory = [...s.aiOutputHistory];
      const lastEntry = newHistory[newHistory.length - 1];
      if (lastEntry?.type === 'ai') {
        lastEntry.output = s.currentResponse;
      }
      return { ...s, aiOutputHistory: newHistory };
    });
  }, [isComplete, state.currentResponse]);

  const handleCommand = async cmd => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'bio') {
      setState(s => ({
        ...s,
        outputHistory: [...s.outputHistory, {
          command: 'Bio',
          output: "Developer focused on robotics, AI optimization, and fintech. I build systems that make machines smarter and processes more efficient. Currently exploring the intersection of artificial intelligence and real-world automation while drinking too much coffee.",
          type: 'normal',
          timestamp: Date.now()
        }]
      }));
      return;
    }

    if (state.isAIMode) {
      handleAICommand(trimmedCmd);
      return;
    }

    handleNormalCommand(trimmedCmd, cmd);
  };

  const handleAICommand = async cmd => {
    if (cmd === 'exit') {
      setState(s => ({
        ...s,
        isAIMode: false,
        currentResponse: '',
        outputHistory: [
          ...s.outputHistory, 
          ...s.aiOutputHistory,
          {
            command: cmd,
            output: 'Exiting AI mode',
            type: 'system',
            timestamp: Date.now()
          }
        ],
        aiOutputHistory: [],
        ghostSuggestion: ''
      }));
      return;
    }

    if (cmd === 'clear') {
      setState(s => ({ ...s, aiOutputHistory: [], currentResponse: '' }));
      return;
    }

    const timestamp = Date.now();
    setState(s => ({
      ...s,
      isLoading: true,
      aiOutputHistory: [...s.aiOutputHistory, {
        command: cmd,
        type: 'ai',
        output: 'Thinking...',
        timestamp
      }]
    }));

    try {
      const response = await generateAIResponse(cmd);
      setState(s => ({
        ...s,
        currentResponse: response,
        isLoading: false
      }));
    } catch (err) {
      setState(s => {
        const newHistory = [...s.aiOutputHistory];
        const lastEntry = newHistory[newHistory.length - 1];
        if (lastEntry?.timestamp === timestamp) {
          lastEntry.output = 'Error: Unable to generate response. Please try again.';
        }
        return {
          ...s,
          currentResponse: '',
          isLoading: false,
          aiOutputHistory: newHistory
        };
      });
    }
  };

  const handleNormalCommand = (trimmedCmd, originalCmd) => {
    if (trimmedCmd === 'ai') {
      setState(s => ({
        ...s,
        isAIMode: true,
        outputHistory: [...s.outputHistory, {
          command: originalCmd,
          output: 'Entering AI mode. Ask me anything about my experience, projects, or skills!',
          type: 'system',
          timestamp: Date.now()
        }],
        ghostSuggestion: ''
      }));
      return;
    }

    if (trimmedCmd === 'exit') {
      setState(s => ({
        ...s,
        outputHistory: [...s.outputHistory, {
          command: originalCmd,
          output: 'Error: The exit command can only be used in AI mode.',
          type: 'normal',
          timestamp: Date.now()
        }],
        ghostSuggestion: ''
      }));
      return;
    }

    const output = executeCommand(originalCmd);
    addToHistory(originalCmd);

    if (output === 'CLEAR') {
      setState(s => ({
        ...s,
        outputHistory: [],
        aiOutputHistory: [],
        currentResponse: ''
      }));
      return;
    }

    setState(s => ({
      ...s,
      outputHistory: [...s.outputHistory, {
        command: originalCmd,
        output,
        type: 'normal',
        timestamp: Date.now()
      }]
    }));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = inputRef.current.textContent;
      if (!command.trim() || state.isLoading || (!isComplete && state.currentResponse)) return;
      
      handleCommand(command);
      inputRef.current.textContent = '';
      setState(s => ({
        ...s,
        completionMatches: [],
        ghostSuggestion: ''
      }));
    } 
    else if (e.key === 'Tab') {
      e.preventDefault();
      const input = inputRef.current.textContent;
      const completion = handleTabCompletion(input);
      const { newInput, showMatches, matches } = applyCompletion(input, completion);
      
      if (!showMatches) {
        inputRef.current.textContent = newInput;
        moveCaretToEnd(inputRef.current);
      }

      const updatedInput = showMatches ? input : newInput;
      const ghostText = getGhostSuggestion(updatedInput);

      setState(s => ({
        ...s,
        completionMatches: showMatches ? matches : [],
        ghostSuggestion: ghostText
      }));
    }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      const command = navigateHistory(e.key === 'ArrowUp' ? 'up' : 'down');
      if (command !== null) {
        inputRef.current.textContent = command;
        moveCaretToEnd(inputRef.current);
        const ghostText = getGhostSuggestion(command);
        setState(s => ({
          ...s,
          ghostSuggestion: ghostText,
          completionMatches: []
        }));
      }
    }
  };

  const handleTerminalClick = e => {
    if (!window.getSelection().toString()) {
      inputRef.current?.focus();
      setState(s => ({
        ...s,
        activeMenu: null,
        isMenuBarActive: false
      }));
    }
  };

  const handleMenuClick = menuKey => {
    if (menuKey === 'help') {
      setState(s => ({ ...s, showHelpCarousel: true }));
      return;
    }
    if (!state.isMenuBarActive) {
      setState(s => ({
        ...s,
        isMenuBarActive: true,
        activeMenu: menuKey
      }));
    }
  };

  const handleMenuItemClick = (menuKey, item) => {
    if (menuConfig[menuKey]?.onClick) {
      menuConfig[menuKey].onClick();
      return;
    }

    const cmdMap = {
      'Contact': 'contact',
      'Education': 'cat education.txt',
      'Projects': 'cat projects.txt',
      'Experience': 'cat experience.txt',
      'Skills': 'cat skills.txt',
      'Contact Me': 'contact',
      'Bio': 'bio'
    };

    if (cmdMap[item]) {
      simulateCommand(cmdMap[item]);
    } else {
      switch(item) {
        case 'Resume':
          window.open('/resume.pdf', '_blank');
          break;
        case 'Bug Report':
        case 'Work-Life Balance':
          setState(s => ({
            ...s,
            outputHistory: [...s.outputHistory, {
              command: item,
              output: item === 'Bug Report' 
                ? "Bug? Sorry, that's not in my vocabulary"
                : "404: Not Found",
              type: 'normal'
            }]
          }));
          break;
        default:
          simulateCommand(item.toLowerCase());
      }
    }

    setState(s => ({
      ...s,
      activeMenu: null,
      isMenuBarActive: false
    }));
  };

  const simulateCommand = cmd => {
    if (inputRef.current) {
      inputRef.current.textContent = cmd;
      handleCommand(cmd);
      inputRef.current.textContent = '';
    }
  };

  if (state.showBlog) {
    return <Blog onBack={() => setState(s => ({ ...s, showBlog: false }))} />;
  }

  const sortedOutput = [...state.outputHistory, ...state.aiOutputHistory]
    .sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div className="app-container">
      <div className="title-bar">
        <div className="title-bar-text">Pranav Subash Personal Portfolio</div>
        <div className="title-bar-controls">
          <button className="title-bar-button minimize" />
          <button className="title-bar-button maximize" />
          <button className="title-bar-button close" />
        </div>
      </div>

      <Navigation 
        menuConfig={menuConfig}
        activeMenu={state.activeMenu}
        isMenuBarActive={state.isMenuBarActive}
        onMenuClick={handleMenuClick}
        onMenuHover={key => state.isMenuBarActive && setState(s => ({ ...s, activeMenu: key }))}
        onMenuItemClick={handleMenuItemClick}
      />

      <Terminal 
        state={state}
        onCommand={handleCommand}
        onKeyDown={handleKeyDown}
          onInput={handleInputChange}
        onClick={handleTerminalClick}
        inputRef={inputRef}
      />

      {state.showHelpCarousel && (
        <HelpCarousel onClose={() => setState(s => ({ ...s, showHelpCarousel: false }))} />
      )}
    </div>
  );
}

export default App;