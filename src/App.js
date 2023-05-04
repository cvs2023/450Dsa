import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Topic } from "./components/topics";
import { Navbar } from "./components/navbar";
import { SecondNav } from "./components/SecondNav";
import Arrays from "./components/arrays";
function App() {
  return (
    <div className="App">
      <Main>
        <Navbar />
        <SecondNav />

        <Routes>
          <Route path="/" element={<Topic />} />
          <Route path="/home" element={<Topic />} />
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
