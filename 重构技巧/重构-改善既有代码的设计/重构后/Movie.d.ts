export declare enum MovieType {
    REGULAR = 0,
    NEW_RELEASE = 1,
    CHILDRENS = 2
}
export default class Movie {
    static REGULAR: MovieType;
    static NEW_RELEASE: MovieType;
    static CHILDRENS: MovieType;
    private readonly _title;
    private _price;
    constructor(title: string, priceCode: number);
    getPriceCode(): MovieType;
    setPriceCode(arg: number): void;
    getTitle(): string;
    getCharge(getDaysRented: number): number;
    getFrequentRenterPoints(getDaysRented: number): number;
}
