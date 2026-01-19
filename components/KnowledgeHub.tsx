
import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../constants';
import { gemini } from '../services/gemini';
import { ChatMessage } from '../types';

const KnowledgeHub: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Marhaba! I am your Vision 2030 Sustainability Assistant. How can I help you today regarding Mostadam standards or Saudi Mega Projects?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await gemini.chat(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="hub" className="py-24 px-6 bg-[#0B2B24]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black mb-6 gold-text">KNOWLEDGE HUB</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Instantly query our AI engine for deep insights into GBCI standards, LEED, Mostadam requirements, and specific details about the Line's environmental infrastructure.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 glass rounded-xl">
                <div className="p-2 bg-[#C5A059]/20 rounded-lg text-[#C5A059]">
                  {ICONS.Shield}
                </div>
                <div>
                  <p className="font-bold text-sm">Mostadam Verified</p>
                  <p className="text-xs text-white/40">Official KSA Standards</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 glass rounded-xl">
                <div className="p-2 bg-[#4CAF50]/20 rounded-lg text-[#4CAF50]">
                  {ICONS.Wind}
                </div>
                <div>
                  <p className="font-bold text-sm">Renewable Energy</p>
                  <p className="text-xs text-white/40">Zero-Carbon Focused</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 glass rounded-3xl flex flex-col h-[600px] border border-white/5 overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-white/5">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm uppercase tracking-widest text-white/80">AI SUSTAINABILITY ADVISOR</span>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-[#C5A059] text-black font-semibold' 
                      : 'bg-white/5 text-white/80 border border-white/10'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex gap-2">
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Mostadam points or NEOM's solar capacity..."
                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 bg-[#4CAF50] text-black rounded-xl hover:bg-[#43a047] transition-colors active:scale-95"
                >
                  {ICONS.Send}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
