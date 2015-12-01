'use strict';

import {BaseStore}  from 'fluxible/addons';

var ACTIONS = {
    HELLO : 'HELLO_ACTION'
};

class HelloStore extends BaseStore{
    constructor(dispatcher){
        super(dispatcher);
        var key = ACTIONS.HELLO;
        this.handlers = {
            HELLO_ACTION : '_handleHelloAction'
        };
    }

    _handleHelloAction(){
        console.log("Handling stuff");
    }


    getState(){
        return {
            salutation : "Hello World",
            punctuation: ""
        };
    }

    dehydrate(){
        return this.getState();
    }

    hydrate() {

    }
}

HelloStore.storeName = "HelloStore";
HelloStore.ACTIONS = ACTIONS;

export default HelloStore;