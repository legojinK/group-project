import React, { useState, useEffect } from "react";
import "@/pages/AnimalsPage/component/pagination/Pagination.style.css";
import ReactPaginate from "react-paginate";

const FavoritesPagination = ({ totalCount, itemsPerPage, onPageChange }) => {
    const [pageCount, setPageCount] = useState(
        totalCount ? Math.ceil(totalCount / itemsPerPage) : 0
    );

    useEffect(() => {
        if (totalCount !== 0) {
            setPageCount(Math.ceil(totalCount / itemsPerPage));
        }
    }, [totalCount, itemsPerPage]);

    return (
        <div className="pagination-container">
            {totalCount > 0 && (
                <ReactPaginate
                    containerClassName="react-paginate-custom"
                    pageClassName="react-paginate-page-custom"
                    breakClassName="break-me"
                    breakLabel="..."
                    nextLabel="▶"
                    onPageChange={onPageChange}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="◀"
                    renderOnZeroPageCount={null}
                    activeClassName="selected"
                    disabledClassName="disabled"
                    previousClassName="react-paginate-previous-custom"
                    nextClassName="react-paginate-next-custom"
                />
            )}
        </div>
    );
};

export default FavoritesPagination;

