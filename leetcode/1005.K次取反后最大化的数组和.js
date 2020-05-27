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
    const negative_count = A.filter((a) => a < 0).length;
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
                min_abs = Math.abs(pre) < Math.abs(cur) ? Math.abs(pre) : Math.abs(cur);
            }
            else {
                min_abs = min_abs < Math.abs(cur) ? min_abs : Math.abs(cur);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwNS5L5qyh5Y+W5Y+N5ZCO5pyA5aSn5YyW55qE5pWw57uE5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMDA1LkvmrKHlj5blj43lkI7mnIDlpKfljJbnmoTmlbDnu4TlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbURHO0FBQ0g7Ozs7R0FJRztBQUNILE1BQU0seUJBQXlCLEdBQUcsVUFBVSxDQUFXLEVBQUUsQ0FBUztJQUNoRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLFVBQVU7SUFDVixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3JELGdCQUFnQjtJQUNoQixJQUFJLGNBQWMsSUFBSSxDQUFDLEVBQUU7UUFDdkIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNCLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELGNBQWM7U0FDVCxJQUFJLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkMsVUFBVTtRQUNWLElBQUksT0FBZSxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3ZDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdEO1lBRUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsR0FBRyxPQUFRLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO1NBQU07UUFDTCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0RDtBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9MTAwNSBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMTAwNV0gIEsg5qyh5Y+W5Y+N5ZCO5pyA5aSn5YyW55qE5pWw57uE5ZKMXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWF4aW1pemUtc3VtLW9mLWFycmF5LWFmdGVyLWstbmVnYXRpb25zL2Rlc2NyaXB0aW9uL1xuICpcbiAqIGFsZ29yaXRobXNcbiAqIEVhc3kgKDQwLjQzJSlcbiAqIFRvdGFsIEFjY2VwdGVkOiAgICA2NjNcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiAxLjZLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1s0LDIsM11cXG4xJ1xuICpcbiAqIOe7meWumuS4gOS4quaVtOaVsOaVsOe7hCBB77yM5oiR5Lus5Y+q6IO955So5Lul5LiL5pa55rOV5L+u5pS56K+l5pWw57uE77ya5oiR5Lus6YCJ5oup5p+Q5Liq5Liq57Si5byVIGnCoOW5tuWwhiBBW2ldIOabv+aNouS4uiAtQVtpXe+8jOeEtuWQjuaAu+WFsemHjeWkjei/meS4qui/h+eoiyBLXG4gKiDmrKHjgILvvIjmiJHku6zlj6/ku6XlpJrmrKHpgInmi6nlkIzkuIDkuKrntKLlvJUgaeOAgu+8iVxuICpcbiAqIOS7pei/meenjeaWueW8j+S/ruaUueaVsOe7hOWQju+8jOi/lOWbnuaVsOe7hOWPr+iDveeahOacgOWkp+WSjOOAglxuICpcbiAqXG4gKlxuICog56S65L6LIDHvvJpcbiAqXG4gKiDovpPlhaXvvJpBID0gWzQsMiwzXSwgSyA9IDFcbiAqIOi+k+WHuu+8mjVcbiAqIOino+mHiu+8mumAieaLqee0ouW8lSAoMSwpIO+8jOeEtuWQjiBBIOWPmOS4uiBbNCwtMiwzXeOAglxuICpcbiAqXG4gKiDnpLrkvosgMu+8mlxuICpcbiAqIOi+k+WFpe+8mkEgPSBbMywtMSwwLDJdLCBLID0gM1xuICog6L6T5Ye677yaNlxuICog6Kej6YeK77ya6YCJ5oup57Si5byVICgxLCAyLCAyKSDvvIznhLblkI4gQSDlj5jkuLogWzMsMSwwLDJd44CCXG4gKlxuICpcbiAqIOekuuS+iyAz77yaXG4gKlxuICog6L6T5YWl77yaQSA9IFsyLC0zLC0xLDUsLTRdLCBLID0gMlxuICog6L6T5Ye677yaMTNcbiAqIOino+mHiu+8mumAieaLqee0ouW8lSAoMSwgNCkg77yM54S25ZCOIEEg5Y+Y5Li6IFsyLDMsLTEsNSw0XeOAglxuICpcbiAqXG4gKlxuICpcbiAqIOaPkOekuu+8mlxuICpcbiAqXG4gKiAxIDw9IEEubGVuZ3RoIDw9IDEwMDAwXG4gKiAxIDw9IEsgPD0gMTAwMDBcbiAqIC0xMDAgPD0gQVtpXSA8PSAxMDBcbiAqXG4gKlxuICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IEFcbiAqIEBwYXJhbSB7bnVtYmVyfSBLXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmNvbnN0IGxhcmdlc3RTdW1BZnRlcktOZWdhdGlvbnMgPSBmdW5jdGlvbiAoQTogbnVtYmVyW10sIEs6IG51bWJlcikge1xuICBBLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgLy8g6I635Y+W6LSf5pWw55qE5Liq5pWwXG4gIGNvbnN0IG5lZ2F0aXZlX2NvdW50ID0gQS5maWx0ZXIoKGEpID0+IGEgPCAwKS5sZW5ndGg7XG4gIC8vIOWmguaenOi0n+aVsOeahOS4quaVsOWkp+S6juetieS6jiBLXG4gIGlmIChuZWdhdGl2ZV9jb3VudCA+PSBLKSB7XG4gICAgcmV0dXJuIEEucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgaWYgKGN1ciA8IDAgJiYgSyA+IDApIHtcbiAgICAgICAgY3VyICo9IC0xO1xuICAgICAgICBLLS07XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlICsgY3VyO1xuICAgIH0sIDApO1xuICB9XG4gIC8vIOWmguaenOi0n+aVsOeahOS4quaVsOWwj+S6jiBLXG4gIGVsc2UgaWYgKChLIC0gbmVnYXRpdmVfY291bnQpICUgMiAhPT0gMCkge1xuICAgIC8vIOaJvuWIsOacgOWwj+e7neWvueWAvFxuICAgIGxldCBtaW5fYWJzOiBudW1iZXI7XG4gICAgY29uc3Qgc3VtID0gQS5yZWR1Y2UoKHByZSwgY3VyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAgIG1pbl9hYnMgPSBNYXRoLmFicyhwcmUpIDwgTWF0aC5hYnMoY3VyKSA/IE1hdGguYWJzKHByZSkgOiBNYXRoLmFicyhjdXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluX2FicyA9IG1pbl9hYnMgPCBNYXRoLmFicyhjdXIpID8gbWluX2FicyA6IE1hdGguYWJzKGN1cik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBNYXRoLmFicyhwcmUpICsgTWF0aC5hYnMoY3VyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdW0gLSBtaW5fYWJzISAqIDI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEEucmVkdWNlKChhLCBiKSA9PiBNYXRoLmFicyhhKSArIE1hdGguYWJzKGIpKTtcbiAgfVxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChsYXJnZXN0U3VtQWZ0ZXJLTmVnYXRpb25zKFs1LCA2LCA5LCAtMywgM10sIDIpLCAyMCk7XG4iXX0=