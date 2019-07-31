export declare enum MovieType {
    REGULAR = 0,
    NEW_RELEASE = 1,
    CHILDRENS = 2
}
export default class Movie {
    private readonly _title;
    private _price;
    constructor(title: string, priceCode: MovieType);
    getPriceCode(): MovieType;
    setPriceCode(arg: MovieType): void;
    getTitle(): string;
    getCharge(getDaysRented: number): number;
    getFrequentRenterPoints(getDaysRented: number): number;
}
