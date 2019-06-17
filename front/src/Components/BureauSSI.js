import React, { Component } from 'react';
import '../CSS/Bureau.css'

class BureauSSI extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  } 

  render() {
    return (
      <div className="paddingBureauGlobal">
        <br />
        <h1 className="titleBureau">Bureau d'étude/ Coordination SSI</h1>
        <h5 className="subLineBureau">Nous vous accompagnons dans tous vos projets de construction, d’aménagement, de transformation et de mise en sécurité.</h5>
        <p>
          La réglementation concernant la sécurité incendie est dense, drastique et complexe, une mauvaise interprétation peut être lourde de conséquences. L’analyse des textes, l’adaptation des règles de sécurité, la bonne intégration des textes dans un projet sont des exercices qui demandent une expérience et des compétences avérées. Notre bureau d'étude est spécialisé dans la réglementation incendie il est au service des maîtres d'ouvrages, des maîtres d'oeuvres, des propriétaires et exploitants qu'ils soient public ou privé.
          Les analyses, les solutions et propositions qui découlent de nos études présentent pour nos clients une forte valeur ajoutée.
          Les textes réglementaires y sont integrés de façon réaliste et raisonnable, le niveau de sécurité recherché est atteint, vos intérêts sont défendus et le budget est respecté.
        </p>
        <div className="boxBureau">
          <div className="displayBureau">
            <ul>
              <h3 className="subTitleBureau">Nos missions</h3>
              <li>Audit/conseil</li>
              <li>Assistance maître d’ouvrages</li>
              <li>Défense de vos droits et de vos interêts</li>
              <li>Mandat de sécurité</li>
              <li>Coordination SSI</li>
              <li>Elaboration des documents : notice de sécurité, diagnostic etc…</li>
            </ul>
            <div className="marginBureau">
              <ul>
                <h3 className="subTitleBureau">Nos compétences</h3>
                <p>Des experts préventionnistes, issus des corps officiels de secours</p>
                <p>Certifiés et diplômés en prévention, agrées CNPP, coordinateurs SSI</p>
              </ul>
            </div>
          </div>
          <div className="displayBureau">
            <ul>
              <h3 className="subTitleBureau">Nos garanties</h3>
              <li>La réactivité</li>
              <li>Des réponses rapides</li>
              <li>Des coûts réduits</li>
              <li>Un engagement pour vos intérêts</li>
              <li>Une relation de partenariat</li>
              <li>Une équipe à vos cotés</li>
            </ul>
            <div className="marginBureau">
              <ul>
                <h3 className="subTitleBureau">Nos connaissances et savoir-faire</h3>
                <p>Une veille réglementaire soutenue</p>
                <p>Groupes de travail avec lesacteurs de la prévention</p>
                <p>Une bibliothèque  régulièrement mise à jour</p>
              </ul>
            </div>
          </div>
        </div> 

        <h5 className="subLineBureau">AnalyFeu vous offre ses compétences, son savoir-faire pour vous épauler et trouver des solutions rationnelles</h5><br /><br />

        <h1 className="Conseil">Conseils</h1>

      </div >

    );
  }
}

export default BureauSSI;