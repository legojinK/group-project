import React, { useState, useEffect } from "react";
import "./Pagination.style.css";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPageNo } from "@/store/redux/animalSearchSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  // redux:totalCount를 기반으로 페이지 수 계산
  const totalCount = useSelector((state) => state.animalSearch.totalCount);
  const [pageCount, setPageCount] = useState(
    totalCount ? Math.ceil(totalCount / 10) : 0
  );

  const pageNo = useSelector((state) => state.animalSearch.pageNo);

  // totalCount가 바뀔 때마다 pageCount 계산
  useEffect(() => {
    if (totalCount !== 0) {
      setPageCount(Math.ceil(totalCount / 12));
      // console.log("totalCount", totalCount);
      dispatch(setPageNo(1));
    }
  }, [totalCount, dispatch]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected + 1;
    dispatch(setPageNo(selectedPage));
  }

  return (
    <div className="pagination-container">
      {totalCount > 0 && (
        <ReactPaginate
          containerClassName="react-paginate-custom"
          pageClassName="react-paginate-page-custom"
          breakClassName="break-me"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          activeClassName="selected"
          disabledClassName="disabled"
          forcePage={pageNo - 1}
        />
      )}
    </div>
  );
};

export default Pagination;
