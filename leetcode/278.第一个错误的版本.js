"use strict";
/*
你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

示例:

给定 n = 5，并且 version = 4 是第一个错误的版本。

调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true

所以，4 是第一个错误的版本。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (isBadVersion(1))
            return 1;
        let left = 1;
        let right = n;
        /**
         * left 为 true , right 为 false
         * left 和 right 不相邻 二分法 得到的
         *      结果 true 的位置 设置为 新的 left
         *      结果 false 的位置 设置为 新的 right
         * 当 left 和 right 相邻的时候 right 就是 结果
         * */
        while (true) {
            if (left + 1 === right)
                return right;
            const midIndex = left + Math.floor((right - left) / 2); // 推荐使用 floor 因为其他有类型约束的语言 int 类型 不能整除 就会执行floor 操作
            if (isBadVersion(midIndex))
                right = midIndex;
            else
                left = midIndex;
        }
    };
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(solution((i) => i === 4)(5), 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc4LuesrOS4gOS4qumUmeivr+eahOeJiOacrC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjc4LuesrOS4gOS4qumUmeivr+eahOeJiOacrC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7Ozs7O0FBRUo7Ozs7Ozs7O0dBUUc7QUFFSDs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFVLFlBQTBDO0lBQ2pFOzs7T0FHRztJQUNILE9BQU8sVUFBVSxDQUFTO1FBQ3hCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkOzs7Ozs7YUFNSztRQUNMLE9BQU8sSUFBSSxFQUFFO1lBQ1gsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtREFBbUQ7WUFDM0csSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUFFLEtBQUssR0FBRyxRQUFRLENBQUM7O2dCQUN4QyxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS9oOaYr+S6p+WTgee7j+eQhu+8jOebruWJjeato+WcqOW4pumihuS4gOS4quWboumYn+W8gOWPkeaWsOeahOS6p+WTgeOAguS4jeW5uOeahOaYr++8jOS9oOeahOS6p+WTgeeahOacgOaWsOeJiOacrOayoeaciemAmui/h+i0qOmHj+ajgOa1i+OAgueUseS6juavj+S4queJiOacrOmDveaYr+WfuuS6juS5i+WJjeeahOeJiOacrOW8gOWPkeeahO+8jOaJgOS7pemUmeivr+eahOeJiOacrOS5i+WQjueahOaJgOacieeJiOacrOmDveaYr+mUmeeahOOAglxuXG7lgYforr7kvaDmnIkgbiDkuKrniYjmnKwgWzEsIDIsIC4uLiwgbl3vvIzkvaDmg7Pmib7lh7rlr7zoh7TkuYvlkI7miYDmnInniYjmnKzlh7rplJnnmoTnrKzkuIDkuKrplJnor6/nmoTniYjmnKzjgIJcblxu5L2g5Y+v5Lul6YCa6L+H6LCD55SoIGJvb2wgaXNCYWRWZXJzaW9uKHZlcnNpb24pIOaOpeWPo+adpeWIpOaWreeJiOacrOWPtyB2ZXJzaW9uIOaYr+WQpuWcqOWNleWFg+a1i+ivleS4reWHuumUmeOAguWunueOsOS4gOS4quWHveaVsOadpeafpeaJvuesrOS4gOS4qumUmeivr+eahOeJiOacrOOAguS9oOW6lOivpeWwvemHj+WHj+WwkeWvueiwg+eUqCBBUEkg55qE5qyh5pWw44CCXG5cbuekuuS+izpcblxu57uZ5a6aIG4gPSA177yM5bm25LiUIHZlcnNpb24gPSA0IOaYr+esrOS4gOS4qumUmeivr+eahOeJiOacrOOAglxuXG7osIPnlKggaXNCYWRWZXJzaW9uKDMpIC0+IGZhbHNlXG7osIPnlKggaXNCYWRWZXJzaW9uKDUpIC0+IHRydWVcbuiwg+eUqCBpc0JhZFZlcnNpb24oNCkgLT4gdHJ1ZVxuXG7miYDku6XvvIw0IOaYr+esrOS4gOS4qumUmeivr+eahOeJiOacrOOAglxuKiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIGlzQmFkVmVyc2lvbigpXG4gKlxuICogQHBhcmFtIHtpbnRlZ2VyfSB2ZXJzaW9uIG51bWJlclxuICogQHJldHVybiB7Ym9vbGVhbn0gd2hldGhlciB0aGUgdmVyc2lvbiBpcyBiYWRcbiAqIGlzQmFkVmVyc2lvbiA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAqICAgICAuLi5cbiAqIH07XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBpc0JhZFZlcnNpb24oKVxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbnZhciBzb2x1dGlvbiA9IGZ1bmN0aW9uIChpc0JhZFZlcnNpb246ICh2ZXJzaW9uOiBudW1iZXIpID0+IGJvb2xlYW4pIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gbiBUb3RhbCB2ZXJzaW9uc1xuICAgKiBAcmV0dXJuIHtpbnRlZ2VyfSBUaGUgZmlyc3QgYmFkIHZlcnNpb25cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiAobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoaXNCYWRWZXJzaW9uKDEpKSByZXR1cm4gMTtcbiAgICBsZXQgbGVmdCA9IDE7XG4gICAgbGV0IHJpZ2h0ID0gbjtcbiAgICAvKipcbiAgICAgKiBsZWZ0IOS4uiB0cnVlICwgcmlnaHQg5Li6IGZhbHNlXG4gICAgICogbGVmdCDlkowgcmlnaHQg5LiN55u46YK7IOS6jOWIhuazlSDlvpfliLDnmoRcbiAgICAgKiAgICAgIOe7k+aenCB0cnVlIOeahOS9jee9riDorr7nva7kuLog5paw55qEIGxlZnRcbiAgICAgKiAgICAgIOe7k+aenCBmYWxzZSDnmoTkvY3nva4g6K6+572u5Li6IOaWsOeahCByaWdodFxuICAgICAqIOW9kyBsZWZ0IOWSjCByaWdodCDnm7jpgrvnmoTml7blgJkgcmlnaHQg5bCx5pivIOe7k+aenFxuICAgICAqICovXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChsZWZ0ICsgMSA9PT0gcmlnaHQpIHJldHVybiByaWdodDtcbiAgICAgIGNvbnN0IG1pZEluZGV4ID0gbGVmdCArIE1hdGguZmxvb3IoKHJpZ2h0IC0gbGVmdCkgLyAyKTsgLy8g5o6o6I2Q5L2/55SoIGZsb29yIOWboOS4uuWFtuS7luacieexu+Wei+e6puadn+eahOivreiogCBpbnQg57G75Z6LIOS4jeiDveaVtOmZpCDlsLHkvJrmiafooYxmbG9vciDmk43kvZxcbiAgICAgIGlmIChpc0JhZFZlcnNpb24obWlkSW5kZXgpKSByaWdodCA9IG1pZEluZGV4O1xuICAgICAgZWxzZSBsZWZ0ID0gbWlkSW5kZXg7XG4gICAgfVxuICB9O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChzb2x1dGlvbigoaSkgPT4gaSA9PT0gNCkoNSksIDQpO1xuIl19