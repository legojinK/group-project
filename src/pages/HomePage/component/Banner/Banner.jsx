import React from "react";
import "./Banner.style.css";

import { Row, Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// 배너에 들어갈 이미지와 텍스트
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

const Banner = () => {
  return (
    <Container>
      <Row>
        <Carousel controls={false}>
          {/* 위 데이터(landings)를 토대로 Carousel에 이미지와 텍스트 넣기 */}
          {landings.map((item, index) => (
            <Carousel.Item key={index} className="carousel-item">
              {/* 이미지 */}
              <div
                className="banner"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                {/* 텍스트 */}
                <div className="banner-text">
                  <h2>{item.text}</h2>
                  <span>{item.subText}</span>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default Banner;
