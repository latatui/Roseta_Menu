import { useState, useEffect } from "react";
import { MENU_INFO } from "./data/menuDescriptions.js";

import "./App.css";

import coffee1 from "./assets/images/coffee1.png";
import coffee2 from "./assets/images/coffee2.png";
import coffee3 from "./assets/images/coffee3.png";
// import coffee4 from "./assets/images/coffee4.png";
// import coffee5 from "./assets/images/coffee5.png";
// import coffee6 from "./assets/images/coffee6.png";
// import coffee7 from "./assets/images/coffee7.png";
// import coffee8 from "./assets/images/coffee8.png";
// import coffee9 from "./assets/images/coffee9.png";
// import coffee10 from "./assets/images/coffee10.png";

// import brewing1 from "./assets/images/brewing1.png";
// import brewing2 from "./assets/images/brewing2.png";
// import brewing3 from "./assets/images/brewing3.png";

// import season1 from "./assets/images/season1.png";
// import season2 from "./assets/images/season2.png";
// import season3 from "./assets/images/season3.png";
// import season4 from "./assets/images/season4.png";
import season5 from "./assets/images/season5.png";
// import season6 from "./assets/images/season6.png";
// import season7 from "./assets/images/season7.png";

// import tea1 from "./assets/images/tea1.png";
// import tea2 from "./assets/images/tea2.png";
// import tea3 from "./assets/images/tea3.png";
// import tea4 from "./assets/images/tea4.png";
// import tea5 from "./assets/images/tea5.png";
// import tea6 from "./assets/images/tea6.png";
// import tea7 from "./assets/images/tea7.png";
// import tea8 from "./assets/images/tea8.png";

// import kids1 from "./assets/images/kids1.png";
// import kids2 from "./assets/images/kids2.png";
// import kids3 from "./assets/images/kids3.png";
// import kids4 from "./assets/images/kids4.png";
// import kids5 from "./assets/images/kids5.png";
// import kids6 from "./assets/images/kids6.png";

// import option1 from "./assets/images/option1.png";
// import option2 from "./assets/images/option2.png";
// import option3 from "./assets/images/option3.png";



function App() {
  const [preview, setpreview] = useState(null);

  const open = (key, img) => {
    setpreview({
      img,
      name: MENU_INFO[key]?.name ?? "",
      desc: MENU_INFO[key]?.desc ?? "",
    });
  };

  const close = () => {
    setpreview(null);
  };

  useEffect(() => {
    if (!preview) return;

    const timer = setTimeout(() => {
      close();
    }, 5000); // 5초

    return () => clearTimeout(timer);
  }, [preview]);

  return (
    <div className="container">
      <h1 className="title">MENU</h1>

      <div className="menu-grid">

        {/* ESPRESSO */}
        <section className="category espresso">
          <h2>Espresso</h2>

          <div className="item" onClick={() => open("coffee1", coffee1)}>
            <span className="name">아메리카노</span>
            <span className="price">3.5</span>
          </div>

          <div className="item" onClick={() => open("coffee2", coffee2)}>
            <span className="name">레몬 아메리카노</span>
            <span className="price">3.8</span>
          </div>

          <div className="item" onClick={() => open("coffee3", coffee3)}>
            <span className="name">애플 아메리카노</span>
            <span className="price">3.8</span>
          </div>

          <div className="item" onClick={() => open("coffee4", coffee4)}>
            <span className="name">아인슈페너</span>
            <span className="price">3.8</span>
          </div>

          <div className="item" onClick={() => open("coffee5", coffee5)}>
            <span className="name">카페라떼</span>
            <span className="price">4.0</span>
          </div>

          <div className="item" onClick={() => open("coffee6", coffee6)}>
            <span className="name">바닐라라떼</span>
            <span className="price">4.5</span>
          </div>

          <div className="item" onClick={() => open("coffee7", coffee7)}>
            <span className="name">연유라떼</span>
            <span className="price">4.5</span>
          </div>

          <div className="item" onClick={() => open("coffee8", coffee8)}>
            <span className="name">버터스카치 크림라떼</span>
            <span className="price">5.5</span>
          </div>

          <div className="item" onClick={() => open("coffee9", coffee9)}>
            <span className="name">흑임자 인절미 크림라떼</span>
            <span className="price">5.5</span>
          </div>

          <div className="item" onClick={() => open("coffee10", coffee10)}>
            <span className="name">말차 카페라떼</span>
            <span className="price">4.7</span>
          </div>
        </section>

        {/* BREWING */}
        <section className="category brewing">
          <h2>Brewing</h2>
          <div className="item" onClick={() => open("brewing1", brewing1)}>
            <span className="name">과테말라 안티구아 핀카메디나 SHB 워시드</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open("brewing2", brewing2)}>
            <span className="name">카투라 + 구루메 블랜드</span>
            <span className="price">5.7</span>
          </div>
          <div className="item" onClick={() => open("brewing3", brewing3)}>
            <span className="name">콜롬비아 엑셀소 디카페인</span>
            <span className="price">5.5</span>
          </div>
        </section>

        {/* SEASON */}
        <section className="category season">
          <h2>Season1</h2>
          <div className="item" onClick={() => open("season1", season1)}>
            <span className="name">김천 호두 크림 카페라떼</span>
            <span className="price">5.5</span>
          </div>
          <div className="item" onClick={() => open("season2", season2)}>
            <span className="name">김천 호두 밀크</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("season3", season3)}>
            <span className="name">김천 말차크림 호두라떼</span>
            <span className="price">6.0</span>
          </div>
          <div className="item" onClick={() => open("season4", season4)}>
            <span className="name">김천 호두 홍시라떼</span>
            <span className="price">6.6</span>
          </div>
        </section>

        {/* SEASON */}
        <section className="category season">
          <h2>Season2</h2>

          <div className="item" onClick={() => open("season5", season5)}>
            <span className="name">김천 자두 캔디샷</span>
            <span className="price">5.5</span>
          </div>

          <div className="item" onClick={() => open("season6", season6)}>
            <span className="name">김천 자두 그린티</span>
            <span className="price">5.0</span>
          </div>

          <div className="item" onClick={() => open("season7", season7)}>
            <span className="name">김천 자두 로얄 밀크티</span>
            <span className="price">6.0</span>
          </div>
        </section>


        <section className="category nothing"></section>

        {/* TEA */}
        <section className="category tea">
          <h2>Tea</h2>
          <div className="item" onClick={() => open("tea1", tea1)}>
            <span className="name">히비스커스 레몬티<span className="badge-caffeine">카페인 X</span></span><span className="ice-only"> [ICE ONLY]</span>
            <span className="price">5.5</span>
          </div>
          <div className="item" onClick={() => open("tea2", tea2)}>
            <span className="name">달콤 복숭아 블랙티</span><span className="ice-only"> [ICE ONLY]</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("tea3", tea3)}>
            <span className="name">수제 허니 자몽 블랙티</span><span className="ice-only"> [ICE ONLY]</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open("tea4", tea4)}>
            <span className="name">루이보스 오렌지 허브티<span className="badge-caffeine">카페인 X</span></span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("tea5", tea5)}>
            <span className="name">팬지 플라워 티</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open("tea6", tea6)}>
            <span className="name">캐모마일 허브티</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("tea7", tea7)}>
            <span className="name">스리랑카 블랙티</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("tea8", tea8)}>
            <span className="name">스리랑카 로얄 밀크티</span>
            <span className="price">5.5</span>
          </div>
        </section>

        {/* KIDS */}
        <section className="category kids">
          <h2>Kids Beverage</h2>

          <div className="item" onClick={() => open("kids1", kids1)}>
            <span className="name">꾸덕 초코라떼</span>
            <span className="price">5.5</span>
          </div>

          <div className="item" onClick={() => open("kids2", kids2)}>
            <span className="name">장미 에이드</span>
            <span className="price">4.5</span>
          </div>

          <div className="item" onClick={() => open("kids3", kids3)}>
            <span className="name">레몬 에이드</span>
            <span className="price">4.5</span>
          </div>

          <div className="item" onClick={() => open("kids4", kids4)}>
            <span className="name">팬지 플라워 라떼</span>
            <span className="price">5.0</span>
          </div>

          <div className="item" onClick={() => open("kids5", kids5)}>
            <span className="name">팬지 플라워 아이스티</span>
            <span className="price">5.0</span>
          </div>

          <div className="item" onClick={() => open("kids6", kids6)}>
            <span className="name">루이보스 복숭아 아이스티</span>
            <span className="price">5.0</span>
          </div>
        </section>


        {/* OPTION */}
        <section className="category option">
          <h2>Option</h2>
          <div className="item" onClick={() => open(option1)}>
            <span className="name">디카페인 변경</span>
            <span className="price">0.6</span>
          </div>
          <div className="item" onClick={() => open(option2)}>
            <span className="name">오트변경</span>
            <span className="price">0.7</span>
          </div>
          <div className="item" onClick={() => open(option3)}>
            <span className="name">샷추가</span>
            <span className="price">0.5</span>
          </div>
        </section>
      </div>

      {/* IMAGE PREVIEW */}
      {preview && (
        <div className="overlay" onClick={close}>
          <div className="preview-box" onClick={(e) => e.stopPropagation()}>
            <img
              src={preview.img}
              className="preview-image"
              alt={preview.name}
            />

            <div className="preview-text">
              <div className="preview-name">{preview.name}</div>
              <div className="preview-desc">{preview.desc}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
