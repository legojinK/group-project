import React from "react";
import "./URLCard.style.css";

// 제목, 내용, URL을 받아서 보여주는 카드형 컴포넌트
const URLCard = ({ title = "", content = "", urlPath = "" }) => {
  // props.urlPath로 받은 URL로 이동하는 함수
  const goToURL = () => {
    window.open(urlPath, "_blank");
  };

  return (
    <div>
      <div className="animal-edu-url">
        <div className="edu-url-title">{title}</div>
        <div className="edu-url-content">{content}</div>
        <button onClick={goToURL}>
          <span>바로가기</span>
          <div className="button-arrow"></div>
        </button>
      </div>
    </div>
  );
};

export default URLCard;
