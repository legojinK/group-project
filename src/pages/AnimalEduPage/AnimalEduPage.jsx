import React from "react";
import "./AnimalEduPage.style.css";
import URLCard from "../../common/URLCard/URLCard";
import { Col, Container, Row } from "react-bootstrap";
import { PiStudentLight } from "react-icons/pi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AnimalEduPage = () => {
  return (
    <div className="animal-edu-page">
      <h6 className="page-nav">
        입양정보 &nbsp; &gt; &nbsp; <strong>반려동물 입양교육</strong>
      </h6>
      <div className="edu-img-box">
        <img
          className="img"
          src="https://www.animal.go.kr/front/images/contents/headline_img2.png"
        />
      </div>
      <div className="animal-edu-page-content">
        <Container>
          <h1 className="content-title">동물사랑배움터</h1>
          <div className="edu-content-box">
            <div className="apms-info">
              <div className="apms-info-icon">
                <PiStudentLight
                  style={{ fontSize: "100px", color: "#80cbc4" }}
                />
              </div>
              <div className="apms-info-text">
                <FaQuoteLeft className="apms-info-text-quote" />
                <h6>
                  동물 관련 영업자, 명예감시원, 맹견소유자는 연 1회
                  법정의무교육을 이수해야 합니다.
                </h6>
                <FaQuoteRight className="apms-info-text-quote" />
              </div>
              <div className="apms-button-box">
                <button
                  className="apms-button"
                  onClick={() =>
                    window.open(
                      "https://apms.epis.or.kr/home/kor/main.do",
                      "_blank"
                    )
                  }
                >
                  동물사랑배움터 바로가기
                </button>
              </div>
            </div>
            <Row>
              <Col md>
                <URLCard
                  title={"반려견 입양 전 교육"}
                  content={
                    "동물과 인간의 행복한 동거를 위해 입양 전 교육을 이수하여 주십시오."
                  }
                  urlPath={
                    "https://apms.epis.or.kr/home/kor/learn/online/view.do?menuPos=5&idx=90"
                  }
                />
              </Col>
              <Col md>
                <URLCard
                  title={"반려묘 입양 전 교육"}
                  content={
                    "동물과 인간의 행복한 동거를 위해 입양 전 교육을 이수하여 주십시오."
                  }
                  urlPath={
                    "https://apms.epis.or.kr/home/kor/learn/online/view.do?menuPos=5&idx=91"
                  }
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AnimalEduPage;
