import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

// FormExampleClearOnSubmit
const CAMPOS_FORMULARIO = {
  name: { placeholder: 'Campo Nombre', name: 'name' },
  email: { placeholder: 'Campo Correo', name: 'email' }
};

class FormExample extends Component {
  state = {};

  handleChange = (e, { name, value }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = () => this.setState({ email: '', name: '' });

  render() {
    return (
      // <Grid Column={3} stackable>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          {Object.values(CAMPOS_FORMULARIO).map((campos) => (
            <Form.Input
              key={campos.name}
              {...campos}
              onChange={this.handleChange}
              value={this.state[campos.name]}
            />
          ))}
          <Form.Button content='Submit' fluid />
        </Form.Group>
      </Form>
      // </Grid>
    );
  }
}

/* <Form.Input
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
          /> */
export default FormExample;
