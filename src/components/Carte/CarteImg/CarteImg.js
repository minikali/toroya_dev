import React from "react";
import PropTypes from "prop-types";
import "./CarteImg.css";

const CarteImg = props => {
  const { src, alt } = props;
  return (
    <div className="carte-img">
      <img src={src} alt={alt} />
      <p className="alt">{alt}</p>
    </div>
  );
};

CarteImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

CarteImg.defaultProps = {
  src: "",
  alt: ""
};

export default CarteImg;
