/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');
const Snippet = require('../src/Snippet');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// const vscode = require('vscode');
// const myExtension = require('../extension');

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

	// Defines a Mocha unit test
	test("Sample test", function () {
		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});

	test('leave tabs alone, but dedent ok', () => {
		// Ensure Snippet.buildBody(code) is no longer replacing \t with \\t
		let snippet = new Snippet()
		let snippetText = "\thi"
		let expected = "hi"
		snippet.body = snippetText
		assert.equal(snippet.body, expected)
	});

	test('snippets converted to arrays of strings if multiline', () => {
		let snippet = new Snippet()
		let snippetText = "a\nb\n\tc\nd\n"
		let expectedArray = [
			"a",
			"b",
			"\tc",
			"d"
		]
		snippet.body = snippetText
		assert.deepEqual(snippet.body, expectedArray)
	});

	test('snippets dedented - leading tabs removed but other tabs preserved', () => {
		let snippet = new Snippet()
		let snippetText = "\ta\n\tb\n\t\tc\n\td\n"
		let expectedArray = [
			"a",
			"b",
			"\tc",
			"d"
		]
		snippet.body = snippetText
		assert.deepEqual(snippet.body, expectedArray)
	});

});
