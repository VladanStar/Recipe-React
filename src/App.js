import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";

const API_KEY = "Your-api-key";

class App extends Component {
  state = {
    recipes: [],
  };

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
    );
    console.log(recipeName);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="header bg-primary p-3 mb-3">
          <h1 className="title text-light ">Recipe search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}
export default App;
