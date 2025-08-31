/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI, Chat } from '@google/genai';
import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// --- Type Definitions ---
type ProjectDetails = {
  businessType: string;
  location: string;
};

type Message = {
  id: number;
  role: 'koala' | 'user';
  text: string;
};

// --- Helper Functions ---
const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// --- React Components ---
const Onboarding = ({ onComplete }: { onComplete: (details: ProjectDetails) => void }) => {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('');
  const [location, setLocation] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && businessType.trim()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onComplete({ businessType, location });
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        {step === 1 ? (
          <>
            <h2>What business are you starting?</h2>
            <form onSubmit={handleNext} style={{ width: '100%', maxWidth: '400px' }}>
              <input
                type="text"
                className="onboarding-input"
                placeholder="e.g., A coffee shop"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                aria-label="Business type"
                autoFocus
              />
              <button type="submit" className="onboarding-button" disabled={!businessType.trim()}>
                Next
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>Where are you located?</h2>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
              <input
                type="text"
                className="onboarding-input"
                placeholder="e.g., Brisbane, Queensland"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Location"
                autoFocus
              />
              <button type="submit" className="onboarding-button" disabled={!location.trim()}>
                Start Project
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const ChatInterface = ({ project }: { project: ProjectDetails }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    
    const initializeChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemInstruction = `You are KoalAI, a friendly and knowledgeable AI assistant. Your purpose is to provide a personalised, step-by-step roadmap for starting a business in Australia. Your user is starting a '${project.businessType}' in '${project.location}'. Your responses must be clear, concise, and easy to understand. When providing information from government sources, you must state where the information is from but do not provide hyperlinks. Clearly indicate you are an AI.`;
        
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: { systemInstruction },
        });
        setChat(newChat);

        const welcomeMessage = `I'm KoalAI, your guide to starting a ${project.businessType} in ${project.location}. How can I help you get started?`;
        
        const responseStream = await newChat.sendMessageStream({ message: welcomeMessage });
        
        let fullResponse = '';
        const messageId = Date.now();
        setMessages([{ id: messageId, role: 'koala', text: '' }]);

        for await (const chunk of responseStream) {
            fullResponse += chunk.text;
            setMessages(prev => prev.map(m => m.id === messageId ? { ...m, text: fullResponse } : m));
        }

      } catch (error) {
        console.error("Chat initialization failed:", error);
        setMessages([{id: Date.now(), role: 'koala', text: "Sorry, I couldn't connect. Please check your connection and API key."}]);
      } finally {
        setIsLoading(false);
      }
    };
    initializeChat();
  }, [project]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseStream = await chat.sendMessageStream({ message: input });

      let fullResponse = '';
      const responseId = Date.now() + 1;
      setMessages(prev => [...prev, { id: responseId, role: 'koala', text: '' }]);

      for await (const chunk of responseStream) {
        fullResponse += chunk.text;
        setMessages(prev => prev.map(m => m.id === responseId ? { ...m, text: fullResponse } : m));
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, {id: Date.now() + 1, role: 'koala', text: "I've encountered an error. Please try again."}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      {/* FIX: Corrected the syntax for the role attribute. It was missing an equals sign. */}
      <div className="messages-list" role="log" aria-live="polite">
        {messages.map((msg, index) => (
          <div key={msg.id} className={`message ${msg.role}`}>
            <div className="message-avatar">{msg.role === 'koala' ? '🐨' : '👤'}</div>
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && messages.length > 0 && (
           <div className="message koala loading">
            <div className="message-avatar">🐨</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-area">
        <form className="chat-input-form" onSubmit={handleSendMessage}>
          <textarea
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            aria-label="Chat input"
            rows={1}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                }
            }}
          />
          <button type="submit" className="send-button" disabled={!input.trim() || isLoading} aria-label="Send message">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [projectDetails, setProjectDetails] = useLocalStorage<ProjectDetails | null>('koalai-project', null);

  return (
    <div className="app-container">
      <header className="app-header">KoalAI</header>
      <main style={{flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
        {projectDetails ? (
          <ChatInterface project={projectDetails} />
        ) : (
          <Onboarding onComplete={setProjectDetails} />
        )}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);