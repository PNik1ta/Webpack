import Post from "@models/Post";
import WebpackLogo from './assets/webpack-logo';
import json from './assets/json';
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import xml from './assets/data.xml'
import csv from './assets/data.csv';
import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack Post title', WebpackLogo);

const App = () => (
    <div class="container">
        <h1>Webpack course</h1>

        <hr />

        <div class="logo"></div>

        <div class="box">
            <h2>Less</h2>
        </div>

        <div class="card">
            <h2>SCSS</h2>
        </div>
    </div>
);
 
render(<App/>, document.getElementById('app'));

console.log('Post to string: ', post.toString());
console.log('json: ', json);
console.log('xml: ', xml);
console.log('csv: ', csv); 