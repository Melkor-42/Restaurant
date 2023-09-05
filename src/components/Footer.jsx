import './styles/Footer.css';

const Footer = () => {
  const phoneNumber1 = '+421915790380';
  const phoneNumber2 = '+421915790381';
  const address = 'J. Grešáka 1A, 08501 Bardejov, Slovensko';
  const encodedAddress = encodeURIComponent(address);

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>Kontakt:</h3>
        <p>Email: mattbardejov@gmail.com</p>
        <p onClick={() => handlePhoneClick(phoneNumber1)}>Telefón: <a href={`tel:${phoneNumber1}`}>{phoneNumber1}</a></p>
        <p onClick={() => handlePhoneClick(phoneNumber2)}>Telefón: <a href={`tel:${phoneNumber2}`}>{phoneNumber2}</a></p>
        <p>Adresa: <a href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`} target="_blank" rel="noopener noreferrer">{address}</a></p>
      </div>
    </footer>
  );
};

export default Footer;