import { FunctionComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

type Item = {
  img: string;
  href: string;
  date: string;
  title: string;
  description: string;
};

const items: Item[] = [
  {
    img: "/jacket-watasugar.png",
    href: "https://pra-line.booth.pm/items/3890560",
    title: "1st single 『わたしだけのSugar』",
    date: "2022.6.18 Release",
    description: `
VRアイドルスリーピースバンドPRA-LiNÉからの待望の初音源！！
あまあま～💖でしゅがしゅが～🌟な歌詞とキュートでポップな
おしゃれサウンドをご賞味あれ～～～！！！！`,
  },
  {
    img: "/jacket-ddt.png",
    href: "https://pra-line.booth.pm/items/4943759",
    title: "2nd single 『Dance Dance Together』",
    date: "2023.8.26 Release",
    description: `
  “主役は Me? -NO! NO! NO!-”  
VRアイドルスリーピースバンドPRA-LiNÉ待望のNew Single!!!!
じつはいちばん最初につくった曲なんだよ～！！
ロックでポップでキュートなわたしたちの原点、たくさん聴いてね！`,
  },
];

const Texts: FunctionComponent<{ index: number }> = ({ index }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scrollRef || !scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scroll({ left: width * index, behavior: "smooth" });
  }, [index]);
  return (
    <div ref={scrollRef} class="overflow-x-hidden flex">
      {items.toReversed().map((item) => (
        <div class="flex-none w-full">
          <p class="my-4 md:my-10 font-bold text-xl">
            {item.date}
          </p>
          <p class="my-4 md:my-10 font-bold text-xl">
            {item.title}
          </p>
          <p class="px-8 my-4 md:my-10 md:font-bold">
            {item.description.split("\n").map((line) => (
              <p class="inline md:block">
                {line}
              </p>
            ))}
          </p>
          <div class="text-center md:text-right md:px-8">
            <a href={item.href} class="hover:opacity-80 transition-opacity">
              <img src="/icon-booth-300x300.png" class="inline w-16" />
            </a>
            <h3 class="font-extrabold text-lg pb-6 pt-1 md:hidden">
              BOOTH
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

const Jackets: FunctionComponent<{ index: number }> = ({ index }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scrollRef || !scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scroll({ left: width * index, behavior: "smooth" });
  }, [index]);
  return (
    <div ref={scrollRef} class="overflow-x-hidden flex">
      {items.toReversed().map((item) => (
        <div class="flex-none w-full">
          <a href={item.href} class="hover:opacity-80 transition-opacity">
            <img src={item.img} />
          </a>
        </div>
      ))}
    </div>
  );
};

const Discography = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const next = ((index + 1) < items.length) ? index + 1 : 0;
      setIndex(next);
    }, 7000);
    return () => clearTimeout(timeoutId);
  }, [index]);
  return (
    <div
      id="discography"
      class="md:bg-cover md:bg-center md:bg-[url('/bg-pink.png')]"
    >
      <div class="md:mx-auto md:w-full md:max-w-6xl md:relative md:h-screen">
        <div class="text-center md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full">
          <h1 class="font-bold text-4xl vh-center aspect-video bg-cover bg-center bg-[url('/bg-pink.png')] md:hidden">
            DISCORGRAPHY
          </h1>
          <div class="md:flex md:flex-row-reverse">
            <div class="w-2/3 pt-5 mx-auto md:px-12 md:w-1/2 md:pt-0">
              <Jackets index={index} />
            </div>
            <div class="md:w-1/2">
              <h1 class="hidden font-bold text-4xl md:block md:p-8 md:aspect-auto md:h-auto">
                DISCORGRAPHY
              </h1>
              <Texts index={index} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discography;
