/*
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
说明：

你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/top-k-frequent-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import _ from 'lodash';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums: number[], k: number) {
    // 类似 215.数组中的第K个最大元素
    // 不过 这边求 前 k 个 所以 不能用 快速选择法
    const countMap = _.toPairs(_.countBy(nums));
    const minHeap: [string, number][] = [];
    for (let i = 0; i < countMap.length; i++) {
        minHeap.push(countMap[i]);
        heapifyWithSiftDown(minHeap, (a, b) => a[1] > b[1]);
        if (minHeap.length > k) {
            minHeap.shift();
        }
    }

    return minHeap.map(v => Number(v[0]));
};

function heapifyWithSiftDown<T>(A: T[], fn: (a: T, b: T) => boolean) {
    // 初始选择最接近叶子的一个父结点
    for (let i = Math.floor((A.length - 1) / 2); i >= 0; i--) {
        siftDown(A, i, fn);
    }
    return A;
}

function siftDown<T = number>(
    A: T[],
    k: number,
    fn: (a: T, b: T) => boolean = (a, b) => a > b,
) {
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


import assert from 'assert';

assert.deepStrictEqual(
    topKFrequent([1, 1, 1, 2, 2, 3], 2).sort(),
    [1, 2].sort(),
);
assert.deepStrictEqual(
    topKFrequent([1], 1).sort(),
    [1].sort(),
);
