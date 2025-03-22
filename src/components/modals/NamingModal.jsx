'use client';

import React from 'react';
import Image from 'next/image';

const NamingModal = ({ plant, value, onChange, onConfirm, onCancel }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-white w-full mx-4 rounded-xl overflow-hidden shadow-lg">
        {/* ヘッダー */}
        <div className="bg-kaushe-green text-white font-normal text-center py-3 text-xl">
          作物を植える
        </div>
        
        {/* コンテンツ */}
        <div className="p-5">
          <h3 className="text-center text-kaushe-brown font-bold text-xl mb-5">
            {plant.name}に名前をつけてあげよう
          </h3>
          
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 flex items-center justify-center">
              <Image
                src={plant.imageSrc}
                width={100}
                height={100}
                alt={plant.name}
              />
            </div>
          </div>
          
          <div className="mb-6">
            {/* かわいいフォントの入力フィールド */}
            <div className="relative">
              <input
                type="text"
                className="w-full border-2 border-green-200 rounded-2xl px-4 py-3 text-lg focus:outline-none focus:border-kaushe-green focus:ring-2 focus:ring-green-100 font-medium text-kaushe-brown"
                placeholder="名前を入力してください"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                maxLength={10}
              />
              
              {/* 装飾的な小さな葉っぱアイコン */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-green-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>
              </div>
            </div>
            
            <div className="flex justify-between mt-2">
              <p className="text-sm text-gray-500">※名前はあとで変更することもできます</p>
              <p className="text-sm text-gray-600 font-medium">{value.length}/10文字</p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            {/* 名前をつけるボタン */}
            <div className="relative">
              {/* キュートな装飾 */}
              <div className="absolute -top-2 -right-1 w-6 h-6">
                <svg viewBox="0 0 24 24" fill="#86efac" stroke="#22c55e" strokeWidth="0.5" className="w-full h-full">
                  <path d="M12,3.5c0.97,2.16,2.8,3.98,4.96,4.96c-2.16,0.97-3.98,2.8-4.96,4.96c-0.97-2.16-2.8-3.98-4.96-4.96C9.2,7.48,11.03,5.66,12,3.5z" />
                </svg>
              </div>
              
              <button 
                className="w-full bg-gradient-to-r from-kaushe-green to-green-400 text-white font-bold py-4 rounded-full text-xl shadow-md border-2 border-green-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                onClick={onConfirm}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10.81C10.42,20.34 10.13,19.63 10.03,18.91L10,19H5V5H12V9H16V13.04C16.3,13.02 16.65,13 17,13C17.08,13 17.16,13 17.24,13L19,13V9L12,2L5,2V3Z" />
                </svg>
                <span>名前をつける</span>
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

export default NamingModal;