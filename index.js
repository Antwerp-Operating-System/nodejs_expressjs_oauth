'use strict';

var express = require('express');
var util = require('util');
var app = express();

var clientID = '';
var clientSecret = '';

if (clientID === '' || clientSecret === '') {
  console.log("Please fill in the clientID + clientSecret first");
  process.exit();
}

var oauth2 = require('simple-oauth2')({
  clientID: clientID,
  clientSecret: clientSecret,
  site: 'https://services.antwerpen.be',
  tokenPath: '/token',
  authorizationPath: '/authorize',
  useBasicAuthorizationHeader: false
});

// Authorization uri definition
var authorization_uri = oauth2.authCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/callback',
  scope: '',
});

// Initial page redirecting to OAuth provider
app.get('/auth', function(req, res) {
  res.redirect(authorization_uri);
});

// Callback service parsing the authorization token and asking for the access token
app.get('/callback', function(req, res) {
  var code = req.query.code;
  console.log('code=' + code);
  console.log('/callback');
  oauth2.authCode.getToken({
    redirect_uri: 'http://localhost:3000/callback',
    code: code,
  }, function(error, token) {
    if (error) {
      console.log('Access Token Error', error.message);
    } else {
      var token2 = oauth2.accessToken.create(token);

      oauth2.api('GET', '/api/user/0.0.1/me', token.token, function(err, data) {
        if (err) {
          res.json({
            error: err,
            token: token
          });
        } else {
          res.json({
            data: data
          });
        }
      });

    }
  });
});

app.get('/', function(req, res) {
  res.send('<a href="/auth">login</a>');
});

app.get('/member', function(req, res) {
  res.send('Hello member');
});

app.listen(3000);

console.log('Express server started on port 3000');
