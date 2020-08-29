import React, { Component } from "react";
import Movie from "./hoc/Movie";
import "./App.css";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
  state = { currentUser: { name: "Ak" } };
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <Movie />
          <Counter />
          <Users />
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
