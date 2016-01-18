var five = require('johnny-five'),
    pixel = require('node-pixel'),
    Promise = require('bluebird'),
    board = new five.Board();

module.exports = {

    /**
     *
     */
    getPixelAsync: function() {
        return new Promise(function(resolve, reject) {
            board.on('ready', function() {
                var strip = new pixel.Strip({
                    data: 6,
                    length: 12,
                    board: this,
                    controller: "FIRMATA"
                });
                strip.on('ready', function() {
                    console.log('dfghjkl;hjgmhgfhgfhjghjg');
                    resolve(strip);
                });
            });
        });
    },

    /**
     *
     */
    loading: function(strip) {
        strip.color('white');
        strip.show();
    },

    /**
     *
     */
    success: function(strip) {
        strip.color('green');
        strip.show();
    },

    /**
     *
     */
    failed: function(strip) {
        console.log('failed');
        strip.color('red');
        strip.show();
    }
};
