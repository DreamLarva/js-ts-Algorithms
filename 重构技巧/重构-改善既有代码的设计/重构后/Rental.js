"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rental {
    constructor(movie, daysRented) {
        this._movie = movie;
        this._daysRented = daysRented;
    }
    getDaysRented() {
        return this._daysRented;
    }
    getMovie() {
        return this._movie;
    }
    getFrequentRenterPoints() {
        return this._movie.getFrequentRenterPoints(this._daysRented);
    }
    getCharge() {
        return this._movie.getCharge(this._daysRented);
    }
}
exports.default = Rental;
//# sourceMappingURL=Rental.js.map