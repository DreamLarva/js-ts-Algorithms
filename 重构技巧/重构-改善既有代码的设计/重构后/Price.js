"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("./Movie"));
class Price {
    /** 默认方法 */
    getFrequentRenterPoints(getDaysRented) {
        return 1;
    }
}
exports.default = Price;
class ChildrenPrices extends Price {
    getPriceCode() {
        return Movie_1.default.CHILDRENS;
    }
    getCharge(getDaysRented) {
        let result = 1.5;
        if (getDaysRented > 3) {
            result += (getDaysRented - 3) * 1.5;
        }
        return result;
    }
}
exports.ChildrenPrices = ChildrenPrices;
class NewReleasePrice extends Price {
    getPriceCode() {
        return Movie_1.default.NEW_RELEASE;
    }
    getCharge(getDaysRented) {
        return getDaysRented * 3;
    }
    getFrequentRenterPoints(daysRented) {
        return daysRented > 1 ? 2 : 1;
    }
}
exports.NewReleasePrice = NewReleasePrice;
class RegularPrice extends Price {
    getPriceCode() {
        return Movie_1.default.REGULAR;
    }
    getCharge(getDaysRented) {
        let result = 2;
        if (getDaysRented > 2) {
            result += (getDaysRented - 2) * 1.5;
        }
        return result;
    }
}
exports.RegularPrice = RegularPrice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIumHjeaehOaKgOW3py/ph43mnoQt5pS55ZaE5pei5pyJ5Luj56CB55qE6K6+6K6hL+mHjeaehOWQji9QcmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUF3QztBQUV4QyxNQUE4QixLQUFLO0lBSy9CLFdBQVc7SUFDSix1QkFBdUIsQ0FBQyxhQUFxQjtRQUNoRCxPQUFPLENBQUMsQ0FBQTtJQUNaLENBQUM7Q0FDSjtBQVRELHdCQVNDO0FBRUQsTUFBYSxjQUFlLFNBQVEsS0FBSztJQUNyQyxZQUFZO1FBQ1IsT0FBTyxlQUFLLENBQUMsU0FBUyxDQUFBO0lBQzFCLENBQUM7SUFFRCxTQUFTLENBQUMsYUFBcUI7UUFDM0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksYUFBYSxHQUFHLENBQUMsRUFBRTtZQUNuQixNQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBWkQsd0NBWUM7QUFFRCxNQUFhLGVBQWdCLFNBQVEsS0FBSztJQUN0QyxZQUFZO1FBQ1IsT0FBTyxlQUFLLENBQUMsV0FBVyxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTLENBQUMsYUFBcUI7UUFDM0IsT0FBTyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxVQUFrQjtRQUN0QyxPQUFPLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSjtBQVpELDBDQVlDO0FBRUQsTUFBYSxZQUFhLFNBQVEsS0FBSztJQUNuQyxZQUFZO1FBQ1IsT0FBTyxlQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxTQUFTLENBQUMsYUFBcUI7UUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE1BQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUFaRCxvQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZSwge01vdmllVHlwZX0gZnJvbSBcIi4vTW92aWVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUHJpY2Uge1xyXG4gICAgYWJzdHJhY3QgZ2V0UHJpY2VDb2RlKCk6IE1vdmllVHlwZTtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXRDaGFyZ2UoZ2V0RGF5c1JlbnRlZDogbnVtYmVyKTogbnVtYmVyXHJcblxyXG4gICAgLyoqIOm7mOiupOaWueazlSAqL1xyXG4gICAgcHVibGljIGdldEZyZXF1ZW50UmVudGVyUG9pbnRzKGdldERheXNSZW50ZWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoaWxkcmVuUHJpY2VzIGV4dGVuZHMgUHJpY2Uge1xyXG4gICAgZ2V0UHJpY2VDb2RlKCkge1xyXG4gICAgICAgIHJldHVybiBNb3ZpZS5DSElMRFJFTlNcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGFyZ2UoZ2V0RGF5c1JlbnRlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IDEuNTtcclxuICAgICAgICBpZiAoZ2V0RGF5c1JlbnRlZCA+IDMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IChnZXREYXlzUmVudGVkIC0gMykgKiAxLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdSZWxlYXNlUHJpY2UgZXh0ZW5kcyBQcmljZSB7XHJcbiAgICBnZXRQcmljZUNvZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1vdmllLk5FV19SRUxFQVNFO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXJnZShnZXREYXlzUmVudGVkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGF5c1JlbnRlZCAqIDM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJlcXVlbnRSZW50ZXJQb2ludHMoZGF5c1JlbnRlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGRheXNSZW50ZWQgPiAxID8gMiA6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWd1bGFyUHJpY2UgZXh0ZW5kcyBQcmljZSB7XHJcbiAgICBnZXRQcmljZUNvZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1vdmllLlJFR1VMQVI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hhcmdlKGdldERheXNSZW50ZWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAyO1xyXG4gICAgICAgIGlmIChnZXREYXlzUmVudGVkID4gMikge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gKGdldERheXNSZW50ZWQgLSAyKSAqIDEuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iXX0=