import cooking_background4 from './cooking_background4.jpg';
import './styles/Header.css';


const Header = () => {
    return (
      <div className="Header">
        <img className="header-image" src={cooking_background4} alt="header" />
        <h1 className="header-text">Denné Menu</h1>
      </div>
    );
  };
  
export default Header;