"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005]  K 次取反后最大化的数组和
 *
 * https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/description/
 *
 * algorithms
 * Easy (40.43%)
 * Total Accepted:    663
 * Total Submissions: 1.6K
 * Testcase Example:  '[4,2,3]\n1'
 *
 * 给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K
 * 次。（我们可以多次选择同一个索引 i。）
 *
 * 以这种方式修改数组后，返回数组可能的最大和。
 *
 *
 *
 * 示例 1：
 *
 * 输入：A = [4,2,3], K = 1
 * 输出：5
 * 解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
 *
 *
 * 示例 2：
 *
 * 输入：A = [3,-1,0,2], K = 3
 * 输出：6
 * 解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。
 *
 *
 * 示例 3：
 *
 * 输入：A = [2,-3,-1,5,-4], K = 2
 * 输出：13
 * 解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= A.length <= 10000
 * 1 <= K <= 10000
 * -100 <= A[i] <= 100
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = function (A, K) {
    A.sort((a, b) => a - b);
    // 获取负数的个数
    const negative_count = A.filter(a => a < 0).length;
    // 如果负数的个数大于等于 K
    if (negative_count >= K) {
        return A.reduce((pre, cur) => {
            if (cur < 0 && K > 0) {
                cur *= -1;
                K--;
            }
            return pre + cur;
        }, 0);
    }
    // 如果负数的个数小于 K
    else if ((K - negative_count) % 2 !== 0) {
        // 找到最小绝对值
        let min_abs;
        const sum = A.reduce((pre, cur, index) => {
            if (index === 1) {
                min_abs = Math.abs(pre) < Math.abs(cur) ?
                    Math.abs(pre) :
                    Math.abs(cur);
            }
            else {
                min_abs = min_abs < Math.abs(cur) ?
                    min_abs :
                    Math.abs(cur);
            }
            return Math.abs(pre) + Math.abs(cur);
        });
        return sum - min_abs * 2;
    }
    else {
        return A.reduce((a, b) => Math.abs(a) + Math.abs(b));
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(largestSumAfterKNegations([5, 6, 9, -3, 3], 2), 20);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwNS5L5qyh5Y+W5Y+N5ZCO5pyA5aSn5YyW55qE5pWw57uE5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMDA1LkvmrKHlj5blj43lkI7mnIDlpKfljJbnmoTmlbDnu4TlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbURHO0FBQ0g7Ozs7R0FJRztBQUNILE1BQU0seUJBQXlCLEdBQUcsVUFBVSxDQUFXLEVBQUUsQ0FBUztJQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLFVBQVU7SUFDVixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuRCxnQkFBZ0I7SUFDaEIsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN6QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUMsRUFBRSxDQUFDO2FBQ1A7WUFDRCxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxjQUFjO1NBQ1QsSUFBSSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JDLFVBQVU7UUFDVixJQUFJLE9BQWUsQ0FBQztRQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxDQUFDLENBQUM7b0JBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtZQUVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLEdBQUcsT0FBUSxHQUFHLENBQUMsQ0FBQztLQUM3QjtTQUFNO1FBQ0gsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7QUFFTCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9MTAwNSBsYW5nPWphdmFzY3JpcHRcclxuICpcclxuICogWzEwMDVdICBLIOasoeWPluWPjeWQjuacgOWkp+WMlueahOaVsOe7hOWSjFxyXG4gKlxyXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9tYXhpbWl6ZS1zdW0tb2YtYXJyYXktYWZ0ZXItay1uZWdhdGlvbnMvZGVzY3JpcHRpb24vXHJcbiAqXHJcbiAqIGFsZ29yaXRobXNcclxuICogRWFzeSAoNDAuNDMlKVxyXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgNjYzXHJcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiAxLjZLXHJcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnWzQsMiwzXVxcbjEnXHJcbiAqXHJcbiAqIOe7meWumuS4gOS4quaVtOaVsOaVsOe7hCBB77yM5oiR5Lus5Y+q6IO955So5Lul5LiL5pa55rOV5L+u5pS56K+l5pWw57uE77ya5oiR5Lus6YCJ5oup5p+Q5Liq5Liq57Si5byVIGnCoOW5tuWwhiBBW2ldIOabv+aNouS4uiAtQVtpXe+8jOeEtuWQjuaAu+WFsemHjeWkjei/meS4qui/h+eoiyBLXHJcbiAqIOasoeOAgu+8iOaIkeS7rOWPr+S7peWkmuasoemAieaLqeWQjOS4gOS4que0ouW8lSBp44CC77yJXHJcbiAqXHJcbiAqIOS7pei/meenjeaWueW8j+S/ruaUueaVsOe7hOWQju+8jOi/lOWbnuaVsOe7hOWPr+iDveeahOacgOWkp+WSjOOAglxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKiDnpLrkvosgMe+8mlxyXG4gKlxyXG4gKiDovpPlhaXvvJpBID0gWzQsMiwzXSwgSyA9IDFcclxuICog6L6T5Ye677yaNVxyXG4gKiDop6Pph4rvvJrpgInmi6nntKLlvJUgKDEsKSDvvIznhLblkI4gQSDlj5jkuLogWzQsLTIsM13jgIJcclxuICpcclxuICpcclxuICog56S65L6LIDLvvJpcclxuICpcclxuICog6L6T5YWl77yaQSA9IFszLC0xLDAsMl0sIEsgPSAzXHJcbiAqIOi+k+WHuu+8mjZcclxuICog6Kej6YeK77ya6YCJ5oup57Si5byVICgxLCAyLCAyKSDvvIznhLblkI4gQSDlj5jkuLogWzMsMSwwLDJd44CCXHJcbiAqXHJcbiAqXHJcbiAqIOekuuS+iyAz77yaXHJcbiAqXHJcbiAqIOi+k+WFpe+8mkEgPSBbMiwtMywtMSw1LC00XSwgSyA9IDJcclxuICog6L6T5Ye677yaMTNcclxuICog6Kej6YeK77ya6YCJ5oup57Si5byVICgxLCA0KSDvvIznhLblkI4gQSDlj5jkuLogWzIsMywtMSw1LDRd44CCXHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqIOaPkOekuu+8mlxyXG4gKlxyXG4gKlxyXG4gKiAxIDw9IEEubGVuZ3RoIDw9IDEwMDAwXHJcbiAqIDEgPD0gSyA8PSAxMDAwMFxyXG4gKiAtMTAwIDw9IEFbaV0gPD0gMTAwXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gQVxyXG4gKiBAcGFyYW0ge251bWJlcn0gS1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCBsYXJnZXN0U3VtQWZ0ZXJLTmVnYXRpb25zID0gZnVuY3Rpb24gKEE6IG51bWJlcltdLCBLOiBudW1iZXIpIHtcclxuICAgIEEuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgLy8g6I635Y+W6LSf5pWw55qE5Liq5pWwXHJcbiAgICBjb25zdCBuZWdhdGl2ZV9jb3VudCA9IEEuZmlsdGVyKGEgPT4gYSA8IDApLmxlbmd0aDtcclxuICAgIC8vIOWmguaenOi0n+aVsOeahOS4quaVsOWkp+S6juetieS6jiBLXHJcbiAgICBpZiAobmVnYXRpdmVfY291bnQgPj0gSykge1xyXG4gICAgICAgIHJldHVybiBBLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1ciA8IDAgJiYgSyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGN1ciAqPSAtMTtcclxuICAgICAgICAgICAgICAgIEstLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcHJlICsgY3VyO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gICAgLy8g5aaC5p6c6LSf5pWw55qE5Liq5pWw5bCP5LqOIEtcclxuICAgIGVsc2UgaWYgKChLIC0gbmVnYXRpdmVfY291bnQpICUgMiAhPT0gMCkge1xyXG4gICAgICAgIC8vIOaJvuWIsOacgOWwj+e7neWvueWAvFxyXG4gICAgICAgIGxldCBtaW5fYWJzOiBudW1iZXI7XHJcbiAgICAgICAgY29uc3Qgc3VtID0gQS5yZWR1Y2UoKHByZSwgY3VyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG1pbl9hYnMgPSBNYXRoLmFicyhwcmUpIDwgTWF0aC5hYnMoY3VyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMocHJlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoY3VyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1pbl9hYnMgPSBtaW5fYWJzIDwgTWF0aC5hYnMoY3VyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgbWluX2FicyA6XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoY3VyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHByZSkgKyBNYXRoLmFicyhjdXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3VtIC0gbWluX2FicyEgKiAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gQS5yZWR1Y2UoKGEsIGIpID0+IE1hdGguYWJzKGEpICsgTWF0aC5hYnMoYikpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGxhcmdlc3RTdW1BZnRlcktOZWdhdGlvbnMoWzUsIDYsIDksIC0zLCAzXSwgMiksIDIwKTtcclxuXHJcblxyXG4iXX0=