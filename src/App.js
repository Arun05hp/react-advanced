import React, { Component } from "react";
import Movie from "./hoc/Movie";
import "./App.css";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("getting the user: " + username);
    const user = { name: "Ak" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };
  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <Movie />
          <Counter />
          <Users />
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
