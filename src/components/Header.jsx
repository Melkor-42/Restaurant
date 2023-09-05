import './styles/Header.css';
import NavigationBar from './NavigationBar';
import {useLocation } from 'react-router-dom';

const Header = () => {


  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="Header">
      <NavigationBar />
      <div className='header-content'>
        {currentPath === "/" ? ( 
            <p className="header-text">DENNÉ MENU</p>
          ) :(
            <p className="header-text">Reštaurácia M</p>
          )
        }
      </div>
    </div>
  );
};
  
export default Header;