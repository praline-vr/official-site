const Discography = () => {
  return (
    <div id="discography" class="md:bg(cover center bg_pink)">
      <div class="md:(mx-auto w-full md:max-w-6xl relative h-screen)">
        <div class="text-center md:(absolute top-1/2 -translate-y-1/2 w-full)">
          <div class="md:flex">
            <div class="">
              <h1
                class="font-bold text-4xl vh-center aspect-video bg(cover center bg_pink)
                md:(p-8 aspect-auto h-auto bg-none)"
              >
                DISCORGRAPHY
              </h1>
              <img
                src="/jacket-watasugar.png"
                class="md:hidden w-1/2 mx-auto"
              ></img>
              <p class="my-10 font-bold text-xl">2022.6.18 Release</p>
              <p class="my-10 font-bold text-xl">
                1st single 『わたしだけのSugar』
              </p>
              <p class="px-8 my-10 md:font-bold">
                VRアイドルスリーピースバンドPRA-LiNĒからの待望の初音源！！
                あまあま～💖でしゅがしゅが～🌟な歌詞とキュートでポップなおしゃれサウンドをご賞味あれ～～～！！！！
              </p>
              <div class="text-center md:(text-right px-8)">
                <a href="https://pra-line.booth.pm/items/3890560">
                  <img src="/icon-booth-300x300.png" class="inline w-16" />
                </a>
                <h3 class="font-extrabold text-lg pb-12 pt-2 md:hidden">
                  BOOTH
                </h3>
              </div>
            </div>
            <div class="hidden md:(block px-12 m-auto w-full)">
              <a href="https://pra-line.booth.pm/items/3890560">
                <img src="/jacket-watasugar.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discography;
