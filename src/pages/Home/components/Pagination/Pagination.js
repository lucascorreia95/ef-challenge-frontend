import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import useWindowDimensions from "../../../../hooks/useWindowDimensions";

import { PaginationContainer } from "./Pagination.styles";

export const Pagination = ({ onPageChange, pageCount }) => {
  const { width } = useWindowDimensions();

  return (
    <PaginationContainer>
      <ReactPaginate
        initialPage={0}
        previousLabel=""
        nextLabel=""
        breakLabel={width > 767 ? "..." : ""}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={width > 767 ? 2 : 0}
        pageRangeDisplayed={2}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number,
};

export default Pagination;
