// src/components/NotificationBanner.jsx
'use client';

import React from 'react';

const NotificationBanner = ({ message, type = 'info' }) => {
  const bgColorClass = 
    type === 'error' ? 'bg-red-500' : 
    type === 'success' ? 'bg-green-500' : 
    'bg-blue-500';

  return (
    <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg text-white ${bgColorClass}`}>
      {message}
    </div>
  );
};

export default NotificationBanner;