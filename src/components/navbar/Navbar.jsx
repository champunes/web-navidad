import React, { useState } from "react";
import "./navbar.css";
import { FaWindowClose, FaSnowflake } from "react-icons/fa";
import logo from "../../assets/logo.png";
import mobileLogo from "../../assets/mobileLogo.png";

const Menu = () => (
  <>
    <p>
      <a href="#header">Inicio</a>
    </p>
    <p>
      <a href="#date">Fecha</a>
    </p>
    <p>
      <a href="#gifts">Regalos</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navigation-bar">
      <div className="navigation-bar-links">
        <div className="navigation-bar-logo">
          <img src={logo} />
        </div>
        <div className="navigation-bar-mobile-logo">
          <img src={mobileLogo} />
        </div>
        <div className="navigation-bar-items">
          <Menu />
        </div>
      </div>
      <div className="navigation-bar-right-section">
        <div className="navigation-bar-account">
          <p>Iniciar sesión</p>
          <button type="button">Registrarte</button>
        </div>
        <div className="navigation-bar-menu">
          {toggleMenu ? (
            <FaWindowClose
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <FaSnowflake
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="navigation-bar-menu-container swing-in-top-bck">
              <div className="navigation-bar-menu-container-links">
                <Menu />
                <div className="navigation-bar-menu-container-account">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
