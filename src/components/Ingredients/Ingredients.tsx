import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import {Filling, Counter} from '../../types';
import './Ingredients.css';

interface Props {
  menu: Filling[];
  count: Counter[];
  addHandler: (name: string) => void;
  deleteHandler: (name: string, index: number) => void;
}

const Ingredients: React.FC<Props> = ({menu, addHandler, deleteHandler, count}) => {

  return (
    <div className="Ingredients">
      {menu.map((item, index) => <Ingredient key={index}
                                             name={item.name}
                                             image={item.image}
                                             price={item.price}
                                             quantity={count[index].count}
                                             addHandler={() => addHandler(item.name)}
                                             deleteHandler={() => deleteHandler(item.name, count[index].count)}/>)}
    </div>
  );
};

export default Ingredients;