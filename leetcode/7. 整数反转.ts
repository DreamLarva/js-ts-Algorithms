/**
 * Reverse digits of an integer.
 *
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 * */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x: number) {
    const maxLimit = Math.pow(2, 32 - 1);
    const minLimit = -maxLimit;

    if (x > maxLimit || x < minLimit) return 0;
    const result = Math.sign(x) * Number(String(Math.abs(x)).split("").reverse().join(""));
    return result > maxLimit || result < minLimit ? 0 : result;
};

console.log(reverse(1234));

