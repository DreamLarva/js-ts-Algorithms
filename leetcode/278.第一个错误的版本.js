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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc4LuesrOS4gOS4qumUmeivr+eahOeJiOacrC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjc4LuesrOS4gOS4qumUmeivr+eahOeJiOacrC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7Ozs7O0FBRUo7Ozs7Ozs7O0dBUUc7QUFFSDs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFVLFlBQTBDO0lBQ2pFOzs7T0FHRztJQUNILE9BQU8sVUFBVSxDQUFTO1FBQ3hCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkOzs7Ozs7YUFNSztRQUNMLE9BQU8sSUFBSSxFQUFFO1lBQ1gsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtREFBbUQ7WUFDM0csSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUFFLEtBQUssR0FBRyxRQUFRLENBQUM7O2dCQUN4QyxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5L2g5piv5Lqn5ZOB57uP55CG77yM55uu5YmN5q2j5Zyo5bim6aKG5LiA5Liq5Zui6Zif5byA5Y+R5paw55qE5Lqn5ZOB44CC5LiN5bm455qE5piv77yM5L2g55qE5Lqn5ZOB55qE5pyA5paw54mI5pys5rKh5pyJ6YCa6L+H6LSo6YeP5qOA5rWL44CC55Sx5LqO5q+P5Liq54mI5pys6YO95piv5Z+65LqO5LmL5YmN55qE54mI5pys5byA5Y+R55qE77yM5omA5Lul6ZSZ6K+v55qE54mI5pys5LmL5ZCO55qE5omA5pyJ54mI5pys6YO95piv6ZSZ55qE44CCXHJcblxyXG7lgYforr7kvaDmnIkgbiDkuKrniYjmnKwgWzEsIDIsIC4uLiwgbl3vvIzkvaDmg7Pmib7lh7rlr7zoh7TkuYvlkI7miYDmnInniYjmnKzlh7rplJnnmoTnrKzkuIDkuKrplJnor6/nmoTniYjmnKzjgIJcclxuXHJcbuS9oOWPr+S7pemAmui/h+iwg+eUqCBib29sIGlzQmFkVmVyc2lvbih2ZXJzaW9uKSDmjqXlj6PmnaXliKTmlq3niYjmnKzlj7cgdmVyc2lvbiDmmK/lkKblnKjljZXlhYPmtYvor5XkuK3lh7rplJnjgILlrp7njrDkuIDkuKrlh73mlbDmnaXmn6Xmib7nrKzkuIDkuKrplJnor6/nmoTniYjmnKzjgILkvaDlupTor6XlsL3ph4/lh4/lsJHlr7nosIPnlKggQVBJIOeahOasoeaVsOOAglxyXG5cclxu56S65L6LOlxyXG5cclxu57uZ5a6aIG4gPSA177yM5bm25LiUIHZlcnNpb24gPSA0IOaYr+esrOS4gOS4qumUmeivr+eahOeJiOacrOOAglxyXG5cclxu6LCD55SoIGlzQmFkVmVyc2lvbigzKSAtPiBmYWxzZVxyXG7osIPnlKggaXNCYWRWZXJzaW9uKDUpIC0+IHRydWVcclxu6LCD55SoIGlzQmFkVmVyc2lvbig0KSAtPiB0cnVlXHJcblxyXG7miYDku6XvvIw0IOaYr+esrOS4gOS4qumUmeivr+eahOeJiOacrOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogRGVmaW5pdGlvbiBmb3IgaXNCYWRWZXJzaW9uKClcclxuICpcclxuICogQHBhcmFtIHtpbnRlZ2VyfSB2ZXJzaW9uIG51bWJlclxyXG4gKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoZSB2ZXJzaW9uIGlzIGJhZFxyXG4gKiBpc0JhZFZlcnNpb24gPSBmdW5jdGlvbih2ZXJzaW9uKSB7XHJcbiAqICAgICAuLi5cclxuICogfTtcclxuICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXNCYWRWZXJzaW9uKClcclxuICogQHJldHVybiB7ZnVuY3Rpb259XHJcbiAqL1xyXG52YXIgc29sdXRpb24gPSBmdW5jdGlvbiAoaXNCYWRWZXJzaW9uOiAodmVyc2lvbjogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSBuIFRvdGFsIHZlcnNpb25zXHJcbiAgICogQHJldHVybiB7aW50ZWdlcn0gVGhlIGZpcnN0IGJhZCB2ZXJzaW9uXHJcbiAgICovXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChuOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGlzQmFkVmVyc2lvbigxKSkgcmV0dXJuIDE7XHJcbiAgICBsZXQgbGVmdCA9IDE7XHJcbiAgICBsZXQgcmlnaHQgPSBuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBsZWZ0IOS4uiB0cnVlICwgcmlnaHQg5Li6IGZhbHNlXHJcbiAgICAgKiBsZWZ0IOWSjCByaWdodCDkuI3nm7jpgrsg5LqM5YiG5rOVIOW+l+WIsOeahFxyXG4gICAgICogICAgICDnu5PmnpwgdHJ1ZSDnmoTkvY3nva4g6K6+572u5Li6IOaWsOeahCBsZWZ0XHJcbiAgICAgKiAgICAgIOe7k+aenCBmYWxzZSDnmoTkvY3nva4g6K6+572u5Li6IOaWsOeahCByaWdodFxyXG4gICAgICog5b2TIGxlZnQg5ZKMIHJpZ2h0IOebuOmCu+eahOaXtuWAmSByaWdodCDlsLHmmK8g57uT5p6cXHJcbiAgICAgKiAqL1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgaWYgKGxlZnQgKyAxID09PSByaWdodCkgcmV0dXJuIHJpZ2h0O1xyXG4gICAgICBjb25zdCBtaWRJbmRleCA9IGxlZnQgKyBNYXRoLmZsb29yKChyaWdodCAtIGxlZnQpIC8gMik7IC8vIOaOqOiNkOS9v+eUqCBmbG9vciDlm6DkuLrlhbbku5bmnInnsbvlnovnuqbmnZ/nmoTor63oqIAgaW50IOexu+WeiyDkuI3og73mlbTpmaQg5bCx5Lya5omn6KGMZmxvb3Ig5pON5L2cXHJcbiAgICAgIGlmIChpc0JhZFZlcnNpb24obWlkSW5kZXgpKSByaWdodCA9IG1pZEluZGV4O1xyXG4gICAgICBlbHNlIGxlZnQgPSBtaWRJbmRleDtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoc29sdXRpb24oKGkpID0+IGkgPT09IDQpKDUpLCA0KTtcclxuIl19