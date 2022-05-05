import React from "react";
import style from "./SearchBar.module.scss";


const SearchBar = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
      };
    return (
        <form className={style.search}>

        <input  onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Enter Name..."
        type="text"/>
            <button
             onClick={searchBtn}
            >Search</button>
        </form>
    );
}
export default SearchBar;