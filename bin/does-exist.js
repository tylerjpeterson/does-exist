#!/usr/bin/env node

const doesExist = require('./../');
const file = process.argv.splice(2)[0];

doesExist(file)
	.then(res => console.log(res))
	.catch(console.error.bind(console));
