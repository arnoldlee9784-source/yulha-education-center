
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { COURSES, NAV_ITEMS, EnhancedCourse } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import InquiryForm from './components/InquiryForm';
import ApplicationForm from './components/ApplicationForm';
import SchedulePage from './components/SchedulePage';
import PracticumPage from './components/PracticumPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleApplyClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentPage(Page.Apply);
  };

  const handleApplicationSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCurrentPage(Page.Home);
      setSelectedCourseId(null);
    }, 4000);
  };

  const renderHome = () => (
    <>
      <Hero />
      
      {/* 퀵 링크 / 최신 공지 섹션 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">최신 공지사항</h3>
                <button 
                  onClick={() => setCurrentPage(Page.Notice)}
                  className="text-slate-400 text-xs font-bold hover:text-slate-900"
                >
                  전체보기 +
                </button>
              </div>
              <ul className="space-y-4">
                {[
                  { date: '2024.03.20', title: '2024년도 2학기 수강생 모집 안내', category: '모집' },
                  { date: '2024.03.18', title: '개인정보보호 실무 과정 강의실 변경 공지', category: '교육' },
                  { date: '2024.03.15', title: '율하평생교육원 우수 강사진 위촉식 성료', category: '소식' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 p-3 hover:bg-white rounded-xl transition-colors cursor-pointer group">
                    <span className="text-[10px] font-bold px-2 py-1 bg-slate-200 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors w-12 text-center">{item.category}</span>
                    <span className="flex-grow text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{item.title}</span>
                    <span className="text-xs text-slate-400 font-mono">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">교육 컨설팅</h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">단체 교육이나 맞춤형 과정이 필요하신가요? 율하의 전문가들이 최적의 솔루션을 제공합니다.</p>
                <button 
                  onClick={() => setCurrentPage(Page.Inquiry)}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-blue-50 transition-colors"
                >
                  문의하기 바로가기
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 교육 과정 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Recommended Courses</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">현재 모집 중인 인기 과정</h2>
            <p className="text-slate-500 max-w-xl mx-auto">수강생 만족도가 가장 높은 율하만의 시그니처 강의들을 지금 바로 만나보세요.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(1, 7).map(course => (
              <CourseCard key={course.id} course={course} onApply={handleApplyClick} />
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderAllCoursesPage = () => {
    const filteredCourses = COURSES.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    const categories = [
      { id: 'all', label: '전체' },
      { id: Page.Practicum, label: '현장실습' },
      { id: Page.Communication, label: '세대별 소통' },
      { id: Page.Professional, label: '전문가 직무' },
      { id: Page.Leadership, label: '리더십' },
    ];

    return (
      <section className="pt-48 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">전체 교육 과정</h1>
            <p className="text-slate-500">율하평생교육원이 제공하는 모든 전문 커리큘럼을 한눈에 확인하세요.</p>
          </div>

          <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder="강의명 또는 내용 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <svg className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} onApply={handleApplyClick} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
      </section>
    );
  };

  const renderNoticePage = () => (
    <section className="pt-48 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">공지사항</h1>
          <p className="text-slate-500">율하평생교육원의 새로운 소식과 안내사항을 확인하세요.</p>
        </div>
        
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-5 text-sm font-bold text-slate-900">번호</th>
                <th className="px-8 py-5 text-sm font-bold text-slate-900">제목</th>
                <th className="px-8 py-5 text-sm font-bold text-slate-900">카테고리</th>
                <th className="px-8 py-5 text-sm font-bold text-slate-900 text-right">날짜</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { id: 3, title: '2024년도 2학기 수강생 모집 안내', category: '모집', date: '2024.03.20' },
                { id: 2, title: '개인정보보호 실무 과정 강의실 변경 공지', category: '교육', date: '2024.03.18' },
                { id: 1, title: '율하평생교육원 우수 강사진 위촉식 성료', category: '소식', date: '2024.03.15' },
              ].map((notice) => (
                <tr key={notice.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                  <td className="px-8 py-6 text-sm text-slate-400 font-mono">{notice.id}</td>
                  <td className="px-8 py-6 text-sm font-bold text-slate-900 group-hover:text-blue-600">{notice.title}</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold">{notice.category}</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-400 text-right font-mono">{notice.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );

  const renderCoursePage = (page: Page, title: string, subtitle: string) => {
    const filteredCourses = COURSES.filter(c => c.category === page);
    return (
      <section className="pt-48 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 border-l-4 border-slate-900 pl-8">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
            <p className="text-xl text-slate-500">{subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} onApply={handleApplyClick} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderContent = () => {
    if (showSuccess) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
          <div className="text-center animate-fadeIn">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">수강신청 완료!</h1>
            <p className="text-slate-500 text-lg">성공적으로 신청되었습니다. 곧 상담원이 연락드릴 예정입니다.</p>
            <div className="mt-10">
              <div className="inline-block px-4 py-2 bg-slate-100 text-slate-500 rounded-lg text-sm font-medium">잠시 후 메인 화면으로 이동합니다...</div>
            </div>
          </div>
        </div>
      );
    }

    switch (currentPage) {
      case Page.Home: return renderHome();
      case Page.AllCourses: return renderAllCoursesPage();
      case Page.Practicum: 
        return (
          <div className="pt-20">
            <PracticumPage onApply={handleApplyClick} />
          </div>
        );
      case Page.Notice: return renderNoticePage();
      case Page.Schedule:
        return (
          <section className="pt-48 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">교육 일정</h1>
                <p className="text-slate-500">율하평생교육원의 4월 주요 강의 일정을 안내해 드립니다.</p>
              </div>
              <SchedulePage />
            </div>
          </section>
        );
      case Page.Communication: return renderCoursePage(Page.Communication, '세대별 소통 & 복지', '가족과 사회 구성원의 유대를 강화하는 전문 심리 및 복지 과정');
      case Page.Professional: return renderCoursePage(Page.Professional, '전문가 직무 & 법률', '최신 법률 해석과 실무 역량을 강화하는 하이엔드 전문 과정');
      case Page.Leadership: return renderCoursePage(Page.Leadership, '리더십 & 소양', '지속 가능한 리더십과 깊이 있는 인문학적 성찰의 시간');
      case Page.Apply:
        return (
          <section className="pt-48 pb-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">수강 신청</h1>
                <p className="text-slate-500">지식의 품격을 높이는 율하의 교육 과정을 신청합니다.</p>
              </div>
              {selectedCourseId ? (
                <ApplicationForm courseId={selectedCourseId} onSuccess={handleApplicationSuccess} />
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100 max-w-2xl mx-auto">
                   <p className="text-slate-500 mb-8 font-medium">강의를 먼저 선택한 후 신청해 주세요.</p>
                   <button 
                     onClick={() => setCurrentPage(Page.AllCourses)}
                     className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                   >
                     교육 과정 보러가기
                   </button>
                </div>
              )}
            </div>
          </section>
        );
      case Page.Inquiry:
        return (
          <section className="pt-48 pb-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">교육 컨설팅 문의</h1>
                <p className="max-w-2xl mx-auto text-slate-500">율하의 전문가들이 여러분의 성장을 위한 최적의 교육 솔루션을 제안해 드립니다.</p>
              </div>
              <InquiryForm />
            </div>
          </section>
        );
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentPage={currentPage} onPageChange={(page) => {
        setCurrentPage(page);
        if (page !== Page.Apply) setSelectedCourseId(null);
      }} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="bg-slate-950 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">율</div>
                <span className="text-2xl font-extrabold tracking-tight">율하평생교육원</span>
              </div>
              <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
                전직 정부 관료 및 학계 전문가들이 주축이 된 율하평생교육원은 
                사회의 복잡한 문제들을 실질적으로 해결하기 위한 
                전문 교육의 선두주자입니다.
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-8">Navigation</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                {NAV_ITEMS.map(item => (
                  <li key={item.id}><button onClick={() => setCurrentPage(item.id as Page)} className="hover:text-white transition-colors">{item.label}</button></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-8">Information</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><button className="hover:text-white transition-colors">이용약관</button></li>
                <li><button className="hover:text-white transition-colors">개인정보처리방침</button></li>
                <li><button className="hover:text-white transition-colors">강사지원</button></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-8">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>02-123-4567</li>
                <li>help@yulhaedu.com</li>
                <li className="leading-relaxed">서울시 강남구 평생학습로 123<br />율하빌딩 본관 4층</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-900 text-center text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Yulha Education Academy. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
