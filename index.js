'use strict'

const createDebug = require('debug')
const pRetry = require('p-retry')
const {Readable} = require('stream')
const sncfWifiPortal = require('sncf-wifi-portal-client')
const ouifiPortal = require('ouifi-portal-client')

const debugPortal = createDebug('record-tgv-movement:portal')

// find any portal that does not fail with `ENOTFOUND` or request timeouts
const checkIfPortalWorks = async (name, portal, checkIfWorking) => {
	try {
		const info = await pRetry(checkIfWorking, {minTimeout: 1000, retries: 3})
		debugPortal(name + ' seems to work', info)
		return portal
	} catch (err) {
		debugPortal(name + ' doesn\'t seem to work', err)
		throw err
	}
}

const createPositionsStream = (interval = 3 * 1000) => {
	if (
		'number' !== typeof interval ||
		Number.isNaN(interval) ||
		interval <= 0
	) {
		throw new Error('interval must be an integer > 0.')
	}

	let portal = null

	const out = new Readable({
		objectMode: true,
		read: () => {}
	})

	const fetch = () => {
		const t = Date.now()

		portal.gps()
		.then((_) => {
			out.push({
				ok: _.success === true,
				speed: _.speed * 3.6, // m/s -> km/h
				latitude: _.latitude,
				longitude: _.longitude,
				heading: _.heading,
				precision: _.fix,
				serverTime: _.timestamp * 1000,
				clientTime: t
			})
		})
		.catch((err) => {
			out.emit('error', err)
		})
	}

	// todo [breaking]: use async/await here
	Promise.any([
		checkIfPortalWorks(
			'sncf-wifi-portal-client',
			sncfWifiPortal,
			sncfWifiPortal.connectionStatus,
		),
		checkIfPortalWorks(
			'ouifi-portal-client',
			ouifiPortal,
			ouifiPortal.networkQuality,
		),
	])
	.then((_portal) => {
		portal = _portal
		setInterval(fetch, interval)
	})
	.catch((err) => {
		out.emit('error', err)
	})

	return out
}

module.exports = createPositionsStream
