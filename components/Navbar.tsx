
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants.tsx';
import { Page } from '../types.ts';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 transition-all">
      <div className="hidden md:block bg-slate-900 text-slate-300 py-2 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center">문의: 02-123-4567</span>
          </div>
          <div className="flex space-x-4">
             <span className="text-slate-500 font-medium">지식의 품격, 율하평생교육원</span>
          </div>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <button 
                onClick={() => onPageChange(Page.Home)}
                className="flex items-center space-x-3"
              >
                <div className="w-11 h-11 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">율</div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xl font-extrabold text-slate-900 tracking-tight">율하평생교육원</span>
                </div>
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id as Page)}
                  className={`text-[15px] font-bold transition-all relative py-2 ${
                    currentPage === item.id 
                      ? 'text-slate-900 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-500' 
                      : (item.id === Page.Apply ? 'text-amber-600' : 'text-slate-500 hover:text-slate-900')
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-4 py-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id as Page);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-4 rounded-lg text-base font-bold ${
                    currentPage === item.id ? 'bg-slate-900 text-white' : 'text-slate-600'
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
