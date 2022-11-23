const Footer = () => {
  return (
    <footer
      class="bg-gray-900 bg(bg_senzai no-repeat)"
      style={{
        backgroundPosition: "bottom 0 right 20%",
        backgroundSize: "20%",
      }}
    >
      <div class="mx-auto max-w-6xl relative text-center pt-32 pb-16">
        <a href="#top">
          <div class="absolute top-[15%] left-[15%] bg-gray-100 rounded-full">
            <p class="text-gray-500 mx-auto text-2xl w-16 h-16 vh-center">
              &#x25B2;
            </p>
          </div>
        </a>
        <div class="z-10">
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

export default Footer;
