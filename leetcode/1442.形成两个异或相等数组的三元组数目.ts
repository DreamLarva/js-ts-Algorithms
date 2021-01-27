/*
给你一个整数数组 arr 。

现需要从数组中取三个下标 i、j 和 k ，其中 (0 <= i < j <= k < arr.length) 。

a 和 b 定义如下：

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
注意：^ 表示 按位异或 操作。

请返回能够令 a == b 成立的三元组 (i, j , k) 的数目。



示例 1：

输入：arr = [2,3,1,6,7]
输出：4
解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)
示例 2：

输入：arr = [1,1,1,1,1]
输出：10
示例 3：

输入：arr = [2,3]
输出：0
示例 4：

输入：arr = [1,3,5,7,9]
输出：3
示例 5：

输入：arr = [7,11,12,9,5,2,7,17,22]
输出：8


提示：

1 <= arr.length <= 300
1 <= arr[i] <= 10^8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * 前提
 * a ^ b = 0; 则 a = b
 * a ^ 0 = a
 * n 个数 取 ^ 后等于0 ; 则 分成任意数量的 2分, 每份的所有值取^ , 两份异或后的值相等
 * 则 length 为 n 的数组符合每项异或为0, 则有  n-1中组合
 *
 * 如 a[i] ^ a[i+1] = n 且 a[j] ^ a[j + 1] ^ ... a[k] = n
 * 则 a[j] ^ a[j + 1] ^ ... a[k] = 0
 * */

/**
 * 朴实的三重循环
 * */
function countTriplets(arr: number[]) {
  // 从左向右 累积异或的值
  const accumulationXorArr: number[] = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    accumulationXorArr.push(accumulationXorArr[i - 1] ^ arr[i]);
  }

  let result = 0;
  for (let i = 0; i < accumulationXorArr.length - 1; i++) {
    for (let j = i + 1; j < accumulationXorArr.length; j++) {
      for (let k = j; k < accumulationXorArr.length; k++) {
        const a =
          accumulationXorArr[j - 1] ^ (i === 0 ? 0 : accumulationXorArr[i - 1]);
        const b = accumulationXorArr[k] ^ accumulationXorArr[j - 1];
        if (a === b) {
          result++;
        }
      }
    }
  }

  return result;
}

/**
 * 添加 累积异或后 每次遇到按相同值的处理
 * * */
function countTriplets2(arr: number[]) {
  // 从左向右 累积异或的值
  const accumulationXorArr: number[] = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    accumulationXorArr.push(accumulationXorArr[i - 1] ^ arr[i]);
  }

  let result = 0;
  // 存储相同的 累积异或的值的 索引
  const map: { [key: number]: number[] } = {};
  // 处理最 index = 0 的值 , 如果 累积异或的值 为 0 ,就是从最左侧开始有一个匹配
  map[0] = [-1];

  for (let i = 0; i < accumulationXorArr.length; i++) {
    const curXor = accumulationXorArr[i];
    if (map[curXor] == null) {
      map[curXor] = [i];
    } else {
      for (let j = 0; j < map[curXor].length; j++) {
        result += i - map[curXor][j] - 1;
      }
      map[curXor].push(i);
    }
  }

  return result;
}

import assert from "assert";

assert.strictEqual(countTriplets([2, 3, 1, 6, 7]), 4);
assert.strictEqual(countTriplets([1, 3, 5, 7, 9]), 3);
assert.strictEqual(countTriplets([1, 1, 1, 1, 1]), 10);

assert.strictEqual(countTriplets2([2, 3, 1, 6, 7]), 4);
assert.strictEqual(countTriplets2([1, 3, 5, 7, 9]), 3);
assert.strictEqual(countTriplets2([1, 1, 1, 1, 1]), 10);
