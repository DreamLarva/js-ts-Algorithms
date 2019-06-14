import Rental from "./Rental"

export default class Customer {
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
        let frequentRenterPoints = 0;
        let result = `Rental Record for ${this.getName()} \n`;
        this._rentals.forEach(each => {
            frequentRenterPoints = each.getFrequentRenterPoints();
            result += `\t ${each.getMovie().getTitle()} \t ${each.getCharge()} \n`;
        });

        // add footer lines
        result += `Amount owed is ${this.getTotalCharge()} \n`;
        result += `You earned ${frequentRenterPoints} frequentRenterPoints`;
        return result
    }

    private getTotalCharge() {
        return this._rentals.reduce((pre, cur) =>
        pre + cur.getCharge()
            , 0)
    }


}