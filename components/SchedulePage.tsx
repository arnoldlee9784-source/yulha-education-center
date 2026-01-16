
import React, { useState } from 'react';
import { SCHEDULES, ScheduleItem } from '../constants';

const SchedulePage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredSchedules = SCHEDULES.filter(s => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  const statusMap = {
    '예정': { bg: 'bg-blue-50 text-blue-600', dot: 'bg-blue-500' },
    '진행중': { bg: 'bg-green-50 text-green-600', dot: 'bg-green-500' },
    '마감': { bg: 'bg-slate-50 text-slate-400', dot: 'bg-slate-300' }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div className="flex gap-2">
          {['all', '예정', '진행중', '마감'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === s 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {s === 'all' ? '전체 일정' : s}
            </button>
          ))}
        </div>
        <div className="text-sm text-slate-400 font-medium">
          * 강의 장소 및 시간은 상황에 따라 변경될 수 있습니다.
        </div>
      </div>

      <div className="space-y-4">
        {filteredSchedules.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">APRIL</span>
              <span className="text-2xl font-black text-slate-900">{item.date.split('.')[2]}</span>
            </div>

            <div className="flex-grow text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center ${statusMap[item.status].bg}`}>
                  <span className={`w-1 h-1 rounded-full mr-1.5 ${statusMap[item.status].dot}`}></span>
                  {item.status}
                </span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.time}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-sm text-slate-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item.instructor}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item.location}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <button 
                disabled={item.status === '마감'}
                className={`px-6 py-3 rounded-xl font-bold text-xs transition-all ${
                  item.status === '마감' 
                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100'
                }`}
              >
                {item.status === '마감' ? '마감됨' : '상세보기'}
              </button>
            </div>
          </div>
        ))}

        {filteredSchedules.length === 0 && (
          <div className="py-20 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">해당 조건의 일정이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
