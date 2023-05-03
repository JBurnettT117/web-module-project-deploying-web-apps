import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList';
import React from 'react';
import { useState } from 'react';
//make grocery list and create an array of items to be mapped over to display on screen.





function App() {

  const [ groceries, setGroceries ] = useState(["beef", "bread"]);
  let newGrocery = "";

  const onChange = (evt) => {
    console.log(evt.target.value);
    newGrocery = evt.target.value;
  }

  const handleDelete = (oldItem) => {
    const newGroceries = groceries.filter((item) => item !== oldItem);
    setGroceries(newGroceries);
  }

  const handleAdd =(evt) => {
    evt.preventDefault();
    console.log(newGrocery);
    setGroceries([...groceries, newGrocery]);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
        <form onSubmit={handleAdd}>
          <input onChange={onChange}type='text' placeholder='enter groceries here!'/>
          <button>Add</button>
        </form>
      <GroceryList groceries={groceries} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
