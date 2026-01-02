import { useState } from "react";
import "./App.css";

function App() {
  const [previewImg, setPreviewImg] = useState(null);

  const open = (src) => {
    setPreviewImg(src);
  };

  const close = () => {
    setPreviewImg(null);
  };

  return (
    <div className="container">
      <h1 className="title">MENU</h1>

      <div className="menu-grid">
        {/* SEASON */}
        <section className="category season">
          <h2>Season</h2>

          <div className="item" onClick={() => open("assets/images/coffee1.jpg")}>
            <span className="name">김천 호두 크림라떼</span>
            <span className="price">5.5</span>
          </div>

          <div className="item" onClick={() => open("assets/images/coffee2.jpg")}>
            <span className="name">김천 호두 밀크</span>
            <span className="price">5.0</span>
          </div>

          <div className="item" onClick={() => open("assets/images/coffee3.jpg")}>
            <span className="name">김천 말차크림 호두라떼</span>
            <span className="price">6.0</span>
          </div>

          <div className="item" onClick={() => open("assets/images/coffee4.jpg")}>
            <span className="name">김천 호두크림 홍시라떼</span>
            <span className="price">6.0</span>
          </div>
        </section>

        <section className="category nothing"></section>

        {/* BREWING */}
        <section className="category brewing">
          <h2>Brewing</h2>
          <div className="item" onClick={() => open("assets/images/dessert1.jpg")}>
            과테말라 안티구아 핀카메디나 SHB 워시드
          </div>
          <div className="item" onClick={() => open("assets/images/dessert2.jpg")}>
            카투라 + 구루메 블랜드
          </div>
          <div className="item" onClick={() => open("assets/images/dessert3.jpg")}>
            콜롬비아 엑셀소 디카페인
          </div>
        </section>

        {/* ESPRESSO */}
        <section className="category espresso">
          <h2>Espresso</h2>
          {[
            "아메리카노",
            "레몬 아메리카노",
            "애플 아메리카노",
            "아인슈페너",
            "카페라떼",
            "바닐라라떼",
            "연유라떼",
            "버터스카치 크림라떼",
            "흑임자 인절미 크림라떼",
            "말차 크림 라떼",
          ].map((name, i) => (
            <div key={i} className="item" onClick={() => open("assets/images/drink1.jpg")}>
              {name}
            </div>
          ))}
        </section>

        {/* TEA */}
        <section className="category tea">
          <h2>Tea</h2>
          {[
            "히비스커스 레몬티",
            "달콤 복숭아 블랙티",
            "수제 허니 자몽 블랙티",
            "루이보스 오렌지 허브티",
            "팬지 플라워 티",
            "캐모마일 허브티",
            "스리랑카 블랙티",
            "스리랑카 로얄 밀크티",
          ].map((name, i) => (
            <div key={i} className="item" onClick={() => open("assets/images/tea1.jpg")}>
              {name}
            </div>
          ))}
        </section>

        {/* KIDS */}
        <section className="category kids">
          <h2>Kids Beverage</h2>
          {[
            "꾸덕 초코라떼",
            "장미 에이드",
            "레몬 에이드",
            "팬지 플라워 라떼",
            "팬지 플라워 아이스티",
            "루이보스 복숭아 아이스티",
          ].map((name, i) => (
            <div key={i} className="item" onClick={() => open("assets/images/dessert1.jpg")}>
              {name}
            </div>
          ))}
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
