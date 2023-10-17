import React from "react";
import logo from "./logo.svg";
import "./App.css";

const applicationServerKey =
  "BJMAYviNelSpnZvVRijrryXznUTGwB6l2Fb7VRqWU0ndeKBG78oSvSJWjHxlzAtk_Z2CStrWLCp11jfJMST4di0";

function App() {
  const reg = React.useRef(null);

  function getRegistration() {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered", registration);
        registration.pushManager.getSubscription().then((subscription) => {
          console.log(subscription);
        });

        reg.current = registration;
      })
      .catch((err) => {
        console.log("Service Worker registration failed: ", err);
      });
  }

  function getSubscription() {
    navigator.serviceWorker.ready.then((registration) => {
      registration.pushManager
        .getSubscription()
        .then((subscription) => {
          console.log(subscription);
        })
        .catch((err) => {
          console.log("Service Worker registration failed: ", err);
        });
    });
  }

  function subscribe() {
    navigator.serviceWorker.ready.then((registration) => {
      registration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey,
        })
        .then((subscription) => {
          console.log(subscription);
        })
        .catch((err) => {
          console.log("Service Worker subscription failed: ", err);
        });
    });
  }

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
        <button
          onClick={getRegistration}
          style={{ backgroundColor: "green", color: "white" }}
        >
          Get Registration
        </button>
        <button
          onClick={getSubscription}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Get Subscription
        </button>
        <button
          onClick={subscribe}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Subscribe
        </button>
        <button
          onClick={() => {
            // show local notification
            reg.current.showNotification("Hello world!");
          }}
          style={{ backgroundColor: "purple", color: "white" }}
        >
          Show Notification
        </button>
      </header>
    </div>
  );
}

export default App;
