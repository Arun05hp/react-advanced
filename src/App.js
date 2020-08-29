import React from "react";
import Movie from "./hoc/Movie";
import "./App.css";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";

function App() {
  return (
    <div>
      <Movie />
      <Counter />
      <Users />
    </div>
  );
}

export default App;
