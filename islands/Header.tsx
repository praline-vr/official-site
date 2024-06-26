import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

interface Props {
  onClick: () => void;
  open: boolean;
  bgClass: string;
}

const HamburgerButton: FunctionComponent<Props> = ({
  onClick,
  open,
  bgClass,
}) => {
  const cls = "block w-8 h-0.5 bg-gray-100 transition ";
  return (
    <div onClick={onClick} class={`p-4 space-y-2 rounded-2xl ${bgClass}`}>
      <span class={cls + (open && "rotate-45 translate-y-[10px]")}></span>
      <span class={cls + (open && "opacity-0")}></span>
      <span class={cls + (open && "-rotate-45 -translate-y-[10px]")}></span>
    </div>
  );
};

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

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <div class="mx-auto fixed w-full z-10">
        <header class="mx-auto max-w-6xl">
          <div
            class={`${isOpen && "bg-menu-gradient shadow"} md:bg-none md:flex`}
          >
            <div class="text-center py-2 md:ml-8 md:mr-auto">
              <a href="#top">
                <img class="inline drop-shadow-md" src="/logo-small.png" />
              </a>
            </div>
            <div class="absolute right-8 top-8 md:hidden">
              <HamburgerButton
                onClick={toggle}
                open={isOpen}
                bgClass={isOpen ? "" : "bg-menu-gradient shadow"}
              />
            </div>
            <div
              class={`${
                !isOpen && "hidden"
              } transition my-auto text-center md:flex md:bg-menu-gradient md:rounded-full md:px-6 md:border-1 md:border-white md:mx-8`}
            >
              {nav.map((nav) => (
                <li
                  class="mx-auto list-none font-extrabold text-white pb-6 md:px-5 md:py-3"
                  style={{ textShadow: "3px 3px 2px #FF57E4" }}
                >
                  <a href={nav.to} onClick={() => setOpen(false)}>
                    {nav.text}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
