/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reloj extends Component {
  constructor(props) {
    super(props);
    console.log('RELOJ: ', props);
    // La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.
    // throw new Error('Error Reloj');
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log(
  //     2,
  //     ' RELOJ: El estado o las props del componente VAN ha cambiado'
  //   );
  //   console.log(`RELOJ NEXT-PROPS:  ${JSON.stringify(nextProps)}`);
  //   return nextProps.hora !== this.props.hora;
  // }

  componentDidUpdate(prevProps) {
    console.log(3, ' RELOJ: El estado o las props del componente han cambiado');
    console.log(`RELOJ PREV-PROPS: ${JSON.stringify(prevProps)}`);
  }

  componentWillUnmount() {
    // custom console
    console.log(4, 'RELOJ: El componente ha sido eliminado del DOM');
  }

  render() {
    const { hora } = this.props;
    return <h3>{hora}</h3>;
  }
}
Reloj.propTypes = {
  hora: PropTypes.string.isRequired
};

export default Reloj;
