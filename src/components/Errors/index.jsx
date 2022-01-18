/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    message: ''
  };

  componentDidCatch(error) {
    this.state({
      hasError: true,
      message: error.message
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong:</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// const ui = (
//   <ErrorBoundary
//     FallbackComponent={ErrorBoundary}
//     onReset={() => {
//       // reset the state of your app so the error doesn't happen again
//     }}
//   >
//     <ComponentThatMayError />
//   </ErrorBoundary>
// );
