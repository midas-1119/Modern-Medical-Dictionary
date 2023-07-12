import logo from "./logo.png";
import "./App.css";
import Dictionary from "./components/Dictionary.js";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-home">
          <img src={logo} className="App-logo img-fluid" alt="logo" />

          <div className="row">
            <p>Medical Terminologies doesn't have to be so 😰confusing!</p>
            <h2>Welcome to your</h2>

            <h1 className="home-h1"> Modern Medical Dictionary</h1>

            <main className="Search">
              <Dictionary />
            </main>
          </div>
        </header>

        <footer className="App-footer">
          Coded by <a href="https://margaretcezar.com"> Margaret Cezar</a>
        </footer>
      </div>
    </div>
  );
}
