import Movie from "./Movie"

export default class Rental {
    private readonly _movie: Movie;
    private readonly _daysRented: number;

    constructor(movie: Movie, daysRented: number) {
        this._movie = movie;
        this._daysRented = daysRented
    }

    public getDaysRented() {
        return this._daysRented
    }

    public getMovie() {
        return this._movie
    }

    public getFrequentRenterPoints() {
        return this._movie.getFrequentRenterPoints(this._daysRented)
    }


    public getCharge() {
        return this._movie.getCharge(this._daysRented)
    }

}