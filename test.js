'use strict';

const execa = require('execa');

test('run cli', async () => {
    const {stdout} = await execa('./cli.js');
    expect(stdout.length > 0).toBeTruthy();
});
