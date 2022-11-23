const Goods = () => {
  return (
    <div id="goods" class="md:bg(cover center bg_purple)">
      <div class="md:(mx-auto w-full md:max-w-6xl relative h-screen)">
        <div class="text-center md:(absolute top-1/2 -translate-y-1/2 w-full)">
          <h1
            class="font-bold text-4xl vh-center aspect-video bg(cover center bg_purple) 
            md:(p-8 aspect-auto h-auto bg-none)"
          >
            GOODS
          </h1>
          <div class="md:(flex px-16)">
            <div class="my-auto text-left w-full">
              <div class="flex m-4 md:hidden">
                <img src="/item-mug.png" class="w-1/3 p-8" />
                <img src="/item-tumbler.png" class="w-1/3 p-8" />
                <img src="/item-badge.png" class="w-1/3 p-8" />
              </div>
              <p class="mx-4 leading-10 md:(my-10 font-bold)">
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
            <div class="hidden md:(block mx-12 m-auto w-full)">
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
