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

assert.deepStrictEqual(
  smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4).sort(),
  [1, 2, 3, 4]
);
