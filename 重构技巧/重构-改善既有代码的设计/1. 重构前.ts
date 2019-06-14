enum MovieType {
    REGULAR,
    NEW_RELEASE,
    CHILDRENS
}

class Movie {
    static REGULAR = MovieType.REGULAR;
    static NEW_RELEASE = MovieType.NEW_RELEASE;
    static CHILDRENS = MovieType.CHILDRENS;

    private readonly _title: string;
    private _priceCode: number;

    constructor(title: string, priceCode: number) {
        this._title = title;
        this._priceCode = priceCode;
    }

    public getPriceCode() {
        return this._priceCode;
    }

    public setPriceCode(arg: number) {
        this._priceCode = arg;
    }

    public getTitle(): string {
        return this._title;
    }
}

class Rental {
    private readonly _movie: Movie;
    private readonly _daysRented: number;

    constructor(movie: Movie, daysRented: number) {
        this._movie = movie;
        this._daysRented = daysRented;
    }

    public getDaysRented() {
        return this._daysRented;
    }

    public getMovie() {
        return this._movie;
    }
}

class Customer {
    private readonly _name: string;
    private _rentals: Array<Rental>;

    constructor(name: string) {
        this._name = name;
        this._rentals = [];
    }

    public addRental(arg: Rental): void {
        this._rentals.push(arg);
    }

    public getName() {
        return this._name;
    }

    public statement(): string {
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


export {};

