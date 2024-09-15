import React from "react";
import "./Banner.style.css";

import { Row, Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// 배너에 들어갈 이미지와 텍스트
const landings = [
  {
    img: "https://www.animal.go.kr/front/fileMng/imageView.do;jsessionid=2alKSGHJr1KuSfTxGk1l92BsXKjLoaagpBaU1tAkReLF38Z3zqD6Is1eyDfzdAme.aniwas_servlet_front?f=/2024/6/20262",
  },
  {
    img: "https://www.animal.go.kr/front/fileMng/imageView.do;jsessionid=2alKSGHJr1KuSfTxGk1l92BsXKjLoaagpBaU1tAkReLF38Z3zqD6Is1eyDfzdAme.aniwas_servlet_front?f=/2024/6/20261",
  },
  {
    img: "https://www.animal.go.kr/front/fileMng/imageView.do;jsessionid=2alKSGHJr1KuSfTxGk1l92BsXKjLoaagpBaU1tAkReLF38Z3zqD6Is1eyDfzdAme.aniwas_servlet_front?f=/2024/6/20263",
  },
  {
    img: "https://www.animal.go.kr/front/fileMng/imageView.do;jsessionid=2alKSGHJr1KuSfTxGk1l92BsXKjLoaagpBaU1tAkReLF38Z3zqD6Is1eyDfzdAme.aniwas_servlet_front?f=/2024/6/20260",
  },
];

const Banner = () => {
  return (
    <div className="banner-box">
      <Row>
        <Carousel pause="false">
          {/* 위 데이터(landings)를 토대로 Carousel에 이미지와 텍스트 넣기 */}
          {landings.map((item, index) => (
            <Carousel.Item key={index} className="carousel-item">
              {/* 이미지 */}
              <div
                className="banner"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </div>
  );
};

export default Banner;
