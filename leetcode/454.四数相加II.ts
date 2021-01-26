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

var fourSumCount = function (
  A: number[],
  B: number[],
  C: number[],
  D: number[]
) {
  // 没说不能一个数组里面不能有相同的值
  // 应该只用一个 hash 表 使用map 结构 因为 map 的键 可以为 数字类型 而 对象字面量只能是字符串
  const map: Map<number, number> = new Map();
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

import assert from "assert";

assert.strictEqual(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]), 2);

assert.strictEqual(
  fourSumCount(
    [9, -6, 4, 5, -8, 6, 5, 2, -10, 5],
    [-1, -2, -10, 8, 8, 7, -7, 0, -10, -1],
    [5, 1, -10, -5, 6, -7, -8, 0, -2, 0],
    [-3, -9, 2, 10, -7, -2, -4, 10, 10, -4]
  ),

  327
);
