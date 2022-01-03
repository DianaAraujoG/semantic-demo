/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Header, Form, Grid, Segment, Input, Message } from 'semantic-ui-react';

const Login = function () {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment padded='very' stacked size='big'>
          <Header
            as='h2'
            content='¡Bienvenido a Safety Admin!'
            textAlign='center'
            color='orange'
          />
          <Form size='big'>
            <Form.Input
              icon='user'
              iconPosition='left'
              placeholder='Correo Electrónico'
            />
            <Form.Input
              icon='lock'
              iconPosition='left'
              placeholder='Contraseña'
            />
            <a>¿Olvidaste tu contraseña?</a>
            <Form.Button
              style={{ margin: '2em 0 0 0' }}
              content='Iniciar sesión'
              // color='orange'
              size='big'
              fluid
              primary
            />
          </Form>
        </Segment>
        <Message
          error
          icon='cancel'
          iconPosition='left'
          content='Incorrect username or password.'
        />
        <Input placeholder='Search...' />
      </Grid.Column>
    </Grid>
  );
};

export default Login;
