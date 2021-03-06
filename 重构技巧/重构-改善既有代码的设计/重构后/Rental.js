"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rental {
    _movie;
    _daysRented;
    constructor(movie, daysRented) {
        this._movie = movie;
        this._daysRented = daysRented;
    }
    getDaysRented() {
        return this._daysRented;
    }
    getMovie() {
        return this._movie;
    }
    getFrequentRenterPoints() {
        return this._movie.getFrequentRenterPoints(this._daysRented);
    }
    getCharge() {
        return this._movie.getCharge(this._daysRented);
    }
}
exports.default = Rental;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVudGFsLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLph43mnoTmioDlt6cv6YeN5p6ELeaUueWWhOaXouacieS7o+eggeeahOiuvuiuoS/ph43mnoTlkI4vUmVudGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBcUIsTUFBTTtJQUNOLE1BQU0sQ0FBUTtJQUNkLFdBQVcsQ0FBUztJQUVyQyxZQUFZLEtBQVksRUFBRSxVQUFrQjtRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLHVCQUF1QjtRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHTSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUVKO0FBMUJELHlCQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZSBmcm9tIFwiLi9Nb3ZpZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVudGFsIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX21vdmllOiBNb3ZpZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RheXNSZW50ZWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb3ZpZTogTW92aWUsIGRheXNSZW50ZWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21vdmllID0gbW92aWU7XHJcbiAgICAgICAgdGhpcy5fZGF5c1JlbnRlZCA9IGRheXNSZW50ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERheXNSZW50ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RheXNSZW50ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1vdmllKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZpZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RnJlcXVlbnRSZW50ZXJQb2ludHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmllLmdldEZyZXF1ZW50UmVudGVyUG9pbnRzKHRoaXMuX2RheXNSZW50ZWQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hhcmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZpZS5nZXRDaGFyZ2UodGhpcy5fZGF5c1JlbnRlZCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==