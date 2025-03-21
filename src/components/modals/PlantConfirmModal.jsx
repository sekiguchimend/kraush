// src/components/modals/PlantConfirmModal.jsx
'use client';

import React from 'react';
import Image from 'next/image';
const PlantConfirmModal = ({ plant, onConfirm, onCancel }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-white w-full mx-4 rounded-xl overflow-hidden shadow-md">
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
             src="/green_onion.png"
             width={120}
             height={120}
             alt={"玉ねぎ"}
             />
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button 
              className="bg-kaushe-green text-white font-normal py-4 rounded-full text-xl"
              onClick={onConfirm}
            >
              植える
            </button>
            <button 
              className="bg-white border border-kaushe-green text-kaushe-green font-normal py-4 rounded-full text-xl"
              onClick={onCancel}
            >
              ＜ もどる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantConfirmModal;