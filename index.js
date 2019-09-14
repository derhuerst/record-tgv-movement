'use strict'

const {Readable} = require('stream')
const portal = require('sncf-wifi-portal-client')

const createPositionsStream = (interval = 3 * 1000) => {
	if (
		'number' !== typeof interval ||
		Number.isNaN(interval) ||
		interval <= 0
	) {
		throw new Error('interval must be an integer > 0.')
	}

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
				latitude: _.latitude,
				serverTime: _.timestamp * 1000,
				clientTime: t
			})
		})
		.catch((err) => {
			out.emit('error', err)
		})
	}

	setInterval(fetch, interval)
	return out
}

module.exports = createPositionsStream
