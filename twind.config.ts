import { Options } from "$fresh/plugins/twind.ts";
import { css } from "twind/css";

const twConfig: Options = {
  selfURL: import.meta.url,
  preflight: {
    "@import": [
      "url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap')",
      "url('/style.css')",
    ],
  },
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
  plugins: {
    "aspect-video": css`
      aspect-ratio: 16 / 9;
    `,
    "aspect-auto": css`
      aspect-ratio: auto;
    `,
    "vh-center": "flex justify-center items-center",
    "bg-menu-gradient":
      "bg-gradient-to-t from-[rgba(109,40,217,0.3)] to-[rgb(196,168,240)]",
  },
};

export default twConfig;
