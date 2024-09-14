import React from "react";
import "./NotFound.style.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-page">
      <div className="not-found-img">
      </div>
      <div className="not-found-content">
        <h1>페이지를 찾을 수 없습니다.</h1>
        <p>URL을 다시 한 번 확인해 주세요.</p>
        <button className="home-button" onClick={goHome}>홈으로 돌아가기</button>
      </div>
    </div>
  );
};

export default NotFound;
