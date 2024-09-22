import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sommaire from "./Components/Sommaire";
import Score from "./Components/Score";

function App() {
  return (
    <div className="App">
      <Score />
      <Sommaire />
    </div>
  );
}

export default App;
