import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Topic } from "./components/topics";
import { Navbar } from "./components/navbar/navbar";
import { SecondNav } from "./components/secondNav/SecondNav";
import HighLighter from "./components/navbar/highlighter";

const indexedDB = window.indexedDB;
const indexDBCycle = () => {
  // check present
  if (!indexedDB) {
    console.log("IndexedDB not supported");
    return;
  }

  // give name, version
  const request = indexedDB.open("MyDB", 1);

  // on err
  request.onerror = function (event) {
    console.log("Error occurred with IndexedDB");
    console.log(event);
  };

  // create store
  request.onupgradeneeded = function (event) {
    console.log("onupgradeneeded", event);

    const db = event.target.result;
    if (!db.objectStoreNames.contains("userData")) {
      db.createObjectStore("userData", { keyPath: "id" });
    }
  };

  // add data in store - data, key
  request.onsuccess = function (event) {
    console.log("Database opened successfully");
  };
};
function App() {
  const handleTick = (event) => {
    const dbPromise = indexedDB.open("userData", 1);
  };
  //prop
  //useref/usereducer
  //js
  // console.log(window.location.pathname);
  useEffect(() => {
    indexDBCycle();
  }, []);

  return (
    <div className="App">
      <Main>
        <Navbar />
        <HighLighter />
        <SecondNav />

        <Routes>
          <Route path="/" element={<Topic />} />
          <Route path="/home" element={<Topic />} />
          <Route path="/TimeComplexity" element={<Topic />} />

          <Route path="/Arrays" element={<Topic />} />
          <Route path="/LinkedList" element={<Topic />} />
          <Route path="/Strings" element={<Topic />} />
          <Route path="/Recursion" element={<Topic />} />
          <Route path="/Trees" element={<Topic />} />
          <Route path="/Dp" element={<Topic />} />
          <Route path="/Graphs" element={<Topic />} />
        </Routes>
      </Main>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
