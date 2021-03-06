/**
 * Created by Ricardo Baquero on 27/05/2018.
 * Copyright BuenPlan, 2017.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));