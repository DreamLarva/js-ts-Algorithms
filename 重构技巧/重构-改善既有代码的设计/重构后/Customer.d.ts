import Rental from "./Rental";
export default class Customer {
    private readonly _name;
    private _rentals;
    constructor(name: string);
    addRental(arg: Rental): void;
    getName(): string;
    statement(): string;
    private getTotalCharge;
}
