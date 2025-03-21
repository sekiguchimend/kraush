// src/components/modals/ModalBase.jsx
'use client';

import React from 'react';

const ModalBase = ({ title, children }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white w-11/12 max-w-md rounded-xl overflow-hidden shadow-2xl">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 px-6 py-4">
          <h2 className="text-white text-xl font-bold">{title}</h2>
        </div>
        
        {/* コンテンツ */}
        {children}
      </div>
    </div>
  );
};

export default ModalBase;