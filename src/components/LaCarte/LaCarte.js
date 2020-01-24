import React from "react";
import Title from "../Title/Title";
import NavCarte from "../NavCarte/NavCarte";
import CarteContent from "../CarteContent/CarteContent";
import "./LaCarte.css";

class LaCarte extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIndex: [true, false, false, false, false, false, false]
    };

    this.menuIndexHandler = this.menuIndexHandler.bind(this);
  }

  menuIndexHandler(index) {
    this.setState(prevState => ({
      menuIndex: prevState.menuIndex.map((value, key) => key === index)
    }));
  }

  render() {
    const { menuIndex } = this.state;
    return (
      <section id="lacarte" className="lacarte">
        <div className="container">
          <div className="lacarte-header">
            <Title>NOTRE CARTE</Title>
            <NavCarte
              menuIndexHandler={this.menuIndexHandler}
              menuIndex={menuIndex}
            />
          </div>
          <CarteContent menuIndex={menuIndex} />
        </div>
      </section>
    );
  }
}

export default LaCarte;
