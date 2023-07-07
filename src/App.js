require("dotenv").config();

import logo from "./logo.png";
import "./App.css";
import Dictionary from "./dictionary.js";
console.log(process.env.API_KEY);

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-home">
          <img src={logo} className="App-logo img-fluid" alt="logo" />

          <p>Medical Terminologies doesn't have to be so 😰confusing!</p>
          <h2>Welcome to your</h2>

          <h1 className="home-h1"> Modern Medical Dictionary</h1>

          <main className="Search">
            <Dictionary />
          </main>
        </header>

        <footer className="App-footer"> Coded By Margaret Cezar </footer>
      </div>
    </div>
  );
}
