import React, {useState} from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";

export default function Dictionary() {

  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  
  function search(event) {
    event.preventDefault();

    let key="37e0696t42440f602b2208b4oaa25d1a"; //my shecodes api key
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;

    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}