// src/components/Toast.jsx
'use client';

import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-md">
      {message}
    </div>
  );
};

export default Toast;