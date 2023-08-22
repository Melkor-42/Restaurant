import './styles/MenuEveryDay.css'

const MenuEveryDay = ({foods}) => {
  return (
    <div className="menu-every-day-container">
      <h2 className="week-offer">Ponuka na celý týždeň.</h2>
        {foods.map((food, index) => (
            <div key={index} className="every-day-food-row">
              <p className="menu-every-day-food-name">{food.name}</p>
              {food.price ? <td className="menu-every-day-food-price">{food.price}</td> : null}
            </div>
        ))}
    </div>
  );
};

export default MenuEveryDay;
