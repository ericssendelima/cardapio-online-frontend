import daisyui from 'daisyui';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#4caf50",
          "secondary": "#ff9800",
          "accent": "#ff5722",
          "neutral": "#607d8b",
          "base-100": "#ffffff",
          "info": "#2196f3",
          "success": "#4caf50",
          "warning": "#ff9800",
          "error": "#f44336",
        },
        dark: {
          "primary": "#4caf50",
          "secondary": "#ff9800",
          "accent": "#ff5722",
          "neutral": "#607d8b",
          "base-100": "#303030",
          "info": "#2196f3",
          "success": "#4caf50",
          "warning": "#ff9800",
          "error": "#f44336",
        },
      },
    ],
  },
}