'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// デフォルトの植物データ
const defaultPlants = [
  {
    id: 1,
    name: "ナス",
    difficulty: 3,
    imageSrc: "/eggplant.png"
  },
  {
    id: 2,
    name: "ネギ",
    difficulty: 3,
    imageSrc: "/green_onion.png"
  },
  {
    id: 3,
    name: "カブ",
    difficulty: 2,
    imageSrc: "/kabu.png"
  },
  {
    id: 4,
    name: "枝豆",
    difficulty: 2,
    imageSrc: "/green_soybeans.png"
  }
];

const SeedSelectionModal = ({ onSelect, onCancel }) => {
  const plants = defaultPlants;
  const [selectedPlant, setSelectedPlant] = useState(null);
  
  // 超可愛い星アイコンのSVG
  const StarIcon = ({ filled }) => (
    <svg 
      className={`w-5 h-5 ${filled ? 'text-amber-400' : 'text-gray-200'}`} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      stroke={filled ? "#f59e0b" : "#d1d5db"}
      strokeWidth="0.5"
    >
      <path d="M12,2.5L14.4,9.5L22,9.9L16.7,14L18.4,21L12,17.3L5.6,21L7.3,14L2,9.9L9.6,9.5L12,2.5z" />
      {filled && (
        <>
          <circle cx="12" cy="12" r="1.8" fill="#fffaf0" />
          <circle cx="7" cy="10" r="0.6" fill="#fffaf0" />
          <circle cx="17" cy="10" r="0.6" fill="#fffaf0" />
          <circle cx="9" cy="16" r="0.6" fill="#fffaf0" />
          <circle cx="15" cy="16" r="0.6" fill="#fffaf0" />
        </>
      )}
    </svg>
  );
  
  // 選択ボタンをクリックしたときの処理
  const handleSelectClick = () => {
    if (selectedPlant && onSelect) {
      onSelect(selectedPlant);
    }
  };
  
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-white w-full mx-4 rounded-xl overflow-hidden shadow-lg">
        {/* ヘッダー */}
        <div className="bg-green-500 text-white font-medium text-center py-3 text-xl relative">
          作物を植える
          <div className="absolute left-3 top-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        
        {/* コンテンツ */}
        <div className="p-4">
          <h3 className="text-center text-amber-800 font-bold text-lg mb-2">育てたい作物を選択</h3>
          
          {/* 星の説明 */}
          <div className="flex items-center justify-center mb-4 bg-amber-50 rounded-full py-1 px-3">
            <span className="text-xs text-amber-700 font-medium">★の数は育てやすさを表しています</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pb-2">
            {plants.map((plant) => (
              <div 
                key={plant.id}
                className={`bg-white border-2 ${selectedPlant?.id === plant.id ? 'border-green-500 shadow-md' : 'border-gray-200'} rounded-xl p-3 flex flex-col items-center cursor-pointer transition-all duration-200 hover:border-green-200`}
                onClick={() => setSelectedPlant(plant)}
              >
                {/* 選択状態のインジケーター */}
                {selectedPlant?.id === plant.id && (
                  <div className="absolute top-2 right-2">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* 土と種の画像 */}
                <div className="w-full aspect-square flex items-center justify-center mb-1">
                  <div className="relative w-20 h-20">
                    <Image
                      src={plant.imageSrc}
                      alt={plant.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* 植物名 */}
                <h4 className="font-bold text-center text-amber-800 text-base">{plant.name}</h4>
                
                {/* 星だけの表示 */}
                <div className="flex mt-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <StarIcon key={i} filled={i < (plant.difficulty || 0)} />
                  ))}
                </div>
                
                {/* 詳細ボタン */}
                <button 
                  className="text-blue-500 text-sm mt-2 font-medium hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  詳細
                </button>
              </div>
            ))}
          </div>
          
          {/* 選択ボタン - よりかわいいデザイン */}
          <div className="mt-4 relative">
            {/* かわいいボタン装飾 - 選択時のみ表示 */}
            {selectedPlant && (
              <>
                <div className="absolute -top-3 -left-1 w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="#fde68a" stroke="#fdba74" strokeWidth="0.5" className="w-full h-full">
                    <path d="M12,3.5c0.97,2.16,2.8,3.98,4.96,4.96c-2.16,0.97-3.98,2.8-4.96,4.96c-0.97-2.16-2.8-3.98-4.96-4.96C9.2,7.48,11.03,5.66,12,3.5z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-1 w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="#fcd34d" stroke="#fdba74" strokeWidth="0.5" className="w-full h-full">
                    <path d="M12,3.5c0.97,2.16,2.8,3.98,4.96,4.96c-2.16,0.97-3.98,2.8-4.96,4.96c-0.97-2.16-2.8-3.98-4.96-4.96C9.2,7.48,11.03,5.66,12,3.5z" />
                  </svg>
                </div>
              </>
            )}
            
            <button 
              className={`w-full ${
                selectedPlant 
                  ? 'bg-gradient-to-r from-green-400 to-green-500 text-white border-2 border-green-300' 
                  : 'bg-gray-200 text-gray-700 border-2 border-gray-300'
              } font-bold py-3 rounded-full text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-md`}
              onClick={selectedPlant ? handleSelectClick : () => onCancel && onCancel()}
            >
              {selectedPlant ? (
                <>
                  <span>選択する</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              ) : (
                <span>キャンセル</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedSelectionModal;