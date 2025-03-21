// src/components/ControlPanel.jsx
'use client';

import React from 'react';

const ControlPanel = ({ waterAmount, wateringActive, onWater, isPlanted }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4">
      <div className="flex justify-between items-end">
        {/* 水ボタン - イラストはクライアント側で提供 */}
        <div className="flex flex-col items-center">
          <button className="w-16 h-16 rounded-full mb-1 focus:outline-none">
            <div className="w-full h-full rounded-full flex items-center justify-center">
              {/* 水汲み場のイラスト（クライアント側で提供） */}
            </div>
          </button>
          <div className="bg-white rounded-lg px-3 py-1 shadow-sm border border-kaushe-border">
            <span className="font-normal text-sm">水</span>
          </div>
        </div>
        
        {/* 水量表示 */}
        <div className="px-4 py-2 bg-yellow-100 border-2 border-yellow-600 rounded-lg shadow-sm">
          <div className="flex items-center">
            <span className="text-blue-500 mr-1">💧</span>
            <span className="font-bold">{waterAmount.toFixed(2)} g</span>
          </div>
        </div>
        
        {/* ジョウロボタン - イラストはクライアント側で提供 */}
        <div className="flex flex-col items-center">
          <button 
            className={`w-16 h-16 rounded-full mb-1 focus:outline-none ${
              !isPlanted ? 'opacity-50' : ''
            } ${wateringActive ? 'animate-bounce' : ''}`}
            onClick={onWater}
            disabled={!isPlanted}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center">
              {/* ジョウロのイラスト（クライアント側で提供） */}
            </div>
          </button>
          <div className="bg-white rounded-lg px-3 py-1 shadow-sm border border-kaushe-border">
            <span className="font-normal text-sm">0 g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;