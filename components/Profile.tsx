const Profile = () => {
  const profiles = [
    {
      name: "夜桜りん",
      pic: "/pic-lin.png",
      detail: [
        "ギター・ボーカル担当。バンドリーダー。",
        "だいたいの楽曲の作詞をしている。",
        "じつはギターを弾くのがあんまり得意じゃないらしく、",
        "隙あらばサボろうとしているらしい。がぶがぶがぶりあす。",
      ].join(""),
      twitter: "https://twitter.com/lin_ll_vr",
    },
    {
      name: "もものき もも",
      pic: "/pic-momonoki.png",
      detail: [
        "ドラム・ボーカル担当。バンドキャプテン。",
        "いつも元気な性格やノリノリのビートだけでなく、",
        "ロゴ・ポスターの作成や、バンドグッズの制作など、",
        "ビジュアル・デザイン面でもみんなを引っ張っている。",
        "もちょもちょ。",
      ].join(""),
      twitter: "https://twitter.com/MoMoChannel9",
    },
    {
      name: "なかにゃん",
      pic: "/pic-nacanyan.png",
      detail: [
        "ベース・ボーカル担当。バンドマスター。",
        "だいたいの楽曲の作曲をしている。いつも眠そうにしているが、",
        "楽器を持つと目が覚めるらしい。",
        "たまにキーボードやギターも担当する。なかんにゃ。",
      ].join(""),
      twitter: "https://twitter.com/naca_nyan",
    },
  ];

  return (
    <div id="profile" class="md:bg(cover center bg_orange)">
      <div class="md:(mx-auto w-full md:max-w-6xl relative h-screen)">
        <div class="text-center md:(absolute top-1/2 -translate-y-1/2 w-full)">
          <h1
            class="font-bold text-4xl vh-center aspect-video bg(cover center bg_orange)
            md:(p-8 aspect-auto h-auto bg-none)"
          >
            PROFILE
          </h1>
          <div class="md:(flex text-left)">
            {profiles.map((profile) => (
              <div class="mx-8 my-12 md:(mx-12 w-full)">
                <div class="flex mb-4 md:(block mb-0)">
                  <img
                    src={profile.pic}
                    class="w-1/2 rounded-[50px] ml-8 md:(w-full m-0 mb-16)"
                  />
                  <h2 class="w-1/2 font-bold vh-center text-2xl md:(w-full text-base block)">
                    {profile.name}
                    <span class="hidden md:inline">.</span>
                  </h2>
                </div>
                <div class="flex md:block">
                  <p class="w-3/4 md:w-full">{profile.detail}</p>
                  <div class="w-1/4 vh-center md:(mt-8)">
                    <a href={profile.twitter}>
                      <img
                        src="/icon-twitter-300x300.png"
                        class="w-12 md:w-8"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
