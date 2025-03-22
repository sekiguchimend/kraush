// src/components/QuestChallenge.js
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// クエストデータの定義
const questsData = [
  {
    id: 1,
    title: 'CMを閲覧しよう',
    description: 'CMを最後まで視聴して報酬をゲット',
    reward: '5コイン',
    icon: '📺',
    completed: false
  },
  {
    id: 2,
    title: '友達を招待しよう',
    description: '友達を招待して報酬をゲット',
    reward: '20コイン',
    icon: '👥',
    completed: false
  },
  {
    id: 3,
    title: '毎日ログイン',
    description: '7日間連続でログインしよう',
    reward: '15コイン',
    icon: '📅',
    completed: false,
    progress: '3/7'
  },
  {
    id: 4,
    title: '作物を3つ植えよう',
    description: '異なる種類の作物を植えよう',
    reward: '10コイン',
    icon: '🌱',
    completed: false,
    progress: '1/3'
  },
  {
    id: 5,
    title: 'SNSでシェア',
    description: '自分の農場をSNSでシェアしよう',
    reward: '8コイン',
    icon: '🔄',
    completed: false
  },
  {
    id: 6,
    title: '初めての収穫',
    description: '作物を一つ収穫しよう',
    reward: '10コイン',
    icon: '🍅',
    completed: false
  },
  {
    id: 7,
    title: 'プロフィール設定',
    description: 'プロフィールを完成させよう',
    reward: '5コイン',
    icon: '👤',
    completed: true
  },
  {
    id: 8,
    title: 'アンケートに答える',
    description: '簡単なアンケートに回答しよう',
    reward: '8コイン',
    icon: '📝',
    completed: false
  },
  {
    id: 9,
    title: '50コイン貯める',
    description: '50コインを貯めよう',
    reward: 'レアの種',
    icon: '💰',
    completed: false,
    progress: '32/50'
  },
  {
    id: 10,
    title: 'チュートリアル完了',
    description: 'チュートリアルを最後まで完了しよう',
    reward: '10コイン',
    icon: '📚',
    completed: true
  }
];

export default function QuestChallenge() {
  const [isOpen, setIsOpen] = useState(false);
  const [quests, setQuests] = useState(questsData);
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズ検出
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // クエスト完了トグル関数
  const toggleQuestComplete = (id) => {
    setQuests(prev => 
      prev.map(quest => 
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    );
  };

  // モバイル用のクエストボタン
  const QuestButton = () => (
    <div className={`fixed ${isMobile ? 'top-4 right-4' : 'top-16 right-6'} z-40`}>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-kaushe-green to-emerald-400 text-white 
                 font-bold p-3 rounded-full shadow-lg hover:shadow-xl 
                 transition-all duration-300 hover:scale-105 border-2 border-white"
        style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
      >
        <div className="flex items-center space-x-1">
          <span className="text-xl">🏆</span>
          {!isMobile && <span>クエスト</span>}
        </div>
      </button>
      {!isOpen && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white 
                      text-xs font-bold rounded-full w-6 h-6 flex items-center 
                      justify-center border-2 border-white animate-pulse">
          2
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* モバイル画面の時のみ表示されるクエストボタン */}
      {isMobile && <QuestButton />}
      
      {/* 画面サイズ問わず、常に表示するボタン（開発用） */}
      {!isMobile && <QuestButton />}
      
      {/* クエストパネル（下から上に表示） */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* オーバーレイ */}
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* クエストパネル本体 */}
            <motion.div
              className="relative bg-white w-full max-w-md h-5/6 rounded-t-3xl shadow-xl 
                        overflow-hidden flex flex-col"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* ヘッダー */}
              <div className="bg-gradient-to-r from-kaushe-green to-emerald-400 
                            px-6 py-4 flex justify-between items-center">
                <h2 className="text-white font-bold text-xl" 
                    style={{ fontFamily: '"Mochiy Pop One", "M PLUS Rounded 1c", sans-serif' }}>
                  チャレンジクエスト
                </h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* ハンドル */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1">
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>
              
              {/* クエスト一覧 */}
              <div className="flex-1 overflow-y-auto p-4">
                {quests.map((quest) => (
                  <div 
                    key={quest.id}
                    className={`mb-3 p-4 rounded-xl shadow-md flex items-center
                              ${quest.completed ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <div className="mr-4 bg-kaushe-green/10 w-12 h-12 rounded-full flex 
                                  items-center justify-center text-2xl">
                      {quest.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-kaushe-brown">
                          {quest.title}
                        </h3>
                        <div className="flex items-center ml-2">
                          <span className="text-yellow-500 font-bold text-sm">
                            {quest.reward}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {quest.description}
                      </p>
                      {quest.progress && (
                        <div className="mt-1">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-kaushe-green h-2 rounded-full" 
                              style={{ 
                                width: `${parseInt(quest.progress.split('/')[0]) / 
                                        parseInt(quest.progress.split('/')[1]) * 100}%` 
                              }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">{quest.progress}</span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => toggleQuestComplete(quest.id)}
                      className={`ml-2 w-8 h-8 rounded-full flex items-center justify-center
                                border-2 ${quest.completed 
                                  ? 'bg-kaushe-green border-kaushe-green text-white' 
                                  : 'border-gray-300 bg-white'}`}
                    >
                      {quest.completed ? '✓' : ''}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}