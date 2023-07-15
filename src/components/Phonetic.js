import React from "react";
import Results from "./Results";

export default function Phonetics({ phonetics }) {
  console.log({ phonetics });
  return <Results result={phonetic} />;
}
