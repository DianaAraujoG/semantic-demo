/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Header,
  Form,
  Grid,
  Segment,
  Image,
  Container
} from 'semantic-ui-react';
import '../../style/NewLogin.css';

const NewLogin = function () {
  // bom();
  return (
    <Container>
      <Grid verticalAlign='middle' style={{ height: '100vh' }}>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment padded='very' stacked size='big'>
              <Header as='h1' content='Iniciar sesión' color='orange' />
              <Header as='h3' content='¡Bienvenido a Safety Admin!' />

              <Form size='big'>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='Correo Electrónico'
                  fluid
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Contraseña'
                  fluid
                />
                <a textAlign='center'>¿Olvidaste tu contraseña?</a>
                <Form.Button
                  style={{ margin: '2em 0 0 0' }}
                  content='Iniciar sesión'
                  textAlign='center'
                  color='orange'
                  size='huge'
                  //   fluid
                />
              </Form>
            </Segment>
            {/* <Button primary onClick={() => Bomb()}>
              Primary
            </Button> */}
          </Grid.Column>
          <Grid.Column>
            <Image
              src='https://react.semantic-ui.com/images/wireframe/image.png'
              fluid
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default NewLogin;
