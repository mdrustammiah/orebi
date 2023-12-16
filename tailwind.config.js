/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container':'1280px',
      },
      width:{
        '600':'600px',
        '370':'370px',
        '30%':'30%',
        '92':'92px',
        
      },

      height:{
        '50':'50px',
        '464':'464px',
        '35':'35px',
      },
      fontFamily:{
        'dm':'DM Sans',
      },
      fontSize:{
        '39':'39px',
      },
      colors:{
        'priColor':'#262626',
        'secColor':'#767676',
        'cateColor':'#F3F3F3',
      'searColor': '#C4C4C4',
      'borColor':'979797'
      },
      padding:{
        'd96':'600px'

      },
    },
  },
  plugins: [],
}