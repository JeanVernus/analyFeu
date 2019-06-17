import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import Axios from 'axios';
import Noty from 'noty';
import '../CSS/Contact.css';

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      subject: "",
      company: "",
      text: "",
      email: "",
      job: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleChange(event, key) {
    console.log(this.state);
    this.setState({ [(event.target.name)]: event.target.value });
    if (key === 'firstName') { this.setState({ firstName: event.target.value }) };
    if (key === 'lastName') { this.setState({ lastName: event.target.value }) };
    if (key === 'company') { this.setState({ company: event.target.value }) };
    if (key === 'text') { this.setState({ Text: event.target.value }) };
    if (key === 'email') { this.setState({ email: event.target.value }) };
    if (key === 'subject') { this.setState({ email: event.target.value }) };
    if (key === 'job') { this.setState({ email: event.target.value }) };
  }

  sendForm(event) {
    const { firstName, lastName, company, text, email, subject, job } = this.state;
    event.preventDefault();
    Axios.post('http://localhost:5000/sendForm', {
      firstName,
      lastName,
      company,
      text,
      email,
      subject,
      job
    })
      .then(res => {
        if (res.data === 'send') {
          new Noty({
            text: 'Information enregistrées',
            type: 'success',
            theme: 'sunset',
            timeout: 2000,
          }).show();
        }
      })
      .catch(err => {
        new Noty({
          text: 'Un problème est survenue',
          type: 'error',
          theme: 'sunset',
          timeout: 2000,
        }).show();
      });
  }

  render() {
    return (
      <div className="paddingBox">
        <div className="boxReference">
          <div className="marginBox">
            <h1 className="titleContact" >Références clients</h1>
            <h4 className="paraContact">
              Notre company, pour ce qui concerne son Centre de Formation ou son bureau
            d’études<h4></h4>en prévention incendie, est au service de clients de relastName.
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
            <li>company AMO</li>
          </div>
          <div className="boxContact">
            <h1 className="titleContact" >Me contacter</h1><br />
            <div>
              <Segment className="BorerForm" inverted>
                <Form className="form" inverted onSubmit={this.sendForm}>
                  <Form.Group widths='equal'>
                    <Form.Input name="firstName" placeholder='Prénom' onChange={event => this.handleChange(event, "firstName")} />
                    <Form.Input name="lastName" placeholder='Nom' onChange={event => this.handleChange(event, "lastName")} />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input name="job" placeholder='Poste' onChange={event => this.handleChange(event, "job")} />
                    <Form.Input name="company" placeholder='Société' onChange={event => this.handleChange(event, "company")} />
                    <Form.Input name="email" placeholder='Adresse Email' onChange={event => this.handleChange(event, "email")} />
                  </Form.Group>
                  <Form.Input name="subject" placeholder='Sujet' onChange={event => this.handleChange(event, "subject")} />
                  <Form.TextArea label='Exprimez vous' name="text" onChange={event => this.handleChange(event, "text")} />
                  <Button type='submit'>Soumettre</Button>
                </Form>
              </Segment><br /><br /><br /><br />
            </div>
          </div>
        </div>
        <h1 className="Contact">Contact</h1>
      </div>
    );
  }
}

export default ContactMe;

