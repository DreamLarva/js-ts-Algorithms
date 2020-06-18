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
        const mod = (sum % K + K) % K;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTc0LiDlkozlj6/ooqsgSyDmlbTpmaTnmoTlrZDmlbDnu4QuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk3NC4g5ZKM5Y+v6KKrIEsg5pW06Zmk55qE5a2Q5pWw57uELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQkk7QUFDSixJQUFJLGVBQWUsR0FBRyxVQUFVLENBQVcsRUFBRSxDQUFTOztJQUNwRDs7Ozs7U0FLSztJQUNMLHFDQUFxQztJQUNyQyxNQUFNLEtBQUssR0FBOEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLHFDQUFxQztRQUNyQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxVQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsbUNBQUksQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUNBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBSUYsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUVyQyw2REFBNkQ7QUFDN0QseURBQXlEO0FBQ3pELGtEQUFrRDtBQUNsRCxtRUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5pW05pWw5pWw57uEIEHvvIzov5Tlm57lhbbkuK3lhYPntKDkuYvlkozlj6/ooqsgS8Kg5pW06Zmk55qE77yI6L+e57ut44CB6Z2e56m677yJ5a2Q5pWw57uE55qE5pWw55uu44CCXG5cbsKgXG5cbuekuuS+i++8mlxuXG7ovpPlhaXvvJpBID0gWzQsNSwwLC0yLC0zLDFdLCBLID0gNVxu6L6T5Ye677yaN1xu6Kej6YeK77yaXG7mnIkgNyDkuKrlrZDmlbDnu4Tmu6HotrPlhbblhYPntKDkuYvlkozlj6/ooqsgSyA9IDUg5pW06Zmk77yaXG5bNCwgNSwgMCwgLTIsIC0zLCAxXSwgWzVdLCBbNSwgMF0sIFs1LCAwLCAtMiwgLTNdLCBbMF0sIFswLCAtMiwgLTNdLCBbLTIsIC0zXVxuwqBcblxu5o+Q56S677yaXG4gICAgMS4gMSA8PSBBLmxlbmd0aCA8PSAzMDAwMFxuICAgIDIuIC0xMDAwMCA8PSBBW2ldIDw9IDEwMDAwXG4gICAgMy4gMiA8PSBLIDw9IDEwMDAwXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zdWJhcnJheS1zdW1zLWRpdmlzaWJsZS1ieS1rXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbnZhciBzdWJhcnJheXNEaXZCeUsgPSBmdW5jdGlvbiAoQTogbnVtYmVyW10sIEs6IG51bWJlcik6IG51bWJlciB7XG4gIC8qKlxuICAgKiDmoLnmja4g5ZCM5L2Z5a6a55CGIOWmguaenCBhIG1vZGUgSyA9PSBiIG1vZGUgSyDpgqPkuYggKGEtYikgbW9kZSBLID09IDBcbiAgICog5LiUIOi/nue7reeahOWtkOaVsOe7hCBQKGksaikgPSBTdW0oMCxqKSAtIFN1bSgwLGktMSlcbiAgICog5omA5Lul6K6w5b2V5LiL5q+P5LiqIDAgfiDkuIvmoIcgaSDnmoTmlbDnu4TnmoTlkowgU3VtKDAsaSlcbiAgICog6YKj5LmIIOavj+W+l+WIsOW+l+WIsOS4gOS4qiBTdW0g5bCx5om+IOS5i+WJjSDlkIzmoLfkvZnmlbDnmoQgU3VtIOWwseiDvee7hOaIkCDkuIDkuKrnrKblkIjnmoTnu5PmnpxcbiAgICogKi9cbiAgLy8g5aaC5p6c5Yia5aW96Zmk5bC9IOmCo+S5iOacrOi6q+WwseaYryDkuIDkuKrnrKblkIjnmoTorrDov4cg5LiN6ZyA6KaB5LiO5LmL5YmN55qE6K6w6L+H55u45a+55bqUXG4gIGNvbnN0IGNhY2hlOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0geyAwOiAxIH07XG4gIGxldCBzdW0gPSAwO1xuICBsZXQgYW5zd2VyID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBBLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VtICs9IEFbaV07XG4gICAgLy8g5rOo5oSPIEMrKyDlj5bmqKHnmoTnibnmrormgKfvvIzlvZPooqvpmaTmlbDkuLrotJ/mlbDml7blj5bmqKHnu5PmnpzkuLrotJ/mlbDvvIzpnIDopoHnuqDmraNcbiAgICBjb25zdCBtb2QgPSAoc3VtICUgSyArIEspICUgSztcbiAgICBjb25zb2xlLmxvZyhtb2QpO1xuICAgIGFuc3dlciArPSBjYWNoZVttb2RdID8/IDA7XG4gICAgY2FjaGVbbW9kXSA9IChjYWNoZVttb2RdID8/IDApICsgMTtcbiAgfVxuXG4gIHJldHVybiBhbnN3ZXI7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuc3ViYXJyYXlzRGl2QnlLKFsyLCAtMiwgMiwgLTQsIDRdLCA2KVxuXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoc3ViYXJyYXlzRGl2QnlLKFsyLCAtMiwgMiwgLTRdLCA2KSwgMik7XG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoc3ViYXJyYXlzRGl2QnlLKFstMSwgMiwgOV0sIDIpLCAyKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChzdWJhcnJheXNEaXZCeUsoWzVdLCA5KSwgMCk7XG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoc3ViYXJyYXlzRGl2QnlLKFs0LCA1LCAwLCAtMiwgLTMsIDFdLCA1KSwgNyk7XG4iXX0=