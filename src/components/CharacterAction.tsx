// src/components/CharacterAction.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const CharacterAction = ({ character, plantProgress, waterAmount }) => {
  // 単純にキャラクターGIFだけを表示する
  if (!character) return null;
  
  return (
    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
      {/* キャラクターGIF - 余計な装飾なし */}
      <div>
        <Image
          src={character.gifSrc}
          alt={character.name}
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

export default CharacterAction;