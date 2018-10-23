#!/usr/bin/env node

'use strict';

const meow = require('meow');
const walkingDeadCharacters = require('walking-dead-characters');

meow(`
    Usage
        $ walking-dead-characters
        Rick Grimes
`);

console.log(walkingDeadCharacters());
