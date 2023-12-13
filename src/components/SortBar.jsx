import { Link, useLocation } from "react-router-dom";

const SortBar = ({ searchParams, setSearchParams }) => {
    const sortParam = searchParams.get("sort");
    const orderParam = searchParams.get("order");
  function handleSortClick(sort) {
    setSearchParams((currSearchParams) => {
      let newSearchParams = new URLSearchParams(currSearchParams);

      newSearchParams.set("sort", sort);

      return newSearchParams;
    });
  }
  function handleOrderClick(order) {
    setSearchParams((currSearchParams) => {
      let newSearchParams = new URLSearchParams(currSearchParams);

      newSearchParams.set("order", order);

      return newSearchParams;
    });
  }
  return (
    <div id="sort-bar">
      <h3>Sort By:</h3>
      <ul id="sort-by-list">
        <button className={`sort-button ${sortParam === "created_at" || !sortParam ? "selected-sort-button" : ""}`}
          onClick={() => {
            handleSortClick("created_at");
          }}
        >
          Date
        </button>
        <button className={`sort-button ${sortParam === "comment_count" ? "selected-sort-button" : ""}`}
          onClick={() => {
            handleSortClick("comment_count");
          }}
        >
          Comment Count
        </button>
        <button className={`sort-button ${sortParam === "votes" ? "selected-sort-button" : ""}`}
          onClick={() => {
            handleSortClick("votes");
          }}
        >
          Votes
        </button>
      </ul>
      <h3>Order By:</h3>
      <ul id="order-by-list">
      <button className={`order-button ${orderParam === "asc" ? "selected-sort-button" : ""}`}
          onClick={() => {
            handleOrderClick("asc");
          }}
        >
          Ascending
        </button>
        <button className={`order-button ${orderParam === "desc" || !orderParam ? "selected-sort-button" : ""}`}
          onClick={() => {
            handleOrderClick("desc");
          }}
        >
          Descending
        </button>
      </ul>
    </div>
  );
};

export default SortBar;
