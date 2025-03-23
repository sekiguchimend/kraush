// src/components/CharacterSelection.js
'use client';
import { useState } from 'react';
import Image from 'next/image';

// キャラクターデータ（価格・特典情報追加）
const characterData = [
  {
    id: 1,
    name: 'ぽんた',
    gifSrc: '/boy.gif',
    price: 0, // 最初のキャラクターは無料
    bonus: '基本キャラクター',
    feature: '成長速度 標準'
  },
  {
    id: 2,
    name: 'ポチ',
    gifSrc: '/dog.gif',
    price: 500,
    bonus: '水やり効率+10%',
    feature: '水の消費量低減'
  },
  {
    id: 3,
    name: 'ふわり',
    gifSrc: '/camp.gif',
    price: 1000,
    bonus: '成長速度+15%',
    feature: '収穫時間短縮'
  },
  {
    id: 4,
    name: 'つぶつぶ',
    gifSrc: '/characters/character4.gif',
    price: 2000,
    bonus: '収穫量+20%',
    feature: '特別アイテム入手確率UP'
  },
];

const CharacterSelection = ({ onSelectCharacter, coins = 0, onClose }) => {
  const [currentCharacter, setCurrentCharacter] = useState(characterData[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedForPreview, setSelectedForPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // キャラクターをタップした時の処理
  const handleCharacterClick = () => {
    setShowModal(true);
    setErrorMessage('');
  };

  // キャラクター選択時の処理
  const selectCharacter = (character) => {
    // コインが足りるかチェック
    if (character.price > coins && character.id !== currentCharacter.id) {
      setErrorMessage(`コインが足りません（あと${character.price - coins}コイン必要）`);
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }
    
    setCurrentCharacter(character);
    setShowModal(false);
    
    // 親コンポーネントに選択したキャラクターを通知
    if (onSelectCharacter) {
      onSelectCharacter(character);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedForPreview(null);
  };

  const previewCharacter = (character) => {
    setSelectedForPreview(character);
  };

  return (
    <>
      {/* メインキャラクター表示 (左中央に配置) */}
      <div 
        className="absolute left-1 top-[233px] cursor-pointer"
        onClick={handleCharacterClick}
      >
        <Image
          src={currentCharacter.gifSrc}
          alt={currentCharacter.name}
          width={100}
          height={100}
          priority
        />
        
        {/* キャラクター変更ボタン */}
        <div className="absolute bottom-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md border border-white">
          +
        </div>
      </div>
      
      {/* 下から出てくるキャラクター選択モーダル */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 transition-opacity">
          <div className="bg-white rounded-t-2xl p-4 w-full max-w-md animate-slide-up max-h-[80vh] overflow-y-auto">
            {/* モーダルヘッダー */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">キャラクター選択</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            {/* コイン表示 */}
            <div className="bg-yellow-50 rounded-lg p-2 mb-4 flex justify-between items-center">
              <span className="font-medium">所持コイン</span>
              <span className="text-lg font-bold text-yellow-600 flex items-center">
                <span className="mr-1">💰</span>{coins}
              </span>
            </div>
            
            {/* エラーメッセージ */}
            {errorMessage && (
              <div className="mb-4 text-center text-sm font-medium text-red-500 bg-red-50 py-2 px-4 rounded-lg">
                {errorMessage}
              </div>
            )}
            
            {/* プレビュー表示 */}
            {selectedForPreview && (
              <div className="bg-gray-50 rounded-lg p-3 mb-4 flex flex-col items-center">
                <Image
                  src={selectedForPreview.gifSrc}
                  alt={selectedForPreview.name}
                  width={100}
                  height={100}
                />
                <h4 className="text-lg font-bold mt-2">{selectedForPreview.name}</h4>
                <div className="mt-1 text-sm text-gray-600">{selectedForPreview.feature}</div>
                
                <button
                  onClick={() => selectCharacter(selectedForPreview)}
                  className={`mt-3 w-full py-2 px-4 rounded-lg font-bold text-white ${
                    selectedForPreview.price > coins && selectedForPreview.id !== currentCharacter.id
                      ? 'bg-gray-400'
                      : 'bg-green-500 hover:bg-green-600'
                  }`}
                  disabled={selectedForPreview.price > coins && selectedForPreview.id !== currentCharacter.id}
                >
                  {selectedForPreview.id === currentCharacter.id 
                    ? '選択中' 
                    : selectedForPreview.price === 0 
                      ? '無料入手' 
                      : `${selectedForPreview.price}コインで購入`}
                </button>
              </div>
            )}
            
            {/* キャラクターリスト */}
            <div className="grid grid-cols-2 gap-3">
              {characterData.map((character) => (
                <div 
                  key={character.id}
                  className={`bg-gray-50 rounded-lg p-2 cursor-pointer transition-all duration-200 hover:bg-gray-100 border-2 ${
                    currentCharacter.id === character.id 
                      ? 'border-green-500' 
                      : character.price > coins 
                        ? 'border-gray-200 opacity-70' 
                        : 'border-transparent'
                  }`}
                  onClick={() => previewCharacter(character)}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <Image
                        src={character.gifSrc}
                        alt={character.name}
                        width={60}
                        height={60}
                      />
                      {currentCharacter.id === character.id && (
                        <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white">
                          ✓
                        </div>
                      )}
                    </div>
                    <h4 className="mt-1 font-bold text-gray-800">{character.name}</h4>
                    <div className="mt-1 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                      {character.price > 0 ? `💰 ${character.price}` : '無料'}
                    </div>
                    <div className="mt-1 text-xs text-gray-500 text-center">
                      {character.bonus}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {!selectedForPreview && (
              <div className="mt-4 text-center text-sm text-gray-500">
                キャラクターを選択するとプレビューが表示されます
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterSelection;