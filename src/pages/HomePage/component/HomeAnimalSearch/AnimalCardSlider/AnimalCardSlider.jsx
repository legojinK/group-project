import React from "react";
import "./AnimalCardSlider.style.css";
import AnimalCard from "../../../../../common/AnimalCard/AnimalCard";
import { useAnimalCardDataQuery } from "@/hooks/useAnimalCardData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// carousel breakpoint
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1536 },
    items: 2,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1200 },
    items: 2,
    slidesToSlide: 2,
  },
  largeTablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const AnimalCardSlider = () => {

  // useAnimalCardDataQuery를 사용하여 유기동물 데이터 조회
  const { data: AnimalCardData, isLoading, isError, error } = useAnimalCardDataQuery();
  console.log("AnimalCardData", AnimalCardData);

  // 로딩 중일 때
  if (isLoading) {
    // 추후 skeleton loader로 대체
    return <div className="loading-box">로딩 중...</div>;
  }

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
      {AnimalCardData?.items.item.map((animal, index) => {
        return <AnimalCard animal={animal} key={index} />;
      })}
    </Carousel>
  );
};

export default AnimalCardSlider;
