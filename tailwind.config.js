/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-color': {
          70: '#CBEA7B',
          75: '#D3EE91',
          80: '#DCF1A7',
          85: '#E5F5BD',
          90: '#EEF8D3',
          95: '#F6FBE9',
          97: '#FAFDF2',
          99: '#FDFEFB',
        },
        'dark-green-color': {
          15: '#1A3129',
          20: '#234338',
          25: '#2C5446',
          30: '#346454',
          40: '#468671',
          60: '#79B9A4',
          80: '#BCDCD1',
          90: '#DDEDE8',
        },
        'grey-color': {
          10: '#191919',
          15: '#262626',
          20: '#333333',
          30: '#4C4C4D',
          35: '#59595A',
          40: '#656567',
          60: '#98989A',
          90: '#E6E6E6',
          95: '#F2F2F2',
          97: '#F7F7F7',
          99: '#FCFCFC',
        },
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}