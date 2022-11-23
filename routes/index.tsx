import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";
import Top from "../components/Top.tsx";
import Profile from "../components/Profile.tsx";
import Live from "../components/Live.tsx";
import Discography from "../components/Discography.tsx";
import Goods from "../components/Goods.tsx";
import Footer from "../components/Footer.tsx";

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
