import React from 'react';
import './App.css';
import Form from "./components/Form/Form"

function App() {
  getRecipe = ()=> {
    
  }
  return (
    <div className="App">
      <header className="header bg-primary p-3 mb-3">
        <h1 className="title text-light ">Recipe search</h1>

      </header>
      <Form />

    </div>

  );
}

export default App;
