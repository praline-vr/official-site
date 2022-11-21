import { Head } from "$fresh/runtime.ts";

const container = `mx-auto max-w-6xl`;
const containerContent = `${container} relative h-screen`;
// const bg = "bg(cover center) max-w-[1528px] mx-auto";
const bg = `bg(cover center)`;

const Header = () => {
  const nav = [
    {
      text: "TOP",
      to: "#top",
    },
    {
      text: "PROFILE",
      to: "#profile",
    },
    {
      text: "LIVE",
      to: "#live",
    },
    {
      text: "DISCOGRAPHY",
      to: "#discography",
    },
    {
      text: "GOODS",
      to: "#goods",
    },
  ];
  return (
    <div class="mx-auto fixed top-1 w-full z-10">
      <header class={container}>
        <div class="flex">
          <div class="mx-8 mr-auto">
            <a href="#top">
              <img class="w-24" src="/logo.png" />
            </a>
          </div>
          <div class="my-4 flex bg(purple-700 opacity-30) rounded-full px-6 border(1 white)">
            {nav.map((nav) => (
              <li
                class="list-none px-5 pt-5 font-extrabold text-white"
                style={{ textShadow: "3px 3px 2px #FF57E4" }}
              >
                <a href={nav.to}>{nav.text}</a>
              </li>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

const Top = () => {
  return (
    <div id="top" style={{ backgroundImage: "url('/bg-top.png')" }} class={bg}>
      <div class={containerContent}>
        <img src="/senzai.png" class="absolute top-1/2 -translate-y-1/2" />
        <img
          src="/praline-text.png"
          class="absolute top-1/2 -translate-y-1/2 right-[40px]"
        />
        <div class="absolute bottom-[20%] left-[30px] bg(purple-700 opacity-30) rounded-full px-1 py-8 border(1 white)">
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

const Profile = () => {
  const profiles = [
    {
      name: "夜桜りん",
      pic: "/pic-lin.png",
      detail: "りん".repeat(40),
      twitter: "https://twitter.com/lin_ll_vr",
    },
    {
      name: "もものきもも",
      pic: "/pic-momonoki.png",
      detail: "もちょ".repeat(26),
      twitter: "https://twitter.com/MoMoChannel9",
    },
    {
      name: "なかにゃん",
      pic: "/pic-nacanyan.png",
      detail: "んな".repeat(40),
      twitter: "https://twitter.com/naca_nyan",
    },
  ];

  return (
    <div
      id="profile"
      style={{ backgroundImage: "url('/bg-orange.png')" }}
      class={bg}
    >
      <div class={containerContent}>
        <div class="absolute top-1/2 -translate-y-1/2 text-center w-full">
          <h1 class="p-8 font-bold text-4xl">PROFILE</h1>
          <div class="flex text-left">
            {profiles.map((profile) => (
              <div class="mx-12 w-full">
                <img src={profile.pic} class="mb-16 rounded-[50px]" />
                <h2 class="font-bold">{profile.name}.</h2>
                <p class="font-bold">{profile.detail}</p>
                <div class="mt-8">
                  <a href={profile.twitter}>
                    <img src="/icon-twitter-300x300.png" class="w-8" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Live = () => {
  const lives = [
    {
      name: "2021.05.05 コラボライブ「ぷらりね×えぃる ゴーゴー未来のバーチャルスター！」",
      href: "https://youtu.be/7qnjT9j29ew",
    },
    {
      name: "2021.05.05 コラボライブ「ぷらりね×えぃる ゴーゴー未来のバーチャルスター！」",
      href: "https://youtu.be/7qnjT9j29ew",
    },
    {
      name: "2021.05.05 コラボライブ「ぷらりね×えぃる ゴーゴー未来のバーチャルスター！」",
      href: "https://youtu.be/7qnjT9j29ew",
    },
    {
      name: "2021.05.05 コラボライブ「ぷらりね×えぃる ゴーゴー未来のバーチャルスター！」",
      href: "https://youtu.be/7qnjT9j29ew",
    },
    {
      name: "2021.05.05 コラボライブ「ぷらりね×えぃる ゴーゴー未来のバーチャルスター！」",
      href: "https://youtu.be/7qnjT9j29ew",
    },
  ];
  return (
    <div
      id="live"
      style={{ backgroundImage: "url('/bg-blue.png')" }}
      class={bg}
    >
      <div class={containerContent}>
        <div class="absolute top-1/2 -translate-y-1/2 text-center w-full">
          <h1 class="p-8 font-bold text-4xl">LIVE HISTORY</h1>
          <ul class="w-1/3 m-auto">
            {lives.map((live) => (
              <li class="list-circle py-2">
                <a href={live.href} class="underline text-blue-400">
                  {live.name}
                  <img src="/icon-youtube-300x300.png" class="w-4 inline" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Discography = () => {
  return (
    <div
      id="discography"
      style={{ backgroundImage: "url('/bg-pink.png')" }}
      class={bg}
    >
      <div class={containerContent}>
        <div class="absolute top-1/2 -translate-y-1/2 text-center w-full">
          <div class="flex">
            <div class="my-auto">
              <h1 class="p-8 font-bold text-4xl">DISCORGRAPHY</h1>
              <p class="my-10 font-bold text-xl">2022.6.18 Release</p>
              <p class="my-10 font-bold text-xl">
                1st single 『わたしだけのSugar』
              </p>
              <p class="my-10 font-bold">
                VRアイドルスリーピースバンドPRA-LiNĒからの待望の初音源！！
                あまあま～💖でしゅがしゅが～🌟な歌詞とキュートでポップなおしゃれサウンドをご賞味あれ～～～！！！！
              </p>
              <div class="text-right">
                <a href="https://pra-line.booth.pm/items/3890560">
                  <img src="/icon-booth-300x300.png" class="inline w-16" />
                </a>
              </div>
            </div>
            <div class="px-12 m-auto w-full">
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

const Goods = () => {
  return (
    <div
      id="goods"
      style={{ backgroundImage: "url('/bg-purple.png')" }}
      class={bg}
    >
      <div class={containerContent}>
        <div class="absolute top-1/2 -translate-y-1/2 text-center w-full">
          <h1 class="p-8 font-bold text-4xl">GOODS</h1>
          <div class="flex px-16">
            <div class="my-auto text-left w-full">
              <p class="my-10 font-bold">
                オンラインショップ SUZURI にて PRA-LiNĒ の<br />
                グッズが買えるよ！！！！！
                <br />
                カップやクージー、スマホケースなんかもあるよ！
                <br />
                ステッカーと缶バッジもお手ごろ価格で販売中！
              </p>
              <div class="text-right">
                <a href="https://suzuri.jp/PRA-LiNE">
                  <img src="/icon-suzuri-300x300.png" class="inline w-16" />
                </a>
              </div>
            </div>
            <div class="mx-12 m-auto w-full">
              <a href="https://suzuri.jp/PRA-LiNE">
                <img src="/item-mug.jpg" class="w-3/4 mx-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      class="bg-gray-900"
      style={{
        backgroundImage: "url('/senzai.png')",
        backgroundPosition: "bottom 0 right 20%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "20%",
      }}
    >
      <div class={`${container} relative text-center pt-32 pb-16`}>
        <a href="#top">
          <div class="absolute left-[20%] bg-gray-100 rounded-full">
            <p class="text-gray-500 mx-auto text-2xl px-4 py-3">&#x25B2;</p>
          </div>
        </a>
        <div>
          <h1 class="p-8 text-3xl text-white">CONTACT</h1>
          <p class="text-white">
            PRA-LiNÉに関するお問い合わせは
            <br />
            TwitterのDMまでお願い申し上げます。
          </p>
          <a href="https://twitter.com/praline_vr">
            <img src="/icon-twitter-300x300.png" class="mx-auto my-12 w-16" />
          </a>
          <small class="text(sm white)">&copy; PRA-LiNÉ</small>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>PRA-LiNÉ Official</title>
      </Head>
      <Header />
      <Top />
      <Profile />
      <Live />
      <Discography />
      <Goods />
      <Footer />
    </>
  );
}
