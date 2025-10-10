import React, {useState} from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";
import Photos from "./assets/Photos";

export default function Dictionary() {

  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImgResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    // event may be undefined when search is called from load(); guard it
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    // don't perform a search if there's no keyword
    if (!keyword) return;

    const key = "37e0696t42440f602b2208b4oaa25d1a"; //my shecodes api key
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleDictionaryResponse).catch((e) => {
      console.error("Dictionary API error:", e);
      setResults(null);
    });

    const imgApiKey = "0c43aab85t9fo6a6712276a1886b3109";
    const imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImgResponse).catch((e) => {
      console.error("Images API error:", e);
      setPhotos(null);
    });
  
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

   function load() {
      setLoaded(true);
      search();
    }

  if (loaded) {

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" placeholder="Type a word..." autoComplete="off" onChange={handleKeywordChange} />
        <input type="submit" value="Search" />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );

  } else {
    load ();
    return "Loading";
  }
}