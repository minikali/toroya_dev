import React from "react";
import PropTypes from "prop-types";
import underline from "../../assets/images/brush-underline.png";
import "./NavCarte.css";

const NavCarte = props => {
  const { menuIndex } = props;
  return (
    <nav className="nav-carte">
      <div
        className="item"
        onClick={() => props.menuIndexHandler(0)}
        onKeyDown={() => props.menuIndexHandler(0)}
        role="button"
        tabIndex={0}
      >
        <p>
          MENUS,
          <br />
          PLATEAUX
        </p>
        <div className={`wrapper ${!menuIndex[0] && "hide"}`}>
          <img src={underline} alt="brush underline" />
        </div>
      </div>
      <div
        className="item"
        onClick={() => props.menuIndexHandler(1)}
        onKeyDown={() => props.menuIndexHandler(1)}
        role="button"
        tabIndex={0}
      >
        <p>
          ENTRÉES,
          <br />
          HORS D’ŒUVRES
        </p>
        <div className={`wrapper ${!menuIndex[1] && "hide"}`}>
          <img src={underline} alt="brush underline" />
        </div>
      </div>
      <div
        className="item"
        onClick={() => props.menuIndexHandler(2)}
        onKeyDown={() => props.menuIndexHandler(2)}
        role="button"
        tabIndex={0}
      >
        <p>
          TOROYA
          <br />
          ROLLS
        </p>
        <div className={`wrapper ${!menuIndex[2] && "hide"}`}>
          <img src={underline} alt="brush underline" />
        </div>
      </div>
      <div
        className="item"
        onClick={() => props.menuIndexHandler(3)}
        onKeyDown={() => props.menuIndexHandler(3)}
        role="button"
        tabIndex={0}
      >
        <p>
          MAKI,
          <br />
          CALIFORNIA
        </p>
        <div className={`wrapper ${!menuIndex[3] && "hide"}`}>
          <img src={underline} alt="brush underline" />
        </div>
      </div>
      <div
        className="item"
        onClick={() => props.menuIndexHandler(4)}
        onKeyDown={() => props.menuIndexHandler(4)}
        role="button"
        tabIndex={0}
      >
        <p>
          SUSHI,
          <br />
          SASHIMI
        </p>
        <div className={`wrapper ${!menuIndex[4] && "hide"}`}>
          <img src={underline} alt="brush underline" />
        </div>
      </div>
      <div
        className="item"
        onClick={() => props.menuIndexHandler(5)}
        onKeyDown={() => props.menuIndexHandler(5)}
        role="button"
        tabIndex={0}
      >
        <p>
          TEMPURA,
          <br />
          YAKITORI
        </p>
        <div className={`wrapper ${!menuIndex[5] && "hide"}`}>
          <img src={underline} alt="brush underline" />
        </div>
      </div>
      <div
        className="item"
        onClick={() => props.menuIndexHandler(6)}
        onKeyDown={() => props.menuIndexHandler(6)}
        role="button"
        tabIndex={0}
      >
        <p>
          BOISSONS,
          <br />
          DESSERTS
        </p>
        <div className={`wrapper ${!menuIndex[6] && "hide"}`}>
          <img src={underline} alt="brush underline" />
        </div>
      </div>
    </nav>
  );
};

NavCarte.defaultProps = {
  menuIndex: [true, false, false, false, false, false],
  menuIndexHandler: false
};

NavCarte.propTypes = {
  menuIndex: PropTypes.arrayOf(PropTypes.bool),
  menuIndexHandler: PropTypes.func
};

export default NavCarte;
