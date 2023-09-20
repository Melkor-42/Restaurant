import './WeekMenuComponents-css/FoodOffer.css'

const FoodOffer = ({title, data}) => {

    switch (title) {
        case 'Monday':
          title = 'Pondelok';
          break;
          case 'Tuesday':
            title = 'Utorok';
            break;
        case 'Wednesday':
            title = 'Streda';
            break;
        case 'Thursday':
            title = 'Štvrtok';
            break;
        case 'Friday':
            title = 'Piatok';
            break;
        case 'Saturday':
            title = 'Sobota';
            break;
        case 'Sunday':
            title = 'Nedeľa';
            break;
      }
      


    return (
        <div className="food-offer-container">
            <h2 className="title">{title}</h2>
            {data.map((offer, index) => (
                <div key={index} className="food-row">
                    <div className="food-name">{offer.name}</div>
                    {offer.price ? <div className="food-price">{offer.price}</div> : null}
                </div>
            ))}
        </div>
    );
};

export default FoodOffer;
