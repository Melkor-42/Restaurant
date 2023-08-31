import React from 'react';
import './App.css';
import Header from './components/Header';
import FoodTable from './components/FoodTable';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {

  return (
    <div className="App">
       <Router>
        <NavigationBar />
        <Header/>
        <Routes>
          <Route exact path="/" element={<FoodTable/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
