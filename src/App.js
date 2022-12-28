import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/MarynaMarkova/Dictionary-App"
            className="profileLink"
            target="_blank"
            rel="noreferrer"
            title="Github code"
          >
            Open-source
          </a>
          {" by "}
          <a
            href="https://marynamarkova.github.io/"
            className="profileLink"
            target="_blank"
            rel="noreferrer"
            title="Personal page"
          >
            Maryna Markova
          </a>
        </footer>
      </div>
    </div>
  );
}
