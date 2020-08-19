![CI](https://github.com/gamejitsu/gamejitsu-web/workflows/CI/badge.svg)

# :space_invader: Gamejitsu Web

The **Gamejitsu** React.js frontend.

## :page_with_curl:  _Instructions_:

**1)** Fire up your console & clone this repo:

__`❍ git clone https://github.com/gamejitsu/gamejitsu-web.git`__

**2)** Enter the directory and install the dependencies:

__`❍ cd gamejitsu-web && npm install`__

**3)** Create .env file

__`❍ touch .env`__

**4)** Edit .env & add the following variables:

__`❍ API_ENDPOINT=http://localhost:4000`__

__`❍ SOCKET_ENDPOINT=ws://localhost:4000`__

**5)** Start the Next server!

__`❍ npm run dev`__

**6)** Visit the **Gamejitsu** home page on your browser:

__`❍`[`localhost:3000`](http://localhost:3000)__

**7)** Start the tests:

__`❍ npm run test`__

## Ngrok

Start ngrok to support Stripe webhooks, it will allow the creation of the review request after a successful checkout.

__`❍ ngrok http -hostname=gamejitsu.eu.ngrok.io 4000`__
