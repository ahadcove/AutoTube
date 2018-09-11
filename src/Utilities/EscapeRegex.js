
'use strict';

// var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var matchOperatorsRe = /[\\{}()[\]^$+*?.]/g;

// TODO Add a parameter that will filter out symbols to keep
module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};