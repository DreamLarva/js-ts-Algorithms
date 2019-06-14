"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(name) {
        this._name = name;
        this._rentals = [];
    }
    addRental(arg) {
        this._rentals.push(arg);
    }
    getName() {
        return this._name;
    }
    statement() {
        let frequentRenterPoints = 0;
        let result = `Rental Record for ${this.getName()} \n`;
        this._rentals.forEach(each => {
            frequentRenterPoints = each.getFrequentRenterPoints();
            result += `\t ${each.getMovie().getTitle()} \t ${each.getCharge()} \n`;
        });
        // add footer lines
        result += `Amount owed is ${this.getTotalCharge()} \n`;
        result += `You earned ${frequentRenterPoints} frequentRenterPoints`;
        return result;
    }
    getTotalCharge() {
        return this._rentals.reduce((pre, cur) => pre + cur.getCharge(), 0);
    }
}
exports.default = Customer;
//# sourceMappingURL=Customer.js.map