import Price from "./Price"
import {ChildrenPrices, NewReleasePrice, RegularPrice} from "./Price"

export enum MovieType {
    REGULAR,
    NEW_RELEASE,
    CHILDRENS
}


export default class Movie {
    static REGULAR = MovieType.REGULAR;
    static NEW_RELEASE = MovieType.NEW_RELEASE;
    static CHILDRENS = MovieType.CHILDRENS;

    private readonly _title: string;
    // 因为是在setPriceCode 中初始化 _price
    // 所以ts 没能识别 在 constructor 中初始化 所以需要加上! 说明是由调用者保证的
    private _price!: Price;

    constructor(title: string, priceCode: number) {
        this._title = title;
        this.setPriceCode(priceCode)
    }

    public getPriceCode() {
        return this._price.getPriceCode()
    }

    public setPriceCode(arg: number) {
        switch (arg) {
            case Movie.REGULAR:
                this._price = new RegularPrice();
                break;
            case Movie.CHILDRENS:
                this._price = new ChildrenPrices();
                break;
            case Movie.NEW_RELEASE:
                this._price = new NewReleasePrice();
                break;
            default:
                throw new Error("Incorrect Price Code")

        }
    }

    public getTitle(): string {
        return this._title;
    }


    public getCharge(getDaysRented: number) {
        return this._price.getCharge(getDaysRented)

    }


    public getFrequentRenterPoints(getDaysRented: number) {
        return this._price.getFrequentRenterPoints(getDaysRented)
    }

}
