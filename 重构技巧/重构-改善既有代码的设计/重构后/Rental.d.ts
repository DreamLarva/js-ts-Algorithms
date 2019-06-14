import Movie from "./Movie";
export default class Rental {
    private readonly _movie;
    private readonly _daysRented;
    constructor(movie: Movie, daysRented: number);
    getDaysRented(): number;
    getMovie(): Movie;
    getFrequentRenterPoints(): number;
    getCharge(): number;
}
