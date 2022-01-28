import React from "react";
import logo from "./logo.svg";
import "./App.css";

const url = process.env.REACT_APP_TEST_URL ? process.env.REACT_APP_TEST_URL : "https://www.google.com/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <p>
          env url:{" "}
          <a className="App-link" href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </p>
        <p>変更しました</p>
      </header>
    </div>
  );
}

export default App;
