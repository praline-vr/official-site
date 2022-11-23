import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";
import Top from "../components/Top.tsx";
import Profile from "../components/Profile.tsx";
import Live from "../components/Live.tsx";
import Discography from "../components/Discography.tsx";
import Goods from "../components/Goods.tsx";
import Footer from "../components/Footer.tsx";

const canonicalUrl = "https://praline.ml";
const title = "PRA-LiNÉ Official";
const description =
  "VRアイドルスリーピースバンド PRA-LiNÉ(ぷらりね) の公式サイトだよ！";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={canonicalUrl + "/thumbnail.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@praline_vr" />
        <meta name="twitter:creator" content="@praline_vr" />
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
