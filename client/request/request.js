var request = require("request");

request({
	url: "http://localhost:1337",
	method: "GET",
	auth: {
		user: "vivi",
		password: "anna",
		sendImmediately: false
	},
	followRedirect: true,
	followAllRedirects: true
}, function (error, response, body) {
	if(error) { console.log(error); return; }
	console.log(body);
});
