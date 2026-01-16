
import React, { useState } from 'react';
import { COURSES, EnhancedCourse } from '../constants';

interface ApplicationFormProps {
  courseId: string;
  onSuccess: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ courseId, onSuccess }) => {
  const course = COURSES.find(c => c.id === courseId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!course) return <div className="text-center py-20">강의 정보를 찾을 수 없습니다.</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Course Summary Header */}
        <div className="bg-slate-50 p-8 border-b border-slate-100 flex flex-col md:flex-row items-center gap-6">
          <img src={course.image} alt={course.title} className="w-32 h-20 object-cover rounded-xl shadow-sm" />
          <div className="text-center md:text-left">
            <div className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-1">SELECTED COURSE</div>
            <h2 className="text-2xl font-bold text-slate-900">{course.title}</h2>
            <p className="text-slate-500 text-sm mt-1">{course.instructor} 전문가 · {course.duration || '상시 교육'}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
          {/* Section 1: Basic Info */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center mr-3">1</span>
              신청인 기본 정보
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">성함</label>
                <input required type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 py-3 text-sm" placeholder="실명을 입력해주세요" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">생년월일</label>
                <input required type="date" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 py-3 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">연락처</label>
                <input required type="tel" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 py-3 text-sm" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">이메일 주소</label>
                <input required type="email" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 py-3 text-sm" placeholder="example@email.com" />
              </div>
            </div>
          </div>

          {/* Section 2: Additional Info */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center mr-3">2</span>
              상세 정보 및 요청사항
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">직업 / 소속 (선택)</label>
                <input type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 py-3 text-sm" placeholder="예: 회사원, 대학생, 자영업 등" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">교육원에 바라는 점 또는 질문</label>
                <textarea rows={3} className="w-full rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="강의를 통해 얻고 싶은 점이나 궁금한 내용을 적어주세요."></textarea>
              </div>
            </div>
          </div>

          {/* Section 3: Agreements */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 mb-4">개인정보 수집 및 이용 동의</h3>
            <div className="space-y-3">
              <label className="flex items-start cursor-pointer group">
                <input required type="checkbox" className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-3 text-xs text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                  [필수] 수강신청 서비스 제공을 위한 이름, 연락처, 이메일 수집 및 이용에 동의합니다. (보유기간: 교육 종료 후 1년)
                </span>
              </label>
              <label className="flex items-start cursor-pointer group">
                <input type="checkbox" className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-3 text-xs text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                  [선택] 신규 교육 과정 및 이벤트 정보 안내 수신에 동의합니다.
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-grow bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              수강신청 확정하기
            </button>
          </div>
        </form>
      </div>
      <p className="mt-6 text-center text-slate-400 text-xs">
        신청과 동시에 담당자에게 알림이 전송되며, 영업일 기준 24시간 이내에 수강 안내 문자가 발송됩니다.
      </p>
    </div>
  );
};

export default ApplicationForm;
