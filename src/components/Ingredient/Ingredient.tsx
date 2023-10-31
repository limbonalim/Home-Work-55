import React from 'react';
import './Ingredient.css';

interface Props {
  name: string;
  image: string;
  quantity: number;
  price: number;
}

const Ingredient: React.FC<Props> = ({name, quantity, price, image}) => {
  return (
    <div className="Ingredient">
      <img src={image} alt={name}/>
      <span>{name}</span>
      <span>Price: {price}</span>
      <span>x {quantity}</span>
      <button>Delete</button>
    </div>
  );
};

export default Ingredient;