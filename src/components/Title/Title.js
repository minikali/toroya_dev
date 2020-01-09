import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = props => {
  const { value, children } = props;
  return (
    <h1 className="main-title">
      {value}
      {children}
    </h1>
  );
};

Title.propTypes = {
  value: "",
  children: false
};

Title.defaultProps = {
  value: PropTypes.string,
  children: PropTypes.node
};

export default Title;
