'use strict';
const chalk = require('chalk');
const isUnicodeSupported = require('is-unicode-supported');

const symbols = {
	info: chalk.blue('ℹ'),
	success: chalk.green('✔'),
	warning: chalk.yellow('⚠'),
	error: chalk.red('✖')
};

const fallback = {
	info: chalk.blue('i'),
	success: chalk.green('√'),
	warning: chalk.yellow('‼'),
	error: chalk.red('×')
};

module.exports = isUnicodeSupported() ? symbols : fallback;
