import { Options } from "$fresh/plugins/twind.ts";

const twConfig: Options = {
  selfURL: import.meta.url,
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap')",
    html: {
      scrollBehavior: "smooth",
      fontFamily: "'Noto Sans JP', sans-serif",
    },
  },
};

export default twConfig;
