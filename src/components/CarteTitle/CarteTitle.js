import React from "react";
import PropTypes from "prop-types";
import "./CarteTitle.css";

const CarteTitle = props => {
  const { title, subtitle } = props;
  return (
    <div className="carte-title">
      <div className="wrapper">
        <h2 className="title">{title}</h2>
        <div className="underline" />
      </div>
      <h3 className="subtitle">{subtitle}</h3>
    </div>
  );
};

CarteTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

CarteTitle.defaultProps = {
  title: "",
  subtitle: ""
};

export default CarteTitle;
