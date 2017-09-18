import React from 'react';
import ReactDOM from 'react-dom';

import './images/site/fav-icon.png'
import './images/site/apple-touch-icon.png'
import 'font-awesome/css/font-awesome.min.css'
import './stylesheets/vendors/animate.min.css'
import './stylesheets/vendors/magnific-popup.css'
import './stylesheets/vendors/swiper.min.css'
import 'materialize-css/dist/css/materialize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'octicons/build/octicons.css'
import './stylesheets/style.css'
import './assets/devicon-master/devicon.css'

import App from './App';
import {BrowserRouter} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
const $ = window.$;

ReactDOM.render(
    <BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
