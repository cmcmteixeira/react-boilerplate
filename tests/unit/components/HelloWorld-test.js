jest.dontMock('../../../src/components/HelloWorld/HelloWorld.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
const HelloWorld = require('../../../src/components/HelloWorld/HelloWorld.js');

describe('HelloWorld', () => {
    it('must initially say HelloWorld', () => {
        var Component = TestUtils.renderIntoDocument(<HelloWorld></HelloWorld>);
        var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'reactEnv-helloWorld');
        expect(element).toBeDefined();
        expect(element.innerHTML).toMatch(/Hello World/g);
    });
    it('must change saudation',() => {
        var Component = TestUtils.renderIntoDocument(<HelloWorld></HelloWorld>);
        var input = TestUtils.findRenderedDOMComponentWithClass(Component,'reactEnv-Salutation');
        expect(input).toBeDefined();
        TestUtils.Simulate.change(input,{
            target :{
                value: "Something"
            }
        },input);
        var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'reactEnv-helloWorld');
        expect(element).toBeDefined();
        expect(element.innerHTML).toMatch(/Something/g);
    });
    it('must change punctuation',() => {
        var Component = TestUtils.renderIntoDocument(<HelloWorld></HelloWorld>);
        var input = TestUtils.findRenderedDOMComponentWithClass(Component,'reactEnv-Punctuation');
        expect(input).toBeDefined();
        TestUtils.Simulate.change(input,{
            target :{
                value: "!!!!"

            }
        },input);
        var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'reactEnv-helloWorld');
        expect(element).toBeDefined();
        expect(element.innerHTML).toMatch(/\!\!\!\!/g);

    })


});

