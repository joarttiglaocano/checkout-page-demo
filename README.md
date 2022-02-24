# Sample Checkout Demo

This demo is a sample checkout page built from [ExpressJS](https://expressjs.com/) with simple static html for the Client.

## Overview

A simple and responsive checkout ui page with dynamic x-frame-option settings.
<img src="public/images/screenshots/demo-desktop.png" alt="Demo on Google Chrome" width="610"><img src="public/images/screenshots/demo-mobile.png" alt="Demo on Safari iPhone X" width="272">

Features

- Provide security features using X-FRAME-OPTIONS
- Support responsiveness from mobile to web

The frontend sample code for the demo is in the `public/` directory.

The code structure is based on domain driven
mostly the code logic is located at [`src/domain.js`].

1.  [`src/middlewares/iframeOptions.js`](src/middlewares/iframeOptions.js) a middleware that is responsible for setting the correspong X-Frame-Options.
2.  [`src/config/index.js`](src/config/index.js) stores config values for valid/registered hosts(Note: This should be on the database, and was used for demo purposes only) and other enviroment variables.

## Getting Started

### Requirements

You’ll need the following:

- [Node.js](https://nodejs.org) >= `10.0.0`
- [NPM](https://npmjs.org) >= `6.0.0`

### Running the Node Server

You need to modify your environment variables as stated in [`.env.example`](.env.example) to your needs.

- `process.env.PORT`

Install dependencies using npm:

    npm install

After installation is done, start the local server along with the environment variables:

    PORT=<port> npm run start

If everything went well, you should see the following message in your terminal:

    Listening on port : <port>

Then you can point your browser to the `http://localhost:<port>`

There is also a folder [`demos/modal-responsive-demo/public`](demos/modal-responsive-demo/public`) that contains a pure static html page that will demonstrate the
the responsiveness of the modal using the library showPopUpModal located at [`demos/modal-responsive-demo/public/javascripts/showPopUpModal.js`]

### Running the Modal Responsive Demo

[path] = [`modal-responsive-demo/public`](demos/modal-responsive-demo/public`)
[options] = p - <port>

npx [http-server](https://www.npmjs.com/package/http-server) [path] [options]

Available on: http://192.168.100.52: <port>

Then you can point your browser to the `http://192.168.100.52:<port>`
