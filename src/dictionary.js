import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(" ");

  function search(event) {
    event.preventDefault();
    alert (`Searching for ${keyword} definition`);
  
//api code source from Paul (SC)
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=39284b94tea8fb240cc5d3o3a355d5a0`;
axios(get apiUrl).then (handleResponse);
}

  function handleKeywordChange(event) {
     setKeyword(event.target.value);
  }


  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true} />
      </form>
    </div>    
  );
}