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
assert_1.default.strictEqual(solution(i => i === 4)(5), 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc4LuesrOS4gOS4qumUmeivr+eahOeJiOacrC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjc4LuesrOS4gOS4qumUmeivr+eahOeJiOacrC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7Ozs7O0FBRUo7Ozs7Ozs7O0dBUUc7QUFFSDs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFVLFlBQTBDO0lBQy9EOzs7T0FHRztJQUNILE9BQU8sVUFBVSxDQUFRO1FBQ3JCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkOzs7Ozs7YUFNSztRQUNMLE9BQU8sSUFBSSxFQUFFO1lBQ1QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtREFBbUQ7WUFDM0csSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUN0QixLQUFLLEdBQUcsUUFBUSxDQUFDOztnQkFFakIsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUV2QjtJQUVMLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7kvaDmmK/kuqflk4Hnu4/nkIbvvIznm67liY3mraPlnKjluKbpoobkuIDkuKrlm6LpmJ/lvIDlj5HmlrDnmoTkuqflk4HjgILkuI3lubjnmoTmmK/vvIzkvaDnmoTkuqflk4HnmoTmnIDmlrDniYjmnKzmsqHmnInpgJrov4fotKjph4/mo4DmtYvjgILnlLHkuo7mr4/kuKrniYjmnKzpg73mmK/ln7rkuo7kuYvliY3nmoTniYjmnKzlvIDlj5HnmoTvvIzmiYDku6XplJnor6/nmoTniYjmnKzkuYvlkI7nmoTmiYDmnInniYjmnKzpg73mmK/plJnnmoTjgIJcclxuXHJcbuWBh+iuvuS9oOaciSBuIOS4queJiOacrCBbMSwgMiwgLi4uLCBuXe+8jOS9oOaDs+aJvuWHuuWvvOiHtOS5i+WQjuaJgOacieeJiOacrOWHuumUmeeahOesrOS4gOS4qumUmeivr+eahOeJiOacrOOAglxyXG5cclxu5L2g5Y+v5Lul6YCa6L+H6LCD55SoIGJvb2wgaXNCYWRWZXJzaW9uKHZlcnNpb24pIOaOpeWPo+adpeWIpOaWreeJiOacrOWPtyB2ZXJzaW9uIOaYr+WQpuWcqOWNleWFg+a1i+ivleS4reWHuumUmeOAguWunueOsOS4gOS4quWHveaVsOadpeafpeaJvuesrOS4gOS4qumUmeivr+eahOeJiOacrOOAguS9oOW6lOivpeWwvemHj+WHj+WwkeWvueiwg+eUqCBBUEkg55qE5qyh5pWw44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7nu5nlrpogbiA9IDXvvIzlubbkuJQgdmVyc2lvbiA9IDQg5piv56ys5LiA5Liq6ZSZ6K+v55qE54mI5pys44CCXHJcblxyXG7osIPnlKggaXNCYWRWZXJzaW9uKDMpIC0+IGZhbHNlXHJcbuiwg+eUqCBpc0JhZFZlcnNpb24oNSkgLT4gdHJ1ZVxyXG7osIPnlKggaXNCYWRWZXJzaW9uKDQpIC0+IHRydWVcclxuXHJcbuaJgOS7pe+8jDQg5piv56ys5LiA5Liq6ZSZ6K+v55qE54mI5pys44CCXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBEZWZpbml0aW9uIGZvciBpc0JhZFZlcnNpb24oKVxyXG4gKlxyXG4gKiBAcGFyYW0ge2ludGVnZXJ9IHZlcnNpb24gbnVtYmVyXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHZlcnNpb24gaXMgYmFkXHJcbiAqIGlzQmFkVmVyc2lvbiA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcclxuICogICAgIC4uLlxyXG4gKiB9O1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBpc0JhZFZlcnNpb24oKVxyXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cclxuICovXHJcbnZhciBzb2x1dGlvbiA9IGZ1bmN0aW9uIChpc0JhZFZlcnNpb246ICh2ZXJzaW9uOiBudW1iZXIpID0+IGJvb2xlYW4pIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBuIFRvdGFsIHZlcnNpb25zXHJcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfSBUaGUgZmlyc3QgYmFkIHZlcnNpb25cclxuICAgICAqL1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuOm51bWJlcik6bnVtYmVyIHtcclxuICAgICAgICBpZiAoaXNCYWRWZXJzaW9uKDEpKSByZXR1cm4gMTtcclxuICAgICAgICBsZXQgbGVmdCA9IDE7XHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gbjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBsZWZ0IOS4uiB0cnVlICwgcmlnaHQg5Li6IGZhbHNlXHJcbiAgICAgICAgICogbGVmdCDlkowgcmlnaHQg5LiN55u46YK7IOS6jOWIhuazlSDlvpfliLDnmoRcclxuICAgICAgICAgKiAgICAgIOe7k+aenCB0cnVlIOeahOS9jee9riDorr7nva7kuLog5paw55qEIGxlZnRcclxuICAgICAgICAgKiAgICAgIOe7k+aenCBmYWxzZSDnmoTkvY3nva4g6K6+572u5Li6IOaWsOeahCByaWdodFxyXG4gICAgICAgICAqIOW9kyBsZWZ0IOWSjCByaWdodCDnm7jpgrvnmoTml7blgJkgcmlnaHQg5bCx5pivIOe7k+aenFxyXG4gICAgICAgICAqICovXHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGxlZnQgKyAxID09PSByaWdodCkgcmV0dXJuIHJpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBtaWRJbmRleCA9IGxlZnQgKyBNYXRoLmZsb29yKChyaWdodCAtIGxlZnQpIC8gMik7IC8vIOaOqOiNkOS9v+eUqCBmbG9vciDlm6DkuLrlhbbku5bmnInnsbvlnovnuqbmnZ/nmoTor63oqIAgaW50IOexu+WeiyDkuI3og73mlbTpmaQg5bCx5Lya5omn6KGMZmxvb3Ig5pON5L2cXHJcbiAgICAgICAgICAgIGlmIChpc0JhZFZlcnNpb24obWlkSW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSBtaWRJbmRleDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbGVmdCA9IG1pZEluZGV4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKHNvbHV0aW9uKGkgPT4gaSA9PT0gNCkoNSksIDQpO1xyXG4iXX0=