import React from "react";
import "./HelloWorld.scss";

class HelloWorld extends React.Component {
    props;
    state;
    constructor(){
        super();
        this.props = {
            hello  : "Hello World",
            goodBye: "Goodbye"
        };
        this.state = {
            clicked : false
        }
    }


    render(){
        return <div className="vo-reactEnv-helloWorld">
            <h1>Hello World</h1>
        </div>
    }
}

export default HelloWorld;