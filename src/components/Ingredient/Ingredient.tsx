import React from 'react';
import './Ingredient.css';

interface Props {
  name: string;
  image: string;
  quantity: number;
  price: number;
  addHandler: React.MouseEventHandler;
  deleteHandler: React.MouseEventHandler;
}

const Ingredient: React.FC<Props> = ({name, quantity, price, image, addHandler, deleteHandler}) => {
  return (
    <div className="Ingredient">
      <div className="info" onClick={addHandler}>
        <img src={image} alt={name}/>
        <span>{name}</span>
        <span>x {quantity}</span>
      </div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Ingredient;