import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { injectGlobal } from 'styled-components';
//import { injectGlobal } from "styled-components"
//import { colors } from 'material-ui/styles';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// injectGlobal([`
// body{
//     background-color:#CF4647
// }

// `

// ])