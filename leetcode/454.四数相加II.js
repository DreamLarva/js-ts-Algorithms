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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU0LuWbm+aVsOebuOWKoElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80NTQu5Zub5pWw55u45YqgSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7QUFDSjs7Ozs7O0dBTUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0RFOzs7OztBQUVGLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBVyxFQUFFLENBQVcsRUFBRSxDQUFXLEVBQUUsQ0FBVztJQUMzRSxvQkFBb0I7SUFDcEIsMERBQTBEO0lBQzFELE1BQU0sR0FBRyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1QjtLQUNKO0lBRUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWYsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQzthQUNuQjtTQUNKO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUNSLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNULEVBQ0QsQ0FBQyxDQUNKLENBQUM7QUFFRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQ1IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3BDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzFDLEVBRUQsR0FBRyxDQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprlm5vkuKrljIXlkKvmlbTmlbDnmoTmlbDnu4TliJfooajCoEEgLCBCICwgQyAsIEQgLOiuoeeul+acieWkmuWwkeS4quWFg+e7hCAoaSwgaiwgaywgbCnCoO+8jOS9v+W+l8KgQVtpXSArIEJbal0gKyBDW2tdICsgRFtsXSA9IDDjgIJcclxuXHJcbuS4uuS6huS9v+mXrumimOeugOWNleWMlu+8jOaJgOacieeahCBBLCBCLCBDLCBEIOWFt+acieebuOWQjOeahOmVv+W6psKgTu+8jOS4lCAwIOKJpCBOIOKJpCA1MDAg44CC5omA5pyJ5pW05pWw55qE6IyD5Zu05ZyoIC0yKioyOCDliLAgMioqMjggLSAxIOS5i+mXtO+8jOacgOe7iOe7k+aenOS4jeS8mui2hei/h8KgMioqMzEgLSAxIOOAglxyXG5cclxu5L6L5aaCOlxyXG5cclxu6L6T5YWlOlxyXG5BID0gWyAxLCAyXVxyXG5CID0gWy0yLC0xXVxyXG5DID0gWy0xLCAyXVxyXG5EID0gWyAwLCAyXVxyXG5cclxu6L6T5Ye6OlxyXG4yXHJcblxyXG7op6Pph4o6XHJcbuS4pOS4quWFg+e7hOWmguS4izpcclxuMS4gKDAsIDAsIDAsIDEpIC0+IEFbMF0gKyBCWzBdICsgQ1swXSArIERbMV0gPSAxICsgKC0yKSArICgtMSkgKyAyID0gMFxyXG4yLiAoMSwgMSwgMCwgMCkgLT4gQVsxXSArIEJbMV0gKyBDWzBdICsgRFswXSA9IDIgKyAoLTEpICsgKC0xKSArIDAgPSAwXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy80c3VtLWlpXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBBXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IEJcclxuICogQHBhcmFtIHtudW1iZXJbXX0gQ1xyXG4gKiBAcGFyYW0ge251bWJlcltdfSBEXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbi8qXHJcbnZhciBmb3VyU3VtQ291bnQgPSBmdW5jdGlvbiAoQTogbnVtYmVyW10sIEI6IG51bWJlcltdLCBDOiBudW1iZXJbXSwgRDogbnVtYmVyW10pIHtcclxuICAgIC8vIOayoeivtOS4jeiDveS4gOS4quaVsOe7hOmHjOmdouS4jeiDveacieebuOWQjOeahOWAvHNcclxuICAgIC8vIOaVsOe7hOS4pOS4pCDnu4TlkIgg55Sf5oiQMiDkuKrlk4jluIzooahcclxuICAgIGNvbnN0IG1hcDE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTsgLy8gQSBCIOeUqFxyXG4gICAgY29uc3QgbWFwMjogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9OyAvLyBDIEQg55SoXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYSA9IEFbaV07XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBCW2pdO1xyXG4gICAgICAgICAgICBpZiAobWFwMVtTdHJpbmcoYSArIGIpXSA9PSBudWxsKSBtYXAxW1N0cmluZyhhICsgYildID0gMTtcclxuICAgICAgICAgICAgZWxzZSBtYXAxW1N0cmluZyhhICsgYildKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSBDW2ldO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgRC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gRFtqXTtcclxuICAgICAgICAgICAgaWYgKG1hcDJbU3RyaW5nKGMgKyBkKV0gPT0gbnVsbCkgbWFwMltTdHJpbmcoYyArIGQpXSA9IDE7XHJcbiAgICAgICAgICAgIGVsc2UgbWFwMltTdHJpbmcoYyArIGQpXSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgLy8g5q+U6L6D5ZOI5biM6KGo55qE5YC8XHJcbiAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKG1hcDEpO1xyXG4gICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhtYXAyKTtcclxuXHJcbiAgICBrZXlzMS5mb3JFYWNoKGtleTEgPT4ge1xyXG4gICAgICAgIGxldCBrZXkyOiBzdHJpbmc7XHJcbiAgICAgICAgLy8g5Yik5pat5piv5LiN5piv6LSf5pWwIOWmguaenOWPquWIpOaWreato+i0nyDlsLHkvJrlv73nlaUgMCDnmoTmg4XlhrVcclxuICAgICAgICBpZihrZXkxID09PSAnMCcpe1xyXG4gICAgICAgICAgICBrZXkyID0gJzAnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5MS5pbmNsdWRlcygnLScpKSB7XHJcbiAgICAgICAgICAgIGtleTIgPSBrZXkxLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBrZXkyID0gJy0nICsga2V5MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXAyW2tleTJdKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBtYXAxW2tleTFdICogbWFwMltrZXkyXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxufTtcclxuKi9cclxuXHJcbnZhciBmb3VyU3VtQ291bnQgPSBmdW5jdGlvbiAoQTogbnVtYmVyW10sIEI6IG51bWJlcltdLCBDOiBudW1iZXJbXSwgRDogbnVtYmVyW10pIHtcclxuICAgIC8vIOayoeivtOS4jeiDveS4gOS4quaVsOe7hOmHjOmdouS4jeiDveacieebuOWQjOeahOWAvFxyXG4gICAgLy8g5bqU6K+l5Y+q55So5LiA5LiqIGhhc2gg6KGoIOS9v+eUqG1hcCDnu5PmnoQg5Zug5Li6IG1hcCDnmoTplK4g5Y+v5Lul5Li6IOaVsOWtl+exu+WeiyDogIwg5a+56LGh5a2X6Z2i6YeP5Y+q6IO95piv5a2X56ym5LiyXHJcbiAgICBjb25zdCBtYXA6IE1hcDxudW1iZXIsIG51bWJlcj4gPSBuZXcgTWFwKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBhID0gQVtpXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEJbal07XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFwLmdldChhICsgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgPyB2YWx1ZSArIDEgOiAxO1xyXG4gICAgICAgICAgICBtYXAuc2V0KGEgKyBiLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IENbaV07XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBELmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBEW2pdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXAuZ2V0KC0oYyArIGQpKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZm91clN1bUNvdW50KFxyXG4gICAgICAgIFsxLCAyXSxcclxuICAgICAgICBbLTIsIC0xXSxcclxuICAgICAgICBbLTEsIDJdLFxyXG4gICAgICAgIFswLCAyXSxcclxuICAgICksXHJcbiAgICAyLFxyXG4pO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZm91clN1bUNvdW50KFxyXG4gICAgICAgIFs5LCAtNiwgNCwgNSwgLTgsIDYsIDUsIDIsIC0xMCwgNV0sXHJcbiAgICAgICAgWy0xLCAtMiwgLTEwLCA4LCA4LCA3LCAtNywgMCwgLTEwLCAtMV0sXHJcbiAgICAgICAgWzUsIDEsIC0xMCwgLTUsIDYsIC03LCAtOCwgMCwgLTIsIDBdLFxyXG4gICAgICAgIFstMywgLTksIDIsIDEwLCAtNywgLTIsIC00LCAxMCwgMTAsIC00XSxcclxuICAgICksXHJcblxyXG4gICAgMzI3LFxyXG4pO1xyXG5cclxuXHJcbiJdfQ==