import "./styles/MenuInfo.css"

const MenuInfo = ({menuDate, menuInfoText}) => {
    return(
        <div className="menu-info-container">
            <p className="menu-info-date">
                {menuDate}
            </p>            
            <p className="menu-info-text">
                {menuInfoText}
            </p>
        </div>
    );
};

export default MenuInfo;


