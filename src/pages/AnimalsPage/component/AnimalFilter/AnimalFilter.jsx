import React from "react";
import { useEffect } from "react";
import "./AnimalFilter.style.css";
import { useSidoSearchQuery } from "@/hooks/useSidoSearch";
import { useSigunguSearchQuery } from "@/hooks/useSigunguSearch";
import { useShelterSearchQuery } from "@/hooks/useShelterSearch";
import { useKindSearchQuery } from "@/hooks/useKindSearch";
import {
  setSelectedDateFrom,
  setSelectedDateTo,
  setSelectedSido,
  setSelectedSigungu,
  setSelectedShelter,
  setSelectedKind,
  setSelectedDetailKind,
  setSelectedNeuter,
  setUpdateData,
} from "@/store/redux/animalSearchSlice";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AnimalFilter = () => {
  const dispatch = useDispatch();

  // 선택한 시도 데이터
  const { data: sidoData } = useSidoSearchQuery();
  const selectedSido = useSelector((state) => state.animalSearch.selectedSido);

  // 선택한 시군구 데이터
  const { data: sigunguData, refetch: refetchSigunguData } =
    useSigunguSearchQuery({ selectedSido });
  const selectedSigungu = useSelector(
    (state) => state.animalSearch.selectedSigungu
  );

  // 선택한 보호소 데이터
  const { data: shelterData, refetch: refetchShelterData } =
    useShelterSearchQuery({
      selectedSido,
      selectedSigungu,
    });

  // 선택한 축종 데이터
  const selectedKind = useSelector((state) => state.animalSearch.selectedKind);
  const { data: kindData, refetch: refetchKindData } = useKindSearchQuery({
    selectedKind,
  });

  // selectedSido가 바뀔 때마다 sigunguData를 다시 가져오는 useEffect
  useEffect(() => {
    if (selectedSido !== "") {
      // sigunguData refetch
      // console.log("selectedSido", selectedSido);
      refetchSigunguData();
    }
  }, [selectedSido, refetchSigunguData]);

  useEffect(() => {
    if (selectedSigungu !== "") {
      // sigunguData refetch
      // console.log("selectedSigungu", selectedSigungu);
      refetchShelterData();
    }
  }, [selectedSigungu, refetchShelterData]);

  useEffect(() => {
    // kindData refetch
    // console.log("selectedKind", selectedKind);
    refetchKindData();
  }, [selectedKind, refetchKindData]);

  // date from이 바뀔 때마다 selectedDateFrom을 바꿔주는 함수
  const handleDateFromChange = (e) => {
    const date = e.target.value;
    // -를 제거한 날짜로 변환
    const formattedDate = date.replace(/-/g, "");
    dispatch(setSelectedDateFrom(formattedDate));
  };

  // date to가 바뀔 때마다 selectedDateTo을 바꿔주는 함수
  const handleDateToChange = (e) => {
    const date = e.target.value;
    // -를 제거한 날짜로 변환
    const formattedDate = date.replace(/-/g, "");
    dispatch(setSelectedDateTo(formattedDate));
  };

  // 시도가 바뀔 때마다 selectedSido를 바꿔주는 함수
  const handleSidoChange = (e) => {
    dispatch(setSelectedSido(e.target.value));
  };

  // 시군구가 바뀌면 selectedSigungu를 바꿔주는 함수
  const handleSigunguChange = (e) => {
    dispatch(setSelectedSigungu(e.target.value));
  };

  // 보호소가 바뀌면 selectedShelter를 바꿔주는 함수
  const handleShelterChange = (e) => {
    dispatch(setSelectedShelter(e.target.value));
  };

  //축종이 바뀌면 품종을 바꿔주는 함수
  const handleKindChange = (e) => {
    dispatch(setSelectedKind(e.target.value));
  };

  //품종이 바뀌면 세부 품종을 바꿔주는 함수
  const handleDetailKindChange = (e) => {
    dispatch(setSelectedDetailKind(e.target.value));
  };

  // 중성화 여부가 바뀔 때마다 selectedNeuter를 바꿔주는 함수
  const handleNeuterChange = (e) => {
    dispatch(setSelectedNeuter(e.target.value));
  };

  // 조회 버튼 클릭 시, redux:updateData 토글
  const handleSearchButtonClick = () => {
    dispatch(setUpdateData());
  };

  return (
    <div className="animals-page-filter">
      <div className="filter-date">
        <div className="form-group">
          <div className="form-group-title">
            <label htmlFor="data-from">날짜</label>
          </div>
          <div className="form-group-content">
            <input type="date" id="date-from" onChange={handleDateFromChange} />
            <div className="from-to-sign">~</div>
            <input type="date" id="date-to" onChange={handleDateToChange} />
          </div>
        </div>
      </div>
      <div className="filter-location">
        <div className="form-group">
          <div className="form-group-title">
            <label htmlFor="location-sido">시도</label>
          </div>
          <div className="form-group-content">
            <select id="location-sido" onChange={handleSidoChange}>
              <option value="">전체</option>
              {sidoData?.items.item.map((sido, index) => (
                <option key={index} value={sido?.orgCd}>
                  {sido.orgdownNm}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-title">
            <label htmlFor="location-sigungu">시군구</label>
          </div>
          <div className="form-group-content">
            <select id="location-sigungu" onChange={handleSigunguChange}>
              <option value="">전체</option>
              {sigunguData?.items.item.map((sigungu, index) => (
                <option key={index} value={sigungu?.orgCd}>
                  {sigungu.orgdownNm}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-title">
            <label htmlFor="location-shelters">보호센터</label>
          </div>
          <div className="form-group-content">
            <select id="location-shelters" onChange={handleShelterChange}>
              <option value="">전체</option>
              {shelterData?.items.item.map((shelter, index) => (
                <option key={index} value={shelter?.careRegNo}>
                  {shelter?.careNm}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="filter-kind">
        <div className="form-group">
          <div className="form-group-title">
            <label htmlFor="kind">축종 및 품종</label>
          </div>
          <div className="form-group-content">
            <select id="kind" onChange={handleKindChange}>
              <option value="">전체</option>
              <option value="417000">개</option>
              <option value="422400">고양이</option>
              <option value="429900">기타</option>
            </select>
            <select id="detail-kind" onChange={handleDetailKindChange}>
              <option value="">전체</option>
              {kindData?.items.item.map((kind, index) => (
                <option key={index} value={kind?.kindCd}>
                  {kind.knm}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-title">
            <label htmlFor="neutralized">중성화 여부</label>
          </div>
          <div className="form-group-content">
            <select id="neutralized" onChange={handleNeuterChange}>
              <option value="">전체</option>
              <option value="Y">예</option>
              <option value="N">아니오</option>
              <option value="U">미상</option>
            </select>
          </div>
        </div>
      </div>
      <div className="filter-divide-line"></div>
      <button className="search-button" onClick={handleSearchButtonClick}>
        <FontAwesomeIcon icon={faSearch} className="filter-search-icon" />
        조회
      </button>
    </div>
  );
};

export default AnimalFilter;
