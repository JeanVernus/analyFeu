import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Axios from 'axios';


class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      job: "",
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
    if(key === 'Prénom'){this.setState({firstName: event.target.value})};
    if(key === 'Nom'){this.setState({lastName: event.target.value})};
    if(key === 'Poste'){this.setState({job: event.target.value})};
    if(key === 'Société'){this.setState({company: event.target.value})};
    if(key === 'Texte'){this.setState({Text: event.target.value})};
    if(key === 'Email'){this.setState({Email: event.target.value})};
  }

  sendForm(event){
    const {firstName, lastName, job, company, Text, Email} = this.state;
    event.preventDefault();
    Axios.post('http://localhost:5000/sendForm', {
      firstName,
      lastName,
      job,
      company,
      Text, 
      Email
    })
      .then(res => {
      console.log(res.data) 
      })
  }

  render() {
    return (
      <div>
        <h1 className="invertH1" >Me contacter</h1>
        <div className="segment">
          <Form className="boxForm" inverted onSubmit={this.sendForm}>
            <Form.Group widths='equal'>
              <Form.Input name="Prénom" placeholder='Prénom' onChange={event => this.handleChange(event,"Prénom")} />
              <Form.Input name="Nom" placeholder='Nom' onChange={event => this.handleChange(event,"Nom")}/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input />
              <Form.Input name="Société" placeholder='Société' onChange={event => this.handleChange(event,"Société")}/>
            </Form.Group>
            <Form.Input name="Email" placeholder='Email' onChange={event => this.handleChange(event,"Email")}/>
            <Form.TextArea className="font-size" label='Exprimez vous' name="Texte" onChange={event => this.handleChange(event,"Texte")}/>
            <Button type='submit'>Soumettre</Button>
          </Form><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    );
  }
}

export default ContactMe;

