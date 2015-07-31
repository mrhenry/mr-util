/* eslint-env node, mocha */
var test = require('unit.js');
var utils = require('../lib/index');

describe('utils.url', function() {

	it("interpolates url(['/', '/hello'], 5)", function() {
		test.string(utils.url(['/', '/hello'], 5))
			.isIdenticalTo('/5/hello');
	});

	it("interpolates url(['/', '/hello'], 'foo bar')", function() {
		test.string(utils.url(['/', '/hello'], 'foo bar'))
			.isIdenticalTo('/foo%20bar/hello');
	});

	it("interpolates url(['/', '/hello'], ['foo', 'bar'])", function() {
		test.string(utils.url(['/', '/hello'], ['foo', 'bar']))
			.isIdenticalTo('/foo/bar/hello');
	});

});

describe('utils.console', function() {

	it('should have a .log', function(){
		test.object(utils.console).hasProperty('log');
	});

	it('should have a .debug', function(){
		test.object(utils.console).hasProperty('debug');
	});

	it('should have a .info', function(){
		test.object(utils.console).hasProperty('info');
	});

	it('should have a .warn', function(){
		test.object(utils.console).hasProperty('warn');
	});

	it('should have a .error', function(){
		test.object(utils.console).hasProperty('error');
	});

	it('should have a .clear', function(){
		test.object(utils.console).hasProperty('clear');
	});

	it('should have a .dir', function(){
		test.object(utils.console).hasProperty('dir');
	});

	it('should have a .dirxml', function(){
		test.object(utils.console).hasProperty('dirxml');
	});

	it('should have a .assert', function(){
		test.object(utils.console).hasProperty('assert');
	});

	it('should have a .count', function(){
		test.object(utils.console).hasProperty('count');
	});

	it('should have a .group', function(){
		test.object(utils.console).hasProperty('group');
	});

	it('should have a .groupCollapsed', function(){
		test.object(utils.console).hasProperty('groupCollapsed');
	});

	it('should have a .groupEnd', function(){
		test.object(utils.console).hasProperty('groupEnd');
	});

	it('should have a .profile', function(){
		test.object(utils.console).hasProperty('profile');
	});

	it('should have a .profileEnd', function(){
		test.object(utils.console).hasProperty('profileEnd');
	});

	it('should have a .time', function(){
		test.object(utils.console).hasProperty('time');
	});

	it('should have a .timeEnd', function(){
		test.object(utils.console).hasProperty('timeEnd');
	});

	it('should have a .timeStamp', function(){
		test.object(utils.console).hasProperty('timeStamp');
	});

	it('should have a .trace', function(){
		test.object(utils.console).hasProperty('trace');
	});

});


describe('console', function() {

	it('should have a .log', function(){
		test.object(console).hasProperty('log');
	});

	it('should have a .debug', function(){
		test.object(console).hasProperty('debug');
	});

	it('should have a .info', function(){
		test.object(console).hasProperty('info');
	});

	it('should have a .warn', function(){
		test.object(console).hasProperty('warn');
	});

	it('should have a .error', function(){
		test.object(console).hasProperty('error');
	});

	it('should have a .clear', function(){
		test.object(console).hasProperty('clear');
	});

	it('should have a .dir', function(){
		test.object(console).hasProperty('dir');
	});

	it('should have a .dirxml', function(){
		test.object(console).hasProperty('dirxml');
	});

	it('should have a .assert', function(){
		test.object(console).hasProperty('assert');
	});

	it('should have a .count', function(){
		test.object(console).hasProperty('count');
	});

	it('should have a .group', function(){
		test.object(console).hasProperty('group');
	});

	it('should have a .groupCollapsed', function(){
		test.object(console).hasProperty('groupCollapsed');
	});

	it('should have a .groupEnd', function(){
		test.object(console).hasProperty('groupEnd');
	});

	it('should have a .profile', function(){
		test.object(console).hasProperty('profile');
	});

	it('should have a .profileEnd', function(){
		test.object(console).hasProperty('profileEnd');
	});

	it('should have a .time', function(){
		test.object(console).hasProperty('time');
	});

	it('should have a .timeEnd', function(){
		test.object(console).hasProperty('timeEnd');
	});

	it('should have a .timeStamp', function(){
		test.object(console).hasProperty('timeStamp');
	});

	it('should have a .trace', function(){
		test.object(console).hasProperty('trace');
	});

});
