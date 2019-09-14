# record-tgv-movement

**Record the movement of any [TGV](https://en.wikipedia.org/wiki/TGV) using the [on-board WiFi](https://www.sncf.com/fr/offres-voyageurs/tgv/actualites/connectez-vous-pendant-votre-voyage).**

[![npm version](https://img.shields.io/npm/v/record-tgv-movement.svg)](https://www.npmjs.com/package/record-tgv-movement)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/record-tgv-movement.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install -g record-tgv-movement
```

Or just use [`npx`](https://npmjs.com/package/npx):

```shell
npx record-tgv-movement >file.ndjson
```


## Usage

```shell
Usage:
    record-tgv-movement >file.ndjson
```

The JSON format matches [`record-ice-movement`](https://npmjs.com/package/record-ice-movement) where possible:

```
{
	"ok": true,
	"speed": 36.486,
	"latitude": 47.743205,
	"longitude": 7.346025,
	"heading": 220.3,
	"precision": 10,
	"serverTime": 1568473509000,
	"clientTime": 1568473510187
}
```


## Contributing

If you have a question or have difficulties using `record-tgv-movement`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/record-tgv-movement/issues).
