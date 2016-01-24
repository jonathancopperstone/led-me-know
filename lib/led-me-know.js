var five = require('johnny-five'),
    pixel = require('node-pixel'),
    Promise = require('bluebird'),
    pattern = require('./patterns/led-matrix.js'),
    messagingTexts = require('./texts/messaging.js'),
    board = new five.Board();

var interval = null;

module.exports = {

    /**
     * Instantiates a new pixel strip, which is the collection
     * of LEDs. Resolves this strip within a Promise.
     * See: https://github.com/ajfisher/node-pixel#strip
     * @returns {Promise} resolves with the pixel strip instance
     */
    getStripAsync: function() {
        return new Promise(function(resolve, reject) {
            board.on('ready', function() {
                var strip = new pixel.Strip({
                    data: 6,
                    length: 12,
                    board: this,
                    controller: "FIRMATA"
                });
                strip.on('ready', function() {
                    resolve(strip);
                });
            });
        });
    },

    /**
     * Set the strip to a loading pattern.
     * Triggered when the tests have started.
     */
    setStripToLoading: function(strip) {

        if (!strip) {
            console.log(messagingTexts.noStrip);
        }

        if (!strip instanceof pixel.Strip) {
            console.log(messagingTexts.wrongStrip);
        }

        pattern.reset(strip, interval);
        interval = pattern.domino(strip, 'white');
    },

    /**
     * Flash the strip with green lights,
     * indicating tests were successful.
     */
    setStripToSuccessful: function(strip) {

        if (!strip) {
            console.log(messagingTexts.noStrip);
        }

        if (!strip instanceof pixel.Strip) {
            console.log(messagingTexts.wrongStrip);
        }

        pattern.reset(strip, interval);
        setTimeout(function() {
            pattern.flash(strip, 'green', 2);
        }, 10);
    },

    /**
     * Flash the strip with red lights,
     * indicating there are failed tests.
     */
    setStripToFailed: function(strip) {

        if (!strip) {
            console.log(messagingTexts.noStrip);
        }

        if (!strip instanceof pixel.Strip) {
            console.log(messagingTexts.wrongStrip);
        }

        pattern.reset(strip, interval);
        setTimeout(function() {
            pattern.flash(strip, 'red', 2);
        }, 10);
    }
};
