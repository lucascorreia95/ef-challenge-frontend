import ReactPaginate from "react-paginate";

import useWindowDimensions from "../../../../hooks/useWindowDimensions";

import { PaginationContainer } from "./Pagination.styles";

export const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel=""
        nextLabel=""
        breakLabel={width > 767 ? "..." : ""}
        breakClassName={"break-me"}
        pageCount={10}
        marginPagesDisplayed={width > 767 ? 2 : 0}
        pageRangeDisplayed={2}
        onPageChange={(e) => console.log("onPageChange", e)}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </PaginationContainer>
  );
};

export default Home;
