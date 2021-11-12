/*
面试题 17.14. 最小K个数
设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

示例：

输入： arr = [1,3,5,7,2,4,6,8], k = 4
输出： [1,2,3,4]
提示：

0 <= len(arr) <= 100000
0 <= k <= min(100000, len(arr))
* */
import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { PriorityQueueItem } from "@datastructures-js/priority-queue/src/priorityQueue";
import assert from "assert";

// 直接用大顶堆W
function smallestK(arr: number[], k: number): number[] {
  if (k == 0) return [];
  const heap = new MaxPriorityQueue<number>();

  for (let i = 0; i < k; i++) {
    heap.enqueue(arr[i]);
  }

  for (let i = k; i < arr.length; i++) {
    if (arr[i] < (heap.front() as PriorityQueueItem<number>).element) {
      heap.dequeue();
      heap.enqueue(arr[i]);
    }
  }

  return (heap.toArray() as PriorityQueueItem<number>[]).map(
    ({ element }) => element
  );
}

// 利用快排思想
function smallestK2(arr: number[], k: number) {
  randomizedSelected(arr, 0, arr.length - 1, k);
  return arr.slice(0, k);
}

/**
 * 快排思想 原地排序
 * 将最小的k个数字放在 前l 后 k个位置
 * */
const randomizedSelected = (arr: number[], l: number, r: number, k: number) => {
  if (l >= r) {
    return;
  }
  const pos = randomizedPartition(arr, l, r); // pos 位置 左侧的值都 <= pos 右侧的 >= pos
  const num = pos - l + 1; // num 是 l 之后已经确保的 位置
  if (k === num) {
    return;
  } else if (k < num) {
    // 确保的太多了, 那么把 右边界收窄到 pos - 1
    randomizedSelected(arr, l, pos - 1, k);
  } else {
    // 确保的太少了 , 从pos 之后继续
    randomizedSelected(arr, pos + 1, r, k - num);
  }
};

/**
 * 随机将 左指针之后 到 包含右指针 的一个位置与 右指针交换,
 * 交换后的 右指针作为标志位, 也就是已经能够确定 最小的k 为范围
 * */
const randomizedPartition = (nums: number[], l: number, r: number) => {
  const i = Math.floor(Math.random() * (r - l + 1)) + l;
  swap(nums, r, i);
  return partition(nums, l, r);
};

/**
 * 以最右为标志位 将所有小于标志位的 数字都放到左侧然后, 将标志位放到 这些值之后
 * 然后返回标志位的 index + 1
 * */
const partition = (nums: number[], l: number, r: number) => {
  const pivot = nums[r]; // 以 交换后的 右指针作为标志位
  let i = l - 1; // i 记录 最终标志位 应该存放的位置
  // 将所有 小于 标志位的 数都放到左侧
  for (let j = l; j <= r - 1; ++j) {
    if (nums[j] <= pivot) {
      i = i + 1; // 如果 需要交换的话 放标志位的 位置应该右移
      swap(nums, i, j);
    }
  }
  swap(nums, i + 1, r); // 标志位放到 所有小于标志位的 + 1有位置
  return i + 1;
};

const swap = (nums: number[], i: number, j: number) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
};

assert.deepStrictEqual(
  smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4).sort(),
  [1, 2, 3, 4]
);
assert.deepStrictEqual(
  smallestK2([1, 3, 5, 7, 2, 4, 6, 8], 4).sort(),
  [1, 2, 3, 4]
);

import Benchmark from "benchmark";

// const suite = new Benchmark.Suite();
// const arr = Array.from({ length: 9999 })
//   .map((_, i) => i)
//   .sort(() => (Math.random() > 0.5 ? 1 : -1));
// suite
//   .add("堆", function () {
//     smallestK(arr.slice(), 1);
//   })
//   .add("快排", function () {
//     smallestK2(arr.slice(), 1);
//   })
//   .on("cycle", function (event: Benchmark.Event) {
//     console.log(String(event.target));
//   })
//   .on("complete", function (this: Benchmark.Suite) {
//     // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
//   })
//   // run async
//   .run({ async: false });
