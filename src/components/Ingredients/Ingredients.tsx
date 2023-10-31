import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const Ingredients = ({menu}) => {
  return (
    <div>
      {menu.map((item) => <Ingredient name={item.name} image={item.image} quantity={4}/>)}
    </div>
  );
};

export default Ingredients;