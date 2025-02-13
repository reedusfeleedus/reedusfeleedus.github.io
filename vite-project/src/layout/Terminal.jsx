import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    {
      type: 'system',
      content: 'Welcome to the Portfolio Terminal! Type "help" for available commands.'
    }
  ]);

  // PHASE 2A: BASIC STATE MANAGEMENT
  const [isAIMode, setIsAIMode] = useState(false);

  const inputRef = useRef(null);

  const enterAIMode = () => {
    setIsAIMode(true);
    console.log('Entered AI Mode:', true);
  };

  const exitAIMode = () => {
    setIsAIMode(false);
    console.log('Exited AI Mode:', false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.trim().toLowerCase();

    if (isAIMode && command === 'exit') {
      exitAIMode();
      setOutput(prev => [
        ...prev,
        { type: 'command', content: `portfolio@ubuntu:~$ ${input}` },
        { type: 'output', content: 'Exiting AI mode' }
      ]);
    } else if (command === 'ai') {
      enterAIMode();
      setOutput(prev => [
        ...prev,
        { type: 'command', content: `portfolio@ubuntu:~$ ${input}` },
        { type: 'output', content: 'Entering AI mode' }
      ]);
    } else {
      setOutput(prev => [
        ...prev,
        { type: 'command', content: `portfolio@ubuntu:~$ ${input}` },
        { type: 'output', content: `Command '${input}' not found` }
      ]);
    }

    setInput('');
  };

  // Focus input on mount and output changes, and log current AI state
  useEffect(() => {
    inputRef.current?.focus();
    console.log("Current AI Mode State:", isAIMode);
  }, [output]);

  return (
    <div 
      className="min-h-screen max-h-screen bg-purple-900 text-white p-4 font-mono overflow-y-auto"
    >
      <div className="mb-4">
        {output.map((line, i) => (
            <div 
                key={i} 
                className={`mb-2 ${line.type === 'command' ? 'text-green-400' : 'text-white'}`}
            >
                {line.type === 'output' && line.content.includes('<a href=') ? (
                    <div dangerouslySetInnerHTML={{ __html: line.content }} />
                ) : (
                    line.content
                )}
            </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex sticky bottom-0 bg-purple-900 py-2">
        <span className="text-green-400 mr-2">portfolio@ubuntu:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white"
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal; 