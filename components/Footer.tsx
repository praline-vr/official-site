const Footer = () => {
  return (
    <footer
      class="bg-gray-900 bg(bg_praline_sd no-repeat)"
      style={{
        backgroundPosition: "bottom 18% right 18%",
        backgroundSize: "430px",
      }}
    >
      <div class="mx-auto max-w-6xl text-center">
        <div class="text-left">
          <a href="#top">
            <div class="inline-block mt-10 ml-10 bg-gray-100 rounded-full">
              <p class=" text-gray-500 text-2xl w-16 h-16 vh-center">
                &#x25B2;
              </p>
            </div>
          </a>
        </div>
        <div class="">
          <h1 class="py-4 text-3xl text-white">CONTACT</h1>
          <p class="text-white">
            PRA-LiNÉに関するお問い合わせは
            <br />
            TwitterのDMまでお願い申し上げます。
          </p>
          <div class="mx-auto my-6">
            <a href="https://twitter.com/praline_vr">
              <img src="/icon-twitter-300x300.png" class="inline w-16" />
            </a>
          </div>
          <p class="text(sm white) pb-8 pt-[22rem] md:pt-[8rem]">
            &copy; PRA-LiNÉ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
