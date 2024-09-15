import React from "react";
import "./AnimalDetailPage.style.css";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";

const detailInfoList = [
  { title: "공고번호", infoKey: "noticeNo" },
  { title: "유기번호", infoKey: "desertionNo" },
  { title: "품종", infoKey: "kindCd" },
  { title: "색상", infoKey: "colorCd" },
  { title: "성별", infoKey: "sexCd" },
  { title: "중성화", infoKey: "neuterYn" },
  { title: "나이", infoKey: "age" },
  { title: "체중", infoKey: "weight" },
  { title: "특징", infoKey: "specialMark" },
  { title: "발견장소", infoKey: "happenPlace" },
  { title: "접수일시", infoKey: "happenDt" },
  { title: "관할기관", infoKey: "orgNm" },
  { title: "상태", infoKey: "processState" },
  { title: "보호센터", infoKey: "careNm" },
  { title: "연락처", infoKey: "careTel" },
  { title: "보호장소", infoKey: "careAddr" },
];

// 날짜 '20240913' -> '2024년 09월 13일'
const formatDate = (dateString) => {
  if (!dateString || dateString.length !== 8) return "날짜 정보 없음";

  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);

  return `${year}년 ${month}월 ${day}일`;
};

const AnimalDetailPage = () => {
  const location = useLocation();
  const animal = location.state?.animal; // 상태객체에서 animal 가져오기

  return (
    <div className="animal-detail">
      <h6 className="page-nav">
        구조동물 &nbsp; &gt; &nbsp; 보호 중인 동물 &nbsp; &gt; &nbsp;{" "}
        <strong>동물 상세 정보</strong>
      </h6>
      <div className="animal-detail-content-box">
        <Container>
          {/* 동물 사진 */}
          <div className="animal-info">
            <img
              src={animal?.popfile}
              alt="animal-photo"
              className="animal-photo"
            />
            {/* 동물 정보들 */}
            <Form>
              <Row>
                {detailInfoList.map((info, idx) => {
                  const getContent = () => {
                    if (info.infoKey === "sexCd") {
                      return animal[info.infoKey] === "M"
                        ? "수컷"
                        : animal[info.infoKey] === "F"
                        ? "암컷"
                        : "미확인";
                    } else if (info.infoKey === "neuterYn") {
                      return animal[info.infoKey] === "Y"
                        ? "예"
                        : animal[info.infoKey] === "N"
                        ? "아니오"
                        : "미확인";
                    } else if (info.infoKey === "happenDt") {
                      return formatDate(animal[info.infoKey]);
                    } else {
                      return animal[info.infoKey];
                    }
                  };
                  return (
                    <Col md={6} key={idx}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>{info.title}</Form.Label>
                        <Form.Control readOnly placeholder={getContent()} />
                      </Form.Group>
                    </Col>
                  );
                })}
              </Row>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AnimalDetailPage;
