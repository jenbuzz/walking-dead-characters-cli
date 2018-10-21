#!/usr/bin/env node

'use strict';

const meow = require('meow');
const walking_dead_characters = require('walking-dead-characters');

meow(`
	Usage
	    $ walking-dead-characters
	    Rick Grimes
`);

console.log(walking_dead_characters());
