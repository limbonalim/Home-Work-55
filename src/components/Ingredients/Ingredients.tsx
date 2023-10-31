import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import './Ingredients.css'

const Ingredients = ({menu}) => {
  return (
    <div className="Ingredients">
      {menu.map((item) => <Ingredient name={item.name} image={item.image} price={item.price} quantity={4}/>)}
    </div>
  );
};

export default Ingredients;