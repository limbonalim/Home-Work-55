import {useState} from 'react';
import Ingredients from '../../components/Ingredients/Ingredients';
import Burger from '../../components/Burger/Burger';
import {Filling, Counter} from '../../types';
import meatImage from '../../assets/meat.png';
import baconImage from '../../assets/bacon.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import './App.css';

const INGREDIENTS: Filling[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Bacon', price: 60, image: baconImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState<Counter[]>([
    {name: 'Meat', count: 1},
    {name: 'Bacon', count: 0},
    {name: 'Cheese', count: 1},
    {name: 'Salad', count: 1},
  ]);
  const [total, setTotal] = useState(170);

  const addIngredient = (name) => {
    let price = INGREDIENTS.reduce((acc, item) => {
      if (item.name === name) {
        return acc + item.price;
      }
      return acc;
    }, 0);
    setTotal(prevState => prevState + price);
    setIngredients(prevState => prevState.map((item) => {
      if (name === item.name) {
        return {...item, count: item.count + 1};
      }
      return item;
    }));
  };

  const deleteIngredient = (name, quantity) => {
    if (quantity > 0) {
      let price = INGREDIENTS.reduce((acc, item) => {
        if (item.name === name) {
          return acc + item.price;
        }
        return acc;
      }, 0);
      setTotal(prevState => {
        if (prevState > 30) {
          return prevState - price;
        } else {
          return 30;
        }
      });
      setIngredients(prevState => prevState.map((item) => {
        if (name === item.name && item.count > 0) {
          return {...item, count: item.count - 1};
        }
        return item;
      }));
    }
  };

  return (
    <div className="Container">
      <Ingredients menu={INGREDIENTS} count={ingredients} addHandler={addIngredient} deleteHandler={deleteIngredient}/>
      <Burger price={total} ingredients={ingredients}/>
    </div>
  );
};

export default App;
