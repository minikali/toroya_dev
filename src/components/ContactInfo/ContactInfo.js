import React from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import Title from "../Title/Title";
import schedule from "../../assets/images/schedule-icon.png";
import address from "../../assets/images/address-icon.png";
import telephone from "../../assets/images/telephone-icon.png";
import Marker from "../Utils/Marker/Marker";
import "./ContactInfo.css";

const ContactInfo = () => {
  const googleApiKey = "AIzaSyDZsaAfELPRQyvLKzEcSvQoYS-zaK6HR1M";
  const position = {
    lat: 43.6045333,
    lng: 1.4385865
  };
  const { lat, lng } = position;
  const zoom = 16;
  return (
    <section id="contact" className="contact-info">
      <Title>CONTACT &amp; INFOS</Title>
      <div className="container">
        <div className="left">
          <h2 className="title">
            Restaurant Japonais
            <br />
            SUR PLACE ET À EMPORTER
          </h2>
          <div className="wrapper">
            <div className="info">
              <div className="info-left">
                <img className="info-img" src={schedule} alt="Horaire" />
              </div>
              <div className="info-right">
                <p className="info-item">Ouvert 7j/7 </p>
                {/* <p className="info-item">Fermé le dimanche</p> */}
                <p className="info-item">Midi : 12h00 - 14h30</p>
                <p className="info-item">Soir : 19h00 - 22h00</p>
              </div>
            </div>
            <div className="info">
              <div className="info-left">
                <img className="info-img" src={address} alt="Adresse" />
              </div>
              <div className="info-right">
                <p className="info-item">42 Rue Pargaminières</p>
                <p className="info-item">31000 Toulouse</p>
              </div>
            </div>
            <div className="info">
              <div className="info-left">
                <img className="info-img" src={telephone} alt="Téléphone" />
              </div>
              <div className="info-right">
                <p className="info-item">
                  Réservation
                  <br />
                  et vente à emporter
                </p>
                <p className="info-item">05 61 23 67 92</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <GoogleMapReact
              bootstrapURLKeys={{ key: googleApiKey }}
              defaultCenter={position}
              defaultZoom={zoom}
            >
              <Marker lat={lat} lng={lng} text="Restaurant Toroya" />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactInfo.propTypes = {
  google: PropTypes.shape({}).isRequired
};

ContactInfo.defaultProps = {};

export default ContactInfo;
