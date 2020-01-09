import React from "react";
import PropTypes from "prop-types";
import "./HrTitle.css";

const HrTitle = props => {
  const { children } = props;
  return (
    <div className="hr-title">
      <div className="line" />
      <h1>{children}</h1>
      <div className="line" />
    </div>
  );
};

HrTitle.propTypes = {
  children: false
};

HrTitle.defaultProps = {
  children: PropTypes.node
};

export default HrTitle;
