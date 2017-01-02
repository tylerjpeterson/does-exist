/* global describe, it */
'use strict';

const assert = require('chai').assert;
const doesExist = require('./../');

describe('doesExist', function () {
	it('should resolve to false if file does not exist', function (done) {
		doesExist('no-such-file').then(function (exists) {
			assert.strictEqual(exists, false);
			done();
		});
	});

	it('should resolve to false if directory does not exist', function (done) {
		doesExist('no-such-dir/').then(function (exists) {
			assert.strictEqual(exists, false);
			done();
		});
	});

	it('should resolve to true if file does exist', function (done) {
		doesExist('.gitignore').then(function (exists) {
			assert.strictEqual(exists, true);
			done();
		});
	});

	it('should resolve to true if directory does exist', function (done) {
		doesExist('tests').then(function (exists) {
			assert.strictEqual(exists, true);
			done();
		});
	});
});
