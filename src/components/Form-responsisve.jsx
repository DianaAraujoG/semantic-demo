// eslint-disable-next-line react/no-unstable-nested-components
import React, { useState } from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';

const FIELDS_FORMS = [
  {
    name: {
      name: 'name', label: 'Nombre', placeholder: 'Julia', icon: 'user',
    },
    lastNameFt: { name: 'lastNameFt', label: 'Apellido paterno', placeholder: 'Perez' },
    lastNameNd: { name: 'lastNameNd', label: 'Apellido materno', placeholder: 'Gonzalez' },
  },
  {
    email: { name: 'email', label: 'Correo', placeholder: 'ejemplo@ejemplo.com' },
    phone: { name: 'phone', label: 'Numero telefonico', placeholder: '00 000 000' },
  },
  {
    address: { name: 'address', label: 'Direccion', placeholder: 'Calle x #7' },
    district: { name: 'district', label: 'Delegacion', placeholder: 'Coyoacan' },
    postalCode: { name: 'postalCode', label: 'Codigo postal', placeholder: '000000' },
  },
];

const INITIAL_STATE = {
  name: '',
  lastNameFt: '',
  lastNameNd: '',
  email: '',
  phone: '',
  address: '',
  district: '',
  postalCode: '',
};

const FormResponsive = function () {
  const [userData, setUserData] = useState(INITIAL_STATE);

  const handleOnChange = (event, { name, value }) => {
    event.preventDefault();
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const renderFields = (fields) => Object.values(fields).map((field) => (
    <Grid.Column key={field.name}>
      <Form.Input
        fluid
        {...field}
        onChange={handleOnChange}
        value={userData[field.name]}
      />
    </Grid.Column>
  ));

  return (
    <Form>
      <Header as="h1" content="Formulario de registro" textAlign="center" />
      <Form.Group>
        <Grid celled container stackable>
          {
                Object.values(FIELDS_FORMS).map((rows, index) => (
                  <Grid.Row
                    key={`column-field-${index.toString()}`}
                    columns={Object.keys(rows).length}
                  >
                    { renderFields(rows) }
                  </Grid.Row>
                ))
            }
          <Grid.Row>
            <Form.Button
              fluid
              content="limpiar"
              color="red"
              onClick={() => { setUserData(INITIAL_STATE); }}
            />
            <Form.Button
              content="Enviar"
              fluid
            />
          </Grid.Row>
        </Grid>
      </Form.Group>
    </Form>
  );
};

export default FormResponsive;
