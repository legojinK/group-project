import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const landings = [
  {
    img: "https://www.animal.go.kr/front/fileMng/imageView.do;jsessionid=2alKSGHJr1KuSfTxGk1l92BsXKjLoaagpBaU1tAkReLF38Z3zqD6Is1eyDfzdAme.aniwas_servlet_front?f=/2024/6/20262",
    text: "꽃길만 걷개",
    subText: "은퇴 및 훈련 탈락 검역탐지견 민간 입양",
  },
  {
    img: "https://www.animal.go.kr/front/fileMng/imageView.do;jsessionid=2alKSGHJr1KuSfTxGk1l92BsXKjLoaagpBaU1tAkReLF38Z3zqD6Is1eyDfzdAme.aniwas_servlet_front?f=/2024/6/20261",
    text: "동물사랑 배움터",
    subText:
      "반려견 양육을 위한 기초교육부터 내 주변 반려동물 생활정보까지 한번에!",
  },
  {
    img: "https://www.animal.go.kr/front/fileMng/imageView.do;jsessionid=2alKSGHJr1KuSfTxGk1l92BsXKjLoaagpBaU1tAkReLF38Z3zqD6Is1eyDfzdAme.aniwas_servlet_front?f=/2024/6/20263",
    text: "길고양이 돌봄 가이드라인",
    subText: "길고양이들을 안전하게 보호하는 방법",
  },
  {
    img: "https://www.animal.go.kr/front/fileMng/imageView.do;jsessionid=2alKSGHJr1KuSfTxGk1l92BsXKjLoaagpBaU1tAkReLF38Z3zqD6Is1eyDfzdAme.aniwas_servlet_front?f=/2024/6/20260",
    text: "함께 지켜요, 펫티켓",
    subText: "반려견과 외출 시 지켜야 할 펫티켓",
  },
];

const landingSettings = {
  dots: false,
  infinite: true, //무한 순환
  speed: 1000,
  slidesToShow: 1, // 한번에 1개 보여줌
  slidesToScroll: 1, // 한번에 1개 넘어감
  autoplay: true, // 자동 슬라이드
  autoplaySpeed: 3000, // 자동 속도
  cssEase: "linear", // 일정 속도
};

const Banner = () => {
  return (
    <div className="landing-slider">
      <Slider {...landingSettings}>
        {landings.map((land, index) => (
          <div key={index} className="slide">
            <img src={land.img} alt="banner-img" />

            <div className="slide-text">
              <h2>{land.text}</h2>
              <span>{land.subText}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
