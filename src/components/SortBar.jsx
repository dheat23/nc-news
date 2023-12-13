import { Link, useLocation } from "react-router-dom"

const SortBar = ({setSearchParams}) => {
    function handleSortClick(sort) {
        setSearchParams((currSearchParams)=>{
            let newSearchParams = new URLSearchParams(currSearchParams);

            newSearchParams.set('sort', sort);

          return newSearchParams;
        })
    }
    function handleOrderClick(order) {
        setSearchParams((currSearchParams)=>{
            let newSearchParams = new URLSearchParams(currSearchParams);

            newSearchParams.set('order', order)

            return newSearchParams
        })
    }
    return (<div id="sort-bar">
        <h3>Sort Bar</h3>
        <ul>
            <button onClick={()=>{handleSortClick("created_at")}}>Date</button>
            <button onClick={()=>{handleSortClick("comment_count")}}>Comment Count</button>
            <button onClick={()=>{handleSortClick("votes")}}>Votes</button>
            <button onClick={()=>{
                handleOrderClick("asc")
            }}>Ascending</button>
            <button onClick={()=>{
                handleOrderClick("desc")
            }}>Descending</button>
        </ul>
    </div>)
}

export default SortBar