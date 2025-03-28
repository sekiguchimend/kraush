'use client';

import React from 'react';
import Image from 'next/image';

const PlantArea = ({ isPlanted, plantName, progress, plant }) => {
  // デフォルト設定
  const defaultPlantImage = "/plants/default-plant.png";
  const plantImage = plant?.imageSrc || defaultPlantImage;
  const plantAltText = plant?.name || plantName || "植物";
  
  // 成長ステージに基づく表示の決定
  const getGrowthStage = () => {
    if (progress < 30) {
      return {
        useCustomImage: true,
        icon: "/kabu.png",
        containerClass: "w-32 h-32"
      };
    } else if (progress < 60) {
      return {
        useCustomImage: true,
        icon: "/sprout.png",
        containerClass: "w-24 h-24"
      };
    } else {
      return {
        useImage: true,
        containerClass: "w-28 h-28"
      };
    }
  };
  
  const growthStage = getGrowthStage();
  
  // 残りの成長パーセンテージ
  const remainingProgress = (100 - progress).toFixed(1);
  
  if (!isPlanted) {
    return null;
  }
  
  return (
    <div className="absolute top-[66%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56">
      <div className="w-full h-full flex flex-col items-center justify-center p-3">
        <div className="flex-1 flex items-center justify-center relative mb-2">
          {growthStage.useImage ? (
            <div className="relative animate-float">
              <Image 
                src={plantImage}
                alt={plantAltText}
                width={50}
                height={50}
                className="object-contain drop-shadow-md"
              />
              <div className="absolute -top-2 -right-2 text-yellow-400 animate-pulse text-sm">✨</div>
              <div className="absolute -bottom-1 -left-2 text-yellow-400 animate-pulse delay-300 text-sm">✨</div>
            </div>
          ) : growthStage.useCustomImage ? (
            <div className={`${growthStage.containerClass} flex items-center justify-center animate-float relative`}>
              <Image 
                src={growthStage.icon}
                alt={`${plantName}の成長段階`}
                width={60} // さらに小さく
                height={60} // さらに小さく
                className="object-contain drop-shadow-md"
              />
              <div className="absolute -top-2 -right-2 text-yellow-400 animate-pulse text-sm">✨</div>
            </div>
          ) : (
            <div className={`${growthStage.containerClass} flex items-center justify-center animate-float`}>
              <span className={growthStage.size}>{growthStage.icon}</span>
            </div>
          )}
        </div>
      
        <div className="bg-amber-50/70 rounded-full py-1 px-3 shadow-inner flex items-center space-x-1 mb-2 border border-amber-200">
          <span className="text-base">🌱</span>
          <h3 className="font-bold text-amber-800 text-sm" style={{ 
            fontFamily: '"Mochiy Pop One", "M PLUS Rounded 1c", sans-serif',
            textShadow: '0px 1px 2px rgba(255, 255, 255, 0.8)'
          }}>
            {plantName}
          </h3>
        </div>
        
        <div className="w-full max-w-xs">
          <div className="relative">
            <div className="h-3 bg-white/60 backdrop-blur-sm rounded-full overflow-hidden border border-emerald-300 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500 relative flex items-center justify-end px-2"
                style={{ width: `${progress}%` }}
              >
                {progress > 15 && (
                  <span className="text-xs text-white font-bold drop-shadow-md scale-90">{progress.toFixed(0)}%</span>
                )}
                {/* プログレスバーの光沢効果 */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/30 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex justify-between text-2xs text-white mt-0.5 px-1">
              <div className="flex flex-col items-center">
                <div className="h-2 w-px bg-white"></div>
                <span>0</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-2 w-px bg-green-800"></div>
                <span>25</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-2 w-px bg-green-800"></div>
                <span>50</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-2 w-px bg-green-800"></div>
                <span>75</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-2 w-px bg-green-800"></div>
                <span>100</span>
              </div>
            </div>
          </div>
          
          {/* 残りパーセント */}
          <div className="text-center mt-1.5">
            <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full py-0.5 px-2 border border-green-200">
              <div className="text-2xs font-bold text-amber-800" style={{ 
                fontFamily: '"M PLUS Rounded 1c", sans-serif'
              }}>
                次のレベルまで <span className="text-green-600">{remainingProgress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 装飾エフェクト */}
      <style jsx global>{`
        .text-2xs {
          font-size: 0.65rem;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default PlantArea;