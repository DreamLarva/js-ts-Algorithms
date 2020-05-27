"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:

输入: 38
输出: 2
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
进阶:
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
* */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) { };
// 暴力解决
function solution1(num) {
    if (num < 10)
        return num;
    let result = 0;
    while (num) {
        result += num % 10;
        num = Math.trunc(num / 10);
    }
    return solution1(result);
}
/**
 * O(1)的算法
 * 假如一个三位数'abc'，其值大小为s1 = 100 * a + 10 * b + 1 * c，
 * 经过一次各位相加后，变为s2 = a + b + c，减小的差值为(s1 -s2) = 99 * a + 9 * b，
 * 差值可以被9整除，每一个循环都这样，缩小了9的倍数。
 * 当num小于9，即只有一位时，直接返回num，大于9时，如果能被9整除，则返回9（因为不可能返回0也不可能返回两位数及以上的值），
 * 如果不能被整除，就返回被9除的余数。
 * */
function solution2(num) {
    if (num > 9) {
        num = num % 9;
        if (num === 0)
            return 9;
    }
    return num;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU4LuWQhOS9jeebuOWKoC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjU4LuWQhOS9jeebuOWKoC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7O0lBVUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLFNBQVMsR0FBRyxVQUFVLEdBQVcsSUFBRyxDQUFDLENBQUM7QUFFMUMsT0FBTztBQUNQLFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDNUIsSUFBSSxHQUFHLEdBQUcsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDO0lBRXpCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE9BQU8sR0FBRyxFQUFFO1FBQ1YsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVEOzs7Ozs7O0tBT0s7QUFDTCxTQUFTLFNBQVMsQ0FBQyxHQUFXO0lBQzVCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNYLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq6Z2e6LSf5pW05pWwIG51be+8jOWPjeWkjeWwhuWQhOS4quS9jeS4iueahOaVsOWtl+ebuOWKoO+8jOebtOWIsOe7k+aenOS4uuS4gOS9jeaVsOOAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiAzOFxyXG7ovpPlh7o6IDJcclxu6Kej6YeKOiDlkITkvY3nm7jliqDnmoTov4fnqIvkuLrvvJozICsgOCA9IDExLCAxICsgMSA9IDLjgIIg55Sx5LqOIDIg5piv5LiA5L2N5pWw77yM5omA5Lul6L+U5ZueIDLjgIJcclxu6L+b6Zi2OlxyXG7kvaDlj6/ku6XkuI3kvb/nlKjlvqrnjq/miJbogIXpgJLlvZLvvIzkuJTlnKggTygxKSDml7bpl7TlpI3mnYLluqblhoXop6PlhrPov5nkuKrpl67popjlkJfvvJ9cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgYWRkRGlnaXRzID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7fTtcclxuXHJcbi8vIOaatOWKm+ino+WGs1xyXG5mdW5jdGlvbiBzb2x1dGlvbjEobnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChudW0gPCAxMCkgcmV0dXJuIG51bTtcclxuXHJcbiAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgd2hpbGUgKG51bSkge1xyXG4gICAgcmVzdWx0ICs9IG51bSAlIDEwO1xyXG4gICAgbnVtID0gTWF0aC50cnVuYyhudW0gLyAxMCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc29sdXRpb24xKHJlc3VsdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPKDEp55qE566X5rOVXHJcbiAqIOWBh+WmguS4gOS4quS4ieS9jeaVsCdhYmMn77yM5YW25YC85aSn5bCP5Li6czEgPSAxMDAgKiBhICsgMTAgKiBiICsgMSAqIGPvvIxcclxuICog57uP6L+H5LiA5qyh5ZCE5L2N55u45Yqg5ZCO77yM5Y+Y5Li6czIgPSBhICsgYiArIGPvvIzlh4/lsI/nmoTlt67lgLzkuLooczEgLXMyKSA9IDk5ICogYSArIDkgKiBi77yMXGJcclxuICog5beu5YC85Y+v5Lul6KKrOeaVtOmZpO+8jOavj+S4gOS4quW+queOr+mDvei/meagt++8jOe8qeWwj+S6hjnnmoTlgI3mlbDjgIJcclxuICog5b2TbnVt5bCP5LqOOe+8jOWNs+WPquacieS4gOS9jeaXtu+8jOebtOaOpei/lOWbnm51be+8jOWkp+S6jjnml7bvvIzlpoLmnpzog73ooqs55pW06Zmk77yM5YiZ6L+U5ZueOe+8iOWboOS4uuS4jeWPr+iDvei/lOWbnjDkuZ/kuI3lj6/og73ov5Tlm57kuKTkvY3mlbDlj4rku6XkuIrnmoTlgLzvvInvvIxcclxuICog5aaC5p6c5LiN6IO96KKr5pW06Zmk77yM5bCx6L+U5Zue6KKrOemZpOeahOS9meaVsOOAglxyXG4gKiAqL1xyXG5mdW5jdGlvbiBzb2x1dGlvbjIobnVtOiBudW1iZXIpIHtcclxuICBpZiAobnVtID4gOSkge1xyXG4gICAgbnVtID0gbnVtICUgOTtcclxuICAgIGlmIChudW0gPT09IDApIHJldHVybiA5O1xyXG4gIH1cclxuICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==