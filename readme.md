# record-tgv-movement

**Record the movement of any [TGV](https://en.wikipedia.org/wiki/TGV) using the on-board WiFi.**

[![npm version](https://img.shields.io/npm/v/record-tgv-movement.svg)](https://www.npmjs.com/package/record-tgv-movement)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/record-tgv-movement.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)

There is more than one kind of WiFi portal in TGV trains, and they have slightly different APIs:

- the [*SNCF WiFi* portal](https://www.sncf.com/fr/offres-voyageurs/tgv/actualites/connectez-vous-pendant-votre-voyage) (SSID `_SNCF_WIFI_INOUI`) on [*inOui* TGVs](https://en.wikipedia.org/wiki/TGV_inOui)
- the [*OUIFI* portal](https://www.ouigo.com/content/ouifi) (SSID `OUIFI`) on [*OuiGo* TGVs](https://en.wikipedia.org/wiki/Ouigo)

`record-tgv-movement` tries to detect which portal you're connected to: It tries to connect to each portal using the respective client (see [*Related*](#related)), and the first to succeed will be used from then on.


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


## Related

- [`sncf-wifi-portal-client`](https://github.com/derhuerst/sncf-wifi-portal-client) – Query information from the [SNCF WiFi portal](https://en.oui.sncf/en/tgv/services/wifi-onboard) in French TGV trains.
- [`ouifi-portal-client`](https://github.com/derhuerst/ouifi-portal-client) – Query information from the *OUFI* WiFi portal in French *OuiGo* TGV trains.
- [`record-ice-movement`](https://github.com/derhuerst/record-ice-movement) – Record the movement of any [ICE](https://en.wikipedia.org/wiki/Intercity-Express) using the on-board WiFi.
- [`record-flixbus-movement`](htttps://github.com/derhuerst/record-flixbus-movement) – Command-line tool to record the movement of a [Flixbus](https://flixbus.de) coach using the on-board WiFi.
- [`record-cd-train-movement`](https://github.com/derhuerst/record-cd-train-movement) – Record the movement of a [České Dráhy (Czech Railways)](https://en.wikipedia.org/wiki/České_dráhy) train using its on-board WiFi.


## Contributing

If you have a question or have difficulties using `record-tgv-movement`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/record-tgv-movement/issues).
