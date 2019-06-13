import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import Axios from 'axios';
import '../CSS/Contact.css';



class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      Sujet: "",
      company: "",
      Text: "",
      Email: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleChange(event, key) {
    console.log(this.state);
    this.setState({ [(event.target.name)]: event.target.value });
    if (key === 'Prénom') { this.setState({ firstName: event.target.value }) };
    if (key === 'Nom') { this.setState({ lastName: event.target.value }) };
    if (key === 'Société') { this.setState({ company: event.target.value }) };
    if (key === 'Texte') { this.setState({ Text: event.target.value }) };
    if (key === 'Email') { this.setState({ Email: event.target.value }) };
    if (key === 'Sujet') { this.setState({ Email: event.target.value }) };
  }

  sendForm(event) {
    const { firstName, lastName, company, Text, Email, Sujet } = this.state;
    event.preventDefault();
    Axios.post('http://localhost:5000/sendForm', {
      firstName,
      lastName,
      company,
      Text,
      Email,
      Sujet
    })
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    return (
      <div className="paddingBox">
        <div className="boxReference">
          <div  className="marginBox">
            <h1 className="titleContact" >Références clients</h1>
            <h4 className="paraContact">
              Notre société, pour ce qui concerne son Centre de Formation ou son bureau
            d’études<h4></h4>en prévention incendie, est au service de clients de renom.
              Ils nous font confiance :
        </h4>
            <li>Hôpital militaire inter armée de Laveran (Marseille)</li>
            <li>Hôpital San Salvadour (APHP) (Hyères)</li>
            <li>Universités de Provence & université Paul Cézanne</li>
            <ul>
              <li>- Faculté Saint Jérôme - Marseille</li>
              <li>- Faculté Saint Charles - Marseille</li>
              <li>- Site d’Unimeca et Polytec - Château Gombert</li>
              <li>- Faculté de Lettres Schuman - Aix-en-Provence</li>
              <li>- Faculté de Droit - Marseille</li>
              <li>- Faculté de Droit d’Aix-en-Provence</li>
              <li>- IUT de Saint Jérôme</li>
              <li>- Institut d’Administration d’Entreprises - Puyricard</li>
              <li>- Espace Poncet - Aix-en-Provence</li>
              <li>- Et d’autres sites…….</li>
            </ul>
            <li>Université pierre Mendes France (IUT 2 Grenoble)</li>
            <li>Université d’Avignon et Pays de Vaucluse (Faculté St Marthe)</li>
            <li>Société AMO</li>
          </div>
          <div className="boxContact">
            <h1 className="titleContact" >Me contacter</h1>
            <div>
              <Segment className="marginForm" inverted>
                <Form className="form" inverted onSubmit={this.sendForm}>
                  <Form.Group widths='equal'>
                    <Form.Input name="Prénom" placeholder='Prénom' onChange={event => this.handleChange(event, "Prénom")} />
                    <Form.Input name="Nom" placeholder='Nom' onChange={event => this.handleChange(event, "Nom")} />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input />
                    <Form.Input name="Email" placeholder='Email' onChange={event => this.handleChange(event, "Email")} />
                    <Form.Input name="Société" placeholder='Société' onChange={event => this.handleChange(event, "Société")} />
                  </Form.Group>
                  <Form.Input name="Sujet" placeholder='Sujet' onChange={event => this.handleChange(event, "Sujet")} />
                  <Form.TextArea label='Exprimez vous' name="Texte" onChange={event => this.handleChange(event, "Texte")} />
                  <Button type='submit'>Soumettre</Button>
                </Form>
              </Segment><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;

