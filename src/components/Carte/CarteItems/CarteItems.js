import React from "react";
import PropTypes from "prop-types";
import "./CarteItems.css";

const CarteItems = props => {
  const { children } = props;
  return <div className="carte-items">{children}</div>;
};

CarteItems.propTypes = {
  children: PropTypes.node
};

CarteItems.defaultProps = {
  children: false
};

export default CarteItems;
