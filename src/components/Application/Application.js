import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from '../HelloWorld/HelloWorld.js';
import Fluxible from 'fluxible';
import {provideContext, connectToStores} from 'fluxible-addons-react';


class Application extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    render() {
        return <HelloWorld/>
    }
}

Application.contextTypes = {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};

Application = provideContext(Application);

export default Application;