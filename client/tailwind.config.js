module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '624px',
      'md': '1268px',
      'lg': '1324px'
    },
    colors: {
      'white': '#FFFFFF',
      'timber': '#444B64',
      'black': '#242731',
      'blue': '#1fb6ff',
      'purple': '#4A5DAA',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'cursive': ['Prosto One', 'cursive']
    },
    extend: {
      backgroundImage: {
        'cool-background': "url('/img/cool-background.svg')",
      },
    },
  },
  plugins: [],
}
