import React, { useState } from "react";
import "./SheltersPage.style.css";
import ShelterCard from "../../common/ShelterCard/ShelterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useShelterQuery } from "@/hooks/useShelter";

const ShelterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useShelterQuery(currentPage);


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

  console.log("dafs",data)

  if (isLoading) {
    return <div>Loading extra information...</div>;
  }

  if (isError) {
    return <div>Error loading extra information.</div>;
  }


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

  if (items.length === 0) return <p>No extra information found.</p>;

  return (
    <div className="shelter-list">
      <div className="shelter-textbox">
        <div className="shelter-paw">
          <FontAwesomeIcon className="paw-icon" icon={faPaw} />
          <h1 className="shelter-title">동물보호소</h1>
          <FontAwesomeIcon className="paw-icon" icon={faPaw} />
        </div>
        <h2 className="shelter-des">전국의 동물보호소 정보를 확인해 보세요</h2>
      </div>
      <div className="shelter-box">
        <div className="shelter-cards">
          {items.map((info, index) => (
            <ShelterCard key={index} extraInfo={info} />
          ))}
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
  );
};

export default ShelterList;
