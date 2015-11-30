import React from "react";
import "./HelloWorld.scss";

class HelloWorld extends React.Component {

    constructor(){
        super();
        this.state = {
            salutation : "Hello World",
            punctuation: ""
        }
    }

    handleChange(event) {
        this.setState({salutation: event.target.value || 'Hello World'});
    }

    handleChangePunctuation(event){
        this.setState({punctuation: event.target.value || ''});
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
export default HelloWorld;