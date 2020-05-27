"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
        answer += cache[sum] ?? 0;
        cache[sum] = (cache[sum] ?? 0) + 1;
    }
    return answer;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(subarraysDivByK([4, 5, 0, -2, -3, 1], 5), 7);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTc0LiDlkozlj6/ooqsgSyDmlbTpmaTnmoTlrZDmlbDnu4QuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk3NC4g5ZKM5Y+v6KKrIEsg5pW06Zmk55qE5a2Q5pWw57uELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQkk7QUFDSixJQUFJLGVBQWUsR0FBRyxVQUFVLENBQVcsRUFBRSxDQUFTO0lBQ3BEOzs7OztTQUtLO0lBQ0wscUNBQXFDO0lBQ3JDLE1BQU0sS0FBSyxHQUE4QixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmlbTmlbDmlbDnu4QgQe+8jOi/lOWbnuWFtuS4reWFg+e0oOS5i+WSjOWPr+iiqyBLwqDmlbTpmaTnmoTvvIjov57nu63jgIHpnZ7nqbrvvInlrZDmlbDnu4TnmoTmlbDnm67jgIJcblxuwqBcblxu56S65L6L77yaXG5cbui+k+WFpe+8mkEgPSBbNCw1LDAsLTIsLTMsMV0sIEsgPSA1XG7ovpPlh7rvvJo3XG7op6Pph4rvvJpcbuaciSA3IOS4quWtkOaVsOe7hOa7oei2s+WFtuWFg+e0oOS5i+WSjOWPr+iiqyBLID0gNSDmlbTpmaTvvJpcbls0LCA1LCAwLCAtMiwgLTMsIDFdLCBbNV0sIFs1LCAwXSwgWzUsIDAsIC0yLCAtM10sIFswXSwgWzAsIC0yLCAtM10sIFstMiwgLTNdXG7CoFxuXG7mj5DnpLrvvJpcbiAgICAxLiAxIDw9IEEubGVuZ3RoIDw9IDMwMDAwXG4gICAgMi4gLTEwMDAwIDw9IEFbaV0gPD0gMTAwMDBcbiAgICAzLiAyIDw9IEsgPD0gMTAwMDBcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3N1YmFycmF5LXN1bXMtZGl2aXNpYmxlLWJ5LWtcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xudmFyIHN1YmFycmF5c0RpdkJ5SyA9IGZ1bmN0aW9uIChBOiBudW1iZXJbXSwgSzogbnVtYmVyKTogbnVtYmVyIHtcbiAgLyoqXG4gICAqIOagueaNriDlkIzkvZnlrprnkIYg5aaC5p6cIGEgbW9kZSBLID09IGIgbW9kZSBLIOmCo+S5iCAoYS1iKSBtb2RlIEsgPT0gMFxuICAgKiDkuJQg6L+e57ut55qE5a2Q5pWw57uEIFAoaSxqKSA9IFN1bSgwLGopIC0gU3VtKDAsaS0xKVxuICAgKiDmiYDku6XorrDlvZXkuIvmr4/kuKogMCB+IOS4i+aghyBpIOeahOaVsOe7hOeahOWSjCBTdW0oMCxpKVxuICAgKiDpgqPkuYgg5q+P5b6X5Yiw5b6X5Yiw5LiA5LiqIFN1bSDlsLHmib4g5LmL5YmNIOWQjOagt+S9meaVsOeahCBTdW0g5bCx6IO957uE5oiQIOS4gOS4quespuWQiOeahOe7k+aenFxuICAgKiAqL1xuICAvLyDlpoLmnpzliJrlpb3pmaTlsL0g6YKj5LmI5pys6Lqr5bCx5pivIOS4gOS4quespuWQiOeahOiusOi/hyDkuI3pnIDopoHkuI7kuYvliY3nmoTorrDov4fnm7jlr7nlupRcbiAgY29uc3QgY2FjaGU6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7IDA6IDEgfTtcbiAgbGV0IHN1bSA9IDA7XG4gIGxldCBhbnN3ZXIgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEEubGVuZ3RoOyBpKyspIHtcbiAgICBzdW0gKz0gQVtpXTtcbiAgICBhbnN3ZXIgKz0gY2FjaGVbc3VtXSA/PyAwO1xuICAgIGNhY2hlW3N1bV0gPSAoY2FjaGVbc3VtXSA/PyAwKSArIDE7XG4gIH1cblxuICByZXR1cm4gYW5zd2VyO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwoc3ViYXJyYXlzRGl2QnlLKFs0LCA1LCAwLCAtMiwgLTMsIDFdLCA1KSwgNyk7XG4iXX0=