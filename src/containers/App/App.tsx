import {useState} from 'react';
import Ingredients from '../../components/Ingredients/Ingredients';
import Burger from '../../components/Burger/Burger';
import meatImage from '../../assets/meat.png';
import baconImage from '../../assets/bacon.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import './App.css';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Bacon', price: 60, image: baconImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
  ]);

  return (
    <div className="Container">
      <Ingredients menu={INGREDIENTS}/>
      <Burger/>
    </div>
  );
};

export default App;
