import Movie, {MovieType} from "./Movie"

export default abstract class Price {
    abstract getPriceCode(): MovieType;

    abstract getCharge(getDaysRented: number): number

    /** 默认方法 */
    public getFrequentRenterPoints(getDaysRented: number): number {
        return 1
    }
}

export class ChildrenPrices extends Price {
    getPriceCode() {
        return Movie.CHILDRENS
    }

    getCharge(getDaysRented: number) {
        let result = 1.5;
        if (getDaysRented > 3) {
            result += (getDaysRented - 3) * 1.5;
        }
        return result;
    }
}

export class NewReleasePrice extends Price {
    getPriceCode() {
        return Movie.NEW_RELEASE;
    }

    getCharge(getDaysRented: number) {
        return getDaysRented * 3;
    }

    getFrequentRenterPoints(daysRented: number) {
        return daysRented > 1 ? 2 : 1;
    }
}

export class RegularPrice extends Price {
    getPriceCode() {
        return Movie.REGULAR;
    }

    getCharge(getDaysRented: number) {
        let result = 2;
        if (getDaysRented > 2) {
            result += (getDaysRented - 2) * 1.5;
        }
        return result;
    }
}
