/** @type {import('tailwindcss').Config} */
 export default{
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kaushe-green': '#4CAF50', // 例: カウシェグリーン
        'kaushe-green-dark': '#2E7D32', // 例: 濃いカウシェグリーン
        'kaushe-brown': '#8B572A', // 例: カウシェブラウン (globals.cssの--foreground-rgbから予測しました)
      },
    },
  },
  plugins: [],
}