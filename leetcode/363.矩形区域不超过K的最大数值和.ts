/*
363. 矩形区域不超过 K 的最大数值和
给你一个 m x n 的矩阵 matrix 和一个整数 k ，找出并返回矩阵内部矩形区域的不超过 k 的最大数值和。

题目数据保证总会存在一个数值和不超过 k 的矩形区域。



示例 1：


输入：matrix = [[1,0,1],[0,-2,3]], k = 2
输出：2
解释：蓝色边框圈出来的矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。
示例 2：

输入：matrix = [[2,2,-1]], k = 3
输出：3


提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-100 <= matrix[i][j] <= 100
-105 <= k <= 105


进阶：如果行数远大于列数，该如何设计解决方案？
* */

/*
class Solution {
    public int maxSumSubmatrix(int[][] matrix, int k) {
        int ans = Integer.MIN_VALUE;
        int m = matrix.length, n = matrix[0].length;
        for (int i = 0; i < m; ++i) { // 枚举上边界
            int[] sum = new int[n];
            for (int j = i; j < m; ++j) { // 枚举下边界
                for (int c = 0; c < n; ++c) {
                    sum[c] += matrix[j][c]; // 更新每列的元素和
                }
                TreeSet<Integer> sumSet = new TreeSet<Integer>();
                sumSet.add(0);
                int s = 0;
                for (int v : sum) {
                    s += v;
                    Integer ceil = sumSet.ceiling(s - k);
                    if (ceil != null) {
                        ans = Math.max(ans, s - ceil);
                    }
                    sumSet.add(s);
                }
            }
        }
        return ans;
    }
}
* */

function maxSumSubmatrix(matrix: number[][], k: number): number {
  let ans = -Infinity;
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    // 枚举上边界
    const sum: number[] = Array(n).fill(0);
    for (let j = i; j < m; j++) {
      // 枚举下边界
      for (let c = 0; c < n; c++) {
        sum[c] += matrix[j][c]; // 更新每列的元素和
      }

      const sumSet: Set<number> = new Set();
      sumSet.add(0);
      let s = 0;
      for (const v of sum) {
        s += v;

        // 找到 4 或者 > 4但是最接近4 的值
        // 其他语言中 有 treeSet(java) 或者 sortedList(python) 可以直接获取
        const ceil = binarySearch(
          [...sumSet].sort((a, b) => b - a),
          s - k
        );
        if (ceil != null) {
          ans = Math.max(ans, s - ceil);
        }
        sumSet.add(s);
      }
    }
  }

  return ans;
}

/**
 * 二分查找
 * */
function binarySearch(nums: number[], target: number) {
  if (nums[0] < target) return null;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // 分成2份
    const criticalPoint = ~~((left + right) / 2);
    if (nums[criticalPoint] > target) {
      left = criticalPoint + 1;
    } else if (nums[criticalPoint] < target) {
      right = criticalPoint - 1;
    } else {
      return nums[criticalPoint];
    }
  }

  return nums[Math.max(left - 1, 0)];
}

function maxSumSubmatrix2(matrix: number[][], max: number): number {
  let row = matrix.length; // 行
  let column = matrix[0].length; // 列
  let b = Array.from({ length: column }, () => 0); // 存储每列之和
  let res = -Number.MAX_VALUE;
  for (let i = 0; i < row; i++) {
    // 遍历开始行
    for (let t = 0; t < b.length; t++) b[t] = 0; // 开始行改变之后需要把每列之和置零
    for (let j = i; j < row; j++) {
      for (let k = 0; k < column; k++) b[k] += matrix[j][k];
      // 把所有可能遍历出来
      for (let m = 0; m < b.length; m++) {
        let sum = 0;
        for (let n = m; n < b.length; n++) {
          sum += b[n];
          if (sum <= max && sum > res) {
            // 只有小于max，且大于之前的值
            res = sum;
          }
        }
      }
    }
  }
  return res;
}

import assert from "assert";

assert.strictEqual(binarySearch([6, 5, 3, 2, 1], 4), 5);
assert.strictEqual(binarySearch([5, 4, 3], 4), 4);
assert.strictEqual(binarySearch([5, 3, 2, 1], 4), 5);
assert.strictEqual(binarySearch([5, 3, 2, 1], 4), 5);
assert.strictEqual(binarySearch([5, 4, 3, 2, 1], 4), 4);
assert.strictEqual(binarySearch([4, 3, 2, 1], 4), 4);
assert.strictEqual(binarySearch([3, 2, 1], 4), null);
assert.strictEqual(binarySearch([6, 5], 4), 5);

// prettier-ignore
assert.strictEqual(maxSumSubmatrix([[1, 0, 1], [0, -2, 3]], 2), 2);
assert.strictEqual(maxSumSubmatrix([[2, 2, -1]], 3), 3);
