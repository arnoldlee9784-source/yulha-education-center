
import React, { useState } from 'react';
import { askEducationAI } from '../services/geminiService.ts';

const Hero: React.FC = () => {
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    
    setIsLoading(true);
    const response = await askEducationAI(aiQuery);
    setAiResponse(response);
    setIsLoading(false);
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              지식의 <span className="text-amber-600">품격</span>과 전문성<br/>율하평생교육원
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              학계 권위자와 실무 전문가가 직접 설계한 실전형 커리큘럼을 제공합니다.
            </p>

            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200">
                <form onSubmit={handleAiAsk} className="flex items-center">
                  <input
                    type="text"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="교육 과정에 대해 물어보세요"
                    className="flex-grow px-4 py-3 bg-transparent border-none focus:ring-0 text-slate-700 font-medium"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50"
                  >
                    AI 상담
                  </button>
                </form>
                {aiResponse && (
                  <div className="mt-2 p-6 bg-slate-50 rounded-xl text-sm leading-relaxed text-slate-700 max-h-60 overflow-y-auto">
                    <p className="whitespace-pre-wrap">{aiResponse}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
