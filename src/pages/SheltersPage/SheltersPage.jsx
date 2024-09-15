import React, { useEffect, useState } from "react";
import "./SheltersPage.style.css";
import ShelterCard from "../../common/ShelterCard/ShelterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useShelterQuery } from "@/hooks/useShelter";
import ShelterFilter from "./component/ShelterFilter/ShelterFilter";
import { useSelector } from "react-redux";

const ShelterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [care_nm, setCareNm] = useState("");
  const shelterList = useSelector((state) => state.shelter.shelterList);
  const { data, isLoading, isError } = useShelterQuery({
    currentPage,
    care_nm,
  });

  useEffect(() => {
    if (shelterList) {
      console.log("pageShelterList:", shelterList);
    }
  }, [shelterList]);

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

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러</div>;
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
      <ShelterFilter />
      <div className="shelter-grid">
        <div className="shelter-cards">
          {items.map((info) => {
            if (!info || !info.careNm) {
              console.error("Invalid item:", info);
              return null;
            }
            // console.log("Rendering card for:", info.careNm);
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
  );
};

export default ShelterList;