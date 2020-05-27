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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverse(123), 321);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy7mlbTmlbDlj43ovawuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzcu5pW05pWw5Y+N6L2sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7S0FRSzs7Ozs7QUFFTDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQVM7SUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRTNCLElBQUksQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsUUFBUTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sTUFBTSxHQUNWLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSwwRkFBMEY7SUFDMUYsT0FBTyxNQUFNLEdBQUcsUUFBUSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzdELENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldmVyc2UgZGlnaXRzIG9mIGFuIGludGVnZXIuXG4gKlxuICogRXhhbXBsZTE6IHggPSAxMjMsIHJldHVybiAzMjFcbiAqIEV4YW1wbGUyOiB4ID0gLTEyMywgcmV0dXJuIC0zMjFcbiAqXG4gKiBOb3RlOlxuICogVGhlIGlucHV0IGlzIGFzc3VtZWQgdG8gYmUgYSAzMi1iaXQgc2lnbmVkIGludGVnZXIuIFlvdXIgZnVuY3Rpb24gc2hvdWxkIHJldHVybiAwIHdoZW4gdGhlIHJldmVyc2VkIGludGVnZXIgb3ZlcmZsb3dzLlxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5jb25zdCByZXZlcnNlID0gZnVuY3Rpb24gKHg6IG51bWJlcikge1xuICBjb25zdCBtYXhMaW1pdCA9IE1hdGgucG93KDIsIDMyIC0gMSk7XG4gIGNvbnN0IG1pbkxpbWl0ID0gLW1heExpbWl0O1xuXG4gIGlmICh4ID4gbWF4TGltaXQgfHwgeCA8IG1pbkxpbWl0KSByZXR1cm4gMDtcbiAgY29uc3QgcmVzdWx0ID1cbiAgICAoeCA+IDAgPyAxIDogLTEpICogTnVtYmVyKFN0cmluZyhNYXRoLmFicyh4KSkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICAvLyBjb25zdCByZXN1bHQgPSBNYXRoLnNpZ24oeCkgKiBOdW1iZXIoU3RyaW5nKE1hdGguYWJzKHgpKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gIHJldHVybiByZXN1bHQgPiBtYXhMaW1pdCB8fCByZXN1bHQgPCBtaW5MaW1pdCA/IDAgOiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2UoMTIzKSwgMzIxKTtcbiJdfQ==