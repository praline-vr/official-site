import { FunctionComponent } from "preact";
import { useRef } from "preact/hooks";

type Live = {
  name: string;
  date: string;
  href?: string;
};

const lives: Live[] = [
  {
    date: "2021.04.16",
    name: "定期公演「PRA-LiNÉ Music Festival vol.1 -SIDE BITTER-」(※音声のみ)",
    href: "https://youtu.be/8_3iuQIR1gE",
  },
  {
    date: "2021.05.05",
    name:
      "Suc×Suquel｡コラボライブ「ぷらりね×えぃる ゴーゴー未来のバーチャルスター！」",
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
    name:
      "Suc×Suquel｡コラボライブ「ぷらりね×えぃる ８月さいしょのなちぅまちゅり！」",
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
    href: "https://youtu.be/UsnxKOU50h0",
  },
  {
    date: "2023.08.19",
    name:
      "Suc×Suquel｡コラボライブ「ぷらりね×えぃる ～よくまぜてお召し上がりください～」",
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

function getId(href?: string): string | null {
  try {
    if (!href) return null;
    const url = new URL(href);
    const last = url.pathname.split("/").pop();
    if (!last) return null;
    return last;
  } catch {
    return null;
  }
}

const LinkIf: FunctionComponent<{ href?: string }> = ({ href, children }) => {
  if (href) {
    return (
      <a
        href={href}
        class="underline text-blue-400 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    );
  } else {
    return <>{children}</>;
  }
};

const FromLive: FunctionComponent<{ live: Live }> = ({ live }) => {
  const type = live.href ? "archive" : "novideo";
  const color = {
    archive: "bg-sky-300",
    novideo: "bg-gray-300",
  }[type];
  const caption = {
    archive: "ライブアーカイブ",
    novideo: "アーカイブなし",
  }[type];
  const id = getId(live.href) ?? "7ar1qf1XQYE";
  return (
    <div class="m-4 w-[320px] md:w-[480px]">
      <div class="">
        <LinkIf href={live.href}>
          <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} />
        </LinkIf>
      </div>
      <div class="mt-2 flex justify-between just items-center">
        <span class={`px-3 py-0.5 rounded-full text-white text-sm ${color}`}>
          {caption}
        </span>
        <span class="text-gray-400">{live.date}</span>
      </div>
      <div class="mt-2">
        <LinkIf href={live.href}>{live.name}</LinkIf>
      </div>
    </div>
  );
};

const Live = () => {
  const scrollref = useRef<HTMLDivElement>(null);
  const scroll = (amount: number) => {
    if (!scrollref.current) return;
    const left = scrollref.current.scrollLeft;
    scrollref.current.scroll({
      left: left + amount,
      behavior: "smooth",
    });
  };
  return (
    <div
      id="live"
      class="md:min-h-screen md:bg-cover md:bg-center md:bg-bg_blue"
    >
      <div class="md:mx-auto md:w-full md:md:max-w-6xl md:relative md:h-auto md:min-h-screen">
        <div class="text-center md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full">
          <h1 class="font-bold text-4xl vh-center aspect-video bg-cover bg-center bg-bg_blue
            md:p-4 md:aspect-auto md:bg-none">
            LIVE HISTORY
          </h1>
          <div
            ref={scrollref}
            class="mt-8 flex overflow-x-auto md:overflow-x-hidden md:mt-0"
          >
            {lives.toReversed().map((live) => (
              <div class="flex-none">
                <FromLive live={live} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(-512)}
            class="hidden md:block md:absolute top-1/2 left-2 drop-shadow-md bg-white text-xl font-extrabold w-12 h-12 rounded-full opacity-90 hover:opacity-95"
          >
            ←
          </button>
          <button
            onClick={() => scroll(512)}
            class="hidden md:block md:absolute top-1/2 right-2 drop-shadow-md bg-white text-xl font-extrabold w-12 h-12 rounded-full opacity-90 hover:opacity-95"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Live;
