import React from "react";
import "./header.css";
import headerImage from "../../assets/headerImage.png";
import seprator from "../../assets/seprator.png";
function Header() {
  return (
    <div className="header section-padding snowflakes">
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❄</div>
      <div className="header-image scale-up-center">
        <img src={headerImage} alt="header-picture" />
      </div>
      <div className="header-content slide-in-bottom">
        <div className="seprator-pic">
          <img src={seprator} alt="mistletoe-seprator" />
        </div>
        <h1 className="gradient-text">¡Feliz Navidad!</h1>
        <p>
            Bienvenido a mi sitio web de Navidad, he preparado algunos regalos para ti que puedes obtener tan pronto como hagas clic en el botón de abajo.
        </p>

        <button>
          <a href="#gifts">Consigue tus regalos ahora mismo</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
