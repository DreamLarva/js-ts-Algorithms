"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("./Movie"));
class Price {
    /** 默认方法 */
    getFrequentRenterPoints(getDaysRented) {
        return 1;
    }
}
exports.default = Price;
class ChildrenPrices extends Price {
    getPriceCode() {
        return Movie_1.default.CHILDRENS;
    }
    getCharge(getDaysRented) {
        let result = 1.5;
        if (getDaysRented > 3) {
            result += (getDaysRented - 3) * 1.5;
        }
        return result;
    }
}
exports.ChildrenPrices = ChildrenPrices;
class NewReleasePrice extends Price {
    getPriceCode() {
        return Movie_1.default.NEW_RELEASE;
    }
    getCharge(getDaysRented) {
        return getDaysRented * 3;
    }
    getFrequentRenterPoints(daysRented) {
        return daysRented > 1 ? 2 : 1;
    }
}
exports.NewReleasePrice = NewReleasePrice;
class RegularPrice extends Price {
    getPriceCode() {
        return Movie_1.default.REGULAR;
    }
    getCharge(getDaysRented) {
        let result = 2;
        if (getDaysRented > 2) {
            result += (getDaysRented - 2) * 1.5;
        }
        return result;
    }
}
exports.RegularPrice = RegularPrice;
//# sourceMappingURL=Price.js.map