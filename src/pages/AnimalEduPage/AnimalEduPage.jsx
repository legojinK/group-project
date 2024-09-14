import React from "react";
import "./AnimalEduPage.style.css";
import URLCard from "../../common/URLCard/URLCard";

const AnimalEduPage = () => {
  return (
    <div className="animal-edu-page">
      <div className="animal-edu-page-title">
        <span>동물사랑배움터</span>
      </div>
      <div className="animal-edu-page-content">
        <URLCard
          title={"동물사랑배움터"}
          content={
            "동물 관련 영업자, 명예감시원, 맹견소유자는 연 1회 법정의무교육을 이수해야 합니다."
          }
          urlPath={"https://apms.epis.or.kr/home/kor/main.do"}
        />
        <URLCard
          title={"반려견 입양 전 교육"}
          content={
            "동물과 인간의 행복한 동거를 위해 입양 전 교육을 이수하여 주십시오."
          }
          urlPath={"https://apms.epis.or.kr/home/kor/learn/online/view.do?menuPos=5&idx=90"}
        />
        <URLCard
          title={"반려묘 입양 전 교육"}
          content={
            "동물과 인간의 행복한 동거를 위해 입양 전 교육을 이수하여 주십시오."
          }
          urlPath={"https://apms.epis.or.kr/home/kor/learn/online/view.do?menuPos=5&idx=91"}
        />
      </div>
    </div>
  );
};

export default AnimalEduPage;
