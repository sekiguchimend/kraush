// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'カウシェファーム',
  description: '農場シミュレーションアプリ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}