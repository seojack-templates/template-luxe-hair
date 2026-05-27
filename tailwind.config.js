/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  ...({
            theme: {
                extend: {
                    colors: {
                        brand: {
                            rose: '#B76E79',
                            dark: '#1A1A1A',
                            charcoal: '#333333',
                            cream: '#F9F9F9',
                            marble: '#F0F0F0'
                        }
                    },
                    fontFamily: {
                        serif: ['"Playfair Display"', 'serif'],
                        sans: ['"Montserrat"', 'sans-serif'],
                    },
                    animation: {
                        'fade-in': 'fadeIn 1s ease-out forwards',
                        'slide-up': 'slideUp 1s ease-out forwards',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    }
                }
            }
        }),
};
