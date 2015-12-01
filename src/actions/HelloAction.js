'use strict';

import Promise from 'bluebird';
import HelloStore from '../stores/HelloStore';

const PunctuationChanged = function(context,payload){
    var deferred = new Promise.pending();
    setTimeout(function(){
        context.dispatch(HelloStore.ACTIONS.SET_PUNCTUATION, payload);
        deferred.resolve();
    }, 10);
    return deferred.promise;
};

const SalutationChanged = function(context,payload){
    var deferred = new Promise.pending();
    setTimeout(function(){
        context.dispatch(HelloStore.ACTIONS.SET_SALUTATION, payload);
        deferred.resolve();
    }, 10);
    return deferred.promise;
};

export default {PunctuationChanged,SalutationChanged};
