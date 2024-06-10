const Discography = () => {
  return (
    <div id="discography" class="md:bg-cover md:bg-center md:bg-bg_pink">
      <div class="md:mx-auto md:w-full md:max-w-6xl md:relative md:h-screen">
        <div class="text-center md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full">
          <h1 class="font-bold text-4xl vh-center aspect-video bg-cover bg-center bg-bg_pink md:hidden">
            DISCORGRAPHY
          </h1>
          <div class="md:flex md:flex-row-reverse">
            <div class="w-2/3 mx-auto md:px-12 md:w-full">
              <a
                href="https://pra-line.booth.pm/items/3890560"
                class="hover:opacity-80 transition-opacity"
              >
                <img src="/jacket-watasugar.png" />
              </a>
            </div>
            <div>
              <h1 class="hidden font-bold text-4xl md:block md:p-8 md:aspect-auto md:h-auto">
                DISCORGRAPHY
              </h1>
              <p class="my-4 md:my-10 font-bold text-xl">
                2022.6.18 Release
              </p>
              <p class="my-4 md:my-10 font-bold text-xl">
                1st single 『わたしだけのSugar』
              </p>
              <p class="px-8 my-4 md:my-10 md:font-bold">
                VRアイドルスリーピースバンドPRA-LiNĒからの待望の初音源！！
                あまあま～💖でしゅがしゅが～🌟な歌詞とキュートでポップなおしゃれサウンドをご賞味あれ～～～！！！！
              </p>
              <div class="text-center md:text-right md:px-8">
                <a
                  href="https://pra-line.booth.pm/items/3890560"
                  class="hover:opacity-80 transition-opacity"
                >
                  <img src="/icon-booth-300x300.png" class="inline w-16" />
                </a>
                <h3 class="font-extrabold text-lg pb-6 pt-1 md:hidden">
                  BOOTH
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discography;
