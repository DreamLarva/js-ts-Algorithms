import Movie from "./Movie"
import {MovieType} from "./Movie"
import Rental from "./Rental"
import Customer from "./Customer"

let movieA = new Movie("movieA", MovieType.NEW_RELEASE);
let movieB = new Movie("movieB", MovieType.REGULAR);
let rentalA = new Rental(movieA, 100);
let rentalB = new Rental(movieB, 1);
let customerA = new Customer("Agent47");
customerA.addRental(rentalA);
customerA.addRental(rentalB);

console.log(customerA.statement());
