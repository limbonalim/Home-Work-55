import './App.css'
import Ingredients from '../../components/Ingredients/Ingredients';
import meatImage from '../../assets/meat.png';
import baconImage from '../../assets/bacon.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';

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


  return (
    <div>
      <Ingredients menu={INGREDIENTS}/>
    </div>
  )
};

export default App
