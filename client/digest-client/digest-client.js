var DigestClient = require('digest-client');
var digestClient = new DigestClient({username: 'vivi', password: 'anna', https: false});
 
digestClient.request({
    host: 'localhost',
    path: '',
    port: 1337,
    method: 'GET',
    headers: { "User-Agent": "Shmuser-Shmagent" }
}, function (err, result) {
    if (err) {
        return console.log(err);
    }
 
    console.log(result);
});
