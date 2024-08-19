/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        nspm: {
          "primary": "#ca141b",
          "secondary": "#fff",
          "accent": "#fff",
          "neutral": "#ff0000",
          "base-100": "#001333",
        },
      },
      "retro",
      "cyberpunk",
      "valentine",
      "aqua"
    ]
  }
}

