import React from "react";

export default function Meaning({ meaning }) {
  console.log(meaning);

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>
        {meaning.definition}
        <em>{meaning.example}</em>
      </p>
    </div>
  );
}
