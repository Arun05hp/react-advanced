import React from "react";
import Movie from "./hoc/Movie";
import "./App.css";
import Counter from "./hooks/Counter";

function App() {
  return (
    <div>
      <Movie />
      <Counter />
    </div>
  );
}

export default App;
