import React from "react";
import Meaning from "./Meaning";

export default function Results({ results }) {
  console.log(results, "results");
  if (results) {
    return (
      <div className="Results">
        <section>
          <h2> {results.word}</h2>
          {results.meanings.map((meanings, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meanings} /> <br />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
