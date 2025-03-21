'use client';

import React from 'react';
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
    imageSrc: "/green_soybeans.png"
  },
  {
    id: 3,
    name: "カブ",
    difficulty: 2,
    imageSrc: "/kabu.png"
  },
  {
    id: 4,
    name: "玉ねぎ",
    difficulty: 2,
    imageSrc: "/green_onion.png"
  }
];

const SeedSelectionModal = ({ onSelect, onCancel }) => {
  const plants = defaultPlants;
  
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-white w-full mx-4 rounded-xl overflow-hidden shadow-md">
        {/* ヘッダー */}
        <div className="bg-green-500 text-white font-medium text-center py-3 text-xl">
          作物を植える
        </div>
        
        {/* コンテンツ */}
        <div className="p-4">
          <h3 className="text-center text-amber-800 font-bold text-lg mb-4">育てたい作物を選択</h3>
          
          <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pb-2">
            {plants.map((plant) => (
              <div 
                key={plant.id}
                className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col items-center cursor-pointer"
                onClick={() => onSelect && onSelect(plant)}
              >
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
                
                {/* 育てやすさ */}
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-600 mr-1">育てやすさ</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-sm ${i < (plant.difficulty || 0) ? 'text-amber-400' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                </div>
                
                {/* 詳細ボタン */}
                <button 
                  className="text-blue-500 text-sm mt-1 font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  詳細
                </button>
              </div>
            ))}
          </div>
          
          {/* 選択ボタン */}
          <button 
            className="w-full bg-gray-300 text-gray-700 font-medium py-3 rounded-full mt-4 text-lg"
            onClick={() => onCancel && onCancel()}
          >
            選択
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeedSelectionModal;