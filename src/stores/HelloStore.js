import Store from 'redux';

function store(state = {},action = null) {
    switch (action.type) {
        case 'SET_WORD':
            return state.saudation = action.saudation;
        case 'SET_PUNCTUATION':
            return state.punctuation = action.punctuation;
    }
}
let helloStore = Store(store);

helloStore.subscribe(() => {
    console.log(store.getState());
});

export default helloStore;