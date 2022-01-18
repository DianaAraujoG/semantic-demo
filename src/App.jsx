import React from 'react';
// import ResponsiveLayout from './components/ResponsiveLayout.jsx';
// import FormResponsive from './components/Form-responsisve';
// import CiclodeVida from './components/CicloDeVida';
import HandleError from './components/HandleError';
// import Login from './components/Login';
// import { ErrorBoundary } from 'react-error-boundary';
import NewLogin from './components/NewLogin';
// import ErrorBoundary from './components/Errors';

import './App.css';

const App = function () {
  return (
    <div>
      <HandleError>
        <NewLogin />
        {/* <HandleError>
        <CiclodeVida />
      </HandleError> */}
        {/* <div className='fade-up-in'>
        <span>Holi :D</span>
      </div> */}
      </HandleError>
    </div>
  );
};

export default App;
