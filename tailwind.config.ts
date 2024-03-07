import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
        gridTemplateRows: {
          // Simple 8 row grid
          '8': 'repeat(8, minmax(0, 1fr))',
    
    }
  },
  plugins: [require("daisyui")],
} satisfies Config;
