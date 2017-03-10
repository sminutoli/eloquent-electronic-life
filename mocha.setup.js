/*
http://stackoverflow.com/questions/32920213/mocha-jsdom-react-typeerror-cannot-read-property-addeventlistener-of-unde

Es sólo para testing CLI
*/
const jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = { userAgent: 'node.js' };
global.self = global;