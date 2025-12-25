import React, { useState } from 'react';
import { generateSantaRoast } from '../services/geminiService';
import { MessageSquare, Send, Loader2 } from 'lucide-react';

const SantaBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse('');
    
    const result = await generateSantaRoast(input);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-festive text-santa-gold mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        Talk to Secret Santa (AI)
      </h3>
      <p className="text-sm text-gray-400 mb-4">Ask about your future, your ex, or RCB's chances in 2025.</p>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., Will RCB win this year?"
          className="flex-1 bg-black/30 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-santa-gold transition"
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
        />
        <button 
          onClick={handleAsk}
          disabled={loading}
          className="bg-santa-red hover:bg-red-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        </button>
      </div>

      {response && (
        <div className="bg-santa-green/20 border border-santa-green/30 p-4 rounded-lg text-slate-200 italic animate-pulse">
          " {response} "
        </div>
      )}
    </div>
  );
};

export default SantaBot;