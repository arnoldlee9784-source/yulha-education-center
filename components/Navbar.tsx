
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 transition-all">
      {/* Top Info Bar */}
      <div className="hidden md:block bg-slate-900 text-slate-300 py-2 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              문의: 02-123-4567
            </span>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              서울시 강남구 평생학습로 123
            </span>
          </div>
          <div className="flex space-x-4">
             <span className="text-slate-500 font-medium">지식의 품격, 율하평생교육원</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <button 
                onClick={() => onPageChange(Page.Home)}
                className="flex items-center space-x-3 group"
              >
                <div className="w-11 h-11 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-transform group-hover:scale-105">
                  율
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xl font-extrabold text-slate-900 tracking-tight">율하평생교육원</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium">Yulha Education Academy</span>
                </div>
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id as Page)}
                  className={`text-[15px] font-bold transition-all relative py-2 ${
                    currentPage === item.id 
                      ? 'text-slate-900 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-500' 
                      : (item.id === Page.Apply ? 'text-amber-600 hover:text-amber-700' : 'text-slate-500 hover:text-slate-900')
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 animate-fadeIn overflow-y-auto max-h-[calc(100vh-80px)]">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id as Page);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-4 rounded-lg text-base font-bold ${
                    currentPage === item.id
                      ? 'bg-slate-900 text-white'
                      : (item.id === Page.Apply ? 'text-amber-600' : 'text-slate-600 hover:bg-slate-50')
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
