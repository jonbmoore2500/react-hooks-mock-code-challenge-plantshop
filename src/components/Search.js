import React, {useState} from "react";

function Search({onSearchChange}) {
  const [searchText, setSearchText] = useState('')
  
  function handleSearchChange(e) {
    // setSearchText(e.target.value)
    // console.log(searchText)
    onSearchChange(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
