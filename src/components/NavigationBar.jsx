import './styles/NavigationBar.css';
// import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = ({ selectedOption }) => {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='navigation-bar'>
      <div className='nav-options'>
        <div><Link to="/" className={currentPath === "/" ? "selected" : ""}>MENU</Link></div>
        {/* <div><Link to="/about" className={currentPath === "/about" ? "selected" : ""}>About</Link></div> */}
      </div>
    </nav>
  );
};

export default NavigationBar;