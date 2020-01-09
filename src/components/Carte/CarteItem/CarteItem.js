import React from "react";
import PropTypes from "prop-types";
import "./CarteItem.css";

// style: "" | normal | rolls
// It defines the style of css to use to print the items
// depending on whichthe menu section
//
// Do not use the prop 'misc' when using rolls style

const CarteItem = props => {
  const { src, alt, name, info, misc, price, theme, int, ext } = props;
  let formattedPrice;
  if (price instanceof Array) {
    formattedPrice = price.map(value => {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR"
      }).format(value);
    });
  } else {
    formattedPrice = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR"
    }).format(price);
  }

  return (
    <div className={`carte-item ${theme}`}>
      <div className="wrapper">
        <img src={src} alt={alt} />
        <p className="rolls-int">Int:&nbsp;{int}</p>
        <p className="rolls-ext">Ext:&nbsp;{ext}</p>
      </div>
      <div className="item-wrapper">
        <p className="item-name">{name}</p>
        <p className="item-info">{info}</p>
        <p className="item-misc">{misc}</p>
        <p className="item-price">
          {formattedPrice instanceof Array
            ? formattedPrice.join("/")
            : formattedPrice}
        </p>
      </div>
    </div>
  );
};

CarteItem.defaultProps = {
  src: "",
  alt: "",
  info: "",
  misc: "",
  price: 0,
  theme: "",
  int: "",
  ext: ""
};

CarteItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  info: PropTypes.string,
  misc: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  theme: PropTypes.string,
  int: PropTypes.string,
  ext: PropTypes.string
};

export default CarteItem;
