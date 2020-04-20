import React from "react";
import { Animated } from "react-animated-css";
import californiaIcon from "../../assets/images/california-rolls-icon.png";
import clock from "../../assets/images/clock-icon.png";
import facebook from "../../assets/images/fb-icon.png";
import instagram from "../../assets/images/insta-icon.png";
import smiley from "../../assets/images/smiley.png";
import "./WelcomeBlock.css";

class WelcomeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
    this.interval = null;
    this.facebookUrl = "https://www.facebook.com/toroyatoulouse/";
    this.instagramUrl = "https://www.instagram.com/toroyarolls/";
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { date } = this.state;
    const day = date.toLocaleDateString("fr-FR", {
      weekday: "long"
    });
    const hour = date.getHours();
    const min = date.getMinutes();
    let status = "";
    if (day === "dimanche") status = "fermé";
    else if ((hour >= 12 && hour < 14 && min < 30) || (hour >= 19 && hour < 22))
      status = "ouvert";
    else status = "fermé";
    const time = `${hour < 10 ? `0${hour}` : hour}h${
      min < 10 ? `0${min}` : min
    }`;
    return (
      <section className="welcome-block">
        <div className="container">
          <div className="wrapper">
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible>
              <div className="welcome-msg fadeIn">
                <img
                  className="badge"
                  src={californiaIcon}
                  alt="california rolls"
                />
                <h1 className="title">Bienvenue chez Toroya</h1>
                <h2 className="subtitle">
                  Restaurant japonais cuisine traditionnelle et contemporaine
                </h2>
                <p className="description">
                  Découvrez notre ambiance chaleureuse, nous vous proposons une
                  cuisine japonaise à la fois traditionnelle, contemporaine et
                  savoureuse afin d&apos;éveiller vos papilles. Sur place, à
                  emporter ou en livraison, dégustez nos traditionnels sushi,
                  maki ou sashimi et découvrez nos plats signatures : Toroya
                  rolls. Envie de chaud ? Nous proposons également des yakitori
                  cuit à la plancha ou des nouilles sautées ! N&apos;hésitez
                  plus et venez découvrir une cuisine authentique où finesse
                  rime avec gourmandise
                  <img className="smiley" src={smiley} alt="smiley" />
                </p>
                <p className="schedule">
                  <img src={clock} alt="clock" />
                  {time} - C’est&nbsp;
                  {day}, on est&nbsp;
                  {status}
                </p>
              </div>
            </Animated>
          </div>
          <div className="home-footer">
            <div className="container">
              <div className="social">
                <p>Suivez-nous</p>
                <a
                  href={this.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a
                  href={this.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
              <div className="phone">
                Réservation et commande à emporter: <span>05 61 23 67 92</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WelcomeBlock;
