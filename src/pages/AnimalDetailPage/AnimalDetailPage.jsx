import React from "react";
import "./AnimalDetailPage.style.css";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

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
      <div className="animals-page-title">
        <span>보호 중인 동물</span>
      </div>

      <Container>
        {/* 동물 사진 */}
        <div className="animal-info">
          <img
            src={animal?.popfile}
            alt="animal-photo"
            className="animal-photo"
          />

          {/* 동물 정보들 */}

          <table border="1">
            <tbody>
              <tr>
                <th>공고번호</th>
                <td>{animal?.noticeNo}</td>
              </tr>
              <tr>
                <th>유기번호</th>
                <td>{animal?.desertionNo}</td>
              </tr>
              <tr>
                <th>품종</th>
                <td>{animal?.kindCd}</td>
              </tr>
              <tr>
                <th>색상</th>
                <td>{animal?.colorCd}</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>
                  {animal?.sexCd === "M"
                    ? "수컷"
                    : animal?.sexCd === "F"
                    ? "암컷"
                    : "미확인"}
                </td>
              </tr>
              <tr>
                <th>중성화</th>
                <td>
                  {animal?.neuterYn === "Y"
                    ? "예"
                    : animal?.neuterYn === "N"
                    ? "아니오"
                    : "미확인"}
                </td>
              </tr>
              <tr>
                <th>나이/체중</th>
                <td>
                  {animal?.age} / {animal?.weight}
                </td>
              </tr>
              <tr>
                <th>특징</th>
                <td>{animal?.specialMark}</td>
              </tr>
              <tr>
                <th>발견장소</th>
                <td>{animal?.happenPlace}</td>
              </tr>
              <tr>
                <th>접수일시</th>
                <td>{formatDate(animal?.happenDt)}</td>
              </tr>
              <tr>
                <th>관할기관</th>
                <td>{animal?.orgNm}</td>
              </tr>
              <tr>
                <th>상태</th>
                <td>{animal?.processState}</td>
              </tr>
              <tr>
                <th>보호센터</th>
                <td>{animal?.careNm}</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>{animal?.careTel}</td>
              </tr>
              <tr>
                <th>보호장소</th>
                <td>{animal?.careAddr}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default AnimalDetailPage;
