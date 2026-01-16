
import React from 'react';

interface PracticumPageProps {
  onApply: (courseId: string) => void;
}

const PracticumPage: React.FC<PracticumPageProps> = ({ onApply }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden rounded-b-[4rem]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000" 
            alt="Practicum Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/30">
            Lifelong Educator Field Practicum
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            내일의 교육 전문가,<br /><span className="text-blue-500">율하</span>에서 완성하십시오
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            평생교육사 자격증 취득을 위한 필수 관문인 현장실습.<br />
            체계적인 시스템과 현장 전문가의 밀착 지도로 여러분의 커리어를 시작하세요.
          </p>
          <button 
            onClick={() => onApply('practicum-course')}
            className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black text-lg shadow-2xl hover:bg-blue-50 transform transition-all active:scale-95"
          >
            지금 현장실습 신청하기
          </button>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 leading-snug">
                왜 율하평생교육원<br />현장실습인가요?
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    title: '실무 중심의 커리큘럼', 
                    desc: '단순 보조를 넘어 교육 기획, 운영, 평가 전 과정을 직접 경험합니다.' 
                  },
                  { 
                    title: '전문가 1:1 슈퍼비전', 
                    desc: '10년 이상의 현장 경력을 보유한 실습 지도교수의 맞춤형 지도를 제공합니다.' 
                  },
                  { 
                    title: '유연한 실습 일정', 
                    desc: '주말반, 평일반 등 신청자의 상황에 맞는 최적화된 일정을 조율합니다.' 
                  },
                  { 
                    title: '우수 수강생 채용 연계', 
                    desc: '실습 성적이 우수한 분들께는 율하의 파트너 강사 및 인턴 기회를 제공합니다.' 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">현장실습 안내사항</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-200">
                  <span className="text-slate-500 font-medium">실습 기간</span>
                  <span className="text-slate-900 font-bold">총 160시간 (약 4주)</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-200">
                  <span className="text-slate-500 font-medium">대상자</span>
                  <span className="text-slate-900 font-bold text-right">평생교육사 자격 취득 예정자<br /><span className="text-xs text-slate-400">(선이수 과목 확인 필수)</span></span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-dashed border-slate-200">
                  <span className="text-slate-500 font-medium">실습 분야</span>
                  <span className="text-slate-900 font-bold">프로그램 기획 및 교육 운영</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="text-slate-500 font-medium">실습 비용</span>
                  <span className="text-slate-900 font-bold">별도 문의 (전형료 포함)</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-xs text-amber-700 leading-relaxed font-medium">
                  * 실습 신청 전 소속 교육기관의 실습 의뢰 가능 여부를 반드시 확인해 주시기 바랍니다. 율하는 국가평생교육진흥원 평가인증 기관입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">지금 바로 상담받고 현장실습을 준비하세요</h2>
          <p className="text-blue-100 mb-10">
            정원제로 운영되어 조기 마감될 수 있습니다. 문의 사항은 교육운영팀(02-123-4567)으로 연락 바랍니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onApply('practicum-course')}
              className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl"
            >
              온라인 현장실습 신청
            </button>
            <button className="bg-blue-700 text-white border border-blue-500 px-10 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all">
              실습 가이드 다운로드
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticumPage;
