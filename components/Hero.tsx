
import React, { useState } from 'react';
import { askEducationAI } from '../services/geminiService';

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
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 skew-x-12 translate-x-32 hidden lg:block -z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>2024 신규 전문 과정 개설</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              <span className="block">검증된 사례로 만나는</span>
              <span className="block text-slate-800">지식의 <span className="text-amber-600">품격</span>과 전문성</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              율하평생교육원은 학계 권위자와 실무 전문가가 직접 설계한 
              실전형 커리큘럼을 통해, 단순 지식 전달을 넘어 삶의 질을 바꾸는 
              통찰력 있는 교육 서비스를 제공합니다.
            </p>

            <div className="max-w-xl">
              <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200">
                <form onSubmit={handleAiAsk} className="flex items-center">
                  <div className="flex-grow flex items-center px-4">
                    <span className="text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                    </span>
                    <input
                      type="text"
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      placeholder="무엇을 도와드릴까요? (예: 교육 과정 추천)"
                      className="w-full px-4 py-3 bg-transparent border-none focus:ring-0 text-slate-700 placeholder-slate-400 font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md disabled:opacity-50"
                  >
                    {isLoading ? '...' : 'AI 상담 시작'}
                  </button>
                </form>
                {aiResponse && (
                  <div className="mt-2 p-6 bg-slate-50 rounded-xl border-t border-slate-100 text-sm leading-relaxed text-slate-700 animate-fadeIn max-h-60 overflow-y-auto">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                      <p className="whitespace-pre-wrap">{aiResponse}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 mt-16 lg:mt-0 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img
                src="https://picsum.photos/seed/academy/1000/1200"
                alt="Educational Conference"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-[1px] bg-amber-400"></div>
                  <span className="text-xs font-bold tracking-widest uppercase text-amber-400">Expert Instruction</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">전문가와 함께하는 성장의 시간</h3>
                <p className="text-slate-200 text-sm">깊이 있는 지식의 향연, 율하에서 시작하십시오.</p>
              </div>
            </div>
            {/* Floating Info Box */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">150+</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">누적 전문 교육</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
