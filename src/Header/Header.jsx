import './Header.css';
import { useState } from 'react';

export const Header = ({ showSignUpBtn = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="initPageHeader">
      <img
        src="https://img.freepik.com/free-vector/dog-abstract-outline-logo_530521-1355.jpg?ga=GA1.1.1678703634.1718646592&semt=ais_hybrid"
        alt="webSiteLogo"
        className="logo"
      />

      <div className="dropdown-container">
        <button onClick={toggleDropdown} className="dropdown-btn">
          Nossos Pets
        </button>

        {isOpen && (
          <div className="dropdown-content">
            <div className="dropdown-row">
              <div className="dropdown-option">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/dog.png"
                  alt="dog icon"
                />
                <span>Cachorríneos</span>
              </div>
              <div className="dropdown-option">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/cat.png"
                  alt="cat icon"
                />
                <span>Gatíneos</span>
              </div>
            </div>
            <div className="dropdown-row">
              <div className="dropdown-option">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/bird.png"
                  alt="bird icon"
                />
                <span>Passaríneos</span>
              </div>
              <div className="dropdown-option">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/lizard.png"
                  alt="lizard icon"
                />
                <span>Outros bichíneos</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Aqui trocamos entre o botão "Cadastre-se" e o GIF */}
      {showSignUpBtn ? (
        <button className="signInBtn">Cadastre-se</button>
      ) : (
        <video
          className="signUpGif"
          autoPlay
          loop
          muted
          width={100}
          height={100}
        >
          <source
            src="https://cdn-icons-mp4.freepik.com/128/17539/17539338.mp4?ga=GA1.1.1678703634.1718646592&semt=ais_hybrid"
            type="video/mp4"
          />
        </video>
      )}
    </header>
  );
};

export default Header;
