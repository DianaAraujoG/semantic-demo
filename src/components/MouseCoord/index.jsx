/* eslint-disable arrow-body-style */
import React from 'react';
import useMouseMove from '../../hooks/useMouseMove';

const STYLES = {
  width: '100%',
  minHeight: '10em',
  backgroundColor: '#FCCCFC'
};

const MouseCoord = function () {
  const { x, y } = useMouseMove();

  return (
    <div style={STYLES}>
      <h1>{`X: ${x}, Y:${y}`}</h1>
    </div>
  );
};

export default MouseCoord;
