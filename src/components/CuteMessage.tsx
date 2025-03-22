// src/components/CuteMessage.js
import React from 'react';

const CuteMessage = ({ title, subtext, animationType = 'none' }) => {
  // アニメーションクラスの設定
  let animationClass = '';
  
  switch (animationType) {
    case 'bounce':
      animationClass = 'animate-bounce';
      break;
    case 'pulse':
      animationClass = 'animate-pulse';
      break;
    case 'wiggle':
      animationClass = 'animate-wiggle';
      break;
    default:
      animationClass = '';
  }
  
  return (
    // 画面の中央よりやや上に表示するように修正
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className={`${animationClass} bg-white/95 rounded-2xl py-4 px-6
                    border border-green-600 shadow-md
                    flex flex-col items-center
                    w-80 max-w-full`}>
        {/* メインタイトル */}
        <h3 className="text-amber-800 font-bold text-center" style={{ 
          fontFamily: '"M PLUS Rounded 1c", "Hiragino Kaku Gothic Pro", "Hiragino Sans", sans-serif',
          fontSize: '16px'
        }}>
          {title}
        </h3>
        
        {/* サブテキスト（存在する場合のみ表示） */}
        {subtext && (
          <p className="text-amber-800 text-center mt-2" style={{ 
            fontFamily: '"M PLUS Rounded 1c", "Hiragino Kaku Gothic Pro", "Hiragino Sans", sans-serif',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
};

export default CuteMessage;