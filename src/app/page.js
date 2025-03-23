// src/app/page.js
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import PlantArea from '@/components/PlantArea';
import ControlPanel from '@/components/ControlPanel';
import SeedSelectionModal from '@/components/modals/SeedSelectionModal';
import PlantConfirmModal from '@/components/modals/PlantConfirmModal';
import NamingModal from '@/components/modals/NamingModal';
import Toast from '@/components/Toast';
import CuteMessage from '@/components/CuteMessage';
import CharacterSelection from '@/components/CharacterSelection';

// 植物データの定義
const plantData = [
  {
    id: 1,
    name: 'トマト',
    icon: '🍅',
    description: '栄養たっぷりの赤い野菜。水やりをしっかりしよう！',
    growthDays: 7
  },
  {
    id: 2,
    name: 'にんじん',
    icon: '🥕',
    description: 'みずみずしい根菜。健康な土壌を好みます。',
    growthDays: 5
  },
  {
    id: 3,
    name: 'とうもろこし',
    icon: '🌽',
    description: '背が高く育つ穀物。たくさんのお日様が必要！',
    growthDays: 10
  },
  {
    id: 4,
    name: 'いちご',
    icon: '🍓',
    description: '甘くてジューシーな果物。優しく育てよう。',
    growthDays: 6
  }
];

export default function Home() {
  // 状態管理
  const [coins, setCoins] = useState(1000); // コイン所持数の初期値
  const [gameState, setGameState] = useState('initial'); // initial, seedSelection, plantingConfirm, naming, planted
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [plantName, setPlantName] = useState('');
  const [waterAmount, setWaterAmount] = useState(30.00);
  const [plantProgress, setPlantProgress] = useState(0);
  const [toast, setToast] = useState(null);
  const [wateringActive, setWateringActive] = useState(false);
  const [showPlantSuccess, setShowPlantSuccess] = useState(false);
  const [showWaterHint, setShowWaterHint] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // トースト通知を表示する関数
  const showToast = (message, duration = 3000) => {
    setToast(message);
    setTimeout(() => setToast(null), duration);
  };
  const handleSelectCharacter = (character) => {
    // 現在選択されているキャラクターと違う場合のみコインを消費
    if (selectedCharacter && selectedCharacter.id !== character.id && character.price > 0) {
      // コインを消費
      setCoins(prev => prev - character.price);
      // トースト通知を表示
      showToast(`${character.name}を${character.price}コインで購入しました！`);
    } else if (!selectedCharacter) {
      // 初めてのキャラクター選択
      showToast(`${character.name}があなたの畑を手伝ってくれるよ！`);
    }
    
    setSelectedCharacter(character);
  };
  
  // 状態遷移関数
  const goToSeedSelection = () => {
    setGameState('seedSelection');
  };

  const selectPlant = (plant) => {
    setSelectedPlant(plant);
    setGameState('plantingConfirm');
  };

  const confirmPlanting = () => {
    setGameState('naming');
  };

  const namePlant = () => {
    if (!plantName.trim()) {
      // カウシェファームでは強制入力ではなく、空であればデフォルト名が使われる
      setPlantName('こんにちわ');
    }
    
    setGameState('planted');
    setShowPlantSuccess(true);
    
    // 植え付け成功メッセージを3秒表示した後、水やりヒントを表示
    setTimeout(() => {
      setShowPlantSuccess(false);
      setTimeout(() => {
        setShowWaterHint(true);
        setTimeout(() => {
          setShowWaterHint(false);
        }, 3000);
      }, 500);
    }, 3000);
  };

  const handleBack = () => {
    switch (gameState) {
      case 'seedSelection':
        setGameState('initial');
        break;
      case 'plantingConfirm':
        setGameState('seedSelection');
        setSelectedPlant(null);
        break;
      case 'naming':
        setGameState('plantingConfirm');
        setPlantName('');
        break;
      default:
        setGameState('initial');
    }
  };

  const startWatering = () => {
    if (gameState !== 'planted') return;
    
    if (waterAmount <= 0) {
      showToast('水がありません');
      return;
    }
    
    if (plantProgress >= 100) {
      showToast('この植物はすでに完全に成長しています');
      return;
    }
    
    setWateringActive(true);
    setTimeout(() => {
      setWateringActive(false);
      setWaterAmount(prev => Math.max(0, prev - 5));
      setPlantProgress(prev => Math.min(100, prev + 10));
    }, 1000);
  };

  // 初期画面の植えるボタン（カウシェファーム風）
  const PlantButton = () => (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64">
      <button
        onClick={goToSeedSelection}
        className="w-full bg-gradient-to-r from-kaushe-green to-emerald-400 text-white font-bold text-xl py-4 rounded-full 
                   shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 
                   border-2 border-white flex items-center justify-center space-x-2 animate-pulse"
        style={{ fontFamily: '"Mochiy Pop One", "M PLUS Rounded 1c", sans-serif' }}
      >
        <span className="inline-block">🌱</span>
        <span>作物を植える</span>
        <span className="inline-block">🌱</span>
      </button>
      <div
        className="mt-2 text-center text-kaushe-brown bg-white/80 rounded-full py-1 px-4 text-sm 
                   animate-bounce shadow-md"
        style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
      >
        タップしてスタートしよう！
      </div>
    </div>
  );

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* ここに背景イラスト（クライアント側で提供） */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="背景画像"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
      </div>

      {/* ヘッダー */}
      <Header onBack={handleBack} showBackButton={['seedSelection', 'plantingConfirm', 'naming'].includes(gameState)} />

      {/* クエストチャレンジボタンとパネル */}
      {gameState === 'planted' && (
        <CharacterSelection 
        onSelectCharacter={handleSelectCharacter} 
        coins={coins}
        />
      )}

      {/* 植物エリア */}
      <PlantArea 
        isPlanted={gameState === 'planted'} 
        plantName={plantName || 'こんにちわ'} 
        progress={plantProgress} 
        plant={selectedPlant} // selectedPlantを渡す

      />

      {/* 操作パネル */}
      <ControlPanel 
        waterAmount={waterAmount} 
        wateringActive={wateringActive}
        onWater={startWatering}
        isPlanted={gameState === 'planted'}
      />

      {/* トースト通知 */}
      {toast && <Toast message={toast} />}

      {/* 植え付け成功メッセージ (位置は水やりヒントと同じ) */}
      {showPlantSuccess && (
        <CuteMessage 
          title="作物が植えられたよ！" 
          animationType="bounce"
        />
      )}

      {/* 水やりヒント */}
      {showWaterHint && (
        <CuteMessage 
          title="作物を育てるにはお水が必要！" 
          subtext="おや、バケツに水が貯まってるよ くんでみよう" 
          animationType="pulse"
        />
      )}

      {/* 初期画面のボタン */}
      {gameState === 'initial' && <PlantButton />}

      {/* モーダル */}
      {gameState === 'seedSelection' && (
        <SeedSelectionModal 
          plants={plantData} 
          onSelect={selectPlant}
          onCancel={handleBack}
        />
      )}

      {gameState === 'plantingConfirm' && selectedPlant && (
        <PlantConfirmModal 
          plant={selectedPlant} 
          onConfirm={confirmPlanting}
          onCancel={handleBack}
        />
      )}

      {gameState === 'naming' && selectedPlant && (
        <NamingModal 
          plant={selectedPlant}
          value={plantName}
          onChange={setPlantName}
          onConfirm={namePlant}
          onCancel={handleBack}
        />
      )}
    </main>
  );
}