/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scaleSlow : 'scaleSlow 3.2s ease-in-out',
        shakeAndMove : 'shakeAndMove 4.2s ease-in-out',
        slideAndFade : "slideAndFade 2s ease-in-out",
        fromDownFade : "fromDownFade 1s ease-inout",
        cardAnimation : "cardAnimation 5s ease-in-out",
        xcardAnimation : "xcardAnimation 10s ease-in-out",
      cardsContainerAnimation: "cardsContainerAnimation 3s ease-in-out"
        },
        keyframes: {
          scaleSlow : {
             '0%': { transform: 'scale(1)' },   
             '50%': { transform: 'scale(1.08)'}, 
            '100%': { transform: 'scale(1)' }, 
          },
          shakeAndMove: {
            '0%': {
              transform: 'translateX(0) translateY(0) rotate(0deg)'
            },
            '25%': {
              transform: 'translateX(50px) translateY(20px) rotate(5deg)'
            },
            '50%': {
              transform: 'translateX(0) translateY(0) rotate(-5deg)'
            },
            '75%': {
              transform: 'translateX(-50px) translateY(-20px) rotate(5deg)'
            },
            '100%': {
              transform: 'translateX(0) translateY(0) rotate(0deg)'
            }
          },

          slideAndFade :{
            from :{
              transform: 'translateY(20px)',
              opacity: '0.6'
            },
            'to': {
              transform: 'translateY(0)',
              opacity: '1'
            }
          },
          fromDownFade :{
            from :{
              transform: 'translateY(30px)',
              opacity: '0.7'
            },
            'to': {
              transform: 'translateY(0)',
              opacity: '1'
            }
          },

          cardAnimation: {
            '0%': {
              transform: 'translateY(0%)',
              zIndex: '10',
            },
            '40%': {
              transform: 'translateY(-40%)',
              zIndex: '10',
            },
            '50%': {
              transform: 'translateY(-40%)',
              zIndex: '20',
            },
            '100%': {
              transform: 'translateY(0%)',
              zIndex: '20',
            },
          },
            xcardAnimation: {
            '0%': {
              transform: 'translateY(0%)',
              zIndex: '10',
            },
            '40%': {
              transform: 'translateX(-50%)',
              zIndex: '10',
            },
            '50%': {
              transform: 'translateX(-50%)',
              zIndex: '20',
            },
            '100%': {
              transform: 'translateX(0%)',
              zIndex: '20',
            },
          },
             cardsContainerAnimation: {
            '0%': {
              transform: 'translateY(0%)',
              //zIndex: '10',
              
            },
            '40%': {
              transform: 'translateY(-10%)',
              //zIndex: '10',
            },
            '50%': {
              transform: 'translateY(-10%)',
              zIndex: '0',
            },
            '100%': {
              transform: 'translateY(0%)',
              //zIndex: '20',
            },
          },

        },
    },
  },
  plugins: [],
}

