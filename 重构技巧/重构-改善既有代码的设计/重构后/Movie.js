"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Price_1 = require("./Price");
var MovieType;
(function (MovieType) {
    MovieType[MovieType["REGULAR"] = 0] = "REGULAR";
    MovieType[MovieType["NEW_RELEASE"] = 1] = "NEW_RELEASE";
    MovieType[MovieType["CHILDRENS"] = 2] = "CHILDRENS";
})(MovieType = exports.MovieType || (exports.MovieType = {}));
class Movie {
    constructor(title, priceCode) {
        this._title = title;
        this.setPriceCode(priceCode);
    }
    getPriceCode() {
        return this._price.getPriceCode();
    }
    setPriceCode(arg) {
        switch (arg) {
            case Movie.REGULAR:
                this._price = new Price_1.RegularPrice();
                break;
            case Movie.CHILDRENS:
                this._price = new Price_1.ChildrenPrices();
                break;
            case Movie.NEW_RELEASE:
                this._price = new Price_1.NewReleasePrice();
                break;
            default:
                throw new Error("Incorrect Price Code");
        }
    }
    getTitle() {
        return this._title;
    }
    getCharge(getDaysRented) {
        return this._price.getCharge(getDaysRented);
    }
    getFrequentRenterPoints(getDaysRented) {
        return this._price.getFrequentRenterPoints(getDaysRented);
    }
}
Movie.REGULAR = MovieType.REGULAR;
Movie.NEW_RELEASE = MovieType.NEW_RELEASE;
Movie.CHILDRENS = MovieType.CHILDRENS;
exports.default = Movie;
//# sourceMappingURL=Movie.js.map