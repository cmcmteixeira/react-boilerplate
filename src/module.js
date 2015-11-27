import React from 'react';
import ReactDom from 'react-dom';

import HelloWorld from 'components/HelloWorld/HelloWorld.js';
var props = {

};
ReactDom.render(
    <div>
        <HelloWorld/>
    </div>,
    document.getElementById('example')
);
