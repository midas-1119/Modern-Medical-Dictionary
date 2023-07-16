import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //api code source from Paul (SC) + UMLS
    let apiKey = "4a2e4532802845f5bc50f05be550ae6a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  const pexelsApikey =
    "563492ad6f91700001000001720216efe00148c790bc65cff51c786e";
  let pexelsApiUrl =
    "https://api.pexels.com/v1/search?query=${keyword}&perpage=6";
  axios.get(apiUrl).then(handlePexelsResponse);

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
    </div>
  );
}
