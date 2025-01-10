/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1020px",
    },
    colors: {
      transparent: "rgba(0,0,0,0)",
      neutral: {
        0: "hsl(0,0%,100%)",
        100: "hsl(17.1,41.2%,96.7%)",
        200: "hsl(17.1,12.3%,88.8%)",
        700: "hsl(194.5,22.8%,28.4%)",
        900: "hsl(194.3,77.8%,10.6%)",
      },
      "light-salmon": {
        50: "hsl(22.5,100%,96.9%)",
        100: "hsl(22.2,100%,91%)",
        500: "hsl(21.8,98.6%,71.6%)",
      },
    },
    backgroundImage: {
      gradient: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      "text-gradient":
        "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%);",
      "pattern-light": 'url("./assets/images/pattern-light-bg.svg")',
      "pattern-dark": 'url("./assets/images/pattern-dark-bg.svg")',

      glow: "url('./assets/images/pattern-glow.svg')",
    },
    fontSize: {
      xs: ["14px", { lineHeight: "120%", letterSpacing: "-1px" }],
      sm: ["18px", { lineHeight: "130%", letterSpacing: "-1px" }],
      md: ["20px", { lineHeight: "140%", letterSpacing: "-0.5px" }],
      lg: ["24px", { lineHeight: "110%", letterSpacing: "-1px" }],
      xl: ["34px", { lineHeight: "130%", letterSpacing: "-1px" }],
      "xl-mobile": ["34px", { lineHeight: "130%", letterSpacing: "-2px" }],
      "2xl": ["50px", { lineHeight: "130%", letterSpacing: "-2px" }],
      "3xl-mobile": ["38px", { lineHeight: "120%", letterSpacing: "-2px" }],
      "3xl": ["62px", { lineHeight: "120%", letterSpacing: "-2px" }],
    },
    borderRadius: {
      0: "0px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      full: "999px",
    },
    spacing: {
      0: "0px",
      25: "2px",
      50: "4px",
      75: "6px",
      100: "8px",
      150: "12px",
      200: "16px",
      250: "20px",
      300: "24px",
      400: "32px",
      500: "40px",
      600: "48px",
      800: "64px",
      1000: "80px",
    },
    fontFamily: {
      "martian-mono": "Martian Mono",
      inter: "Inter",
    },
    extend: {},
  },
  plugins: [],
};
