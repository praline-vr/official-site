type Live = {
  name: string;
  date: string;
  href?: string;
};

const Live = () => {
  const lives: Live[] = [
    {
      date: "2021.04.16",
      name: "定期公演「PRA-LiNÉ Music Festival vol.1 -SIDE BITTER-」(※音声のみ)",
      href: "https://youtu.be/8_3iuQIR1gE",
    },
    {
      date: "2021.05.05",
      name: "Suc×Suquel｡コラボライブ「ぷらりね×えぃる ゴーゴー未来のバーチャルスター！」",
      href: "https://youtu.be/7qnjT9j29ew",
    },
    {
      date: "2021.06.13",
      name: "定期公演「PRA-LiNÉ Music Festival vol.2」",
      href: "https://youtu.be/fWJ6-VDuGbQ",
    },
    {
      date: "2021.07.18",
      name: "定期公演「PRA-LiNÉ Music Festival vol.3」",
      href: "https://youtu.be/TQuYC-V5_5E",
    },
    {
      date: "2021.08.01",
      name: "Suc×Suquel｡コラボライブ「ぷらりね×えぃる ８月さいしょのなちぅまちゅり！」",
      href: "https://youtu.be/DJt9S87a9Ts",
    },
    {
      date: "2021.08.29",
      name: "定期公演「PRA-LiNÉ Acoustic Night」",
      href: "https://youtu.be/0q1jhwIeA3Q",
    },
    {
      date: "2021.09.18",
      name: "24時間ライブ「AWAKE24」出演",
      href: "https://youtu.be/2Iay05h1scI",
    },
    {
      date: "2021.10.01",
      name: "アイドルフェス「バーチャル裏TIF」出演",
    },
    {
      date: "2021.12.18",
      name: "VRLIVE「Twinkle Note」出演",
    },
    {
      date: "2022.02.27",
      name: "誕生日ライブ「はっぴーばーすでーなかにゃん！！！」",
    },
    {
      date: "2022.03.12",
      name: "VRLIVE「Twinkle Note Vol.2」出演",
      href: "https://youtu.be/2biMT4jNbGE?t=6830",
    },
    {
      date: "2022.05.14",
      name: "不眠症女一周年ライブ「INSOMNIA GIRLS DESTRUCT YOU」出演",
      href: "https://youtu.be/5tJx-mfIO58?t=853",
    },
    {
      date: "2022.07.22",
      name: "VRLIVECAVE「ねこのおと」出演",
    },
    {
      date: "2022.08.13",
      name: "「VRCスクールカフェCitrus Leafミュージックフェスティバル！」出演",
    },
    {
      date: "2022.08.28",
      name: "PRA-LiNÉ AMOKA わかりみ団スリーマンライブ「玉響夏祭 3ManLive」",
      href: "https://youtu.be/wbl7zYF2n6E",
    },
    {
      date: "2022.09.04",
      name: "Suc×Suquel｡コラボライブ「ぷらりね×えぃる -夏よカムバック-」",
      href: "https://youtu.be/G9PZ2pQb4mI",
    },
    {
      date: "2022.10.07",
      name: "約束カフェ＆バー コラボライブ（音声のみ）",
      href: "https://youtu.be/dahPTqqGYP8",
    },
    {
      date: "2022.11.11",
      name: "約束カフェ＆バー 約束さん誕生日ライブ（音声のみ）",
      href: "https://youtu.be/XS7zSmWvcJU",
    },
    {
      date: "2023.05.13",
      name: "不眠症女ツアー「RAMPANT FUME TOUR 2023」 at Livehouse Confiserie",
      href: "https://youtu.be//UsnxKOU50h0",
    },
    {
      date: "2023.08.19",
      name: "Suc×Suquel｡コラボライブ「ぷらりね×えぃる ～よくまぜてお召し上がりください～」",
      href: "https://youtube.com/live/UZv01MVlNWs",
    },
    {
      date: "2023.11.11",
      name: "約束カフェ＆バー 約束さん誕生日ライブ（音声のみ, りんちゃんお休み）",
      href: "https://youtu.be/7ar1qf1XQYE",
    },
    {
      date: "2023.11.20",
      name: "そのらじｰAwaiSonoMidnightRadio- #217 (ラジオミニライブ)",
      href: "https://youtu.be/2EPOjUuqdl0",
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
          <ul class="px-4 py-6 text-left m-auto md:(pl-8 w-3/4 py-0 h-[50vh] overflow-auto)">
            {lives.reverse().map((live) => (
              <li class="list-circle ml-4 py-2 md:(ml-0 py-0)">
                <span class="mr-1">{live.date}</span>
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
