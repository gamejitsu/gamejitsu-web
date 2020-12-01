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

**5)** Load the environment variables:

__`❍ cd .`__

**6)** Start the Next server!

__`❍ npm run dev`__

**7)** Visit the **Gamejitsu** home page on your browser:

__`❍`[`localhost:3000`](http://localhost:3000)__

**8)** Start the tests:

__`❍ npm run test`__

## Ngrok & Stripe

When a customer completes a checkout successfully, Stripe calls the backend to create a review request.
If you are working with http://localhost:4000, of course Stripe cannot call it directly

You need to create a tunnel, start `ngrok` to support Stripe webhooks, it will allow the creation of the review request after a successful checkout.

__`❍ ngrok http -hostname=gamejitsu-dev.us.ngrok.io 4000`__

### Notes

Check on the Stripe Dashboard, enabling test data, that both the api key and the stripe webhook secret are correct.

## Before Committing

**1)** Run Prettier:

__`❍ npm run prettier -- --write`__

**2)** Run Tests updating snapshot if needed (or CI will fail):

__`❍ npm run test -- --updateSnapshot`__
