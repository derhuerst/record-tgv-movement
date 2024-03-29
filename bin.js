#!/usr/bin/env node
'use strict'

const mri = require('mri')
const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: [
		'help', 'h',
		'version', 'v'
	]
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    record-tgv-movement >file.ndjson
\n`)
	process.exit(0)
}

if (argv.version || argv.v) {
	process.stdout.write(`record-tgv-movement v${pkg.version}\n`)
	process.exit(0)
}

const showError = (err) => {
	if (process.env.NODE_ENV === 'dev') console.error(err)
	else console.error(err.message || (err + ''))
	process.exit(1)
}

const createStream = require('.')
const {stringify} = require('ndjson')

createStream()
.on('error', (err) => {
	console.error(err)
	process.exitCode = 1
})
.pipe(stringify())
.pipe(process.stdout)
