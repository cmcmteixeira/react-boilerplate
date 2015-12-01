'use strict';


import React        from "react";
import HelloAction  from "../../actions/HelloAction.js"
import HelloStore   from "../../stores/HelloStore.js"

import "./HelloWorld.scss";
import connectToStores from 'fluxible-addons-react/connectToStores';
import provideContext from 'fluxible-addons-react/provideContext';


class HelloWorld extends React.Component {

    constructor(props,context){
        super(props,context);
        console.log(this);
        this.state = {
            punctuation: "!!!",
            salutation: "Hello World"
        };

    }


    handleChange(event) {
        let salutation = event.target.value || 'Hello World';
        console.log(this);
        this.context.executeAction(HelloAction,salutation);
        this.setState({salutation});
    }

    handleChangePunctuation(event){
        console.log(this);
        let punctuation = event.target.value || '';
        this.context.executeAction(HelloAction,punctuation);
        this.setState({punctuation});
    }

    render(){
        return <div className="reactEnv-helloWorld">
            <h1>{this.state.salutation} {this.state.punctuation}</h1>
            <div>
                <input
                    val={this.state.salutation}
                    placeholder="Saudation"
                    name = "reactEnv-Salutation"
                    className="reactEnv-Salutation"
                    onChange={this.handleChange.bind(this)}
                    />

            </div>
            <div>
                <input
                    val={this.state.punctuation}
                    placeholder="Punctuation"
                    name = "reactEnv-Punctuation"
                    className="reactEnv-Punctuation"
                    onChange={this.handleChangePunctuation.bind(this)}
                    />
            </div>
        </div>
    }
}
HelloWorld.contextTypes = {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};
HelloWorld = connectToStores(HelloWorld,[HelloStore], (context,props) => {
    return {
        state : context.getStore(HelloStore).getState(),
        context: context
    }
});


export default HelloWorld;