import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Bảng màu pastel thân thiện trẻ em
        primary: {
          50: '#fff5f7',
          100: '#ffe4ec',
          200: '#ffc1d3',
          300: '#ff8fae',
          400: '#ff5c87',
          500: '#ff2e63', // hồng coral - màu chính
          600: '#e21450',
          700: '#bb0e42',
          800: '#931036',
          900: '#7a1131'
        },
        secondary: {
          50: '#f0fdff',
          100: '#ccf5fd',
          200: '#9aebfb',
          300: '#5ddaf5',
          400: '#2ec0e6',
          500: '#08a4cb', // xanh trời
          600: '#0a83a8',
          700: '#106988',
          800: '#155670',
          900: '#11475e'
        },
        accent: {
          50: '#fffbeb',
          100: '#fff3c6',
          200: '#ffe588',
          300: '#ffd14a',
          400: '#ffba1f', // vàng nắng
          500: '#fa9d07',
          600: '#dd7402',
          700: '#b75006',
          800: '#943e0c',
          900: '#7a340d'
        },
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a'
        },
        cream: '#fff8ec',
        sky: '#e0f4ff',
        peach: '#ffe6d1'
      },
      fontFamily: {
        // Display font (cute, rounded) + body font (clean, readable)
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
        chinese: ['"Noto Sans SC"', '"Ma Shan Zheng"', 'serif']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      boxShadow: {
        cute: '0 6px 0 rgba(0,0,0,0.08)',
        'cute-lg': '0 10px 0 rgba(0,0,0,0.08)',
        glow: '0 0 24px rgba(255,46,99,0.35)'
      },
      animation: {
        wiggle: 'wiggle 1.2s ease-in-out infinite',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'pop-in': 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'shake': 'shake 0.4s ease-in-out',
        confetti: 'confetti 1s ease-out forwards'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        popIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' }
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0)', opacity: '1' },
          '100%': { transform: 'translateY(-200px) rotate(720deg)', opacity: '0' }
        }
      }
    }
  },
  plugins: []
};

export default config;
