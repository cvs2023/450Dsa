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
        <Topic />

        <Routes>
          <Route path="/" element={<Arrays />} />
        </Routes>
      </Main>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
