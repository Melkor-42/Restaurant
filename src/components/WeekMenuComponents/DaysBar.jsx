// import React, { useState } from 'react';
import './WeekMenuComponents-css/DaysBar.css';

const DaysBar = ({ selectedDay, setSelectedDay }) => {

    // const [selectedDay, setSelectedDay] = useState(initialSelectedDay);
  
    return (
        <div className="days-bar">
            <button 
                className={`day ${selectedDay === 'Monday' ? 'selected' : ''}`} 
                onClick={() => setSelectedDay('Monday')}
            >
                Pondelok
            </button>
            <button 
                className={`day ${selectedDay === 'Tuesday' ? 'selected' : ''}`} 
                onClick={() => setSelectedDay('Tuesday')}
            >
                Utorok
            </button>
            <button 
                className={`day ${selectedDay === 'Wednesday' ? 'selected' : ''}`} 
                onClick={() => setSelectedDay('Wednesday')}
            >
                Streda
            </button>
            <button 
                className={`day ${selectedDay === 'Thursday' ? 'selected' : ''}`} 
                onClick={() => setSelectedDay('Thursday')}
            >
                Štvrtok
            </button>
            <button 
                className={`day ${selectedDay === 'Friday' ? 'selected' : ''}`} 
                onClick={() => setSelectedDay('Friday')}
            >
                Piatok
            </button>
        </div>
    );
};

export default DaysBar;
