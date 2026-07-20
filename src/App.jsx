import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MENU_INFO } from "./data/menuDescriptions.js";

import "./App.css";

import bestIcon from "./assets/images/best.png";

import brewing1 from "./assets/video/brewing1.mp4";
import brewing2 from "./assets/video/brewing2.mp4";
import brewing3 from "./assets/video/brewing3.mp4";
import brewing4 from "./assets/video/brewing4.mp4";

import Signiture1 from "./assets/video/Signiture1.mp4";
import Signiture2 from "./assets/images/Signiture2.jpg";
import Signiture3 from "./assets/images/Signiture3.jpg";
// import Signiture4 from "./assets/images/logo.png";
// import Signiture5 from "./assets/images/logo.png";
// import Signiture6 from "./assets/images/logo.png";
// import Signiture7 from "./assets/images/logo.png";

// import kids1 from "./assets/images/logo.png";
import kids2 from "./assets/images/beverage2.png";
// import kids3 from "./assets/images/logo.png";
// import kids4 from "./assets/images/logo.png";
// import kids5 from "./assets/images/logo.png";
import kids6 from "./assets/images/beverage6.jpg";
// import kids7 from "./assets/images/logo.png";
// import kids8 from "./assets/images/logo.png";
import kids9 from "./assets/images/beverage9.jpg";

// import Milktea1 from "./assets/images/logo.png";
// import Milktea2 from "./assets/images/logo.png";
// import Milktea3 from "./assets/images/logo.png";
// import Milktea4 from "./assets/images/logo.png";

import coffee1 from "./assets/images/coffee1.jpg";
import coffee2 from "./assets/images/coffee2.jpg";
import coffee3 from "./assets/images/coffee3.jpg";
// import coffee4 from "./assets/images/logo.png";
// import coffee5 from "./assets/images/logo.png";
import coffee6 from "./assets/images/coffee6.jpg";
import coffee7 from "./assets/images/coffee7.jpg";
// import coffee8 from "./assets/images/logo.png";
import coffee9 from "./assets/images/coffee9.jpg";
// import coffee10 from "./assets/images/logo.png";
import coffee11 from "./assets/images/coffee11.jpg";

// import tea1 from "./assets/images/logo.png";
// import tea2 from "./assets/images/logo.png";
// import tea3 from "./assets/images/logo.png";
// import tea4 from "./assets/images/logo.png";
// import tea5 from "./assets/images/logo.png";

// import Herbtea1 from "./assets/images/logo.png";
import Herbtea2 from "./assets/video/Herbtea2.mp4";
import Herbtea3 from "./assets/video/Herbtea3.mp4";
import Herbtea4 from "./assets/video/Herbtea4.mp4";
import Herbtea5 from "./assets/video/Herbtea5.mp4";
import Herbtea6 from "./assets/video/Herbtea6.mp4";


import Gelato1 from "./assets/images/Gelato1.jpg";
import Gelato2 from "./assets/images/Gelato2.jpg";
// import Gelato3 from "./assets/images/logo.png";

// import option1 from "./assets/images/logo.png";
// import option2 from "./assets/images/logo.png";
// import option3 from "./assets/images/logo.png";



function App() {
  const [preview, setPreview] = useState(null);

  const open = (key, src, type = "image") => {
  if (preview) return; // 🔥 이미 떠있으면 아무것도 안함
    setPreview({
      src,
      type,
      name: MENU_INFO[key]?.name ?? "",
      desc: MENU_INFO[key]?.desc ?? "",
    });
  };

  const close = () => {
    setPreview(null);
  };

  // 5초 후 자동 닫힘
  useEffect(() => {
    if (!preview) return;

    const timer = setTimeout(() => {
      close();
    }, 5000);

    return () => clearTimeout(timer);
  }, [preview]);

  return (
    <>

      <div className={`container ${preview ? "blur" : ""}`}>
        {/* ESPRESSO */}
        <table className="menu-table">
          <tbody>
            <tr className="upper-tr">

              {/* Hand Drip */}
              <td width={"30%"}>
                <section className="category brewing">
                  <h2>Hand Drip</h2>
                  <div className="item" onClick={() => open("brewing1", brewing1, "video")}>
                    <span className="name">콜롬비아 로스 파티오스 피치 코퍼먼티드<br /><span className="handDrip-exp">복숭아티 · 황도 · 트로피컬 · 실키 · <span className="important">강한산미</span></span></span>
                    <span className="price">6.9</span>
                  </div>
                  <div className="item" onClick={() => open("brewing1", brewing1, "video")}>
                    <span className="name">에티오피아 구지 모모라 G1 내추럴<br /><span className="handDrip-exp">블딸기 · 감귤 · 살구 · 체리 · 꿀 · 플로럴 · <span className="important">중간산미</span></span></span>
                    <span className="price">5.9</span>
                  </div>
                  <div className="item" onClick={() => open("brewing1", brewing1, "video")}>
                    <span className="name">케냐 니에리 PB TOP 워시드<br /><span className="handDrip-exp">레몬 · 시트러스 · 블랙티 · 꿀 · <span className="important">중간산미</span></span></span>
                    <span className="price">5.9</span>
                  </div>
                  {/* <div className="item" onClick={() => open("brewing3", brewing3, "video")}>
                    <span className="name">에티오피아 시다마 벤사 봄베 내추럴<br /><span className="handDrip-exp">살구 · 라즈베리 · 오렌지 · 백설탕 · <span className="important">중간산미</span></span></span>
                    <span className="price">6.9</span>
                  </div> */}
                  {/* <div className="item" onClick={() => open("brewing2", brewing2, "video")}>
                    <span className="name">페루 라 팔마 게이샤 워시드<br /><span className="handDrip-exp">자스민 · 복숭아 · 사과 · 실키 · <span className="important">강한산미</span></span></span>
                    <span className="price">7.9</span>
                  </div> */}
                  {/* <div className="item" onClick={() => open("brewing2", brewing2, "video")}>
                    <span className="name">에티오피아 게뎁 방코 고티티 G1 워시드<br /><span className="handDrip-exp">베르가못 · 감귤 · 플로럴 · 마카다미아 · 꿀 · <span className="important">중간산미</span></span></span>
                    <span className="price">5.9</span>
                  </div> */}
                  <div className="item" onClick={() => open("brewing2", brewing2, "video")}>
                    <span className="name">에티오피아 구지 샤키소 G1 워시드<br /><span className="handDrip-exp">블루베리 · 오렌지 · 감귤 · 너티 · 초콜릿 · <span className="important">중간산미</span></span></span>
                    <span className="price">5.9</span>
                  </div>
                  {/* <div className="item" onClick={() => open("brewing2", brewing2, "video")}>
                    <span className="name">에티오피아 예가체프 겔레나 아바야 G1 내추럴<br /><span className="handDrip-exp">블루베리 · 플로럴 · 아몬드 · 블랙티 · <span className="important">중간산미</span></span></span>
                    <span className="price">5.9</span>
                  </div> */}
                  <div className="item" onClick={() => open("brewing4", brewing4, "video")}>
                    <span className="name">과테말라 안티구아 SHB 위시드<br /><span className="handDrip-exp">호두 · 마카다미아 · 갈색설탕 · 스모키 · <span className="important">낮은산미</span></span></span>
                    <span className="price">5.5</span>
                  </div>
                  {/* <div className="item" onClick={() => open("brewing4", brewing4, "video")}>
                    <span className="name">콜롬비아 슈가케인 디카페인<br /><span className="handDrip-exp">사과 · 탄제린 · 카라멜 · 흑설탕 · <span className="important">중간산미</span></span></span>
                    <span className="price">5.5</span>
                  </div> */}
                </section>
              </td>
              {/* Signiture */}
              <td>
                <section className="category season">
                  <h2>Signiture</h2>
                  <div className="item" onClick={() => open("Signiture1", Signiture1, "video")}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">김천 호두 홍시라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">6.5</span>
                  </div>
                  <div className="item" onClick={() => open("Signiture2", Signiture2)}>
                    <span className="name">김천 호두크림 카페라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.7</span>
                  </div>
                  <div className="item" onClick={() => open("Signiture3", Signiture3)}>
                    <span className="name">김천 말차크림 호두라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">6.0</span>
                  </div>
                  <br />
                  <div className="item" onClick={() => open("Signiture4", Signiture4)}>
                    <span className="name">김천 자두 소다샷<br />(커피가 들어가요!)</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.5</span>
                  </div>
                  <div className="item" onClick={() => open("Signiture5", Signiture5)}>
                    <span className="name">김천 자두 아이스티</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">4.0</span>
                  </div>
                  <div className="item" onClick={() => open("Signiture6", Signiture6)}>
                    <span className="name">김천 자두 그린티</span>
                    <span className="price">5.0</span>
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

                  <div className="item" onClick={() => open("beverage2", beverage2)}>
                    <span className="name">딸기라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.5</span>
                  </div>

                  {/* <div className="item" onClick={() => open("kids2", kids2)}>
                    <span className="name">오레오 딸기라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">6.0</span>
                  </div> */}

                  <div className="item" onClick={() => open("kids4", kids4)}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">망고라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.5</span>
                  </div>

                  {/* <div className="item" onClick={() => open("kids5", kids5)}>
                    <span className="name">블루베리라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.5</span>
                  </div> */}

                  <div className="item" onClick={() => open("kids6", kids6)}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">레몬 에이드</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.0</span>
                  </div>

                  <div className="item" onClick={() => open("kids6", kids6)}>
                    <span className="name">자몽 에이드</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.5</span>
                  </div>

                  {/* <div className="item" onClick={() => open("kids2", kids2)}>
                    <span className="name">팬지 플라워라떼</span>
                    <span className="price">5.0</span>
                  </div>

                  <div className="item" onClick={() => open("kids3", kids3)}>
                    <span className="name">팬지 플라워 에이드</span>
                    <span className="price">5.0</span>
                  </div> */}

                  <div className="item" onClick={() => open("kids8", kids8)}>
                    <span className="name">제주 감귤 착즙주스</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.0</span>
                  </div>

                  <div className="item" onClick={() => open("kids9", kids9)}>
                    <span className="name">수박주스</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">6.5</span>
                  </div>
                </section>
              </td>
              {/* Milk Tea */}
              <td>
                <section className="category season">
                  <h2>Tea & Milk</h2>

                  {/* <div className="item" onClick={() => open("Milktea1", Milktea1)}>
                    <span className="name">스리랑카 로얄 밀크티<br />(입문자용)</span>
                    <span className="price">5.5</span>
                  </div> */}

                  <div className="item" onClick={() => open("Milktea2", Milktea2)}>
                    <span className="name">런던 얼그레이 냉침 밀크티<br />(베르가못 향이 진해요!)</span>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="price">5.0</span>
                  </div>

                  <div className="item" onClick={() => open("Milktea3", Milktea3)}>
                    <span className="name">제주 말차라떼<br />(non-sweet)</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">4.5</span>
                  </div>

                  <div className="item" onClick={() => open("Milktea4", Milktea4)}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">복숭아 제주 말차라떼</span><span className="ice-only">ICE ONLY</span>
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
                    <span className="price">3.5</span>
                  </div>

                  <div className="item" onClick={() => open("coffee2", coffee2)}>
                    <span className="name">레몬 아메리카노(마자그란)</span><span className="ice-only">ICE ONLY</span>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="price">4.2</span>
                  </div>

                  <div className="item" onClick={() => open("coffee3", coffee3)}>
                    <span className="name">애플 아메리카노(100% 사과즙)</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">3.8</span>
                  </div>

                  <div className="item" onClick={() => open("coffee5", coffee5, "video")}>
                    <span className="name">아인슈페너</span>
                    <span className="price">4.0</span>
                  </div>

                  <div className="item" onClick={() => open("coffee6", coffee6)}>
                    <span className="name">카페라떼</span>
                    <span className="price">4.5</span>
                  </div>

                  <div className="item" onClick={() => open("coffee7", coffee7)}>
                    <span className="name">바닐라라떼</span>
                    <span className="price">5.0</span>
                  </div>

                  <div className="item" onClick={() => open("coffee8", coffee8)}>
                    <span className="name">베트남 연유라떼</span>
                    <span className="price">5.0</span>
                  </div>

                  <div className="item" onClick={() => open("coffee7", coffee7)}>
                    <span className="name">크림라떼</span>
                    <span className="price">5.0</span>
                  </div>

                  <div className="item" onClick={() => open("coffee9", coffee9)}>
                    <span className="name">버터스카치 크림라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.5</span>
                  </div>

                  <div className="item" onClick={() => open("coffee10", coffee10)}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">레몬 크림라떼</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">6.0</span>
                  </div>

                  <div className="item" onClick={() => open("coffee11", coffee11)}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">흑임자 인절미 라떼<br />(인절미 떡이 올라가요!)</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">6.5</span>
                  </div>
                </section>
              </td>

              {/* TEA */}
              <td>
                <section className="category season">
                  <h2>Tea</h2>
                  <div className="item" onClick={() => open("tea1", tea1)}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">메론 우롱티<br />(non-sweet)</span>
                    <span className="price">4.5</span>
                  </div>
                  <div className="item" onClick={() => open("tea2", tea2)}>
                    <span className="name">레몬 오렌지 블랙티<br />(non-sweet)</span>
                    <span className="price">4.5</span>
                  </div>

                  <div className="item" onClick={() => open("kids7", kids7)}>
                    <span className="name">복숭아 아이스티</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">3.5</span>
                  </div>
                  {/* <div className="item" onClick={() => open("tea3", tea3)}>
                    <span className="name">레몬 얼그레이 블랙티</span>
                    <span className="price">5.0</span>
                  </div> */}
                  <div className="item" onClick={() => open("tea4", tea4)}>
                    <span className="name">자몽청 허니 블랙티</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.0</span>
                  </div>
                  <div className="item" onClick={() => open("tea4", tea4)}>
                    <span className="name">자몽청 허니 얼그레이</span><span className="ice-only">ICE ONLY</span>
                    <span className="price">5.0</span>
                  </div>
                </section>
              </td>
              <td>
                {/* Herb TEA */}
                <section className="category tea">
                  <h2>Herb Tea</h2>
                  <div className="item" onClick={() => open("Herbtea6", Herbtea6, "video")}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">히비스커스 청귤티</span>
                    <span className="price">5.5</span>
                  </div>
                  <div className="item" onClick={() => open("Herbtea1", Herbtea1)}>
                    <img src={bestIcon} className="best-icon" alt="Best" />
                    <span className="name">국화(감국) 티<br />(non-sweet)</span>
                    <span className="price">4.5</span>
                  </div>
                  <div className="item" onClick={() => open("Herbtea2", Herbtea2, "video")}>
                    <span className="name">오렌지 루이보스 티<br />(non-sweet)</span>
                    <span className="price">4.5</span>
                  </div>
                  <div className="item" onClick={() => open("tea6", Herbtea6)}>
                    <span className="name">머스커바도 레몬티</span>
                    <span className="price">4.5</span>
                  </div>
                  <div className="item" onClick={() => open("Herbtea3", Herbtea3, "video")}>
                    <span className="name">청귤 캐모마일 티</span>
                    <span className="price">5.0</span>
                  </div>
                  <div className="item" onClick={() => open("Herbtea4", Herbtea4, "video")}>
                    <span className="name">리치 캐모마일 티</span>
                    <span className="price">5.0</span>
                  </div>
                  <div className="item" onClick={() => open("Herbtea5", Herbtea5, "video")}>
                    <span className="name">라즈베리 히비스커스 티</span>
                    <span className="price">5.0</span>
                  </div>
                </section>
              </td>

              {/* OPTION */}
              <td>
                <section className="category option">
                  <h2>Gelato</h2>
                  <div className="item" onClick={() => open("Gelato1", Gelato1)}>
                    <span className="name">젤라또<br/>(바닐라/녹차/망고)</span>
                    <span className="price">4.5</span>
                  </div>
                  <div className="item" onClick={() => open("Gelato2", Gelato2)}>
                    <span className="name">젤라또 아포카토</span>
                    <span className="price">5.5</span>
                  </div>
                  <div className="item" onClick={() => open("Gelato3", Gelato3)}>
                    <span className="name">젤라또 퐁당 라떼</span>
                    <span className="price">6.5</span>
                  </div>
                </section>
              </td>

            </tr>
          </tbody>
        </table >
      </div>

      {/* 🔥 overlay를 body에 직접 렌더링 */}
      {preview &&
        createPortal(
          <div
            className="overlay"
            onPointerDown={(e) => {
              e.stopPropagation(); // 🔥 뒤 클릭 막기
              close();             // 🔥 클릭하면 닫기
            }}
          >
            <div />
            <div
              className="preview-box"
              onPointerDown={(e) => e.stopPropagation()}
            >
              {preview.type === "image" ? (
                <img
                  src={preview.src}
                  className="preview-media"
                  alt={preview.name}
                  draggable="false"
                />
              ) : (
                <video
                  src={preview.src}
                  preload="auto"
                  className="preview-media"
                  autoPlay
                  muted
                  playsInline
                />
              )}

              <div className="preview-text">
                <div className="preview-name">{preview.name}</div>
                <div className="preview-desc">{preview.desc}</div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default App;
