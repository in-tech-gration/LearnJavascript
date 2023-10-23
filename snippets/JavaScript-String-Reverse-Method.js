String.prototype.reverse = function() {

    return Array.prototype.reverse.apply(this.split('')).join('');

};
