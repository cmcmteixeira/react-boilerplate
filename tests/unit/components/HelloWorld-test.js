import React from 'react/addons'
var __path__ = '../../../src/components/HelloWorld/HelloWorld.js';
jest.dontMock(__path__);

describe('HelloWorld', function() {
    var TestUtils = React.addons.TestUtils;
    it('must say HelloWorld', function() {
        var Component = TestUtils.renderIntoDocument(<HelloWorld></HelloWorld>);
        var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'vo-reactEnv-helloWorld');
        expect(element).toBeDefined();
    });
});