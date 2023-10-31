import './Burger.css'

const Burger = ({price}) => {
  return (
    <div>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <div className="Salad"></div>
        <div className="Cheese"></div>
        <div className="Bacon"></div>
        <div className="Meat"></div>
        <div className="BreadBottom"></div>
      </div>
      <div className="Price">Price: {price}</div>
    </div>

);
};
export default Burger;