import React, { useEffect } from "react";
import "./AnimalCardSlider.style.css";
import AnimalCard from "../../../../../common/AnimalCard/AnimalCard";
import { useMainCardDataQuery } from "@/hooks/useMainCardData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// carousel breakpoint
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1400 },
    items: 2,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1200 },
    items: 2,
    slidesToSlide: 2,
  },
  largeTablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 576 },
    items: 2,
  },
  smallMobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

const AnimalCardSlider = () => {
  const selectedDateFrom = 20240101;
  const selectedDateTo = `${new Date().getFullYear()}${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}`;
  const selectedSido = "";
  const selectedSigungu = "";
  const selectedShelter = "";
  const selectedKind = "";
  const selectedDetailKind = "";

  // useAnimalCardDataQuery를 사용하여 유기동물 데이터 조회
  const {
    data: MainCardData,
    isLoading: isMainLoading,
    isError,
    error,
    refetch: refetchMainCardData,
  } = useMainCardDataQuery({
    selectedDateFrom,
    selectedDateTo,
    selectedSido,
    selectedSigungu,
    selectedShelter,
    selectedKind,
    selectedDetailKind,
  });
  console.log("MainCardData", MainCardData);

  useEffect(() => {
    refetchMainCardData();
    console.log("data refetching");
  }, [refetchMainCardData]);

  // 에러 발생 시
  if (isError) {
    return <div className="error-box">에러 발생: {error.message}</div>;
  }

  return (
    <Carousel
      containerClass="carousel-container"
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      centerMode={true}
      autoPlaySpeed={7000}
      itemClass="custom-carousel-item"
    >
      {isMainLoading
        ? Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="skeleton-card"></div>
          ))
        : MainCardData?.items?.item?.map((animal, index) => {
            return <AnimalCard animal={animal} key={index} />;
          })}
    </Carousel>
  );
};

export default AnimalCardSlider;
