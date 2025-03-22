'use client';

import React, { useState, useEffect } from 'react';
import QuestChallenge from './QuestChallenge';

const Header = ({ onBack, showBackButton }) => {
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズ検出
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-10 pt-2">
      <div className="flex items-center justify-between px-4">
        {/* 左側：戻るボタン */}
        <div>
          {(showBackButton || isMobile) && (
            <button 
              onClick={onBack}
              className="w-12 h-12 flex items-center justify-center rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>
             
      </div>
      
      {/* クエストコンポーネント自体はヘッダー外で表示 */}
      {isMobile && <QuestChallenge />}
    </div>
  );
};

export default Header;