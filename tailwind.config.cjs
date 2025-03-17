/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                'footer': '200px minmax(900px, 1fr) 100px',
                'form': 'repeat(auto-fill, minmax(10rem, 1fr))',
            },
            screens: {
                "menu": "1100px",
            },
            maxWidth: {
                'content': '70.5rem'
            },
            spacing: {
                    'mobile': '1rem',
                    'appbar': '80px',
            },
            keyframes: {
                loading: {
                    '0%': {left: '-35%', right: '100%'},
                    '60%': {left: '100%', right: '-90%'},
                    '100%': {left: '100%', right: '-90%'}
                }
            }
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes:
            [
                {
                vetLight: {
                    "primary": "#005E3E",
                    "secondary": "#003E5E",
                    "accent": "#f861b4",
                    "neutral": "#1F2625",
                    "base-content": "#222222",
                    "base-100": "#F5FAF7",
                    "base-200": "#E1F0E7",
                    "base-300": "#CDE6D7",
                    "info": "#FFAB00",
                    "--rounded-box": "3px",
                    "--rounded-btn": "9999px", 
                },
            },
            ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
    },
};
