import React, { useState, useEffect } from 'react';
import './styles/FoodTable.css';
import MenuDay from './MenuDay';
import MenuEveryDay from './MenuEveryDay';
import MenuInfo from './MenuInfo';
import { menuInfoProps as defaultMenuInfoProps, weekMenu as defaultWeekMenu, everyDayMenu as defaultEveryDayMenu } from '../menuData';


const FoodTable = () => {
  
  const [menuInfoProps, setMenuInfoProps] = useState(defaultMenuInfoProps);
  const [weekMenu, setWeekMenu] = useState(defaultWeekMenu);
  const [everyDayMenu, setEveryDayMenu] = useState(defaultEveryDayMenu);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/home/ma220701/public_html/menu/menuData.js'); 
        // const response = await fetch('C:\\Users\\mizom\\Desktop\\Programs\\menu-website\\src\\menuData.js'); 
        const data = await response.json(); 

        setMenuInfoProps(data.menuInfoProps);
        setWeekMenu(data.weekMenu);
        setEveryDayMenu(data.everyDayMenu);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="food-table-container">
      <MenuInfo menuDate={menuInfoProps.menuDate} menuInfoText={menuInfoProps.menuInfoText}/>
        {Object.keys(weekMenu).map((day) => (
            <MenuDay key={day} day={day} foods={weekMenu[day]} />
        ))}
      <MenuEveryDay foods={everyDayMenu}/>
    </div>
  );
};

export default FoodTable;