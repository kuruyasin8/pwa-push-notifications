import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  navigator.serviceWorker.getRegistration().then(function (registration) {
    if (registration) {
      registration.pushManager.getSubscription().then(function (subscription) {
        if (subscription) {
          console.log(subscription);
        } else {
          console.log("no subscription");
        }
      });
    } else {
      console.log("no registration");
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
