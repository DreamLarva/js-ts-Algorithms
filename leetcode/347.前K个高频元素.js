"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
说明：

你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/top-k-frequent-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const lodash_1 = __importDefault(require("lodash"));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 类似 215.数组中的第K个最大元素
  // 不过 这边求 前 k 个 所以 不能用 快速选择法
  const countMap = lodash_1.default.toPairs(lodash_1.default.countBy(nums));
  const minHeap = [];
  for (let i = 0; i < countMap.length; i++) {
    if (minHeap.length === k && countMap[i][1] < minHeap[0][1]) continue;
    minHeap.push(countMap[i]);
    heapifyWithSiftDown(minHeap, (a, b) => a[1] > b[1]);
    if (minHeap.length > k) {
      minHeap.shift();
    }
  }
  return minHeap.map((v) => Number(v[0]));
};
function heapifyWithSiftDown(A, fn) {
  // 初始选择最接近叶子的一个父结点
  for (let i = Math.floor((A.length - 1) / 2); i >= 0; i--) {
    siftDown(A, i, fn);
  }
  return A;
}
function siftDown(A, k, fn = (a, b) => a > b) {
  // 此处是 最小堆
  while (k * 2 + 1 < A.length) {
    let son = k * 2 + 1;
    // 与其两个儿子中较小的一个比较
    if (k * 2 + 2 < A.length && fn(A[son], A[k * 2 + 2])) {
      son = k * 2 + 2;
    }
    // 若大于儿子，则与儿子交换。
    if (fn(A[son], A[k])) {
      break;
    }
    [A[son], A[k]] = [A[k], A[son]];
    // 交换后再与新的儿子比较并交换，直至没有儿子。
    k = son;
  }
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  topKFrequent([1, 1, 1, 2, 2, 3], 2).sort(),
  [1, 2].sort()
);
assert_1.default.deepStrictEqual(topKFrequent([1], 1).sort(), [1].sort());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ3LuWJjUvkuKrpq5jpopHlhYPntKAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzM0Ny7liY1L5Liq6auY6aKR5YWD57SgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSixvREFBdUI7QUFFdkI7Ozs7R0FJRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsSUFBYyxFQUFFLENBQVM7SUFDcEQscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixNQUFNLFFBQVEsR0FBRyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sT0FBTyxHQUF1QixFQUFFLENBQUM7SUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFFLFNBQVM7UUFDckUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBRUYsU0FBUyxtQkFBbUIsQ0FBSSxDQUFNLEVBQUUsRUFBMkI7SUFDakUsa0JBQWtCO0lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4RCxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUNmLENBQU0sRUFDTixDQUFTLEVBQ1QsS0FBOEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUU3QyxVQUFVO0lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO1FBQzNCLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BELEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjtRQUNELGdCQUFnQjtRQUNoQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsTUFBTTtTQUNQO1FBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMseUJBQXlCO1FBQ3pCLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDVDtBQUNILENBQUM7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQzFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNkLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq6Z2e56m655qE5pW05pWw5pWw57uE77yM6L+U5Zue5YW25Lit5Ye6546w6aKR546H5YmNIGsg6auY55qE5YWD57Sg44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IG51bXMgPSBbMSwxLDEsMiwyLDNdLCBrID0gMlxu6L6T5Ye6OiBbMSwyXVxu56S65L6LIDI6XG5cbui+k+WFpTogbnVtcyA9IFsxXSwgayA9IDFcbui+k+WHujogWzFdXG7or7TmmI7vvJpcblxu5L2g5Y+v5Lul5YGH6K6+57uZ5a6a55qEIGsg5oC75piv5ZCI55CG55qE77yM5LiUIDEg4omkIGsg4omkIOaVsOe7hOS4reS4jeebuOWQjOeahOWFg+e0oOeahOS4quaVsOOAglxu5L2g55qE566X5rOV55qE5pe26Ze05aSN5p2C5bqm5b+F6aG75LyY5LqOIE8obiBsb2cgbikgLCBuIOaYr+aVsOe7hOeahOWkp+Wwj+OAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvdG9wLWstZnJlcXVlbnQtZWxlbWVudHNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBrXG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAqL1xudmFyIHRvcEtGcmVxdWVudCA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSwgazogbnVtYmVyKSB7XG4gIC8vIOexu+S8vCAyMTUu5pWw57uE5Lit55qE56ysS+S4quacgOWkp+WFg+e0oFxuICAvLyDkuI3ov4cg6L+Z6L655rGCIOWJjSBrIOS4qiDmiYDku6Ug5LiN6IO955SoIOW/q+mAn+mAieaLqeazlVxuICBjb25zdCBjb3VudE1hcCA9IF8udG9QYWlycyhfLmNvdW50QnkobnVtcykpO1xuICBjb25zdCBtaW5IZWFwOiBbc3RyaW5nLCBudW1iZXJdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudE1hcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtaW5IZWFwLmxlbmd0aCA9PT0gayAmJiBjb3VudE1hcFtpXVsxXSA8IG1pbkhlYXBbMF1bMV0pIGNvbnRpbnVlO1xuICAgIG1pbkhlYXAucHVzaChjb3VudE1hcFtpXSk7XG4gICAgaGVhcGlmeVdpdGhTaWZ0RG93bihtaW5IZWFwLCAoYSwgYikgPT4gYVsxXSA+IGJbMV0pO1xuICAgIGlmIChtaW5IZWFwLmxlbmd0aCA+IGspIHtcbiAgICAgIG1pbkhlYXAuc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWluSGVhcC5tYXAoKHYpID0+IE51bWJlcih2WzBdKSk7XG59O1xuXG5mdW5jdGlvbiBoZWFwaWZ5V2l0aFNpZnREb3duPFQ+KEE6IFRbXSwgZm46IChhOiBULCBiOiBUKSA9PiBib29sZWFuKSB7XG4gIC8vIOWIneWni+mAieaLqeacgOaOpei/keWPtuWtkOeahOS4gOS4queItue7k+eCuVxuICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcigoQS5sZW5ndGggLSAxKSAvIDIpOyBpID49IDA7IGktLSkge1xuICAgIHNpZnREb3duKEEsIGksIGZuKTtcbiAgfVxuICByZXR1cm4gQTtcbn1cblxuZnVuY3Rpb24gc2lmdERvd248VCA9IG51bWJlcj4oXG4gIEE6IFRbXSxcbiAgazogbnVtYmVyLFxuICBmbjogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4gPSAoYSwgYikgPT4gYSA+IGJcbikge1xuICAvLyDmraTlpITmmK8g5pyA5bCP5aCGXG4gIHdoaWxlIChrICogMiArIDEgPCBBLmxlbmd0aCkge1xuICAgIGxldCBzb24gPSBrICogMiArIDE7XG4gICAgLy8g5LiO5YW25Lik5Liq5YS/5a2Q5Lit6L6D5bCP55qE5LiA5Liq5q+U6L6DXG4gICAgaWYgKGsgKiAyICsgMiA8IEEubGVuZ3RoICYmIGZuKEFbc29uXSwgQVtrICogMiArIDJdKSkge1xuICAgICAgc29uID0gayAqIDIgKyAyO1xuICAgIH1cbiAgICAvLyDoi6XlpKfkuo7lhL/lrZDvvIzliJnkuI7lhL/lrZDkuqTmjaLjgIJcbiAgICBpZiAoZm4oQVtzb25dLCBBW2tdKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFtBW3Nvbl0sIEFba11dID0gW0Fba10sIEFbc29uXV07XG4gICAgLy8g5Lqk5o2i5ZCO5YaN5LiO5paw55qE5YS/5a2Q5q+U6L6D5bm25Lqk5o2i77yM55u06Iez5rKh5pyJ5YS/5a2Q44CCXG4gICAgayA9IHNvbjtcbiAgfVxufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgdG9wS0ZyZXF1ZW50KFsxLCAxLCAxLCAyLCAyLCAzXSwgMikuc29ydCgpLFxuICBbMSwgMl0uc29ydCgpXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCh0b3BLRnJlcXVlbnQoWzFdLCAxKS5zb3J0KCksIFsxXS5zb3J0KCkpO1xuIl19
