module.exports = {

    /**
     * Reset the interval timer (currently running
     * one of the patterns) and switch of any active LEDs.
     *
     * @param {Number} ID of a global timer
     * @param {string} the colour of LEDs
     */
    reset: function(strip, interval) {
        clearInterval(interval);
        strip.off();
    },

    /**
     * Light up the LEDs in the strip sequentially,
     * alternating between the specified colour
     * and black every full rotation.
     *
     * @param {object} the strip object
     * @param {string} the colour of LEDs
     * @returns {Number} ID of interval timer running pattern
     */
    domino: function(strip, colour) {

        var counter = 0;
        var resetColour = false;

        return setInterval(function() {
            strip.pixel(counter).color(resetColour ? 'black' : colour);
            if (counter < strip.stripLength() - 1) {
                counter++;
            } else {
                counter = 0;
                resetColour = !resetColour;
            }
            strip.show();
        }, 50);
    },

    /**
     * Flash all the LEDs in the strip
     * in parallel, on and off, for the number
     * of times specified.
     *
     * @param {object} the strip object
     * @param {string} the colour of LEDs
     * @param {int} number of times LEDs will be flashed
     */
    flash: function(strip, colour, n) {

        var counter = 0,
            interval = setInterval(function() {
                if (counter >= (n * 2)) {
                    clearInterval(interval);
                }
                strip.color((counter % 2 === 0) ? colour : 'black');
                strip.show();
                counter++;
            }, 200);
    }
};
