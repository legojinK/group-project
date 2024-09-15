import React, { useState, useEffect } from "react";
import "./AnimalCardWrapper.style.css";
import { useSelector } from "react-redux";
import AnimalCard from "@/common/AnimalCard/AnimalCard";
import { useAnimalCardDataQuery } from "@/hooks/useAnimalCardData";
import { useDispatch } from "react-redux";
import { setTotalCount } from "@/store/redux/animalSearchSlice";
import { Container } from "react-bootstrap";

const AnimalCardWrapper = () => {
  const dispatch = useDispatch();

  // animalFilter.jsx에서 선택한 데이터 불러오기
  const selectedDateFrom = useSelector(
    (state) => state.animalSearch.selectedDateFrom
  );
  const selectedDateTo = useSelector(
    (state) => state.animalSearch.selectedDateTo
  );
  const selectedSido = useSelector((state) => state.animalSearch.selectedSido);
  const selectedSigungu = useSelector(
    (state) => state.animalSearch.selectedSigungu
  );
  const selectedShelter = useSelector(
    (state) => state.animalSearch.selectedShelter
  );
  const selectedKind = useSelector((state) => state.animalSearch.selectedKind);
  const selectedDetailKind = useSelector(
    (state) => state.animalSearch.selectedDetailKind
  );
  const selectedNeuter = useSelector(
    (state) => state.animalSearch.selectedNeuter
  );
  const updateData = useSelector((state) => state.animalSearch.updateData);
  const pageNo = useSelector((state) => state.animalSearch.pageNo);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const {
    data: animalCardData,
    isLoading,
    isError,
    error,
    refetch: refetchAnimalCardData,
  } = useAnimalCardDataQuery({
    selectedDateFrom,
    selectedDateTo,
    selectedSido,
    selectedSigungu,
    selectedShelter,
    selectedKind,
    selectedDetailKind,
    selectedNeuter,
    pageNo,
  });
  console.log("animalCardData", animalCardData);

  // animalCardData가 바뀔 때마다 totalCount를 redux에 저장
  useEffect(() => {
    if (animalCardData) {
      dispatch(setTotalCount(animalCardData?.totalCount));
    }
  }, [animalCardData, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      setIsPageLoading(true);
      await refetchAnimalCardData();
      if (animalCardData) {
        dispatch(setTotalCount(animalCardData?.totalCount));
      }
      setIsPageLoading(false);
    };

    console.log("data refetch");
    fetchData();
  }, [
    pageNo,
    updateData,
    animalCardData,
    animalCardData?.totalCount,
    refetchAnimalCardData,
    dispatch,
  ]);

  if (isError) {
    return <div className="error-box">에러 발생: {error.message}</div>;
  }

  return (
    <div className="animal-card-container">
      <Container>
        <div className="animal-card-count">
          총{" "}
          <span className="count-number">
            {animalCardData?.totalCount === 0
              ? 0
              : animalCardData?.totalCount?.toLocaleString()}
          </span>
          건
        </div>
      </Container>
      <div className="animal-card-wrapper">
        {isLoading || isPageLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="skeleton-card"></div>
            ))
          : animalCardData?.items?.item?.map((animal, index) => (
              <AnimalCard key={index} animal={animal} />
            ))}
      </div>
    </div>
  );
};

export default AnimalCardWrapper;
