
import React, { useState } from 'react';
import { COURSES } from '../constants';

const InquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-slate-100">
      <div className="md:grid md:grid-cols-2">
        <div className="bg-blue-700 p-12 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">교육 문의 및 신청</h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            찾으시는 과정이 없거나 기업/기관 단체 교육 문의가 필요하신가요? 
            전문 상담사가 확인 후 24시간 이내에 최적의 커리큘럼을 제안해 드립니다.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-inner">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-blue-200 font-bold uppercase">Main Line</span>
                <span className="text-lg font-bold">02-123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-inner">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-blue-200 font-bold uppercase">Email Support</span>
                <span className="text-lg font-bold">help@yulhaedu.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-12">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">상담 신청 완료!</h3>
              <p className="text-slate-500 leading-relaxed">작성하신 내용이 성공적으로 전달되었습니다.<br />담당자가 빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">성함 / 단체명</label>
                  <input required type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 py-3 text-sm" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">연락처</label>
                  <input required type="tel" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 py-3 text-sm" placeholder="010-0000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">희망 교육 과정</label>
                <div className="grid grid-cols-1 gap-2 mt-2 max-h-40 overflow-y-auto p-1">
                  {COURSES.slice(0, 4).map(c => (
                    <label key={c.id} className="flex items-center p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer group transition-colors">
                      <input type="checkbox" className="rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
                      <span className="ml-3 text-sm font-medium text-slate-600 group-hover:text-slate-900">{c.title}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">문의 상세 내용</label>
                <textarea rows={4} className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="교육 인원, 장소, 시기 등 구체적인 내용을 작성해 주세요."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-blue-700 transform transition-all active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/20">
                컨설팅 신청하기
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
