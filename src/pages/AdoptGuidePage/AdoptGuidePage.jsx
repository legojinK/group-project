import React from "react";
import "./AdoptGuidePage.style.css";
import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "./components/ContentCard/ContentCard";

const guideContents = [
  {
    id: 1,
    content:
      "적합한 사료의 급여와 급수, 적당한 운동, 휴식 및 수면이 보장되도록 하겠습니다.",
  },
  {
    id: 2,
    content:
      "질병에 걸리거나 부상을 입은 경우 신속한 치료 등 필요한 조치를 하겠습니다.",
  },
  {
    id: 3,
    content: "합리적 이유 없이 고통을 주거나 상해를 입히지 않겠습니다.",
  },
  {
    id: 4,
    content:
      "입양한 동물을 상업적(식용, 번식, 판매 등)으로 이용하지 않겠습니다.",
  },
  {
    id: 5,
    content:
      "입양한 동물로 인해 발생하는 모든 사고에 대해 민형사상 책임을 지겠습니다.",
  },
  { id: 6, content: "입양한 동물을 유기하거나 파양하지 않겠습니다." },
  { id: 7, content: "2개월 이상인 개는 내장형 방식으로 등록하겠습니다." },
  { id: 8, content: "입양 후 지자체(동물보호센터) 사후관리에 협조하겠습니다." },
  { id: 9, content: "입양한 동물의 복지를 위해 중성화 수술을 실시하겠습니다." },
];

const AdoptGuidePage = () => {
  return (
    <div className="guide-area">
      <div className="guide-img-box">
        <img src="https://www.animal.go.kr/front/images/contents/headline_img1.png" />
      </div>
      <div className="guide-content-box">
        <Container>
          <h1 className="page-title">입양자 준수사항</h1>
          <Row>
            {guideContents.map((item, idx) => {
              return (
                <Col xs={12} md={4} key={idx}>
                  <ContentCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AdoptGuidePage;
