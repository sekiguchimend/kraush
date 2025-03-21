// src/components/modals/NamingModal.jsx
'use client';

import React from 'react';

const NamingModal = ({ plant, value, onChange, onConfirm, onCancel }) => {
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
            {plant.name}に名前をつけてあげよう
          </h3>
          
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 flex items-center justify-center">
              {/* ここに実際の植物イラスト（クライアント側で提供） */}
            </div>
          </div>
          
          <div className="mb-6">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-kaushe-green"
              placeholder="名前を入力してください"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              maxLength={10}
            />
            <div className="flex justify-between mt-2">
              <p className="text-sm text-gray-500">※名前はあとで変更することもできます</p>
              <p className="text-sm text-gray-600">{value.length}/10文字</p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button 
              className="bg-kaushe-green text-white font-normal py-4 rounded-full text-xl"
              onClick={onConfirm}
            >
              名前をつける
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

export default NamingModal;