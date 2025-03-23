// src/components/CoinDisplay.js
'use client';
import { useState, useEffect } from 'react';

const CoinDisplay = ({ coins }) => {
  const [animating, setAnimating] = useState(false);
  const [prevCoins, setPrevCoins] = useState(coins);

  // コインが変更されたときにアニメーション
  useEffect(() => {
    if (prevCoins !== coins) {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 1000);
      setPrevCoins(coins);
    }
  }, [coins, prevCoins]);

  return (
    <div className="absolute top-4 right-4 bg-yellow-400 bg-opacity-90 rounded-full py-1 px-3 
                   flex items-center shadow-md border border-yellow-500 z-30">
      <span className={`text-lg mr-1 ${animating ? 'animate-bounce' : ''}`}>💰</span>
      <span className={`font-bold text-yellow-900 ${
        animating ? 'animate-pulse text-red-600' : ''
      }`}>
        {coins}
      </span>
    </div>
  );
};

export default CoinDisplay;