import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg_top: "url('/bg-top.png')",
        bg_top_rot: "url('/bg-top-rot.png')",
        bg_orange: "url('/bg-orange.png')",
        bg_pink: "url('/bg-pink.png')",
        bg_blue: "url('/bg-blue.png')",
        bg_purple: "url('/bg-purple.png')",
        bg_praline_sd: "url('/praline-sd.png')",
      },
    },
  },
} satisfies Config;
