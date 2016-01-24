

<!-- Start lib/led-me-know.js -->

## getStripAsync()

Instantiates a new pixel strip, which is the collection
of LEDs. Resolves this strip within a Promise.
See: https://github.com/ajfisher/node-pixel#strip

### Return:

* **Promise** resolves with the pixel strip instance

## setStripToLoading()

Set the strip to a loading pattern.
Triggered when the tests have started.

## setStripToSuccessful()

Flash the strip with green lights,
indicating tests were successful.

## setStripToFailed()

Flash the strip with red lights,
indicating there are failed tests.

<!-- End lib/led-me-know.js -->

