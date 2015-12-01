'use strict';

import {BaseStore}  from 'fluxible/addons';

var ACTIONS = {
    HELLO : 'HELLO_ACTION',
    SET_SALUTATION : 'SET_SALUTATION',
    SET_PUNCTUATION: 'SET_PUNCTUATION'
};

class HelloStore extends BaseStore{
    constructor(dispatcher){
        super(dispatcher);

        this.state = {
            salutation : "Hello World",
            punctuation: "!!"
        };
    }


    _handleSetPunctuation(payload){
        console.log("Handling-punctuation");
        this.state.punctuation = payload;
        this.emit('change')
    }

    _handleSetSalutation(payload){
        console.log("Handling-salutation");
        this.state.salutation = payload;
        this.emit('change')
    }

    getState(){
        return this.state;
    }

    dehydrate(){
        return this.getState();
    }

    hydrate() {

    }
}

HelloStore.storeName = "HelloStore";
HelloStore.ACTIONS = ACTIONS;
HelloStore.handlers = {
    SET_SALUTATION   :'_handleSetSalutation',
    SET_PUNCTUATION :'_handleSetPunctuation'
};
export default HelloStore;