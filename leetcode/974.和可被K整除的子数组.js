"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

 

示例：

输入：A = [4,5,0,-2,-3,1], K = 5
输出：7
解释：
有 7 个子数组满足其元素之和可被 K = 5 整除：
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 

提示：
    1. 1 <= A.length <= 30000
    2. -10000 <= A[i] <= 10000
    3. 2 <= K <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subarray-sums-divisible-by-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var subarraysDivByK = function (A, K) {
    var _a, _b;
    /**
     * 根据 同余定理 如果 a mode K == b mode K 那么 (a-b) mode K == 0
     * 且 连续的子数组 P(i,j) = Sum(0,j) - Sum(0,i-1)
     * 所以记录下每个 0 ~ 下标 i 的数组的和 Sum(0,i)
     * 那么 每得到得到一个 Sum 就找 之前 同样余数的 Sum 就能组成 一个符合的结果
     * */
    // 如果刚好除尽 那么本身就是 一个符合的记过 不需要与之前的记过相对应
    const cache = { 0: 1 };
    let sum = 0;
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        // 注意 C++ 取模的特殊性，当被除数为负数时取模结果为负数，需要纠正
        const mod = ((sum % K) + K) % K;
        console.log(mod);
        answer += (_a = cache[mod]) !== null && _a !== void 0 ? _a : 0;
        cache[mod] = ((_b = cache[mod]) !== null && _b !== void 0 ? _b : 0) + 1;
    }
    return answer;
};
subarraysDivByK([2, -2, 2, -4, 4], 6);
// assert.strictEqual(subarraysDivByK([2, -2, 2, -4], 6), 2);
// assert.strictEqual(subarraysDivByK([-1, 2, 9], 2), 2);
// assert.strictEqual(subarraysDivByK([5], 9), 0);
// assert.strictEqual(subarraysDivByK([4, 5, 0, -2, -3, 1], 5), 7);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTc0LuWSjOWPr+iiq0vmlbTpmaTnmoTlrZDmlbDnu4QuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk3NC7lkozlj6/ooqtL5pW06Zmk55qE5a2Q5pWw57uELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQkk7QUFDSixJQUFJLGVBQWUsR0FBRyxVQUFVLENBQVcsRUFBRSxDQUFTOztJQUNwRDs7Ozs7U0FLSztJQUNMLHFDQUFxQztJQUNyQyxNQUFNLEtBQUssR0FBOEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLHFDQUFxQztRQUNyQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sVUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLG1DQUFJLENBQUMsQ0FBQztRQUMxQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1DQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUlGLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFdEMsNkRBQTZEO0FBQzdELHlEQUF5RDtBQUN6RCxrREFBa0Q7QUFDbEQsbUVBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsOaVsOe7hCBB77yM6L+U5Zue5YW25Lit5YWD57Sg5LmL5ZKM5Y+v6KKrIEvCoOaVtOmZpOeahO+8iOi/nue7reOAgemdnuepuu+8ieWtkOaVsOe7hOeahOaVsOebruOAglxuXG7CoFxuXG7npLrkvovvvJpcblxu6L6T5YWl77yaQSA9IFs0LDUsMCwtMiwtMywxXSwgSyA9IDVcbui+k+WHuu+8mjdcbuino+mHiu+8mlxu5pyJIDcg5Liq5a2Q5pWw57uE5ruh6Laz5YW25YWD57Sg5LmL5ZKM5Y+v6KKrIEsgPSA1IOaVtOmZpO+8mlxuWzQsIDUsIDAsIC0yLCAtMywgMV0sIFs1XSwgWzUsIDBdLCBbNSwgMCwgLTIsIC0zXSwgWzBdLCBbMCwgLTIsIC0zXSwgWy0yLCAtM11cbsKgXG5cbuaPkOekuu+8mlxuICAgIDEuIDEgPD0gQS5sZW5ndGggPD0gMzAwMDBcbiAgICAyLiAtMTAwMDAgPD0gQVtpXSA8PSAxMDAwMFxuICAgIDMuIDIgPD0gSyA8PSAxMDAwMFxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc3ViYXJyYXktc3Vtcy1kaXZpc2libGUtYnkta1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG52YXIgc3ViYXJyYXlzRGl2QnlLID0gZnVuY3Rpb24gKEE6IG51bWJlcltdLCBLOiBudW1iZXIpOiBudW1iZXIge1xuICAvKipcbiAgICog5qC55o2uIOWQjOS9meWumueQhiDlpoLmnpwgYSBtb2RlIEsgPT0gYiBtb2RlIEsg6YKj5LmIIChhLWIpIG1vZGUgSyA9PSAwXG4gICAqIOS4lCDov57nu63nmoTlrZDmlbDnu4QgUChpLGopID0gU3VtKDAsaikgLSBTdW0oMCxpLTEpXG4gICAqIOaJgOS7peiusOW9leS4i+avj+S4qiAwIH4g5LiL5qCHIGkg55qE5pWw57uE55qE5ZKMIFN1bSgwLGkpXG4gICAqIOmCo+S5iCDmr4/lvpfliLDlvpfliLDkuIDkuKogU3VtIOWwseaJviDkuYvliY0g5ZCM5qC35L2Z5pWw55qEIFN1bSDlsLHog73nu4TmiJAg5LiA5Liq56ym5ZCI55qE57uT5p6cXG4gICAqICovXG4gIC8vIOWmguaenOWImuWlvemZpOWwvSDpgqPkuYjmnKzouqvlsLHmmK8g5LiA5Liq56ym5ZCI55qE6K6w6L+HIOS4jemcgOimgeS4juS5i+WJjeeahOiusOi/h+ebuOWvueW6lFxuICBjb25zdCBjYWNoZTogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHsgMDogMSB9O1xuICBsZXQgc3VtID0gMDtcbiAgbGV0IGFuc3dlciA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQS5sZW5ndGg7IGkrKykge1xuICAgIHN1bSArPSBBW2ldO1xuICAgIC8vIOazqOaEjyBDKysg5Y+W5qih55qE54m55q6K5oCn77yM5b2T6KKr6Zmk5pWw5Li66LSf5pWw5pe25Y+W5qih57uT5p6c5Li66LSf5pWw77yM6ZyA6KaB57qg5q2jXG4gICAgY29uc3QgbW9kID0gKChzdW0gJSBLKSArIEspICUgSztcbiAgICBjb25zb2xlLmxvZyhtb2QpO1xuICAgIGFuc3dlciArPSBjYWNoZVttb2RdID8/IDA7XG4gICAgY2FjaGVbbW9kXSA9IChjYWNoZVttb2RdID8/IDApICsgMTtcbiAgfVxuXG4gIHJldHVybiBhbnN3ZXI7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuc3ViYXJyYXlzRGl2QnlLKFsyLCAtMiwgMiwgLTQsIDRdLCA2KTtcblxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHN1YmFycmF5c0RpdkJ5SyhbMiwgLTIsIDIsIC00XSwgNiksIDIpO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHN1YmFycmF5c0RpdkJ5SyhbLTEsIDIsIDldLCAyKSwgMik7XG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoc3ViYXJyYXlzRGl2QnlLKFs1XSwgOSksIDApO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHN1YmFycmF5c0RpdkJ5SyhbNCwgNSwgMCwgLTIsIC0zLCAxXSwgNSksIDcpO1xuIl19