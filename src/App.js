import React, { Component} from 'react';
import './App.css';
import Form from "./components/Form/Form"

class App extends Component {

  getRecipe() {
    console.log("Working")
  }

  render(){
    return (
      <div className="App">
        <header className="header bg-primary p-3 mb-3">
          <h1 className="title text-light ">Recipe search</h1>

        </header>
        <Form getRecipe={this.getRecipe}/>

      </div>

    );
  }
}
export default App;
