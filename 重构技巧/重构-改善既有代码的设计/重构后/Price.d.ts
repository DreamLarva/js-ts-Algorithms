import { MovieType } from "./Movie";
export default abstract class Price {
    abstract getPriceCode(): MovieType;
    abstract getCharge(getDaysRented: number): number;
    /** 默认方法 */
    getFrequentRenterPoints(getDaysRented: number): number;
}
export declare class ChildrenPrices extends Price {
    getPriceCode(): MovieType;
    getCharge(getDaysRented: number): number;
}
export declare class NewReleasePrice extends Price {
    getPriceCode(): MovieType;
    getCharge(getDaysRented: number): number;
    getFrequentRenterPoints(daysRented: number): 1 | 2;
}
export declare class RegularPrice extends Price {
    getPriceCode(): MovieType;
    getCharge(getDaysRented: number): number;
}
