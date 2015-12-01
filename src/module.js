'used strict';
import React from 'react';
import ReactDom from 'react-dom';
import Fluxible from 'fluxible';
import provideContext from 'fluxible-addons-react/provideContext';
import Application from 'components/Application/Application.js'
import HelloStore from "./stores/HelloStore.js"


const app = new Fluxible({
    component: Application
});

app.registerStore(HelloStore);
let dehydratedState = window.App || {};
let createElement = require('fluxible-addons-react/createElementWithContext');
app.rehydrate(dehydratedState,(err,context) => {
    ReactDom.render(createElement(context),document.getElementById('example'))
});
