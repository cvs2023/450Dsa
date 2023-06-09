import "./App.css";
import React, { createContext, useEffect, useState } from "react";

import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { SecondNav } from "./components/secondNav/SecondNav";
import HighLighter from "./components/navbar/highlighter";
import Beginner from "./components/secondNav/Beginner";
import Medium from "./components/secondNav/Medium";
import Advanced from "./components/secondNav/Advanced";
//
export const globalObj = createContext();

//indexdb
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
    // console.log("Database opened successfully");
  };
};

function App() {
  const handleTick = (event) => {
    const dbPromise = indexedDB.open("userData", 1);
  };
  useEffect(() => {
    indexDBCycle();
  }, []);

  return (
    <globalObj.Provider>
      <div className="App">
        <Main>
          <Navbar />
          <HighLighter />
          <SecondNav />

          <Routes>
            <Route path="/" element={<Beginner shh={true} />} />
            <Route path="/Beginner" element={<Beginner shh={true} />} />
            <Route
              path="/Beginner/TimeComplexity"
              element={<Beginner shh={false} />}
            />

            <Route path="/Beginner/Arrays" element={<Beginner shh={false} />} />
            <Route
              path="/Beginner/LinkedList"
              element={<Beginner shh={false} />}
            />
            <Route
              path="/Beginner/Strings"
              element={<Beginner shh={false} />}
            />
            <Route path="/Beginner/Stacks" element={<Beginner shh={false} />} />

            <Route path="/Medium" element={<Medium />} />
            <Route path="/Medium/Recursion" element={<Medium />} />
            <Route path="/Medium/Trees" element={<Medium />} />
            <Route path="/Medium/Hashing" element={<Medium />} />
            <Route path="/Medium/BitManipulation" element={<Medium />} />
            <Route path="/Medium/Backtracking" element={<Medium />} />
            <Route path="/Medium/Greedy" element={<Medium />} />
            <Route path="/Medium/Heaps" element={<Medium />} />
            <Route path="/Medium/BinarySearchTrees" element={<Medium />} />
            <Route path="/Medium/Tries" element={<Medium />} />
            <Route path="/Medium/MustDo" element={<Medium />} />

            <Route path="/Advanced" element={<Advanced />} />
            <Route path="/Advanced/Graphs" element={<Advanced />} />
            <Route path="/Advanced/Dp" element={<Advanced />} />
            <Route path="/Advanced/Maths" element={<Advanced />} />
          </Routes>
        </Main>
      </div>
    </globalObj.Provider>
  );
}

export default App;
