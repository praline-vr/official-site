const Goods = () => {
  return (
    <div id="goods" class="md:bg-cover md:bg-center md:bg-bg_purple">
      <div class="md:mx-auto md:w-full md:max-w-6xl md:relative md:h-screen">
        <div class="text-center md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full">
          <h1 class="font-bold text-4xl vh-center aspect-video bg-cover bg-center bg-bg_purple
            md:p-8 md:aspect-auto md:h-auto md:bg-none">
            GOODS
          </h1>
          <div class="md:flex md:px-16">
            <div class="my-auto text-left w-full">
              <div class="flex m-4 md:hidden">
                <img src="/item-mug.png" class="w-1/3 p-8" />
                <img src="/item-tumbler.png" class="w-1/3 p-8" />
                <img src="/item-badge.png" class="w-1/3 p-8" />
              </div>
              <p class="mx-4 leading-10 md:my-10 md:font-bold">
                オンラインショップ SUZURI にて PRA-LiNĒ の
                グッズが買えるよ！！！！！
                <br />
                カップやクージー、スマホケースなんかもあるよ！
                <br />
                ステッカーと缶バッジもお手ごろ価格で販売中！
              </p>
              <div class="text-center mt-4 mb-12 md:text-right">
                <a href="https://suzuri.jp/PRA-LiNE">
                  <img src="/icon-suzuri-300x300.png" class="inline w-16" />
                </a>
              </div>
            </div>
            <div class="hidden md:block md:mx-12 md:m-auto md:w-full">
              <a href="https://suzuri.jp/PRA-LiNE">
                <img src="/item-tumbler.png" class="pl-[20%] w-2/3 mx-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;
