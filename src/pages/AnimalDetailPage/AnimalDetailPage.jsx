import React from "react";
import { useLocation } from "react-router-dom";

// import { useParams } from "react-router-dom";
// import { useAnimalDetailDataQuery } from "@/hooks/useAnimalDetailData";
// import { Spinner, Alert } from "react-bootstrap";

const AnimalDetailPage = () => {
  const location = useLocation();
  const animal = location.state?.animal; // 상태객체에서 animal 가져오기
  // const {
  //   state: {
  //     animal: {
  //       desertionNo,
  //       filename,
  //       happenDt,
  //       happenPlace,
  //       // kindCd,
  //       // colorCd,
  //       age,
  //       // weight,
  //       // sexCd,
  //     },
  //   },
  // } = useLocation();
  //   const id = useParams();
  //   const { data, isLoading, isError, error } = useAnimalDetailDataQuery(id);
  //   console.log("ddd", data);

  //   if (isLoading) {
  //     // 로딩스피너
  //     return (
  //       <div className="container">
  //         <Spinner
  //           animation="border"
  //           variant="info"
  //           style={{ width: "3rem", height: "3rem" }}
  //         />
  //       </div>
  //     );
  //   }
  //   if (isError) {
  //     // 에러 메세지
  //     return <Alert variant="danger">{error.message}</Alert>;
  //   }

  return (
    <div>
      {animal.desertionNo},{animal.happenDt},{animal.happenPlace}, {animal.age}
      <img src={animal.filename} alt="animal-photo" />
    </div>
  );
};

export default AnimalDetailPage;
