var request = require('request');

module.exports.decodeByLngLat = function(data, cb) {
	var key = (data.key) ? '&key=' + data.key : '';
	var url = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + data.coordinates[1] + ',' + data.coordinates[0] + '&timestamp=' + (data.timestamp || '1331161200') + '&language=' + (data.language || 'en') + key;
	request.get({
		url: url,
		json: true
	}, function(error, response, body) {
		cb(error, body);
	});
};
