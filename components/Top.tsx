const Top = () => {
  return (
    // twind intellisense causes error next line for now
    // https://github.com/tw-in-js/vscode-twind-intellisense/issues/19
    <div id="top" class="bg(cover center bg_top_rot md:bg_top)">
      <div class="mx-auto w-full md:max-w-6xl relative h-screen">
        <img
          src="/senzai.png"
          class="absolute top-1/2 -translate-y-1/2 mx-auto"
        />
        <div class="absolute top-3/4 -translate-y-3/4 w-full md:(top-1/2 -translate-y-1/2 w-auto right-[40px])">
          <img src="/text-upper.png" class="mx-auto w-1/2 md:w-[60%]" />
          <img src="/logo.png" class="py-3 mx-auto w-1/2 md:w-[60%]" />
          <img src="/text-lower.png" class="mx-auto w-1/2 md:w-[60%]" />
        </div>
        <div class="hidden md:(block absolute bottom-[20%] left-[5%] bg(purple-700 opacity-30) rounded-full px-1 py-8 border(1 white))">
          <p class="text-white font-bold">official</p>
          <a href="https://twitter.com/praline_vr">
            <img src="icon-twitter-300x300.png" class="my-4 h-8 mx-auto" />
          </a>
          <a href="https://youtube.com/@naca_nyan">
            <img src="icon-youtube-300x300.png" class="my-4 h-8 mx-auto" />
          </a>
          <a href="https://pra-line.booth.pm/">
            <img src="icon-booth-300x300.png" class="my-4 h-8 mx-auto" />
          </a>
          <a href="https://suzuri.jp/PRA-LiNE">
            <img src="icon-suzuri-300x300.png" class="mt-4 h-8 mx-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
