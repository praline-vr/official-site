import { useState, useEffect } from "preact/hooks";
import { FunctionComponent } from "preact";

const Loading: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const [animPlaying, setAnimPlaying] = useState(true);

  const hideLoading = () => {
    setLoading(false);
    const divLoading = document.querySelector("#loading");
    if (divLoading instanceof HTMLDivElement) {
      divLoading.addEventListener("animationend", () => {
        setAnimPlaying(false);
      });
    }
  };

  useEffect(() => {
    const loaded = document.readyState === "complete";
    if (loaded) hideLoading();
    else window.onload = hideLoading;
  }, []);

  const loadingClasses = [
    "w-screen h-screen bg-white fixed z-50",
    loading || "fadeout-later",
    animPlaying || "hidden",
  ];

  return (
    <div id="loading" class={loadingClasses.join(" ")}>
      <div class={`h-full w-full vh-center ${loading || "fadeout-earlier"}`}>
        <img src="/logo-small.png" class="animate-bounce" />
      </div>
    </div>
  );
};

export default Loading;
