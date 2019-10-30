import React from "react";
import "./App.css";
import Ticker from "./components/Ticker";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Ticker />
      </header>
    </div>
  );
};

export default App;
