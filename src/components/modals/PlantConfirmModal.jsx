'use client';

import React from 'react';
import Image from 'next/image';

const PlantConfirmModal = ({ plant, onConfirm, onCancel }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-white w-full mx-4 rounded-xl overflow-hidden shadow-lg">
        {/* ヘッダー */}
        <div className="bg-kaushe-green text-white font-normal text-center py-3 text-xl">
          作物を植える
        </div>
        
        {/* コンテンツ */}
        <div className="p-5">
          <h3 className="text-center text-kaushe-brown font-bold text-lg mb-5">
            {plant.name}を植える？
          </h3>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 flex items-center justify-center">
              <Image
                src={plant.imageSrc}
                width={120}
                height={120}
                alt={plant.name}
              />
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            {/* 植えるボタン */}
            <div className="relative">
              {/* 装飾 - 右上と左下に植物アイコン */}
              
              
              <button 
                className="w-full bg-gradient-to-r from-kaushe-green to-green-400 text-white font-bold py-4 rounded-full text-xl shadow-md border-2 border-green-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                onClick={onConfirm}
              >
                <span className="mr-2">植える</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
            
            {/* もどるボタン */}
            <button 
              className="bg-white border-2 border-kaushe-green text-kaushe-green font-bold py-4 rounded-full text-xl transition-all duration-200 hover:bg-green-50 flex items-center justify-center"
              onClick={onCancel}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>もどる</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantConfirmModal;