'use strict';

const fs = require('fs');

/**
 * Promise-based module to test for file existence adherent to currently established best-practices.
 * @module doesExist
 * @see https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback
 *
 * @param {String} file - Path to file to be tested for existence
 * @returns {Promise.resolve} Resolves to true if file exists, false if it does not.
 * @returns {Promise.reject} Rejects with error if non-ENOENT error is thrown by fs.open.
 */
module.exports = file => {
	return new Promise((resolve, reject) => {
		fs.open(file, 'r', err => {
			if (err) {
				/* istanbul ignore else */
				if (typeof err.code === 'string' && err.code === 'ENOENT') {
					return resolve(false);
				} else {
					return reject(err);
				}
			}

			return resolve(true);
		});
	});
};
