import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [resultsPhotos, setResultsPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleScImgResponse(response) {
    setResultsPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //api code source from Paul (SC) + UMLS
    let apiKey = "39284b94tea8fb240cc5d3o3a355d5a0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const shecodesImgApikey = "39284b94tea8fb240cc5d3o3a355d5a0";
    let shecodesImgUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesImgApikey}`;
    axios.get(shecodesImgUrl).then(handleScImgResponse);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={true}
          />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={resultsPhotos} />
    </div>
  );
}
