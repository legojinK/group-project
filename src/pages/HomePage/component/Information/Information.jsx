import React from "react";
import "./Information.style.css";
import URLCard from "../../../../common/URLCard/URLCard";
import { Container, Row, Col } from "react-bootstrap";

const Information = () => {
  return (
    <Container className="information-home">
      <Row>
        <Col xs={12} lg={6}>
          <div className="info-urlcard">
            <URLCard
              title={"동물사랑배움터"}
              content={
                "동물 관련 영업자, 명예감시원, 맹견소유자는 연 1회 법정의무교육을 이수해야 합니다."
              }
              urlPath={"https://apms.epis.or.kr/home/kor/main.do"}
            />
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className="info-call">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10439/10439798.png"
              alt="info-img"
            />
            <div className="info-info">
              <div className="info-text">동물보호 상담센터</div>
              <div className="info-tel">1577-0954</div>
              <div className="info-text">
                시스템 문의: 054-810-8626 <br />
                상담시간: 평일 09:00 ~ 18:00
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Information;
