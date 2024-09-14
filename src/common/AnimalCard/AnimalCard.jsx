import React from "react";
import "./AnimalCard.style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { updateFavorite } from "@store/redux/favoritesSlice";

const AnimalCard = ({ animal }) => {
  const navigate = useNavigate();
  //const { desertionNo, filename, happenDt, happenPlace } = animal;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.favorites.favorites);

  // 20240101을 2024-01-01로 변환하는 함수
  const formatDate = dateString => {
    const year = dateString?.substring(0, 4);
    const month = dateString?.substring(4, 6);
    const day = dateString?.substring(6, 8);
    return `${year}-${month}-${day}`;
  };

  //동물 타입에서 브라켓([]) 제거
  const extractAnimalType = kindCd => {
    return kindCd.replace(/\[.*?\]\s*/, "");
  };

  // 동물 상세 페이지로 이동
  const goToAnimalDetailPage = () => {
    navigate(`/animals/${animal?.desertionNo}`, { state: { animal } });
  };

  const isFavorite = favorites.some(
    fav => fav.desertionNo === animal.desertionNo
  );

  // 로그인 여부에 따른 즐겨찾기 버튼 클릭 시 이동
  const handleFavoriteClick = e => {
    e.stopPropagation();
    if (isLoggedIn) {
      dispatch(updateFavorite(animal));
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  return (
    <div className="animal-card" onClick={goToAnimalDetailPage}>
      <div className="animal-card-regisDate">
        {formatDate(animal?.happenDt)}
      </div>
      <div
        className="animal-card__image"
        style={{
          backgroundImage: `url(${animal?.popfile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="favorite-icon" onClick={handleFavoriteClick}>
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </div>
      <div className="animal-card__content">
        <div className="card__type-age">
          <span className="card__type">
            {extractAnimalType(animal?.kindCd)}
          </span>
          <span className="card__age">{animal?.age.substring(0, 4)}년생</span>
        </div>
        <div className="card__location">
          <span className="card__location__title">발견장소</span>
          <span className="card__location__content">
            {animal?.happenPlace?.length > 10
              ? `${animal?.happenPlace.substring(0, 10)}..`
              : animal?.happenPlace}
          </span>
        </div>
        <div className="card__description">
          <span className="card__description__title">특징</span>
          <span className="card__description__content">
            {animal?.specialMark?.length > 10
              ? `${animal?.specialMark.substring(0, 10)}..`
              : animal?.specialMark}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
