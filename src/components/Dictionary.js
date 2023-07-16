import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleScImgResponse(response) {
    setResults(response.data);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //api code source from Paul (SC) + UMLS
    let apiKey = "4a2e4532802845f5bc50f05be550ae6a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  const shecodesImgApikey = "39284b94tea8fb240cc5d3o3a355d5a0";
  let shecodesImgUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}`;
  axios.get(shecodesImgUrl).then(handleScImgResponse);

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
      {results && <Results results={results} />}
      {<Photos photos={Photos} />}
    </div>
  );
}
