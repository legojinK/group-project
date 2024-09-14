import React from "react";
import { useParams } from "react-router-dom";
import { useShelterQuery } from "../../hooks/useShelter";

const ShelterDetail = () => {
  const { careNm } = useParams();
  const { data, isLoading, isError } = useShelterQuery(); // Fetch data with your hook

  // Filter data to find the selected shelter
  const shelter = data?.items?.item.find(item => item.careNm === careNm);

  if (isLoading) {
    return <div>Loading shelter details...</div>;
  }

  if (isError || !shelter) {
    return <div>Error loading shelter details or shelter not found.</div>;
  }

  return (
    <div className="shelter-detail">
      <div className="shelter-basic-info">
        <h1>{shelter.careNm}</h1>
        <p><strong>Address:</strong> {shelter.careAddr}</p>
        <p><strong>Phone:</strong> {shelter.careTel}</p>
        <p><strong>Division:</strong> {shelter.divisionNm}</p>
        <p><strong>Org Name:</strong> {shelter.orgNm}</p>
        <p><strong>Save Target Animal:</strong> {shelter.saveTrgtAnimal}</p>
      </div>

      <div className="shelter-hours">
        <h2>Operating Hours</h2>
        <p><strong>Weekdays:</strong> {shelter.weekOprStime} - {shelter.weekOprEtime}</p>
        <p><strong>Weekend:</strong> {shelter.weekendOprStime} - {shelter.weekendOprEtime}</p>
        <p><strong>Cell Phone Hours:</strong> {shelter.weekCellStime} - {shelter.weekCellEtime}</p>
        <p><strong>Weekend Cell Phone Hours:</strong> {shelter.weekendCellStime} - {shelter.weekendCellEtime}</p>
        <p><strong>Closed on:</strong> {shelter.closeDay}</p>
      </div>

      <div className="shelter-operation-system">
        <h2>Shelter Operation System</h2>
        <p><strong>Veterinarian Count:</strong> {shelter.vetPersonCnt}</p>
        <p><strong>Medical Rooms:</strong> {shelter.medicalCnt}</p>
        <p><strong>Animal Breeds Count:</strong> {shelter.breedCnt}</p>
        <p><strong>Quarantine Rooms Count:</strong> {shelter.quarabtineCnt}</p>
        <p><strong>Transport Cars Count:</strong> {shelter.transCarCnt}</p>
        <p><strong>Spec Person Count:</strong> {shelter.specsPersonCnt}</p>
        <p><strong>Feed Count:</strong> {shelter.feedCnt}</p>
      </div>

      <div className="shelter-location">
        <h2>Location</h2>
        <p><strong>Latitude:</strong> {shelter.lat}</p>
        <p><strong>Longitude:</strong> {shelter.lng}</p>
      </div>
    </div>
  );
};

export default ShelterDetail;
