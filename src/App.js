import React from 'react';
import './App.css';
import Header from './components/Header';
import FoodTable from './components/FoodTable';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <FoodTable />
      <Footer />
    </div>
  );
}

export default App;


