/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'redish': '#ee2d1c',
      'blackish': '#4c4c51',
      'blueish': '#88939e',
      'gradient-t': '#ee2e1d',
      'gradient-b': '#ee2e1d',
      'horizontal_color': '#e8e8e8',
      'white-text': '#FFF'
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'h1': '48px',
      'h2': '36px',
      'p': '22px',
      'links': '22px',

    },
  fontFamily: {
    sans: ['Source Sans Pro', 'sans-serif'],
  },
    extend: {
      backgroundImage: {
          'hero': "url('/assets/hero-image.png')"
      },
      lineHeight: {
        'p': '28px',
        'link': '28px',
        'h2': '36px',
        'h1': '48px'
      },
      padding: {
        's-space': '40px',
        'h-space': '22px',
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layout': '75px minmax(50vh,auto) 400px 200px 200px ',
        'm-layout': '50px 90vh 500px 300px 200px ',
      }
  }
  },
  plugins: [],
}