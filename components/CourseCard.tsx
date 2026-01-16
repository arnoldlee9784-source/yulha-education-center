
import React from 'react';
import { EnhancedCourse } from '../constants';

interface CourseCardProps {
  course: EnhancedCourse;
  onApply?: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onApply }) => {
  const statusColors = {
    '접수중': 'bg-green-100 text-green-700',
    '마감임박': 'bg-red-100 text-red-700',
    '교육중': 'bg-slate-100 text-slate-600'
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={course.image} 
          alt={course.title} 
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold shadow-sm ${statusColors[course.status]}`}>
            {course.status}
          </span>
          {course.tags.map(tag => (
            <span key={tag} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-700 shadow-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            {course.instructor}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {course.description}
        </p>
        
        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">교육기간</span>
            <span className="text-xs font-semibold text-slate-700">{course.duration || '상시모집'}</span>
          </div>
          <button 
            onClick={() => onApply && onApply(course.id)}
            className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
