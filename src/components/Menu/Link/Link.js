import React from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = props => {
  const { children, href, value } = props;
  return (
    <a className="link active" href={href}>
      {children}
      <span>{value}</span>
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  value: PropTypes.string
};

Link.defaultProps = {
  children: false,
  href: "",
  value: ""
};

export default Link;
