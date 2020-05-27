"use strict";
/*
给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2**28 到 2**28 - 1 之间，最终结果不会超过 2**31 - 1 。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU0LuWbm+aVsOebuOWKoElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80NTQu5Zub5pWw55u45YqgSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7QUFDSjs7Ozs7O0dBTUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0RFOzs7OztBQUVGLElBQUksWUFBWSxHQUFHLFVBQ2pCLENBQVcsRUFDWCxDQUFXLEVBQ1gsQ0FBVyxFQUNYLENBQVc7SUFFWCxvQkFBb0I7SUFDcEIsMERBQTBEO0lBQzFELE1BQU0sR0FBRyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMxQjtLQUNGO0lBRUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWYsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQzthQUNqQjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFdkUsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLFlBQVksQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNsQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDcEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDeEMsRUFFRCxHQUFHLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprlm5vkuKrljIXlkKvmlbTmlbDnmoTmlbDnu4TliJfooajCoEEgLCBCICwgQyAsIEQgLOiuoeeul+acieWkmuWwkeS4quWFg+e7hCAoaSwgaiwgaywgbCnCoO+8jOS9v+W+l8KgQVtpXSArIEJbal0gKyBDW2tdICsgRFtsXSA9IDDjgIJcblxu5Li65LqG5L2/6Zeu6aKY566A5Y2V5YyW77yM5omA5pyJ55qEIEEsIEIsIEMsIEQg5YW35pyJ55u45ZCM55qE6ZW/5bqmwqBO77yM5LiUIDAg4omkIE4g4omkIDUwMCDjgILmiYDmnInmlbTmlbDnmoTojIPlm7TlnKggLTIqKjI4IOWIsCAyKioyOCAtIDEg5LmL6Ze077yM5pyA57uI57uT5p6c5LiN5Lya6LaF6L+HwqAyKiozMSAtIDEg44CCXG5cbuS+i+Wmgjpcblxu6L6T5YWlOlxuQSA9IFsgMSwgMl1cbkIgPSBbLTIsLTFdXG5DID0gWy0xLCAyXVxuRCA9IFsgMCwgMl1cblxu6L6T5Ye6OlxuMlxuXG7op6Pph4o6XG7kuKTkuKrlhYPnu4TlpoLkuIs6XG4xLiAoMCwgMCwgMCwgMSkgLT4gQVswXSArIEJbMF0gKyBDWzBdICsgRFsxXSA9IDEgKyAoLTIpICsgKC0xKSArIDIgPSAwXG4yLiAoMSwgMSwgMCwgMCkgLT4gQVsxXSArIEJbMV0gKyBDWzBdICsgRFswXSA9IDIgKyAoLTEpICsgKC0xKSArIDAgPSAwXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy80c3VtLWlpXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gQVxuICogQHBhcmFtIHtudW1iZXJbXX0gQlxuICogQHBhcmFtIHtudW1iZXJbXX0gQ1xuICogQHBhcmFtIHtudW1iZXJbXX0gRFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG4vKlxudmFyIGZvdXJTdW1Db3VudCA9IGZ1bmN0aW9uIChBOiBudW1iZXJbXSwgQjogbnVtYmVyW10sIEM6IG51bWJlcltdLCBEOiBudW1iZXJbXSkge1xuICAgIC8vIOayoeivtOS4jeiDveS4gOS4quaVsOe7hOmHjOmdouS4jeiDveacieebuOWQjOeahOWAvHNcbiAgICAvLyDmlbDnu4TkuKTkuKQg57uE5ZCIIOeUn+aIkDIg5Liq5ZOI5biM6KGoXG4gICAgY29uc3QgbWFwMTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9OyAvLyBBIEIg55SoXG4gICAgY29uc3QgbWFwMjogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9OyAvLyBDIEQg55SoXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IEFbaV07XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYiA9IEJbal07XG4gICAgICAgICAgICBpZiAobWFwMVtTdHJpbmcoYSArIGIpXSA9PSBudWxsKSBtYXAxW1N0cmluZyhhICsgYildID0gMTtcbiAgICAgICAgICAgIGVsc2UgbWFwMVtTdHJpbmcoYSArIGIpXSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGMgPSBDW2ldO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBEW2pdO1xuICAgICAgICAgICAgaWYgKG1hcDJbU3RyaW5nKGMgKyBkKV0gPT0gbnVsbCkgbWFwMltTdHJpbmcoYyArIGQpXSA9IDE7XG4gICAgICAgICAgICBlbHNlIG1hcDJbU3RyaW5nKGMgKyBkKV0rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAvLyDmr5TovoPlk4jluIzooajnmoTlgLxcbiAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKG1hcDEpO1xuICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMobWFwMik7XG5cbiAgICBrZXlzMS5mb3JFYWNoKGtleTEgPT4ge1xuICAgICAgICBsZXQga2V5Mjogc3RyaW5nO1xuICAgICAgICAvLyDliKTmlq3mmK/kuI3mmK/otJ/mlbAg5aaC5p6c5Y+q5Yik5pat5q2j6LSfIOWwseS8muW/veeVpSAwIOeahOaDheWGtVxuICAgICAgICBpZihrZXkxID09PSAnMCcpe1xuICAgICAgICAgICAga2V5MiA9ICcwJztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkxLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgIGtleTIgPSBrZXkxLnN1YnN0cigxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleTIgPSAnLScgKyBrZXkxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcDJba2V5Ml0pIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBtYXAxW2tleTFdICogbWFwMltrZXkyXTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxufTtcbiovXG5cbnZhciBmb3VyU3VtQ291bnQgPSBmdW5jdGlvbiAoXG4gIEE6IG51bWJlcltdLFxuICBCOiBudW1iZXJbXSxcbiAgQzogbnVtYmVyW10sXG4gIEQ6IG51bWJlcltdXG4pIHtcbiAgLy8g5rKh6K+05LiN6IO95LiA5Liq5pWw57uE6YeM6Z2i5LiN6IO95pyJ55u45ZCM55qE5YC8XG4gIC8vIOW6lOivpeWPqueUqOS4gOS4qiBoYXNoIOihqCDkvb/nlKhtYXAg57uT5p6EIOWboOS4uiBtYXAg55qE6ZSuIOWPr+S7peS4uiDmlbDlrZfnsbvlnosg6ICMIOWvueixoeWtl+mdoumHj+WPquiDveaYr+Wtl+espuS4slxuICBjb25zdCBtYXA6IE1hcDxudW1iZXIsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGEgPSBBW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgQi5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgYiA9IEJbal07XG4gICAgICBjb25zdCB2YWx1ZSA9IG1hcC5nZXQoYSArIGIpO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSA/IHZhbHVlICsgMSA6IDE7XG4gICAgICBtYXAuc2V0KGEgKyBiLCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlc3VsdCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGMgPSBDW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgRC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgZCA9IERbal07XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gbWFwLmdldCgtKGMgKyBkKSk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChmb3VyU3VtQ291bnQoWzEsIDJdLCBbLTIsIC0xXSwgWy0xLCAyXSwgWzAsIDJdKSwgMik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgZm91clN1bUNvdW50KFxuICAgIFs5LCAtNiwgNCwgNSwgLTgsIDYsIDUsIDIsIC0xMCwgNV0sXG4gICAgWy0xLCAtMiwgLTEwLCA4LCA4LCA3LCAtNywgMCwgLTEwLCAtMV0sXG4gICAgWzUsIDEsIC0xMCwgLTUsIDYsIC03LCAtOCwgMCwgLTIsIDBdLFxuICAgIFstMywgLTksIDIsIDEwLCAtNywgLTIsIC00LCAxMCwgMTAsIC00XVxuICApLFxuXG4gIDMyN1xuKTtcbiJdfQ==