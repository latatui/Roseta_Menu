import { useState, useEffect } from "react";

import "./App.css";

import drink1 from "./assets/images/coffee1.jpg";
import coffee1 from "./assets/images/coffee1.jpg";
import coffee2 from "./assets/images/coffee2.jpg";
import coffee3 from "./assets/images/coffee3.jpg";
import coffee4 from "./assets/images/coffee4.jpg";
import dessert1 from "./assets/images/dessert1.jpg";
import season5 from "./assets/images/season5.png";


function App() {
  const [previewImg, setPreviewImg] = useState(null);

  const open = (src) => {
    setPreviewImg(src);
  };

  const close = () => {
    setPreviewImg(null);
  };
  
  useEffect(() => {
  if (!previewImg) return;

  const timer = setTimeout(() => {
    close();
  }, 5000); // 5초

  return () => clearTimeout(timer);
}, [previewImg]);

  return (
    <div className="container">
      <h1 className="title">MENU</h1>

      <div className="menu-grid">

        {/* ESPRESSO */}
        <section className="category espresso">
          <h2>Espresso</h2>
          <div className="item" onClick={() => open(coffee1)}>
            <span className="name">아메리카노</span>
            <span className="price">3.5</span>
          </div>
          <div className="item" onClick={() => open(coffee2)}>
            <span className="name">레몬 아메리카노</span>
            <span className="price">3.8</span>
          </div>
          <div className="item" onClick={() => open(coffee3)}>
            <span className="name">애플 아메리카노</span>
            <span className="price">3.8</span>
          </div>
          <div className="item" onClick={() => open(coffee4)}>
            <span className="name">아인슈페너</span>
            <span className="price">3.8</span>
          </div>
          <br></br>
          <div className="item" onClick={() => open(coffee5)}>
            <span className="name">카페라떼</span>
            <span className="price">4.0</span>
          </div>
          <div className="item" onClick={() => open(coffee6)}>
            <span className="name">바닐라라떼</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open(coffee7)}>
            <span className="name">연유라떼</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open(coffee8)}>
            <span className="name">버터스카치 크림라떼</span>
            <span className="price">5.5</span>
          </div>
          <div className="item" onClick={() => open(coffee9)}>
            <span className="name">흑임자 인절미 크림라떼</span>
            <span className="price">5.5</span>
          </div>
          <div className="item" onClick={() => open(coffee10)}>
            <span className="name">말차 카페라떼</span>
            <span className="price">4.7</span>
          </div>
        </section>

        {/* BREWING */}
        <section className="category brewing">
          <h2>Brewing</h2>
          <div className="item" onClick={() => open(brewing1)}>
            <span className="name">과테말라 안티구아 핀카메디나 SHB 워시드</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open(brewing2)}>
            <span className="name">카투라 + 구루메 블랜드</span>
            <span className="price">5.7</span>
          </div>
          <div className="item" onClick={() => open(brewing3)}>
            <span className="name">콜롬비아 엑셀소 디카페인</span>
            <span className="price">5.5</span>
          </div>
        </section>

        {/* SEASON */}
        <section className="category season">
          <h2>Season1</h2>
          <div className="item" onClick={() => open(season1)}>
            <span className="name">김천 호두 크림 카페라떼</span>
            <span className="price">5.5</span>
          </div>
          <div className="item" onClick={() => open(season2)}>
            <span className="name">김천 호두 밀크</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open(season3)}>
            <span className="name">김천 말차크림 호두라떼</span>
            <span className="price">6.0</span>
          </div>
          <div className="item" onClick={() => open(season4)}>
            <span className="name">김천 호두 홍시라떼</span>
            <span className="price">6.6</span>
          </div>
        </section>

        {/* SEASON */}
        <section className="category season">
          <h2>Season2</h2>
          <div className="item" onClick={() => open(season5)}>
            <span className="name">김천 자두 캔디샷</span>
            <span className="price">5.5</span>
          </div>
          <div className="item" onClick={() => open(season6)}>
            <span className="name">김천 자두 그린티</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open(season7)}>
            <span className="name">김천 자두 로얄 밀크티</span>
            <span className="price">6.0</span>
          </div>
        </section>

        <section className="category nothing"></section>

        {/* TEA */}
        <section className="category tea">
          <h2>Tea</h2>
          <div className="item" onClick={() => open("assets/images/tea1.jpg")}>
            <span className="name">히비스커스 레몬티<span className="badge-caffeine">카페인 X</span></span><span className="ice-only"> [ICE ONLY]</span>
            <span className="price">5.5</span>
          </div>
          <div className="item" onClick={() => open("assets/images/tea2.jpg")}>
            <span className="name">달콤 복숭아 블랙티</span><span className="ice-only"> [ICE ONLY]</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("assets/images/tea3.jpg")}>
            <span className="name">수제 허니 자몽 블랙티</span><span className="ice-only"> [ICE ONLY]</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open("assets/images/tea4.jpg")}>
            <span className="name">루이보스 오렌지 허브티<span className="badge-caffeine">카페인 X</span></span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("assets/images/tea5.jpg")}>
            <span className="name">팬지 플라워 티</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open("assets/images/tea6.jpg")}>
            <span className="name">캐모마일 허브티</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("assets/images/tea7.jpg")}>
            <span className="name">스리랑카 블랙티</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("assets/images/tea8.jpg")}>
            <span className="name">스리랑카 로얄 밀크티</span>
            <span className="price">5.5</span>
          </div>
        </section>

        {/* KIDS */}
        <section className="category kids">
          <h2>Kids Beverage</h2>
          <div className="item" onClick={() => open("assets/images/kids1.jpg")}>
            <span className="name">꾸덕 초코라떼</span>
            <span className="price">5.5</span>
          </div>
          <div className="item" onClick={() => open("assets/images/kids2.jpg")}>
            <span className="name">장미 에이드</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("assets/images/kids3.jpg")}>
            <span className="name">레몬 에이드</span>
            <span className="price">4.5</span>
          </div>
          <div className="item" onClick={() => open("assets/images/kids4.jpg")}>
            <span className="name">팬지 플라워 라떼</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open("assets/images/kids5.jpg")}>
            <span className="name">팬지 플라워 아이스티</span>
            <span className="price">5.0</span>
          </div>
          <div className="item" onClick={() => open("assets/images/kids6.jpg")}>
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
      {previewImg && (
        <div className="overlay" onClick={close}>
          <img src={previewImg} className="preview-image" alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
