import React, {useState} from "react";
import './Dictionary.css';

export default function Dictionary() {

  let [keyword, setKeyword] = useState("");
  
  function search(event) {
    event.preventDefault();
    alert(`You searched for "${keyword}"`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" placeholder="Type a word..." autoComplete="off" onChange={handleKeywordChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}