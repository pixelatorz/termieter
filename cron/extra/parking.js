var http = require('http');

function claim_data(licenseplate) {
	var data = 'LICENCEPLATE=' + licenseplate + '&btnClaim=Claim+spot';

	var headers = {
	  'Host': 'parking.proximity.bbdo.be',
	  'Content-Type': 'application/x-www-form-urlencoded',
	  'Content-Length': data.length,
	  'Referer': 'http://parking.proximity.bbdo.be/',
	  'Origin': 'http://parking.proximity.bbdo.be'
	};

	var request = http.request({
	  port: 80,
	  host: 'parking.proximity.bbdo.be',
	  method: 'POST',
	  path: '/Claim/Claim',
	  headers: headers
  });

	request.on('response', function(response) {
	  response.setEncoding('utf8');

	  console.log('HEADERS: ' + JSON.stringify(response.headers));

	  response.on('data', function(chunk) {
      console.log(chunk);
	  });

	  response.on('end', function() {
      console.log('################################################################');
	  });
	});

	request.write(data);
	request.end();
}

claim_data('1CMZ323');
