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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwNS5L5qyh5Y+W5Y+N5ZCO5pyA5aSn5YyW55qE5pWw57uE5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMDA1LkvmrKHlj5blj43lkI7mnIDlpKfljJbnmoTmlbDnu4TlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbURHO0FBQ0g7Ozs7R0FJRztBQUNILE1BQU0seUJBQXlCLEdBQUcsVUFBVSxDQUFXLEVBQUUsQ0FBUztJQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLFVBQVU7SUFDVixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuRCxnQkFBZ0I7SUFDaEIsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN6QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUMsRUFBRSxDQUFDO2FBQ1A7WUFDRCxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxjQUFjO1NBQ1QsSUFBSSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JDLFVBQVU7UUFDVixJQUFJLE9BQWUsQ0FBQztRQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxDQUFDLENBQUM7b0JBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtZQUVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLEdBQUcsT0FBUSxHQUFHLENBQUMsQ0FBQztLQUM3QjtTQUFNO1FBQ0gsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7QUFFTCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTEwMDUgbGFuZz1qYXZhc2NyaXB0XG4gKlxuICogWzEwMDVdICBLIOasoeWPluWPjeWQjuacgOWkp+WMlueahOaVsOe7hOWSjFxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21heGltaXplLXN1bS1vZi1hcnJheS1hZnRlci1rLW5lZ2F0aW9ucy9kZXNjcmlwdGlvbi9cbiAqXG4gKiBhbGdvcml0aG1zXG4gKiBFYXN5ICg0MC40MyUpXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgNjYzXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogMS42S1xuICogVGVzdGNhc2UgRXhhbXBsZTogICdbNCwyLDNdXFxuMSdcbiAqXG4gKiDnu5nlrprkuIDkuKrmlbTmlbDmlbDnu4QgQe+8jOaIkeS7rOWPquiDveeUqOS7peS4i+aWueazleS/ruaUueivpeaVsOe7hO+8muaIkeS7rOmAieaLqeafkOS4quS4que0ouW8lSBpwqDlubblsIYgQVtpXSDmm7/mjaLkuLogLUFbaV3vvIznhLblkI7mgLvlhbHph43lpI3ov5nkuKrov4fnqIsgS1xuICog5qyh44CC77yI5oiR5Lus5Y+v5Lul5aSa5qyh6YCJ5oup5ZCM5LiA5Liq57Si5byVIGnjgILvvIlcbiAqXG4gKiDku6Xov5nnp43mlrnlvI/kv67mlLnmlbDnu4TlkI7vvIzov5Tlm57mlbDnu4Tlj6/og73nmoTmnIDlpKflkozjgIJcbiAqXG4gKlxuICpcbiAqIOekuuS+iyAx77yaXG4gKlxuICog6L6T5YWl77yaQSA9IFs0LDIsM10sIEsgPSAxXG4gKiDovpPlh7rvvJo1XG4gKiDop6Pph4rvvJrpgInmi6nntKLlvJUgKDEsKSDvvIznhLblkI4gQSDlj5jkuLogWzQsLTIsM13jgIJcbiAqXG4gKlxuICog56S65L6LIDLvvJpcbiAqXG4gKiDovpPlhaXvvJpBID0gWzMsLTEsMCwyXSwgSyA9IDNcbiAqIOi+k+WHuu+8mjZcbiAqIOino+mHiu+8mumAieaLqee0ouW8lSAoMSwgMiwgMikg77yM54S25ZCOIEEg5Y+Y5Li6IFszLDEsMCwyXeOAglxuICpcbiAqXG4gKiDnpLrkvosgM++8mlxuICpcbiAqIOi+k+WFpe+8mkEgPSBbMiwtMywtMSw1LC00XSwgSyA9IDJcbiAqIOi+k+WHuu+8mjEzXG4gKiDop6Pph4rvvJrpgInmi6nntKLlvJUgKDEsIDQpIO+8jOeEtuWQjiBBIOWPmOS4uiBbMiwzLC0xLDUsNF3jgIJcbiAqXG4gKlxuICpcbiAqXG4gKiDmj5DnpLrvvJpcbiAqXG4gKlxuICogMSA8PSBBLmxlbmd0aCA8PSAxMDAwMFxuICogMSA8PSBLIDw9IDEwMDAwXG4gKiAtMTAwIDw9IEFbaV0gPD0gMTAwXG4gKlxuICpcbiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBBXG4gKiBAcGFyYW0ge251bWJlcn0gS1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5jb25zdCBsYXJnZXN0U3VtQWZ0ZXJLTmVnYXRpb25zID0gZnVuY3Rpb24gKEE6IG51bWJlcltdLCBLOiBudW1iZXIpIHtcbiAgICBBLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAvLyDojrflj5botJ/mlbDnmoTkuKrmlbBcbiAgICBjb25zdCBuZWdhdGl2ZV9jb3VudCA9IEEuZmlsdGVyKGEgPT4gYSA8IDApLmxlbmd0aDtcbiAgICAvLyDlpoLmnpzotJ/mlbDnmoTkuKrmlbDlpKfkuo7nrYnkuo4gS1xuICAgIGlmIChuZWdhdGl2ZV9jb3VudCA+PSBLKSB7XG4gICAgICAgIHJldHVybiBBLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXIgPCAwICYmIEsgPiAwKSB7XG4gICAgICAgICAgICAgICAgY3VyICo9IC0xO1xuICAgICAgICAgICAgICAgIEstLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBjdXI7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICAvLyDlpoLmnpzotJ/mlbDnmoTkuKrmlbDlsI/kuo4gS1xuICAgIGVsc2UgaWYgKChLIC0gbmVnYXRpdmVfY291bnQpICUgMiAhPT0gMCkge1xuICAgICAgICAvLyDmib7liLDmnIDlsI/nu53lr7nlgLxcbiAgICAgICAgbGV0IG1pbl9hYnM6IG51bWJlcjtcbiAgICAgICAgY29uc3Qgc3VtID0gQS5yZWR1Y2UoKHByZSwgY3VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbWluX2FicyA9IE1hdGguYWJzKHByZSkgPCBNYXRoLmFicyhjdXIpID9cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMocHJlKSA6XG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGN1cik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pbl9hYnMgPSBtaW5fYWJzIDwgTWF0aC5hYnMoY3VyKSA/XG4gICAgICAgICAgICAgICAgICAgIG1pbl9hYnMgOlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhjdXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMocHJlKSArIE1hdGguYWJzKGN1cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdW0gLSBtaW5fYWJzISAqIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEEucmVkdWNlKChhLCBiKSA9PiBNYXRoLmFicyhhKSArIE1hdGguYWJzKGIpKTtcbiAgICB9XG5cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwobGFyZ2VzdFN1bUFmdGVyS05lZ2F0aW9ucyhbNSwgNiwgOSwgLTMsIDNdLCAyKSwgMjApO1xuXG5cbiJdfQ==