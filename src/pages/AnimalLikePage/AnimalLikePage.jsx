import React, { useState } from "react";
import { useSelector } from "react-redux";
import AnimalCard from "@/common/AnimalCard/AnimalCard";
import "@/pages/AnimalLikePage/AnimalLikePage.style.css";
import FavoritesPagination from "@/pages/AnimalLikePage/component/FavoritesPagination";
const AnimalLikePage = () => {
    const favorites = useSelector((state) => state.favorites.favorites);
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(0);

    // 페이지 번호가 변경될 때 호출
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const currentFavorites = favorites.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    if (favorites.length === 0) {
        return <div className="no-favorites"> 찜한 동물이 없습니다.</div>;
    }

    return (
        <div className="animal-card-container">
            <h6 className="page-nav">
                구조동물 &nbsp; &gt; &nbsp; <strong>즐겨찾기한 동물</strong>
            </h6>
            <div className="animals-page-title">
                <span>즐겨찾기한 동물</span>
            </div>
            <div className="animal-card-count">
                총{" "}
                <span className="count-number">{favorites.length.toLocaleString()}</span>{" "}
                건
            </div>
            <div className="animal-card-wrapper">
                {currentFavorites.map((animal, index) => (
                    <AnimalCard key={index} animal={animal} />
                ))}
            </div>

            <FavoritesPagination
                totalCount={favorites.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default AnimalLikePage;
