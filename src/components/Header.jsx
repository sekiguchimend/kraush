'use client';

import React from 'react';

const Header = ({ onBack, showBackButton }) => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 pt-2">
      <div className="flex items-center px-4">
        {showBackButton && (
          <button 
            onClick={onBack}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 bg-opacity-50 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;