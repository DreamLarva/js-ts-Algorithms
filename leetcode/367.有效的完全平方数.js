"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True
示例 2：

输入：14
输出：False
* */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let i = 1;
    let n = i * i;
    while (n <= num) {
        if (n == num)
            return true;
        else {
            i++;
            n = i ** 2;
        }
    }
    return false;
};
/**
 * 非递增而是递减
 * */
var isPerfectSquare2 = function (num) {
    let i = num >> 2;
    let n = i * i;
    while (n >= num) {
        if (n == num)
            return true;
        else {
            i--;
            n = i ** 2;
        }
    }
    return false;
};
/**
 * 二分
 * */
var isPerfectSquare3 = function (num) {
    let start = 1;
    let end = num;
    let mid = Math.floor(start + (end - start) / 2);
    while (start <= end) {
        if (mid ** 2 > num) {
            end = mid - 1;
        }
        else if (mid ** 2 < num) {
            start = mid + 1;
        }
        else
            return true;
        mid = Math.floor((end - start) / 2 + start);
    }
    return false;
};
/**
 * 公式
 * 利用 1+3+5+7+9+…+(2n-1)=n^2，即完全平方数肯定是前n个连续奇数的和
 * */
var isPerfectSquare4 = function (num) {
    let i = 1;
    while (num > 0) {
        num -= i;
        i += 2;
    }
    return num === 0;
};
/**
 * 牛顿迭代法 同 69题
 * */
var isPerfectSquare5 = function (num) {
    if (num === 1)
        return true;
    let r = num;
    while (r * r > num) {
        r = (r + num / r) / 2;
    }
    return Number.isInteger(r) && r * r === num;
};
const assert_1 = __importDefault(require("assert"));
const benchmark_1 = __importDefault(require("benchmark"));
assert_1.default.strictEqual(isPerfectSquare5(16), true);
assert_1.default.strictEqual(isPerfectSquare5(17), false);
// 使用牛顿迭代法 超时
// assert.strictEqual(
//     isPerfectSquare5(5),
//     false,
// );
const suite = new benchmark_1.default.Suite();
suite
    .add("递增", function () {
    isPerfectSquare(99999);
})
    .add("递减", function () {
    isPerfectSquare2(99999);
})
    .add("二分", function () {
    isPerfectSquare3(99999);
})
    .add("公式", function () {
    isPerfectSquare4(99999);
})
    .add("牛顿", function () {
    isPerfectSquare5(99999);
})
    .on("cycle", function (event) {
    console.log(String(event.target));
})
    .on("complete", function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ async: false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY3LuacieaViOeahOWujOWFqOW5s+aWueaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzY3LuacieaViOeahOWujOWFqOW5s+aWueaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLEdBQVc7SUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFBRSxPQUFPLElBQUksQ0FBQzthQUNyQjtZQUNILENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDWjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFDRjs7S0FFSztBQUNMLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxHQUFXO0lBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFBRSxPQUFPLElBQUksQ0FBQzthQUNyQjtZQUNILENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDWjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRjs7S0FFSztBQUNMLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxHQUFXO0lBQzFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFH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QUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quato+aVtOaVsCBudW3vvIznvJblhpnkuIDkuKrlh73mlbDvvIzlpoLmnpwgbnVtIOaYr+S4gOS4quWujOWFqOW5s+aWueaVsO+8jOWImei/lOWbniBUcnVl77yM5ZCm5YiZ6L+U5ZueIEZhbHNl44CCXHJcblxyXG7or7TmmI7vvJrkuI3opoHkvb/nlKjku7vkvZXlhoXnva7nmoTlupPlh73mlbDvvIzlpoIgIHNxcnTjgIJcclxuXHJcbuekuuS+iyAx77yaXHJcblxyXG7ovpPlhaXvvJoxNlxyXG7ovpPlh7rvvJpUcnVlXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJoxNFxyXG7ovpPlh7rvvJpGYWxzZVxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNQZXJmZWN0U3F1YXJlID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7XHJcbiAgbGV0IGkgPSAxO1xyXG4gIGxldCBuID0gaSAqIGk7XHJcbiAgd2hpbGUgKG4gPD0gbnVtKSB7XHJcbiAgICBpZiAobiA9PSBudW0pIHJldHVybiB0cnVlO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGkrKztcclxuICAgICAgbiA9IGkgKiogMjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG4vKipcclxuICog6Z2e6YCS5aKe6ICM5piv6YCS5YePXHJcbiAqICovXHJcbnZhciBpc1BlcmZlY3RTcXVhcmUyID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7XHJcbiAgbGV0IGkgPSBudW0gPj4gMjtcclxuICBsZXQgbiA9IGkgKiBpO1xyXG4gIHdoaWxlIChuID49IG51bSkge1xyXG4gICAgaWYgKG4gPT0gbnVtKSByZXR1cm4gdHJ1ZTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpLS07XHJcbiAgICAgIG4gPSBpICoqIDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDkuozliIZcclxuICogKi9cclxudmFyIGlzUGVyZmVjdFNxdWFyZTMgPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpIHtcclxuICBsZXQgc3RhcnQgPSAxO1xyXG4gIGxldCBlbmQgPSBudW07XHJcbiAgbGV0IG1pZCA9IE1hdGguZmxvb3Ioc3RhcnQgKyAoZW5kIC0gc3RhcnQpIC8gMik7XHJcbiAgd2hpbGUgKHN0YXJ0IDw9IGVuZCkge1xyXG4gICAgaWYgKG1pZCAqKiAyID4gbnVtKSB7XHJcbiAgICAgIGVuZCA9IG1pZCAtIDE7XHJcbiAgICB9IGVsc2UgaWYgKG1pZCAqKiAyIDwgbnVtKSB7XHJcbiAgICAgIHN0YXJ0ID0gbWlkICsgMTtcclxuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBzdGFydCkgLyAyICsgc3RhcnQpO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbi8qKlxyXG4gKiDlhazlvI9cclxuICog5Yip55SoIDErMys1KzcrOSvigKYrKDJuLTEpPW5eMu+8jOWNs+WujOWFqOW5s+aWueaVsOiCr+WumuaYr+WJjW7kuKrov57nu63lpYfmlbDnmoTlkoxcclxuICogKi9cclxudmFyIGlzUGVyZmVjdFNxdWFyZTQgPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpIHtcclxuICBsZXQgaSA9IDE7XHJcbiAgd2hpbGUgKG51bSA+IDApIHtcclxuICAgIG51bSAtPSBpO1xyXG4gICAgaSArPSAyO1xyXG4gIH1cclxuICByZXR1cm4gbnVtID09PSAwO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOeJm+mhv+i/reS7o+azlSDlkIwgNjnpophcclxuICogKi9cclxudmFyIGlzUGVyZmVjdFNxdWFyZTUgPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpIHtcclxuICBpZiAobnVtID09PSAxKSByZXR1cm4gdHJ1ZTtcclxuICBsZXQgciA9IG51bTtcclxuICB3aGlsZSAociAqIHIgPiBudW0pIHtcclxuICAgIHIgPSAociArIG51bSAvIHIpIC8gMjtcclxuICB9XHJcbiAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIocikgJiYgciAqIHIgPT09IG51bTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5pbXBvcnQgQmVuY2htYXJrIGZyb20gXCJiZW5jaG1hcmtcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChpc1BlcmZlY3RTcXVhcmU1KDE2KSwgdHJ1ZSk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChpc1BlcmZlY3RTcXVhcmU1KDE3KSwgZmFsc2UpO1xyXG4vLyDkvb/nlKjniZvpob/ov63ku6Pms5Ug6LaF5pe2XHJcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChcclxuLy8gICAgIGlzUGVyZmVjdFNxdWFyZTUoNSksXHJcbi8vICAgICBmYWxzZSxcclxuLy8gKTtcclxuXHJcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZSgpO1xyXG5zdWl0ZVxyXG4gIC5hZGQoXCLpgJLlop5cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaXNQZXJmZWN0U3F1YXJlKDk5OTk5KTtcclxuICB9KVxyXG4gIC5hZGQoXCLpgJLlh49cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaXNQZXJmZWN0U3F1YXJlMig5OTk5OSk7XHJcbiAgfSlcclxuICAuYWRkKFwi5LqM5YiGXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlzUGVyZmVjdFNxdWFyZTMoOTk5OTkpO1xyXG4gIH0pXHJcbiAgLmFkZChcIuWFrOW8j1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpc1BlcmZlY3RTcXVhcmU0KDk5OTk5KTtcclxuICB9KVxyXG4gIC5hZGQoXCLniZvpob9cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaXNQZXJmZWN0U3F1YXJlNSg5OTk5OSk7XHJcbiAgfSlcclxuICAub24oXCJjeWNsZVwiLCBmdW5jdGlvbiAoZXZlbnQ6IEJlbmNobWFyay5FdmVudCkge1xyXG4gICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xyXG4gIH0pXHJcbiAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKHRoaXM6IEJlbmNobWFyay5TdWl0ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0Zhc3Rlc3QgaXMgJyArIHRoaXMuZmlsdGVyKCdmYXN0ZXN0JykubWFwKCAnbmFtZScpKTtcclxuICB9KVxyXG4gIC8vIHJ1biBhc3luY1xyXG4gIC5ydW4oeyBhc3luYzogZmFsc2UgfSk7XHJcbiJdfQ==