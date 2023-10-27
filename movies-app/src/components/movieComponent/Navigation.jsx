import React from "react";
import ReactPaginate from "react-paginate";
import { getPagesNumberFromApi } from "../../redux/actions/movieListAction";
import { useDispatch } from "react-redux";

const Navigation = () => {
	const dispatch = useDispatch();
	const pageCounting = 500;

	const handlePageClick = (data) => {
		dispatch(getPagesNumberFromApi(data.selected + 1));
	};
	return (
		<ReactPaginate
			breakLabel="..."
			nextLabel="التالي >"
			onPageChange={handlePageClick}
			pageRangeDisplayed={2}
			marginPagesDisplayed={2}
			pageCount={pageCounting}
			previousLabel="< السابق"
			containerClassName={"pagination justify-content-center p-3"}
			pageClassName={"page-item"}
			pageLinkClassName={"page-link"}
			previousLinkClassName={"page-link"}
			nextClassName={"page-link"}
			activeClassName={"active"}
			breakClassName={"page-link"}
			breakLinkClassName={"page-item"}
		/>
	);
};

export default Navigation;
