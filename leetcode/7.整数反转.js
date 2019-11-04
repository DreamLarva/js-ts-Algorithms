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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy7mlbTmlbDlj43ovawuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzcu5pW05pWw5Y+N6L2sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7S0FRSzs7Ozs7QUFFTDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQVM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRTNCLElBQUksQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsUUFBUTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRiwwRkFBMEY7SUFDMUYsT0FBTyxNQUFNLEdBQUcsUUFBUSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQy9ELENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQ1osR0FBRyxDQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUmV2ZXJzZSBkaWdpdHMgb2YgYW4gaW50ZWdlci5cclxuICpcclxuICogRXhhbXBsZTE6IHggPSAxMjMsIHJldHVybiAzMjFcclxuICogRXhhbXBsZTI6IHggPSAtMTIzLCByZXR1cm4gLTMyMVxyXG4gKlxyXG4gKiBOb3RlOlxyXG4gKiBUaGUgaW5wdXQgaXMgYXNzdW1lZCB0byBiZSBhIDMyLWJpdCBzaWduZWQgaW50ZWdlci4gWW91ciBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIDAgd2hlbiB0aGUgcmV2ZXJzZWQgaW50ZWdlciBvdmVyZmxvd3MuXHJcbiAqICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxuY29uc3QgcmV2ZXJzZSA9IGZ1bmN0aW9uICh4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG1heExpbWl0ID0gTWF0aC5wb3coMiwgMzIgLSAxKTtcclxuICAgIGNvbnN0IG1pbkxpbWl0ID0gLW1heExpbWl0O1xyXG5cclxuICAgIGlmICh4ID4gbWF4TGltaXQgfHwgeCA8IG1pbkxpbWl0KSByZXR1cm4gMDtcclxuICAgIGNvbnN0IHJlc3VsdCA9ICh4ID4gMCA/IDEgOiAtMSkgKiBOdW1iZXIoU3RyaW5nKE1hdGguYWJzKHgpKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSBNYXRoLnNpZ24oeCkgKiBOdW1iZXIoU3RyaW5nKE1hdGguYWJzKHgpKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0ID4gbWF4TGltaXQgfHwgcmVzdWx0IDwgbWluTGltaXQgPyAwIDogcmVzdWx0O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICByZXZlcnNlKDEyMyksXHJcbiAgICAzMjEsXHJcbik7XHJcbiJdfQ==