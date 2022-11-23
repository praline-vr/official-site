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
  const dropShadow = { filter: "drop-shadow(0 3px 3px #5555)" };
  return (
    <>
      <div class="mx-auto fixed w-full z-10">
        <header class="mx-auto max-w-6xl">
          <div
            class={`${isOpen && "bg-menu-gradient shadow"} md:(bg-none flex)`}
          >
            <div class="text-center py-2 md:(ml-8 mr-auto)">
              <a href="#top">
                <img class="inline" src="/logo-small.png" style={dropShadow} />
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
              } transition my-auto text-center md:(flex bg-menu-gradient rounded-full px-6 border(1 white) mx-8)`}
            >
              {nav.map((nav) => (
                <li
                  class="mx-auto list-none font-extrabold text-white pb-6 md:(px-5 py-3)"
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
