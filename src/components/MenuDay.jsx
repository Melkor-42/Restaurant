import './styles/MenuDay.css'

const MenuDay = ({ day, foods }) => {
  return (
    <div className="menu-day-container">
        <h2 className="day">{day}</h2>      
        {foods.map((food, index) => (
          <div key={index} className="food-row">
            <p className="food-name">{food.name}</p>        
            {food.price ? <p className="food-price">{food.price}</p> : null}
          </div>
        ))}                
    </div>    
  );
};

export default MenuDay;
