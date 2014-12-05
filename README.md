# OAuth example
## What is this ?
Some minimalistic NodeJS sample code how to use the AOS OAuth service and consume the /me service.

## Obtaining OAuth access
You will need an OAuth keypair (client ID and client secret) - which can be obtained via Digipolis ( send a mail to stefaan.ponnet@digipolis.be )
In your request please specify:

* Callback URL. This is the URL where the authentication code or OAuth tokens will be sent to. For development purposes, we will set a default callback URL to ```http://localhost:3000/callback``` so you can test on your local machine.
* Application name. Supply a sort name for your application. Application names are on a first come first serve basis.
* First and Lastname of the person requesting access
* A copy of your EID data (PDF)


## Usage

Once you have your OAuth tokens , fill them in in the placeholders in the code ( index.js ) and type :

```
npm install
node index.js
```

Then browse to 
```
http://localhost:3000/
```
to start the authentication flow.


