import React from "react";
import Meaning from "./Meaning";

export default function Results(results) {
  if (results) {
    return (
      <div className="Results">
        <h2> {results.word}</h2>{" "}
        {results.meaning.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meanings} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
