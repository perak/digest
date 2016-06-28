Digest authentication example
=============================

Server
------

Example server I used to try digest authentication clients. I found it here: https://www.npmjs.com/package/http-auth

To install and run the server:

```
cd server
git clone git://github.com/http-auth/http-auth.git
cd http-auth
npm install
cd examples
node digest.js
```

Server will listen at `localhost:1337`

Username is `vivi` password is `anna`


Client
------

I made the same example with two different npm clients: `request` and `digest-client`
 
To run first example client using `request` npm module https://www.npmjs.com/package/request do:

```
npm -g install request
cd client/request
node request.js
```

To run second example using `digest-client` npm module https://www.npmjs.com/package/digest-client do:

```
npm -g install digest-client
cd client/digest-client
node digest-client.js
```

Both clients should return the same result: `Welcome to private area - vivi!`.



That's it :)
