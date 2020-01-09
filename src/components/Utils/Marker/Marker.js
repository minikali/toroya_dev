import React from "react";
import PropTypes from "prop-types";
import marker from "../../../assets/images/marker.png";
import "./Marker.css";

const Marker = props => {
  const { text } = props;
  return (
    <div className="marker">
      <div className="wrapper">
        <img src={marker} alt={text} />
      </div>
      <p className="text">{text}</p>
    </div>
  );
};

Marker.propTypes = {
  text: PropTypes.string
};

Marker.defaultProps = {
  text: ""
};

export default Marker;
