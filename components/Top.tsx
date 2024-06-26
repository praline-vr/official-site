const Top = () => {
  return (
    // twind intellisense causes error next line for now
    // https://github.com/tw-in-js/vscode-twind-intellisense/issues/19
    <div id="top" class="bg-cover bg-center bg-bg_top_rot md:bg-bg_top">
      <div class="mx-auto w-full md:max-w-6xl relative h-screen">
        <img
          src="/praline-trim.png"
          class="absolute top-1/2 -translate-y-1/2 mx-auto md:w-3/4"
        />
        <div class="absolute top-[80%] -translate-y-3/4 w-full md:top-1/2 md:-translate-y-1/2 md:w-auto md:right-[40px]">
          <img src="/text-upper.png" class="mx-auto w-1/2 md:w-[60%]" />
          <img src="/logo.png" class="py-3 mx-auto w-1/2 md:w-[60%]" />
          <img src="/text-lower.png" class="mx-auto w-1/2 md:w-[60%]" />
        </div>
        <div class="hidden md:block md:absolute md:bottom-[20%] md:left-[5%] md:bg-purple-700 md:bg-opacity-30 md:rounded-full md:px-1 md:py-8 md:border-1 md:border-white">
          <p class="text-white font-bold">official</p>
          <a href="https://x.com/praline_vr">
            <img src="icon-x-300x300.png" class="my-4 h-8 mx-auto" />
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
