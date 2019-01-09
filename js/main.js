import React from 'react';
import ReactDOM from 'react-dom';
import { AppComponent } from './components/app/app-component';

let mainAppElement = document.getElementById('main-app');

if (mainAppElement) {
    let markup = (<div  id="wrapper"><AppComponent /></div>);

    ReactDOM.render(markup, mainAppElement);
}
