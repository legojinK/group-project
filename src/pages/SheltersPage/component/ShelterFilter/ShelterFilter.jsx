import React, { useState, useEffect } from "react";
import "./ShelterFilter.style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSidoSearchQuery } from "@/hooks/useSidoSearch";
import { useSigunguSearchQuery } from "@/hooks/useSigunguSearch";
import { useShelterSearchQuery } from "@/hooks/useShelterSearch";
import {
  setSelectedSido,
  setSelectedSigungu,
  setShelterList,
} from "@/store/redux/shelterSlice";

const ShelterFilter = () => {
  const dispatch = useDispatch();

  // 선택한 시도 데이터
  const { data: sidoData } = useSidoSearchQuery();
  const selectedSido = useSelector((state) => state.shelter.selectedSido);

  // 선택한 시군구 데이터
  const { data: sigunguData, refetch: refetchSigunguData } =
    useSigunguSearchQuery({ selectedSido });
  const selectedSigungu = useSelector((state) => state.shelter.selectedSigungu);

  const [searchParams, setSearchParams] = useState({ selectedSido, selectedSigungu });

  // 선택한 보호소 데이터
  const { data: shelterData, refetch: refetchShelterData } =
    useShelterSearchQuery({
      selectedSido,
      selectedSigungu,
      enabled: false,
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

  const shelterList = useSelector((state) => state.shelter.shelterList);

  // useEffect(() => {
  //   if (shelterData) {
  //     dispatch(setShelterList(shelterData.items.item));
  //     // console.log('shelterList:', shelterList);
  //   }
  // }, [shelterData, shelterList, dispatch]);

  // 시도가 바뀔 때마다 selectedSido를 바꿔주는 함수
  const handleSidoChange = (e) => {
    dispatch(setSelectedSido(e.target.value));
  };

  // 시군구가 바뀌면 selectedSigungu를 바꿔주는 함수
  const handleSigunguChange = (e) => {
    dispatch(setSelectedSigungu(e.target.value));
  };

  const handleSearch = async () => {
    setSearchParams({ selectedSido, selectedSigungu });
    const { data } = await refetchShelterData();
    if (data) {
      dispatch(setShelterList(data.items.item));
    }
  };

  return (
    <div className="shelter-filter">
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
      <button className="filter-button" onClick={handleSearch}>
        조회
      </button>
    </div>
  );
};

export default ShelterFilter;
