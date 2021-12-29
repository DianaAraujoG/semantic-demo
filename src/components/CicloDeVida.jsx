/* eslint-disable*/
import React, { Component } from 'react';
import MouseCoord from './MouseCoord';
import Reloj from './Reloj';

class CiclodeVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, ' El componente se inicializa, aún NO está en el DOM');
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false
    };

    this.temporizador = null;
    this.counter = 0;
    // this.handlerOnClickStart = this._handlerOnClickStart.bind(this);
  }

  async componentDidMount() {
    try {
      const requestProducts = await fetch(
        'https://burger-queen-fake-server-app.herokuapp.com/products'
      );
      const response = await requestProducts;
      const productsJson = await response.json();
      console.log('Response API', productsJson);
      if (Object.entries(productsJson).length === 0) {
        throw new Error('Object length 0');
      }
    } catch (error) {
      console.log('entre ERROR');
      throw new Error('Algo fallo con la API');
    }
    console.log(2, 'El componente ya se encuentra en el DOM');
  }

  // Los parametros que se le pasan son objetos

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      });
      this.counter++;
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    console.log('INICIAR');
    this.setState({ visible: true });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({ visible: false });
    this.counter = 0;
  };

  // handlerOnClickStart = () => {
  //   alert('me diste click uuuuuh');
  // };

  render() {
    console.log(1, ' El componente se dibuja/REdibuja pagina');
    const { visible, hora } = this.state;

    if (this.counter > 4) {
      throw new Error('Limite alcanzado (5s)');
    }

    return (
      <>
        <h2>Hola</h2>
        {visible && <Reloj hora={hora} />}
        <button type='button' onClick={this.iniciar}>
          Iniciar
        </button>
        <button type='button' onClick={this.detener}>
          Detener
        </button>
        <br />
        <MouseCoord />
      </>
    );
  }
}

export default CiclodeVida;
