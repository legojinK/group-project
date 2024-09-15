import React, { useState } from "react";
import "./SheltersPage.style.css";
import ShelterCard from "../../common/ShelterCard/ShelterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useShelterQuery } from "@/hooks/useShelter";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const ShelterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useShelterQuery({ currentPage });

  const items = data?.items?.item || [];
  const totalItems = data?.totalCount || 0;
  const itemsPerPage = 20;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  console.log("Current Page:", currentPage);
  console.log("Fetched Data:", data);

  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // if (items.length === 0) return <div className="shelter-error">데이터 없음.</div>;

  return (
    <div>
      <div>
        <h6 className="page-nav">
          동물보호소 &nbsp; &gt; &nbsp; <strong>동물보호소 조회</strong>
        </h6>
        <div className="shelter-img-box">
          <img
            className="img"
            src="https://www.animal.go.kr/front/images/contents/headline_img7.png"
          />
        </div>
      </div>
      <Container>
        <h1 className="content-title">동물보호소</h1>
        <div className="shelter-textbox">
          <h2 className="shelter-des">
            전국의 동물보호소 정보를 확인해 보세요
          </h2>
        </div>

        <div className="shelter-list">
          {/* <div className="shelter-textbox">
            <div className="shelter-paw">
              <FontAwesomeIcon className="paw-icon" icon={faPaw} />
              <h1 className="shelter-title">동물보호소</h1>
              <FontAwesomeIcon className="paw-icon" icon={faPaw} />
            </div>
            <h2 className="shelter-des">
              전국의 동물보호소 정보를 확인해 보세요
            </h2>
          </div> */}
          <div className="animal-card-count">
            총{" "}
            <span className="count-number">
              {totalItems === 0 ? 0 : totalItems.toLocaleString()}
            </span>
            건
          </div>
          <div className="shelter-grid">
            <div className="shelter-cards">
              {items.map((info) => {
                if (!info || !info.careNm) {
                  console.error("Invalid item:", info);
                  return null;
                }
                console.log("Rendering card for:", info.careNm);
                return <ShelterCard key={info.careNm} extraInfo={info} />;
              })}
            </div>
          </div>

          <div className="pagination">
            <button
              className="next-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ◀
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`pagination-button ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            ))}
            <button
              className="next-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ▶
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShelterList;
