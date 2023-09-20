import React, { useState, useEffect } from 'react';
import FoodOffer from './FoodOffer';
import MenuInfo from './MenuInfo';
import DaysBar from './DaysBar';
import './WeekMenuComponents-css/WeekMenu.css';

function getCurrentUTCDay() {
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getUTCDay()];
}

const WeekMenu = () => {

  const [menuInfo, setMenuInfo] = useState({menuDate: "", menuInfoText: ""});
  const [weeklyMenu, setWeeklyMenu] = useState({"title": [{"name":"food","price":"0,0€"}]});
  const [dailyMenu, setDailyMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // For days bar.
  const [selectedDay, setSelectedDay] = useState(getCurrentUTCDay());

  useEffect(() => {

    const fetchData = async () => {
      try {
        // Fetch data from public folder.
        const response = await fetch('/menuData.json'); 
        const data = await response.json(); 
        
        setMenuInfo(data.menuInfo);
        setWeeklyMenu(data.weeklyMenu);
        setDailyMenu(data.dailyMenu)
        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
        
    fetchData();
  }, []);

  // TODO: Add loading animation.
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="week-menu">
      
      <MenuInfo menuDate={menuInfo.menuDate} menuInfoText={menuInfo.menuInfoText}/>
      <DaysBar selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>      
      <FoodOffer title={selectedDay} data={dailyMenu[selectedDay]}/>

      {/* Stable Menu for all days in week. */}
      {Object.keys(weeklyMenu).map((day) => (
        <FoodOffer key={day} title={day} data={weeklyMenu[day]}/>
      ))}
    </div>
  );
};

export default WeekMenu;
