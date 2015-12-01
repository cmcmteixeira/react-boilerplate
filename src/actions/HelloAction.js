'use strict';

import Promise from 'bluebird';
import HelloStore from '../stores/HelloStore';

const HelloAction = function(context,payload){
    var store = context.getStore(HelloStore);
    var deferred = Promise.pending();
    setTimeout(function(){
        context.dispatch(HelloStore.ACTIONS.HELLO, payload);
        deferred.resolve();
    }, 10);
    return deferred.promise;
};

export default HelloAction;
