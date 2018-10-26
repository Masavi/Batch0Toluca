// ES6
import React from 'react';

// Javascript
// const React = require('react');
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Importar el componente App desde /src
import App from './app';

// Importar el CSS de bootstrap para toda la aplicación
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
