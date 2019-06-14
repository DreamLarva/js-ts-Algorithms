"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("./Movie"));
const Movie_2 = require("./Movie");
const Rental_1 = __importDefault(require("./Rental"));
const Customer_1 = __importDefault(require("./Customer"));
let movieA = new Movie_1.default("movieA", Movie_2.MovieType.NEW_RELEASE);
let movieB = new Movie_1.default("movieB", Movie_2.MovieType.REGULAR);
let rentalA = new Rental_1.default(movieA, 100);
let rentalB = new Rental_1.default(movieB, 1);
let customerA = new Customer_1.default("Agent47");
customerA.addRental(rentalA);
customerA.addRental(rentalB);
console.log(customerA.statement());
//# sourceMappingURL=index.js.map