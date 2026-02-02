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
      {/* ESPRESSO */}
      <table className="menu-table">
        <tbody>
          <tr className="upper-tr">

            {/* Hand Drip */}
            <td>
              <section className="category brewing">
                <h2>Hand Drip</h2>
                <div className="item" onClick={() => open("brewing1", brewing1)}>
                  <span className="name">콜롬비아 엘 파라이소 리치 패치 더블 무산소 발효<br /><span className="handDrip-exp">사파이어포토 · 리치 · 복숭아 · 다크초콜릿 · 바닐라 · <span className="important">강한산미</span></span></span>
                  <span className="price">6.9</span>
                </div>
                <div className="item" onClick={() => open("brewing2", brewing2)}>
                  <span className="name">에티오피아 구지 우라가 야비루 코바 G1 내추럴<br /><span className="handDrip-exp">파인애플 · 패션프룻 · 자두 · 포도 · 쥬시 · <span className="important">중간산미</span></span></span>
                  <span className="price">5.9</span>
                </div>
                <div className="item" onClick={() => open("brewing3", brewing3)}>
                  <span className="name">과테말라 안티구아 SHB 위시드<br /><span className="handDrip-exp">호두 · 마카다미아 · 갈색설탕 · 스모키 · <span className="important">낮은산미</span></span></span>
                  <span className="price">5.9</span>
                </div>
                <div className="item" onClick={() => open("brewing3", brewing3)}>
                  <span className="name">콜롬비아 슈가케인 디카페일<br /><span className="handDrip-exp">사라 · 탄제린 · 카라멜 · 흑설탕 · <span className="important">중간산미</span></span></span>
                  <span className="price">5.9</span>
                </div>
              </section>
            </td>
            <td>
              {/* Herb TEA */}
              <section className="category tea">
                <h2>Herb Tea</h2>
                <div className="item" onClick={() => open("tea1", tea1)}>
                  <span className="name">캐모미일티<br />(non-sweet)</span>
                  <span className="price">4.5</span>
                </div>
                <div className="item" onClick={() => open("tea2", tea2)}>
                  <span className="name">오렌지 루이보스 티<br />(non-sweet)</span>
                  <span className="price">4.5</span>
                </div>
                <div className="item" onClick={() => open("tea3", tea3)}>
                  <span className="name">레몬 히비스커스 티</span>
                  <span className="price">5.0</span>
                </div>
                <div className="item" onClick={() => open("tea4", tea4)}>
                  <span className="name">리치 캐모마일 티</span>
                  <span className="price">5.0</span>
                </div>
                <div className="item" onClick={() => open("tea5", tea5)}>
                  <span className="name">딸기 루이보스 티</span>
                  <span className="price">5.0</span>
                </div>
                <div className="item" onClick={() => open("tea6", tea6)}>
                  <span className="name">팬지 플라워 티</span>
                  <span className="price">5.0</span>
                </div>
              </section>
            </td>

            {/* Black TEA */}
            <td>
              <section className="category season">
                <h2>Black Tea</h2>

                <div className="item" onClick={() => open("tea1", tea1)}>
                  <span className="name">레몬 오렌지 블랙티<br />(non-sweet)</span>
                  <span className="price">4.5</span>
                </div>
                <div className="item" onClick={() => open("tea2", tea2)}>
                  <span className="name">레몬 얼그레이 블랙티</span>
                  <span className="price">5.0</span>
                </div>
                <div className="item" onClick={() => open("tea3", tea3)}>
                  <span className="name">자몽청 허니 블랙티</span>
                  <span className="price">5.0</span>
                </div>
                <div className="item" onClick={() => open("tea4", tea4)}>
                  <span className="name">복숭아청 블랙티</span>
                  <span className="price">5.0</span>
                </div>
              </section>
            </td>
            {/* Milk Tea */}
            <td>
              <section className="category season">
                <h2>Milk Tea</h2>

                <div className="item" onClick={() => open("season5", season5)}>
                  <span className="name">김천 자두 캔디샷스리랑카 로얄 밀크티<br />(입문자용)</span>
                  <span className="price">5.5</span>
                </div>

                <div className="item" onClick={() => open("season6", season6)}>
                  <span className="name">런던 얼그레이 냉침 밀크티<br />(베르가못 향이 진해요!)</span>
                  <span className="price">5.0</span>
                </div>
              </section>
            </td>


          </tr>


          {/* <section className="category nothing"></section> */}

          <tr>
            {/* ESPRESSO */}
            <td className="items-cell">
              <section className="category espresso">
                <h2>Espresso</h2>

                <div className="item" onClick={() => open("coffee1", coffee1)}>
                  <span className="name">아메리카노</span>
                  <span className="price">3.0</span>
                </div>

                <div className="item" onClick={() => open("coffee2", coffee2)}>
                  <span className="name">레몬 아메리카노(마자그란)</span>
                  <span className="price">3.8</span>
                </div>

                <div className="item" onClick={() => open("coffee3", coffee3)}>
                  <span className="name">애플 아메리카노(100% 사과즙)</span>
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
                  <span className="name">베트남 연유라떼</span>
                  <span className="price">4.5</span>
                </div>

                <div className="item" onClick={() => open("coffee8", coffee8)}>
                  <span className="name">버터스카치 크림라떼</span>
                  <span className="price">5.5</span>
                </div>

                <div className="item" onClick={() => open("coffee8", coffee8)}>
                  <span className="name">레몬 크림라떼</span>
                  <span className="price">5.5</span>
                </div>

                <div className="item" onClick={() => open("coffee9", coffee9)}>
                  <span className="name">흑임자 인절미 라떼<br />(인절미 떡이 올라가요!)</span>
                  <span className="price">5.5</span>
                </div>

                <div className="item" onClick={() => open("coffee10", coffee10)}>
                  <span className="name">제주 말차 카페라떼</span>
                  <span className="price">4.7</span>
                </div>
              </section>
            </td>

            {/* SEASON */}
            <td>
              <section className="category season">
                <h2>Signiture</h2>
                <div className="item" onClick={() => open("season1", season1)}>
                  <span className="name">김천 호두크림 카페라떼</span>
                  <span className="price">5.5</span>
                </div>
                <div className="item" onClick={() => open("season2", season2)}>
                  <span className="name">김천 호두라떼</span>
                  <span className="price">4.7</span>
                </div>
                <div className="item" onClick={() => open("season3", season3)}>
                  <span className="name">김천 말차크림 호두라떼</span>
                  <span className="price">6.0</span>
                </div>
                <div className="item" onClick={() => open("season4", season4)}>
                  <span className="name">김천 호두 홍시라떼</span>
                  <span className="price">6.5</span>
                </div>
              </section>
            </td>

            {/* Beverage */}
            <td>
              <section className="category kids">
                <h2>Beverage</h2>

                <div className="item" onClick={() => open("kids1", kids1)}>
                  <span className="name">꾸덕 초코라떼</span>
                  <span className="price">5.5</span>
                </div>

                <div className="item" onClick={() => open("kids2", kids2)}>
                  <span className="name">팬지 플라워라떼</span>
                  <span className="price">5.0</span>
                </div>

                <div className="item" onClick={() => open("kids3", kids3)}>
                  <span className="name">팬지 플라워 에이드</span>
                  <span className="price">5.0</span>
                </div>

                <div className="item" onClick={() => open("kids4", kids4)}>
                  <span className="name">레몬 에이드</span>
                  <span className="price">4.5</span>
                </div>

                <div className="item" onClick={() => open("kids5", kids5)}>
                  <span className="name">샤인버스켓 에이드</span>
                  <span className="price">5.0</span>
                </div>

                <div className="item" onClick={() => open("kids6", kids6)}>
                  <span className="name">레드 / 화이트 뱅쇼</span>
                  <span className="price">5.5</span>
                </div>

                <div className="item" onClick={() => open("kids6", kids6)}>
                  <span className="name">레드 / 화이트 샹그리아</span>
                  <span className="price">5.7</span>
                </div>

                <div className="item" onClick={() => open("kids6", kids6)}>
                  <span className="name">립톤 복숭아 아이스티</span>
                  <span className="price">3.0</span>
                </div>
              </section>
            </td>
            {/* OPTION */}
            <td>
              <section className="category option">
                <h2>Option</h2>
                <div className="item" onClick={() => open(option1)}>
                  <span className="name">디카페인 변경</span>
                  <span className="price">0.5</span>
                </div>
                <div className="item" onClick={() => open(option2)}>
                  <span className="name">오트 밀크 변경</span>
                  <span className="price">0.7</span>
                </div>
                <div className="item" onClick={() => open(option3)}>
                  <span className="name">샷추가</span>
                  <span className="price">0.6</span>
                </div>
              </section>
            </td>

          </tr>
        </tbody>
      </table >

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
