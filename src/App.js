import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import WeekMenu from './components/WeekMenuComponents/WeekMenu';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {

  return (
    <div className="App">
       <Router>

        <NavigationBar />
        <Header/>
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<WeekMenu/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
