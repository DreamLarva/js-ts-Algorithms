"use strict";
/**
 * Reverse digits of an integer.
 *
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const maxLimit = Math.pow(2, 32 - 1);
    const minLimit = -maxLimit;
    if (x > maxLimit || x < minLimit)
        return 0;
    const result = (x > 0 ? 1 : -1) * Number(String(Math.abs(x)).split("").reverse().join(""));
    // const result = Math.sign(x) * Number(String(Math.abs(x)).split("").reverse().join(""));
    return result > maxLimit || result < minLimit ? 0 : result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy7mlbTmlbDlj43ovawuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzcu5pW05pWw5Y+N6L2sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7S0FRSzs7QUFFTDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQVM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRTNCLElBQUksQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsUUFBUTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRiwwRkFBMEY7SUFDMUYsT0FBTyxNQUFNLEdBQUcsUUFBUSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQy9ELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBSZXZlcnNlIGRpZ2l0cyBvZiBhbiBpbnRlZ2VyLlxyXG4gKlxyXG4gKiBFeGFtcGxlMTogeCA9IDEyMywgcmV0dXJuIDMyMVxyXG4gKiBFeGFtcGxlMjogeCA9IC0xMjMsIHJldHVybiAtMzIxXHJcbiAqXHJcbiAqIE5vdGU6XHJcbiAqIFRoZSBpbnB1dCBpcyBhc3N1bWVkIHRvIGJlIGEgMzItYml0IHNpZ25lZCBpbnRlZ2VyLiBZb3VyIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gMCB3aGVuIHRoZSByZXZlcnNlZCBpbnRlZ2VyIG92ZXJmbG93cy5cclxuICogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCByZXZlcnNlID0gZnVuY3Rpb24gKHg6IG51bWJlcikge1xyXG4gICAgY29uc3QgbWF4TGltaXQgPSBNYXRoLnBvdygyLCAzMiAtIDEpO1xyXG4gICAgY29uc3QgbWluTGltaXQgPSAtbWF4TGltaXQ7XHJcblxyXG4gICAgaWYgKHggPiBtYXhMaW1pdCB8fCB4IDwgbWluTGltaXQpIHJldHVybiAwO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gKHggPiAwID8gMSA6IC0xKSAqIE51bWJlcihTdHJpbmcoTWF0aC5hYnMoeCkpLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IE1hdGguc2lnbih4KSAqIE51bWJlcihTdHJpbmcoTWF0aC5hYnMoeCkpLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcclxuICAgIHJldHVybiByZXN1bHQgPiBtYXhMaW1pdCB8fCByZXN1bHQgPCBtaW5MaW1pdCA/IDAgOiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQge31cclxuIl19