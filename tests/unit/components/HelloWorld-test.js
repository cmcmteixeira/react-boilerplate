jest.dontMock('../../../src/components/HelloWorld/HelloWorld.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
const HelloWorld = require('../../../src/components/HelloWorld/HelloWorld.js');

describe('HelloWorld', () => {
    it('must say HelloWorld', function() {
        var Component = TestUtils.renderIntoDocument(<HelloWorld></HelloWorld>);
        var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'vo-reactEnv-helloWorld');
        expect(element).toBeDefined();
        expect(element.getDOMNode().innerHTML).toMatch(/Hello World/g);
    });
});