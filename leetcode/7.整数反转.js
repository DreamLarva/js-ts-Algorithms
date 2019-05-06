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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy7mlbTmlbDlj43ovawuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzcu5pW05pWw5Y+N6L2sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7S0FRSzs7QUFFTDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQVM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRTNCLElBQUksQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsUUFBUTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRiwwRkFBMEY7SUFDMUYsT0FBTyxNQUFNLEdBQUcsUUFBUSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQy9ELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV2ZXJzZSBkaWdpdHMgb2YgYW4gaW50ZWdlci5cbiAqXG4gKiBFeGFtcGxlMTogeCA9IDEyMywgcmV0dXJuIDMyMVxuICogRXhhbXBsZTI6IHggPSAtMTIzLCByZXR1cm4gLTMyMVxuICpcbiAqIE5vdGU6XG4gKiBUaGUgaW5wdXQgaXMgYXNzdW1lZCB0byBiZSBhIDMyLWJpdCBzaWduZWQgaW50ZWdlci4gWW91ciBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIDAgd2hlbiB0aGUgcmV2ZXJzZWQgaW50ZWdlciBvdmVyZmxvd3MuXG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmNvbnN0IHJldmVyc2UgPSBmdW5jdGlvbiAoeDogbnVtYmVyKSB7XG4gICAgY29uc3QgbWF4TGltaXQgPSBNYXRoLnBvdygyLCAzMiAtIDEpO1xuICAgIGNvbnN0IG1pbkxpbWl0ID0gLW1heExpbWl0O1xuXG4gICAgaWYgKHggPiBtYXhMaW1pdCB8fCB4IDwgbWluTGltaXQpIHJldHVybiAwO1xuICAgIGNvbnN0IHJlc3VsdCA9ICh4ID4gMCA/IDEgOiAtMSkgKiBOdW1iZXIoU3RyaW5nKE1hdGguYWJzKHgpKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gTWF0aC5zaWduKHgpICogTnVtYmVyKFN0cmluZyhNYXRoLmFicyh4KSkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICAgIHJldHVybiByZXN1bHQgPiBtYXhMaW1pdCB8fCByZXN1bHQgPCBtaW5MaW1pdCA/IDAgOiByZXN1bHQ7XG59O1xuXG5leHBvcnQge31cbiJdfQ==