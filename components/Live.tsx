const Live = () => {
  const lives = [
    {
      name: "2021.04.16 定期公演「PRA-LiNÉ Music Festival vol.1 -SIDE BITTER-」(※音声のみ)",
      href: "https://youtu.be/8_3iuQIR1gE",
    },
    {
      name: "2021.05.05 Suc×Suquel｡コラボライブ「ぷらりね×えぃる ゴーゴー未来のバーチャルスター！」",
      href: "https://youtu.be/7qnjT9j29ew",
    },
    {
      name: "2021.06.13 定期公演「PRA-LiNÉ Music Festival vol.2」",
      href: "https://youtu.be/fWJ6-VDuGbQ",
    },
    {
      name: "2021.07.18 定期公演「PRA-LiNÉ Music Festival vol.3」",
      href: "https://youtu.be/TQuYC-V5_5E",
    },
    {
      name: "2021.08.01 Suc×Suquel｡コラボライブ「ぷらりね×えぃる ８月さいしょのなちぅまちゅり！」",
      href: "https://youtu.be/DJt9S87a9Ts",
    },
    {
      name: "2021.08.29 定期公演「PRA-LiNÉ Acoustic Night」",
      href: "https://youtu.be/0q1jhwIeA3Q",
    },
    {
      name: "2021.09.18 24時間ライブ「AWAKE24」出演",
      href: "https://youtu.be/2Iay05h1scI",
    },
    {
      name: "2021.10.01 アイドルフェス「バーチャル裏TIF」出演",
    },
    {
      name: "2021.12.18 VRLIVE「Twinkle Note」出演",
    },
    {
      name: "2022.02.27 誕生日ライブ「はっぴーばーすでーなかにゃん！！！」",
    },
    {
      name: "2022.03.12 VRLIVE「Twinkle Note Vol.2」出演",
      href: "https://youtu.be/2biMT4jNbGE?t=6830",
    },
    {
      name: "2022.05.14 不眠症女一周年ライブ「INSOMNIA GIRLS DESTRUCT YOU」出演",
      href: "https://youtu.be/5tJx-mfIO58?t=853",
    },
    {
      name: "2022.07.22 VRLIVECAVE「ねこのおと」出演",
    },
    {
      name: "2022.08.13 「VRCスクールカフェCitrus Leafミュージックフェスティバル！」出演",
    },
    {
      name: "2022.08.28 PRA-LiNÉ AMOKA わかりみ団スリーマンライブ「玉響夏祭 3ManLive」",
      href: "https://youtu.be/wbl7zYF2n6E",
    },
    {
      name: "2022.09.04 Suc×Suquel｡コラボライブ「ぷらりね×えぃる -夏よカムバック-」",
      href: "https://youtu.be/G9PZ2pQb4mI",
    },
    {
      name: "2022.10.07 約束カフェ＆バー コラボライブ（音声のみ）",
      href: "https://youtu.be/dahPTqqGYP8",
    },
    {
      name: "2022.11.11 約束カフェ＆バー 約束さん誕生日ライブ（音声のみ）",
      href: "https://youtu.be/XS7zSmWvcJU",
    },
  ];
  return (
    <div id="live" class="md:min-h-screen md:bg(cover center bg_blue)">
      <div class="md:(mx-auto w-full md:max-w-6xl relative h-auto min-h-screen)">
        <div class="text-center md:(absolute top-1/2 -translate-y-1/2 w-full)">
          <h1
            class="font-bold text-4xl vh-center aspect-video bg(cover center bg_blue)
            md:(p-4 aspect-auto bg-none)"
          >
            LIVE HISTORY
          </h1>
          <ul class="px-4 py-6 text-left m-auto md:(w-3/4 py-0)">
            {lives.reverse().map((live) => (
              <li class="list-circle ml-4 py-2 md:(ml-0 py-0)">
                {live.href ? (
                  <a href={live.href} class="underline text-blue-400">
                    {live.name}
                    <img
                      src="/icon-youtube-300x300.png"
                      class="mx-2 w-4 inline"
                    />
                  </a>
                ) : (
                  <span>{live.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Live;
