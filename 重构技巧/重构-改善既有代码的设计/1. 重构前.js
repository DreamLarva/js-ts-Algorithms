"use strict";
{
    let MovieType;
    (function (MovieType) {
        MovieType[MovieType["REGULAR"] = 0] = "REGULAR";
        MovieType[MovieType["NEW_RELEASE"] = 1] = "NEW_RELEASE";
        MovieType[MovieType["CHILDRENS"] = 2] = "CHILDRENS";
    })(MovieType || (MovieType = {}));
    class Movie {
        constructor(title, priceCode) {
            this._title = title;
            this._priceCode = priceCode;
        }
        getPriceCode() {
            return this._priceCode;
        }
        setPriceCode(arg) {
            this._priceCode = arg;
        }
        getTitle() {
            return this._title;
        }
    }
    Movie.REGULAR = MovieType.REGULAR;
    Movie.NEW_RELEASE = MovieType.NEW_RELEASE;
    Movie.CHILDRENS = MovieType.CHILDRENS;
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
    }
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
            let totalAmount = 0;
            let frequentRenterPoints = 0;
            let result = `Rental Record for ${this.getName()} \n`;
            this._rentals.forEach(each => {
                let thisAmount = 0;
                // determine amounts for each line
                switch (each.getMovie().getPriceCode()) {
                    case Movie.REGULAR:
                        thisAmount += 2;
                        if (each.getDaysRented() > 2) {
                            thisAmount += (each.getDaysRented() - 2) * 1.5;
                        }
                        break;
                    case Movie.NEW_RELEASE:
                        thisAmount += each.getDaysRented() * 3;
                        break;
                    case Movie.CHILDRENS:
                        thisAmount += 1.5;
                        if (each.getDaysRented() > 3) {
                            thisAmount += (each.getDaysRented() - 3) * 1.5;
                        }
                        break;
                }
                //add frequent renter points
                frequentRenterPoints++;
                // add bonus for two day new release rental
                if (each.getMovie().getPriceCode() === Movie.NEW_RELEASE && each.getDaysRented() > 1) {
                    frequentRenterPoints++;
                }
                result += `\t ${each.getMovie().getTitle()} \t ${thisAmount} \n`;
                totalAmount += thisAmount;
            });
            // add footer lines
            result += `Amount owed is ${totalAmount} \n`;
            result += `You earned ${frequentRenterPoints} frequentRenterPoints`;
            return result;
        }
    }
    let movieA = new Movie("Dota2", 1);
    let rentalA = new Rental(movieA, 100);
    let customerA = new Customer("Agent47");
    customerA.addRental(rentalA);
    console.log(customerA.statement());
}
//# sourceMappingURL=1. 重构前.js.map