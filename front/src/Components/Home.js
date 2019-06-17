import React, { Component } from "react";
import Caroussel from './Caroussel';
import Logo from '../Assets/logo.jpg'
import '../CSS/Home.css';


class Home extends Component {

    render() {
        return (
            <div className="homePosition">
                <div className="carousselPosition">
                    <Caroussel />
                </div><br /><br /><br />
                <div className="presentationPosition">
                    <h1 className="titlePrez">Présentation</h1>
                    <h3>
                        L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                        Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                        dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                        destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                        incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                        leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                        A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes de chacun.
                    </h3><br /><br />
                    <div className="logoPosition"><img className="logo"src={Logo} alt="" /></div>
                </div>
            </div>
        );
    }

}
export default Home;
