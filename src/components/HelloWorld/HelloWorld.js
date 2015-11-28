import React from "react";
import "./HelloWorld.scss";

class HelloWorld extends React.Component {

    constructor(){
        super();
    }


    render(){
        return <div className="vo-reactEnv-helloWorld">
            <h1>Hello World</h1>
        </div>
    }
}

export default HelloWorld;