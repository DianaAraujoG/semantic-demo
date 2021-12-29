/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class HandleError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      info: null,
      hasError: false
    };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    // logErrorToMyService
    console.log(-1, 'Se activó el metodo componentDidCatch');
    console.log(error, errorInfo);
    this.setState({
      error,
      info: errorInfo,
      hasError: true
    });
  }

  render() {
    const { error, info, hasError } = this.state;
    const { children } = this.props;
    console.log(error);

    if (hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return (
        <>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {info.componentStack}
          </details>
        </>
      );
    }

    return children;
  }
}

export default HandleError;
