import React from "react";
import Link from "../Link/Link";
import logo from "../../../assets/images/logo_all_white_transparent.png";
import "./Nav.css";
import Background from "../../../assets/images/wave-pattern-header.png";

// Main navigation menu

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          url: "#lacarte",
          name: "Notre carte",
          index: 1
        },
        {
          url: "#contact",
          name: "Contact & Info",
          index: 2
        }
      ],
      showMenu: false
    };

    this.toggleShowMenu = this.toggleShowMenu.bind(this);
  }

  toggleShowMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    const navStyle = {
      backgroundImage: `url(${Background})`,
      zIndex: -10
    };
    const { links, showMenu } = this.state;
    return (
      <nav className="main-nav">
        <div className="wave-bg" style={navStyle} />
        <div className="container">
          <Link href="/">
            <img src={logo} alt="logo" className="toroya-logo" />
          </Link>
          <div
            onClick={this.toggleShowMenu}
            onKeyDown={this.toggleShowMenu}
            className="burger"
            role="button"
            tabIndex={0}
          >
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div
            onClick={this.toggleShowMenu}
            onKeyDown={this.toggleShowMenu}
            className={`ul ${showMenu ? "show" : ""}`}
            role="button"
            tabIndex={0}
          >
            {links.map(link => (
              <div className="li" key={link.index}>
                <Link href={link.url} value={link.name} />
              </div>
            ))}
            <div className="li">
              <a
                className="order-online"
                href="https://toroya.byclickeat.fr/order"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commander en ligne
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
