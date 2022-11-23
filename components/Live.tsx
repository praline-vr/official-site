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
    <div id="live" class="md:bg(cover center bg_blue)">
      <div class="md:(mx-auto w-full md:max-w-6xl relative h-screen)">
        <div class="text-center md:(absolute top-1/2 -translate-y-1/2 w-full)">
          <h1
            class="font-bold text-4xl vh-center aspect-video bg(cover center bg_blue)
            md:(p-8 aspect-auto bg-none)"
          >
            LIVE HISTORY
          </h1>
          <ul class="px-4 py-10 m-auto md:w-1/3">
            {lives.map((live) => (
              <li class="py-2 md:list-circle ">
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

export default Live;
