"use strict";
/*
给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2**28 到 2**28 - 1 之间，最终结果不会超过 2**31 - 1 。

例如:

输入:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

输出:
2

解释:
两个元组如下:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
/*
var fourSumCount = function (A: number[], B: number[], C: number[], D: number[]) {
    // 没说不能一个数组里面不能有相同的值s
    // 数组两两 组合 生成2 个哈希表
    const map1: { [key: string]: number } = {}; // A B 用
    const map2: { [key: string]: number } = {}; // C D 用

    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        for (let j = 0; j < B.length; j++) {
            const b = B[j];
            if (map1[String(a + b)] == null) map1[String(a + b)] = 1;
            else map1[String(a + b)]++;
        }
    }

    for (let i = 0; i < C.length; i++) {
        const c = C[i];
        for (let j = 0; j < D.length; j++) {
            const d = D[j];
            if (map2[String(c + d)] == null) map2[String(c + d)] = 1;
            else map2[String(c + d)]++;
        }
    }
    let result = 0;
    // 比较哈希表的值
    const keys1 = Object.keys(map1);
    const keys2 = Object.keys(map2);

    keys1.forEach(key1 => {
        let key2: string;
        // 判断是不是负数 如果只判断正负 就会忽略 0 的情况
        if(key1 === '0'){
            key2 = '0';
        } else if (key1.includes('-')) {
            key2 = key1.substr(1);
        } else {
            key2 = '-' + key1;
        }

        if (map2[key2]) {
            result += map1[key1] * map2[key2];
        }
    });

    return result;

};
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fourSumCount = function (A, B, C, D) {
    // 没说不能一个数组里面不能有相同的值
    // 应该只用一个 hash 表 使用map 结构 因为 map 的键 可以为 数字类型 而 对象字面量只能是字符串
    const map = new Map();
    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        for (let j = 0; j < B.length; j++) {
            const b = B[j];
            const value = map.get(a + b);
            const newValue = value ? value + 1 : 1;
            map.set(a + b, newValue);
        }
    }
    let result = 0;
    for (let i = 0; i < C.length; i++) {
        const c = C[i];
        for (let j = 0; j < D.length; j++) {
            const d = D[j];
            const value = map.get(-(c + d));
            if (value) {
                result += value;
            }
        }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]), 2);
assert_1.default.strictEqual(fourSumCount([9, -6, 4, 5, -8, 6, 5, 2, -10, 5], [-1, -2, -10, 8, 8, 7, -7, 0, -10, -1], [5, 1, -10, -5, 6, -7, -8, 0, -2, 0], [-3, -9, 2, 10, -7, -2, -4, 10, 10, -4]), 327);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU0LuWbm+aVsOebuOWKoElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80NTQu5Zub5pWw55u45YqgSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7QUFDSjs7Ozs7O0dBTUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0RFOzs7OztBQUVGLElBQUksWUFBWSxHQUFHLFVBQ2pCLENBQVcsRUFDWCxDQUFXLEVBQ1gsQ0FBVyxFQUNYLENBQVc7SUFFWCxvQkFBb0I7SUFDcEIsMERBQTBEO0lBQzFELE1BQU0sR0FBRyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMxQjtLQUNGO0lBRUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWYsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQzthQUNqQjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFdkUsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLFlBQVksQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNsQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDcEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDeEMsRUFFRCxHQUFHLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprlm5vkuKrljIXlkKvmlbTmlbDnmoTmlbDnu4TliJfooaggQSAsIEIgLCBDICwgRCAs6K6h566X5pyJ5aSa5bCR5Liq5YWD57uEIChpLCBqLCBrLCBsKSDvvIzkvb/lvpcgQVtpXSArIEJbal0gKyBDW2tdICsgRFtsXSA9IDDjgIJcblxu5Li65LqG5L2/6Zeu6aKY566A5Y2V5YyW77yM5omA5pyJ55qEIEEsIEIsIEMsIEQg5YW35pyJ55u45ZCM55qE6ZW/5bqmIE7vvIzkuJQgMCDiiaQgTiDiiaQgNTAwIOOAguaJgOacieaVtOaVsOeahOiMg+WbtOWcqCAtMioqMjgg5YiwIDIqKjI4IC0gMSDkuYvpl7TvvIzmnIDnu4jnu5PmnpzkuI3kvJrotoXov4cgMioqMzEgLSAxIOOAglxuXG7kvovlpoI6XG5cbui+k+WFpTpcbkEgPSBbIDEsIDJdXG5CID0gWy0yLC0xXVxuQyA9IFstMSwgMl1cbkQgPSBbIDAsIDJdXG5cbui+k+WHujpcbjJcblxu6Kej6YeKOlxu5Lik5Liq5YWD57uE5aaC5LiLOlxuMS4gKDAsIDAsIDAsIDEpIC0+IEFbMF0gKyBCWzBdICsgQ1swXSArIERbMV0gPSAxICsgKC0yKSArICgtMSkgKyAyID0gMFxuMi4gKDEsIDEsIDAsIDApIC0+IEFbMV0gKyBCWzFdICsgQ1swXSArIERbMF0gPSAyICsgKC0xKSArICgtMSkgKyAwID0gMFxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvNHN1bS1paVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IEFcbiAqIEBwYXJhbSB7bnVtYmVyW119IEJcbiAqIEBwYXJhbSB7bnVtYmVyW119IENcbiAqIEBwYXJhbSB7bnVtYmVyW119IERcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuLypcbnZhciBmb3VyU3VtQ291bnQgPSBmdW5jdGlvbiAoQTogbnVtYmVyW10sIEI6IG51bWJlcltdLCBDOiBudW1iZXJbXSwgRDogbnVtYmVyW10pIHtcbiAgICAvLyDmsqHor7TkuI3og73kuIDkuKrmlbDnu4Tph4zpnaLkuI3og73mnInnm7jlkIznmoTlgLxzXG4gICAgLy8g5pWw57uE5Lik5LikIOe7hOWQiCDnlJ/miJAyIOS4quWTiOW4jOihqFxuICAgIGNvbnN0IG1hcDE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTsgLy8gQSBCIOeUqFxuICAgIGNvbnN0IG1hcDI6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTsgLy8gQyBEIOeUqFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBBW2ldO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBCW2pdO1xuICAgICAgICAgICAgaWYgKG1hcDFbU3RyaW5nKGEgKyBiKV0gPT0gbnVsbCkgbWFwMVtTdHJpbmcoYSArIGIpXSA9IDE7XG4gICAgICAgICAgICBlbHNlIG1hcDFbU3RyaW5nKGEgKyBiKV0rKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjID0gQ1tpXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBELmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gRFtqXTtcbiAgICAgICAgICAgIGlmIChtYXAyW1N0cmluZyhjICsgZCldID09IG51bGwpIG1hcDJbU3RyaW5nKGMgKyBkKV0gPSAxO1xuICAgICAgICAgICAgZWxzZSBtYXAyW1N0cmluZyhjICsgZCldKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgLy8g5q+U6L6D5ZOI5biM6KGo55qE5YC8XG4gICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhtYXAxKTtcbiAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKG1hcDIpO1xuXG4gICAga2V5czEuZm9yRWFjaChrZXkxID0+IHtcbiAgICAgICAgbGV0IGtleTI6IHN0cmluZztcbiAgICAgICAgLy8g5Yik5pat5piv5LiN5piv6LSf5pWwIOWmguaenOWPquWIpOaWreato+i0nyDlsLHkvJrlv73nlaUgMCDnmoTmg4XlhrVcbiAgICAgICAgaWYoa2V5MSA9PT0gJzAnKXtcbiAgICAgICAgICAgIGtleTIgPSAnMCc7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5MS5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICBrZXkyID0ga2V5MS5zdWJzdHIoMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkyID0gJy0nICsga2V5MTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXAyW2tleTJdKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gbWFwMVtrZXkxXSAqIG1hcDJba2V5Ml07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn07XG4qL1xuXG52YXIgZm91clN1bUNvdW50ID0gZnVuY3Rpb24gKFxuICBBOiBudW1iZXJbXSxcbiAgQjogbnVtYmVyW10sXG4gIEM6IG51bWJlcltdLFxuICBEOiBudW1iZXJbXVxuKSB7XG4gIC8vIOayoeivtOS4jeiDveS4gOS4quaVsOe7hOmHjOmdouS4jeiDveacieebuOWQjOeahOWAvFxuICAvLyDlupTor6Xlj6rnlKjkuIDkuKogaGFzaCDooagg5L2/55SobWFwIOe7k+aehCDlm6DkuLogbWFwIOeahOmUriDlj6/ku6XkuLog5pWw5a2X57G75Z6LIOiAjCDlr7nosaHlrZfpnaLph4/lj6rog73mmK/lrZfnrKbkuLJcbiAgY29uc3QgbWFwOiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhID0gQVtpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IEIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGIgPSBCW2pdO1xuICAgICAgY29uc3QgdmFsdWUgPSBtYXAuZ2V0KGEgKyBiKTtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgPyB2YWx1ZSArIDEgOiAxO1xuICAgICAgbWFwLnNldChhICsgYiwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXN1bHQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjID0gQ1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IEQubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGQgPSBEW2pdO1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IG1hcC5nZXQoLShjICsgZCkpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZm91clN1bUNvdW50KFsxLCAyXSwgWy0yLCAtMV0sIFstMSwgMl0sIFswLCAyXSksIDIpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGZvdXJTdW1Db3VudChcbiAgICBbOSwgLTYsIDQsIDUsIC04LCA2LCA1LCAyLCAtMTAsIDVdLFxuICAgIFstMSwgLTIsIC0xMCwgOCwgOCwgNywgLTcsIDAsIC0xMCwgLTFdLFxuICAgIFs1LCAxLCAtMTAsIC01LCA2LCAtNywgLTgsIDAsIC0yLCAwXSxcbiAgICBbLTMsIC05LCAyLCAxMCwgLTcsIC0yLCAtNCwgMTAsIDEwLCAtNF1cbiAgKSxcblxuICAzMjdcbik7XG4iXX0=