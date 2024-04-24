/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',
        primary: '#FCF2C9', 
        secondary: '#517CCE', 
        graymain: '#D0D0D0',
        graylight: '#EAEAEA',
        graymedium: '#D1D1D1',
        gray5: '#555',
        gray8: '#888',
        keyred: '#FF0606',
        keyyellow: '#FFD600',
        keypurple: '#EB00FF',
        keydeeppurple: '#5200FF',
        keyblue: '#00B2FE',
        keydeepblue: '#061FFF',
        keyocean: '#00FFFF',
        keygreen: '#61E80E',
        keydeepgreen: '#00CD52',
      },
      fontFamily: {
        NotoSansKR: ['Noto Sans KR'],
        BlackHanSans: ['Black Han Sans'],
        NanumGothicCoding: ['Nanum Gothic Coding']
      }
    },
    screens: {
      ss: '480px',
      sm: "620px",
      sl: "768px",
      md: "1060px",
      lg: "1200px",
      xl: '1500px',
      xxl: '1920px',
    },
  },
  plugins: [],
}

