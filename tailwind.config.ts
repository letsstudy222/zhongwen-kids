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
        /**
         * Bảng màu thiết kế theo nguyên tắc tâm lý màu sắc trẻ em:
         * - Primary: Hồng đào dịu (peach pink) - ấm áp, dịu mắt, không gắt như coral
         * - Secondary: Xanh ngọc (mint teal) - an toàn, gợi cảm giác học tập
         * - Accent: Vàng kem (cream yellow) - vui tươi nhưng không chói
         * - Tất cả đạt WCAG AA contrast trên nền cream/white
         */
        primary: {
          50: '#fef7f4',
          100: '#fdeae3',
          200: '#fbd1c2',
          300: '#f7ad95',
          400: '#f28267',
          500: '#ed6346', // hồng đào ấm - màu chính dịu mắt
          600: '#d94a2e',
          700: '#b53a25',
          800: '#933124',
          900: '#782d23'
        },
        secondary: {
          50: '#f0fbf9',
          100: '#d6f4ee',
          200: '#aee8de',
          300: '#7ed5c9',
          400: '#52bcae',
          500: '#3ba294', // xanh ngọc bích dịu
          600: '#2f8478',
          700: '#296a62',
          800: '#255550',
          900: '#214843'
        },
        accent: {
          50: '#fefaeb',
          100: '#fcf2c8',
          200: '#fae28d',
          300: '#f6cd52',
          400: '#f2b62f', // vàng kem ấm
          500: '#e09917',
          600: '#c17612',
          700: '#9a5413',
          800: '#7f4317',
          900: '#6c3818'
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d'
        },
        // Màu nền & bổ trợ - cream nhẹ thay vì trắng tinh, đỡ mỏi mắt
        cream: {
          DEFAULT: '#fdfaf4',
          50: '#fdfaf4',
          100: '#faf3e6',
          200: '#f4ead3'
        },
        // Lavender phụ trợ cho gradient
        lavender: {
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa'
        },
        // Hồng phấn nhẹ cho phần background
        blush: {
          100: '#fce7e3',
          200: '#fad0c8',
          300: '#f6b3a5'
        }
      },
      fontFamily: {
        // Quicksand - rounded, friendly, dễ đọc hơn Baloo cho trẻ em
        display: ['"Quicksand"', '"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
        chinese: ['"Noto Sans SC"', '"Ma Shan Zheng"', 'serif']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      boxShadow: {
        // Shadow mềm mại hơn - dùng blur thay vì solid offset
        soft: '0 4px 14px rgba(237, 99, 70, 0.12)',
        'soft-lg': '0 8px 24px rgba(237, 99, 70, 0.15)',
        'soft-secondary': '0 4px 14px rgba(59, 162, 148, 0.15)',
        'soft-accent': '0 4px 14px rgba(242, 182, 47, 0.15)',
        // Giữ shadow cute cũ để tương thích ngược
        cute: '0 4px 0 rgba(0,0,0,0.06)',
        'cute-lg': '0 6px 0 rgba(0,0,0,0.06)',
        glow: '0 0 24px rgba(237, 99, 70, 0.25)',
        'glow-soft': '0 0 20px rgba(59, 162, 148, 0.2)'
      },
      animation: {
        wiggle: 'wiggle 1.2s ease-in-out infinite',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pop-in': 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        shake: 'shake 0.4s ease-in-out',
        confetti: 'confetti 1s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' }
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0)', opacity: '1' },
          '100%': {
            transform: 'translateY(-200px) rotate(720deg)',
            opacity: '0'
          }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
