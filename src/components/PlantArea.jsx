'use client';

import React from 'react';
import Image from 'next/image';
const PlantArea = ({ isPlanted, plantName, progress }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 flex items-center justify-center">
      {isPlanted && (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="text-center mb-2">
            {/* ここに植物イラスト（クライアント側で提供） */}
            <Image 
            src={"/kabu.png"}
            alt={plantName}
            width={120}
            height={120}
            className="object-contain"
            />
            <div className="inline-block">
              {/* プレースホルダー - 実際の実装では削除 */}
            </div>
          </div>
          
          <div className="bg-white rounded-full py-1 px-4 shadow-md border border-kaushe-border">
            <div className="flex items-center justify-center">
              <div className="mr-1">🌱</div>
              <span className="font-normal">{plantName}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
              <div 
                className="h-full bg-kaushe-green rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-center mt-0.5 text-gray-600">
              次のレベルまであと {(100 - progress).toFixed(3)}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantArea;