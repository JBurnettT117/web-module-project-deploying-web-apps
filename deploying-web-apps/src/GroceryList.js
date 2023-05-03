import React from 'react';

const GroceryList = ({groceries, handleDelete}) => {
    return(
        <div>
        <h1>Grocery List Test</h1>
        <h3>{groceries.map((item) => {
            return(
                <div key={item} className='item'>
                <p className='listItem'>{item}</p>
                <button onClick={() => handleDelete(item)}>Delete</button>
                </div>
            )
        })}</h3>
        </div>
    )
}

export default GroceryList;