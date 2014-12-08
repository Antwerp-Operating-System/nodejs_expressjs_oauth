# OAuth example
## What is this ?
Some minimalistic NodeJS sample code how to use the AOS OAuth service and consume the /me service.

## Getting OAuth access
You will need an OAuth keypair (client ID and client secret) - which can be obtained by filling in this form http://opendata.antwerpen.be/aanvraag-token

You will need :

* A callback URL. This is the URL where the authentication code or OAuth tokens will be sent to. For development purposes, we will set a default callback URL to ```http://localhost:3000/callback``` so you can test on your local machine.
* Application name. Supply a sort name for your application. Application names are on a first come first serve basis.
* First and Lastname of the person requesting access
* A copy of your EID data (PDF)


## Usage

Once you have your OAuth tokens , fill them in in the placeholders in the code ( index.js ) 


```
var clientID = '';
var clientSecret = '';

...
```


and type :

```
npm install
node index.js
```

Then browse to 
```
http://localhost:3000/
```
to start the authentication flow.

## Using the OAuth token
After authenticating the app will consume the /me service, sending the OAuth token in the HTTP header.
The output of the /me service looks like this.


```
{
	"data": {
	"success": true,
	"data": {
		"id": "53e0bfd3aba8a72a308b45b0",
		"first_name": "stefaan",
		"last_name": "ponnet",
		"AvatarUrl: "https://assets.antwerpen.be/srv/assets/api/image/1a37eb83-a6d9-438b-98fb-ccfa29f3bba9/92212c90-844e-11e3-a56e-bf631cddae46-892.png"
		}
	}
}
```

## CURL example

```
curl -v -H "Authorization: token OAUTH-TOKEN" 'https://services.antwerpen.be//api/user/0.0.1/me' 
```
