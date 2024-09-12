// import React from "react";

// import { useParams } from "react-router-dom";
// import { useAnimalDetailDataQuery } from "@/hooks/useAnimalDetailData";
// import { Spinner, Alert } from "react-bootstrap";

// const AnimalDetailPage = () => {
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

//   return <div>{data?.age}</div>;
// };

// export default AnimalDetailPage;
