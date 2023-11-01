import './Burger.css';
import {Counter} from '../../types';
import React from 'react';

interface Props {
  price: number;
  ingredients: Counter[];
}

const Burger: React.FC<Props> = ({price, ingredients}) => {
  const getIngredients = (ingredients) => {
    return ingredients.reduce((acc, item) => {
      if (item.count > 0) {
        for (let i = 0; i < item.count; i++) {
          acc.push(<div key={acc.length} className={item.name}></div>);
        }
      }
      return acc;
    }, []);
  };
  let ingredientsList = getIngredients(ingredients);

  return (
    <div>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {ingredientsList}
        <div className="BreadBottom"></div>
      </div>
      <div className="Price">Price: {price}</div>
    </div>

  );
};
export default Burger;