import React from "react";
import PropTypes from "prop-types";
import HrTitle from "../Utils/HrTitle/HrTitle";
import CarteTitle from "../CarteTitle/CarteTitle";
import CarteItems from "../Carte/CarteItems/CarteItems";
import CarteItem from "../Carte/CarteItem/CarteItem";
import CarteImg from "../Carte/CarteImg/CarteImg";
import saladeChou from "../../assets/images/salade-chou.png";
import nouille from "../../assets/images/nouille.png";
import futoRoll from "../../assets/images/futo-roll.png";
import hawaiiRoll from "../../assets/images/hawaii-roll.png";
import crunchyRoll from "../../assets/images/crunchy-roll.png";
import tigerRoll from "../../assets/images/tiger-roll.png";
import rainbowRoll from "../../assets/images/rainbow-roll.png";
import dragonRoll from "../../assets/images/dragon-roll.png";
import samouraiRoll from "../../assets/images/samourai-roll.png";
import sushi from "../../assets/images/sushi.png";
import maki from "../../assets/images/maki.png";
import sashimi from "../../assets/images/sashimi.png";
import tempura from "../../assets/images/tempura.png";
import yakitori from "../../assets/images/yakitori.png";
import "./CarteContent.css";

// props to use for CarteItem depending on the theme
// NORMAL THEME: name, info, misc, price
// ROLLS THEME: src, alt, name, price, theme="rolls", int, ext

const CarteContent = props => {
  const { menuIndex } = props;

  return (
    <div className="carte-content">
      <ul className="container">
        {/* MENU, PLATEAUX */}
        <li className={`page${menuIndex[0] ? " show" : ""}`}>
          <HrTitle>Seulement le midi</HrTitle>
          <div className="menu-lunch">
            <div className="menu-item">
              <h2>MATSURI SUSHI - 10,80 €</h2>
              <p>8 california sake + 4 sushi</p>
            </div>
            <div className="menu-item">
              <h2>TOROYA SUSHI - 13,80 €</h2>
              <p>
                Soupe miso + Salade de chou + Riz nature parfumé
                <br />
                Assortiment de sushi :
                <br />
                6 maki, 4 sushi, 2 sashimi
                <br />
              </p>
            </div>
            <div className="menu-item">
              <h2>TOROYA YAKITORI - 13,80 €</h2>
              <p>
                Soupe miso + Salade de chou + Riz nature parfumé
                <br />
                Assortiment de 6 yakitori :
                <br />
                bœuf, bœuf au fromage, poulet, poisson, légumes
                <br />
              </p>
            </div>
          </div>
          <HrTitle>Midi et soir</HrTitle>
          <div className="menu-dinner">
            <div className="menu-item">
              <h2>MENU DÉGUSTATION - 18 €</h2>
              <p>
                Soupe Miso ou Salade de chou
                <br />
                18 pièces : 1 sushi saumon, 1 sushi saumon cheese, 2 sushi thon,
                6 maki saumon et 8 California saumon
              </p>
            </div>
            <div className="menu-item">
              <h2>MENU DÉCOUVERTE - 32 €</h2>
              <p>
                Soupe Miso ou Salade de chou
                <br />
                30 pièces : 2 sushi saumon, 2 sushi saumon cheese, 2 sushi thon,
                2 sushi saumon avocat, 6 maki thon, 6 maki saumon, 8 california
                saumon, 1 sashimi thon et 1 sashimi saumon
              </p>
            </div>
            <div className="menu-item">
              <h2>SHOGUN - 24,90 €</h2>
              <p>
                Soupe miso + Salade de poisson + Riz nature parfumé
                <br />
                Assortiment de 6 maki, 5 sushi et 6 sashimi
              </p>
            </div>
            <div className="menu-item">
              <h2>
                TOKYO - 58 €<span> (2 pers.)</span>
              </h2>
              <p>
                2 Soupes Miso ou 2 Salades de chou
                <br />
                2 Riz sautés maison
                <br />
                40 pièces : assortiment de sashimi, sushi et maki
              </p>
            </div>
          </div>
        </li>
        {/* ENTRÉES, HORS D’ŒUVRES */}
        <li className={`page${menuIndex[1] ? " show" : ""}`}>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle title="ENTRÉES" />
              <div className="carte-container">
                <div className="carte-wrapper">
                  <CarteItem name="Salade de choux" price={3.2} />
                  <CarteItem
                    name="Salade wakame"
                    info="algues et sésame"
                    price={4.5}
                  />
                  <CarteItem
                    name="Salade de poissons"
                    info="choux, saumon frais"
                    price={5.2}
                  />
                  <CarteItem
                    name="Salade Toroya"
                    info="choux, ananas, crevettes"
                    price={5.2}
                  />
                  <CarteItem name="Edamame" info="fèves de soja" price={3.9} />
                  <CarteItem name="Soupe miso" price={3.2} />
                </div>
                <CarteImg src={saladeChou} alt="Salade de Choux" />
              </div>
            </CarteItems>
          </div>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle title="HORS D’ŒUVRES" />
              <div className="carte-container reverse">
                <div className="carte-wrapper">
                  <CarteItem name="Riz nature parfumé " price={2.1} />
                  <CarteItem name="Riz vinaigré" price={2.8} />
                  <CarteItem name="Riz sauté maison" price={4.1} />
                  <CarteItem name="Nouilles sautées au poulet" price={10.9} />
                  <CarteItem
                    name="Nouilles sautées aux fruits de mer"
                    price={13.5}
                  />
                  <CarteItem
                    name="Chirashi"
                    info="tranches de saumon, riz vinaigré"
                    price={14.9}
                  />
                  <CarteItem
                    name="Pokeball"
                    info="riz vinaigré , tartare de saumon, avocat, edamame, choux, concombre"
                    price={13.9}
                  />
                </div>
                <CarteImg src={nouille} alt="Nouilles sautées au poulet" />
              </div>
            </CarteItems>
          </div>
        </li>
        <li className={`page${menuIndex[2] ? " show" : ""}`}>
          <div className="carte-section rolls">
            <CarteItems>
              <CarteTitle title="TOROYA ROLLS" subtitle="10 pièces" />
              <CarteItem
                src={dragonRoll}
                alt="Dragon Roll"
                name="Dragon roll"
                price={11.9}
                theme="rolls"
                int="Crevettes tempura, surimi"
                ext="Avocat, sauce et sésame"
              />
              <div className="hr-rolls" />
              <CarteItem
                src={rainbowRoll}
                alt="Rainbow Roll"
                name="Rainbow roll"
                price={11.9}
                theme="rolls"
                int="Avocat, surimi"
                ext="Thon, saumon, daurade, crevette et avocat"
              />
              <div className="hr-rolls" />
              <CarteItem
                src={tigerRoll}
                alt="Tiger roll"
                name="Tiger roll "
                price={12.5}
                theme="rolls"
                int="Avocat, surimi"
                ext="Crevette, avocat"
              />
              <div className="hr-rolls" />
              <CarteItem
                src={crunchyRoll}
                alt="Crunchy roll"
                name="Crunchy roll"
                price={12.5}
                theme="rolls"
                int="Beignet de crevettes, avocat, surimi"
                ext="Beignet crunch, sauce et sésame"
              />
              <div className="hr-rolls" />
              <CarteItem
                src={hawaiiRoll}
                alt="Hawaii roll"
                name="Hawaii roll"
                price={12.9}
                theme="rolls"
                int="Avocat, saumon"
                ext="Beignet tempura, spicy mayonnaise"
              />
              <div className="hr-rolls" />
              <CarteItem
                src={futoRoll}
                alt="Futo roll"
                name="Futo roll (8 pièces)"
                price={12.5}
                theme="rolls"
                int="Saumon mi-cuit, fromage Philadelphia"
                ext="Beignet tempura"
              />
              <div className="hr-rolls" />
              <CarteItem
                src={samouraiRoll}
                alt="Samouraï roll"
                name="Samouraï roll"
                price={12.5}
                theme="rolls"
                int="Avocat, surimi"
                ext="Saumon braisé, spicy mayonnaise, Sriracha"
              />
            </CarteItems>
          </div>
        </li>
        {/* SUSHI, MAKI, SASHIMI, TEMAKI */}
        <li className={`page${menuIndex[3] ? " show" : ""}`}>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle title="NIGIRI SUSHI" subtitle="par paire" />
              <div className="carte-container">
                <div className="carte-wrapper">
                  <CarteItem name="Sake sushi" info="saumon" price={3.9} />
                  <CarteItem name="Saumon braisé sushi" price={4.5} />
                  <CarteItem
                    name="Maguro sushi"
                    info="thon rouge"
                    price={5.4}
                  />
                  <CarteItem name="Tai sushi" info="daurade" price={4.5} />
                  <CarteItem name="Ebi sushi" info="crevette" price={4.5} />
                  <CarteItem name="Ikura" info=" œufs de saumon" price={4.9} />
                  <CarteItem
                    name="Saba"
                    info="maquereau cru et assaisonné"
                    price={4.9}
                  />
                  <CarteItem
                    name="Tako"
                    info="poulpe cuit et assaisonné "
                    price={4.9}
                  />
                </div>
                <CarteImg src={sushi} alt="Sake sushi" />
              </div>
            </CarteItems>
          </div>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle title="MAKI" subtitle="6 pièces" />
              <div className="carte-container reverse">
                <div className="carte-wrapper">
                  <CarteItem
                    name="Sake maki"
                    info=" saumon frais"
                    price={4.9}
                  />
                  <CarteItem
                    name="Tekka maki"
                    info="thon rouge frais"
                    price={5.4}
                  />
                  <CarteItem name="Avocat maki" price={4.5} />
                  <CarteItem name="Kappa maki" info="concombre" price={4.1} />
                  <CarteItem name="Ebi Maki" info="crevette" price={5.5} />
                  <CarteItem
                    name="Avocat cheese maki"
                    info=" feuille de soja"
                    price={5.1}
                  />
                  <CarteItem
                    name="Tekka maki mayonnaise"
                    info="tempura de thon, mayonnaise, oignon grillé"
                    price={6.2}
                  />
                </div>
                <CarteImg src={maki} alt="Sake maki" />
              </div>
            </CarteItems>
          </div>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle title="SASHIMI" subtitle="5 / 10 pièces" />
              <div className="carte-container">
                <div className="carte-wrapper">
                  <CarteItem
                    name="Sake sashimi"
                    info="saumon frais"
                    price={[6.9, 11.9]}
                  />
                  <CarteItem
                    name="Maguro sashimi"
                    info="thon rouge frais"
                    price={[7.9, 13.9]}
                  />
                  <CarteItem
                    name="Tai sashimi"
                    info="daurade royale"
                    price={[6.9, 11.9]}
                  />
                  <CarteItem
                    name="Saba sashimi"
                    info="maquereau cru et assaisonné"
                    price={[6.5, 10.9]}
                  />
                  <CarteItem
                    name="Tako sashimi"
                    info="poulpe cuit et assaisonné"
                    price={[6.5, 10.9]}
                  />
                </div>
                <CarteImg src={sashimi} alt="Sake sashimi" />
              </div>
            </CarteItems>
          </div>
        </li>
        <li className={`page${menuIndex[4] ? " show" : ""}`}>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle
                title="TEMAKI"
                subtitle="Sushi en forme de cône - 1 pièce"
              />
              <div className="carte-container center">
                <div className="carte-wrapper">
                  <CarteItem name="Temaki Saumon" price={5.2} />
                  <CarteItem name="Temaki Thon" price={5.4} />
                  <CarteItem name="Temaki Crevette " price={4.9} />
                </div>
              </div>
            </CarteItems>
          </div>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle title="TEMPURA" />
              <div className="carte-container">
                <div className="carte-wrapper">
                  <CarteItem
                    name="Yasai tempura (6 pièces)"
                    info="mélange de légumes"
                    price={5.8}
                  />
                  <CarteItem
                    name="Ebi fry (5 pièces)"
                    info="crevettes panées"
                    price={5.8}
                  />
                  <CarteItem
                    name="Ebi tempura (5 pièces)"
                    info="beignets de crevette"
                    price={6.2}
                  />
                  <CarteItem
                    name="Ika tempura (6 pièces)"
                    info="seiches"
                    price={6.2}
                  />
                  <CarteItem
                    name="Gyoza (5 pièces)"
                    info="raviolis aux légumes et poulet"
                    price={5.5}
                  />
                </div>
                <CarteImg src={tempura} alt="Yasai tempura" />
              </div>
            </CarteItems>
          </div>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle title="YAKITORI" subtitle="2 pièces" />
              <div className="carte-container reverse">
                <div className="carte-wrapper">
                  <h2 className="carte-subtitle">Légumes</h2>
                  <CarteItem
                    name="Kinoko"
                    info="champignons de Paris"
                    price={4.2}
                  />
                  <CarteItem name="Zucchini" info="courgettes" price={4.2} />
                  <CarteItem name="Nassu" info="aubergines" price={4.2} />
                  <h2 className="carte-subtitle">Viandes</h2>
                  <CarteItem name="Gyuniku" info="bœuf" price={5.8} />
                  <CarteItem name="Negima" info="poulet" price={5.4} />
                  <CarteItem name="Bœuf au fromage" price={5.8} />
                  <h2 className="carte-subtitle">Poissons</h2>
                  <CarteItem name="Sake Yaki" info="saumon frais" price={6.5} />
                  <CarteItem name="Maguro Yaki" info="thon frais" price={6.5} />
                </div>
                <CarteImg src={yakitori} alt="Negima" />
              </div>
            </CarteItems>
          </div>
        </li>
        <li className={`page${menuIndex[5] ? " show" : ""}`}>
          <div className="carte-section">
            <CarteItems>
              <CarteTitle title="BOISSONS" />
              <div className="carte-container">
                <div className="carte-wrapper">
                  <h2 className="carte-subtitle">Cocktail sans alcool</h2>
                  <CarteItem
                    name="Cocolada"
                    info="Coco, vanille et ananas"
                    price={4.8}
                  />
                  <CarteItem
                    name="Magic Amazon"
                    info="Kiwi, pomme verte, banane et orange"
                    price={4.8}
                  />
                  <CarteItem
                    name="Passion tropic"
                    info="Fraise, pomme verte, banane et orange"
                    price={4.8}
                  />
                </div>
                <div className="carte-wrapper">
                  <h2 className="carte-subtitle">Cocktail avec alcool</h2>
                  <CarteItem
                    name="T Sun Rise"
                    info="Tequila, grenadine, citron et orange"
                    price={5.5}
                  />
                  <CarteItem
                    name="Sex on the Beach"
                    info="Vodka, papaye, melon et ananas"
                    price={5.5}
                  />
                  <CarteItem
                    name="Swimming Pool"
                    info="Rhum, vodka, crème de coco, curaçao bleu, ananas"
                    price={5.5}
                  />
                </div>
                <div className="carte-wrapper">
                  <h2 className="carte-subtitle">Apéritifs</h2>
                  <CarteItem
                    name="Cocktail Toroya"
                    info="Jus de litchi, saké, Martini blanc, vin blanc"
                    misc="10 cl"
                    price={3.7}
                  />
                  <CarteItem
                    name="Martini"
                    info="blanc ou rouge"
                    misc="5 cl"
                    price={4.5}
                  />
                  <CarteItem name="Ricard" misc="2 cl" price={3.9} />
                  <CarteItem name="Kir" misc="12 cl" price={3.9} />
                  <CarteItem
                    name="Whisky japonais"
                    info="12 ans d’âge "
                    misc="4 cl"
                    price={6.6}
                  />
                  <CarteItem
                    name="Bière chinoise Tsing-Tao "
                    misc="33 cl"
                    price={4.1}
                  />
                  <CarteItem
                    name="Bière japonaise Asahi"
                    info=""
                    misc=""
                    price={4.4}
                  />
                  <CarteItem
                    name="Bière japonaise Kirin"
                    info=""
                    misc=""
                    price={4.6}
                  />
                  <CarteItem
                    name="Bière japonaise Iki"
                    info="(Bio au yuzu et sunshu - thé vert)"
                    misc="33 cl"
                    price={5.5}
                  />
                  <CarteItem
                    name="Saké japonais Takara"
                    info="16° chaud ou froid"
                    price={5}
                  />
                </div>
                <div className="carte-wrapper">
                  <h2 className="carte-subtitle">Softs</h2>
                  <CarteItem
                    name="Coca-Cola, Coca-Cola Zéro"
                    misc="33 cl"
                    price={2.4}
                  />
                  <CarteItem
                    name="Jus de fruits"
                    info="Orange, abricot, ananas ou tomate"
                    misc="33 cl"
                    price={2.9}
                  />
                  <CarteItem name="Sprite" info="" misc="33 cl" price={2.4} />
                  <CarteItem name="Ice Tea" info="" misc="33 cl" price={2.4} />
                  <CarteItem name="Orangina" info="" misc="33 c" price={2.4} />
                  <CarteItem
                    name="Ramune"
                    info=" limonade japonaise (Ume, litchi, melon, matcha)"
                    misc=""
                    price={3.9}
                  />
                  <CarteItem
                    name="Boisson japonaise"
                    info=" à base de thé vert : citron, grenade, baies de Goji"
                    misc="25 cl "
                    price={4.2}
                  />
                  <CarteItem name="Evian" info="" misc="50 cl" price={2.4} />
                  <CarteItem
                    name="San Pellegrino"
                    info=""
                    misc="50 cl"
                    price={2.4}
                  />
                  <CarteItem name="Perrier" info="" misc="33 cl" price={2.4} />
                  <CarteItem
                    name="Thé vert japonais"
                    info=""
                    misc=""
                    price={3.7}
                  />
                  <CarteItem
                    name="Café Perle Noire"
                    info=""
                    misc=""
                    price={1.9}
                  />
                </div>
              </div>
            </CarteItems>
          </div>
        </li>
      </ul>
    </div>
  );
};

CarteContent.defaultProps = {
  menuIndex: [true, false, false, false, false, false]
};

CarteContent.propTypes = {
  menuIndex: PropTypes.arrayOf(PropTypes.bool)
};

export default CarteContent;
