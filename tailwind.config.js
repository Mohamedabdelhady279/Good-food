module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#E83667",
        primaryDark:"#BB2C51",
        secondary:"#21D4B9",
        dark:"#303030",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        cursive:["Ephesis","Cursive"]
        },
        container:{
          center:true,
          padding:{
            DEFAULT:"1rem",
            sm:"2rem",
            lg:"3rem",
            xl:"4rem",
          },
        },
    },
  },
  plugins: [require('daisyui')],
};
