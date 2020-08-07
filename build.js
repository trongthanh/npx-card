/* eslint-env node */
'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
// prettier-ignore
const data = {
	name:            chalk.white('           TRAN Trong Thanh'),
	handle:          chalk.white('trongthanh'),
	work:            chalk.white('Principal Web Engineer @ Chotot.com'),
	from:            chalk.white('Ho Chi Minh city, Vietnam'),
	twitter:         chalk.gray('https://twitter.com/') + chalk.cyan('trongthanh'),
	npm:             chalk.gray('https://npmjs.com/') + chalk.red('~trongthanh'),
	github:          chalk.gray('https://github.com/') + chalk.green('trongthanh'),
	linkedin:        chalk.gray('https://linkedin.com/in/') + chalk.blueBright('trongthanh'),
	facebook:        chalk.gray('https://facebook.com/') + chalk.blue('trongthanh'),
	web:             chalk.blueBright('https://int3ractive.com'),
	npx:             chalk.red('npx') + ' ' + chalk.white('trongthanh'),
	labelWork:       chalk.white.bold('   Title:'),
	labelFrom:       chalk.white.bold('    From:'),
	labelTwitter:    chalk.white.bold(' Twitter:'),
	labelnpm:        chalk.white.bold('     npm:'),
	labelGitHub:     chalk.white.bold('  GitHub:'),
	labelLinkedIn:   chalk.white.bold('LinkedIn:'),
	labelFacebook:   chalk.white.bold('Facebook:'),
	labelWeb:        chalk.white.bold('     Web:'),
	labelCard:       chalk.white.bold('    Card:'),
};

// Actual strings we're going to output, newlines matter
const output = `${data.name} / ${data.handle}

${data.labelWork}  ${data.work}
${data.labelFrom}  ${data.from}

${data.labelTwitter}  ${data.twitter}
${data.labelnpm}  ${data.npm}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelFacebook}  ${data.facebook}
${data.labelWeb}  ${data.web}

${data.labelCard}  ${data.npx}
`;

// frame the text
const box = chalk.green(boxen(output, options));

// generate the single js file that need run with npx
fs.writeFileSync(
	path.join(__dirname, 'bin/card.js'),
	`#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool
console.log('${box.split('\n').join('\\n\\\n')}');
`
);
