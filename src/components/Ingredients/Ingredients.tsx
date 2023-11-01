import React, {useState} from 'react';
import Ingredient from '../Ingredient/Ingredient';
import './Ingredients.css'

const Ingredients = ({menu, addHandler, deleteHandler, count}) => {
// let quantity: number;


  return (
    <div className="Ingredients">
      {menu.map((item, index) => <Ingredient key={index} name={item.name} image={item.image} quantity={count[index].count} addHandler={() => addHandler(item.name)} deleteHandler={() => deleteHandler(item.name, count[index].count)}/>)}
    </div>
  );
};

export default Ingredients;