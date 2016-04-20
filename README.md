# geo-timezone
Returns timezone using a geographical coordinate.

1) Install module
```javascript
npm install geo-timezone --save
```
2) Import the dependency
```javascript
var geoTimezone = require('geo-timezone');
```
### Use

```javascript
var geoTimezone = require('geo-timezone');

geoTimezone.decodeByLngLat({
	coordinates: [39.6034810, -119.6822510] // [ltn, lat]
}, function(err, result) {
  console.log(result);
});
```
response:
```javascript
{
    dstOffset: 0,
    rawOffset: -28800,
    status: "OK",
    timeZoneId: "America/Los_Angeles",
    timeZoneName: "Pacific Standard Time"
}
```
