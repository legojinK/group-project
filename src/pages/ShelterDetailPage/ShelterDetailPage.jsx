import React from "react";
import "./ShelterDetailPage.style.css"
import { useParams } from "react-router-dom";
import { useShelterDetails } from "@/hooks/useShelterDetails";
import { faBone, faBowlFood, faBuilding, faCalendar, faCalendarDays, faClock, faLocationDot, faPaw, faPhone, faShopLock, faSitemap, faStethoscope, faUserDoctor, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapTest from "@/map/Map/Map";

const ShelterDetailPage = () => {
  const { careNm } = useParams();
  const { data, isLoading, isError, error } = useShelterDetails(careNm);

  console.log("dddd",data)

  if (isLoading) {
    return <div>Loading shelter details...</div>;
  }

  if (isError) {
    console.error("Error fetching shelter details:", error);
    return <div>Error loading shelter details or shelter not found.</div>;
  }

  if (!data || !data.items || !data.items.item || !data.items.item.length) {
    return <div>Shelter not found.</div>;
  }

  const shelter = data.items.item[0]; 

  return (
    <div className="shelter-detail">
        <div className="paw-name">
        <FontAwesomeIcon icon={faPaw} />
        <h1>{shelter.careNm}</h1>
        </div>
      <div className="shelter-basic-info">
      <h2>정보</h2>
        <p><FontAwesomeIcon icon={faPhone} /> <strong>전화번호:</strong> {shelter.careTel}</p>
        <p><FontAwesomeIcon icon={faBuilding} /> <strong>동물보호소 유형:</strong> {shelter.divisionNm}</p>
        <p><FontAwesomeIcon icon={faSitemap} /> <strong>관리 기간명:</strong> {shelter.orgNm}</p>
        <p><FontAwesomeIcon icon={faCalendarDays} /> <strong>동물보호소 지정일자:</strong> {shelter.dsignationDate}</p>
      </div>

      <div className="shelter-hours">
        <h2>운영 시간</h2>
        <p><FontAwesomeIcon icon={faClock} /> <strong>평일 운영 시간:</strong> {shelter.weekOprStime} ~ {shelter.weekOprEtime}</p>
        <p><FontAwesomeIcon icon={faClock} /> <strong>주말 운영 시간:</strong> {shelter.weekendOprStime} ~ {shelter.weekendOprEtime}</p>
        <p><FontAwesomeIcon icon={faCalendar} /> <strong>휴무일:</strong> {shelter.closeDay}</p>
      </div>

      <div className="shelter-system">
        <h2>보호소 시설</h2>
        <div className="workers">
        <p><FontAwesomeIcon icon={faUserDoctor} /> <strong>수의사:</strong> {shelter.vetPersonCnt}명</p>
        <p><FontAwesomeIcon icon={faUserNurse} /> <strong>사양 관리사:</strong> {shelter.specsPersonCnt}명</p>
        </div>
        <div className="rooms">
        <p><FontAwesomeIcon icon={faStethoscope} /> <strong>진료실:</strong> {shelter.medicalCnt}</p>
        <p><FontAwesomeIcon icon={faBone} /> <strong>사육실:</strong> {shelter.breedCnt}</p>
        <p><FontAwesomeIcon icon={faShopLock} /> <strong>격리실:</strong> {shelter.quarabtineCnt}</p>
        <p><FontAwesomeIcon icon={faBowlFood} /> <strong>사료 보관실:</strong> {shelter.feedCnt}</p>
        </div>
        <h3>우리 보호소의 동물친구들</h3>
        <div className="shelter-animals"></div>
      </div>

      <div className="shelter-location">
        <h2>오시는 길</h2>
        <p><FontAwesomeIcon icon={faLocationDot} /> <strong>{shelter.careAddr}</strong></p>
        <MapTest lat={shelter.lat} lng={shelter.lng} /> 
      </div>
    </div>
  );
};

export default ShelterDetailPage;
