/*
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import _ from "lodash";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums: number[], k: number) {
    /**
     * 方法一 不断的堆化(求第k大的值 用**最小堆**) 并且保持 一定的长度(k)
     * 慢的一b
     * */
    const minHeap = [];
    for (let i = 0; i < nums.length; i++) {
        minHeap.push(nums[i]);
        heapifyWithSiftDown(minHeap);
        if (minHeap.length > k) {
            minHeap.shift();
        }
    }
    // 还必须再堆化一次 使最小值 在第一个
    heapifyWithSiftDown(minHeap);
    return minHeap[0];

    function heapifyWithSiftDown(A: number[]) {
        // 初始选择最接近叶子的一个父结点
        for (let i = Math.floor((A.length - 1) / 2); i >= 0; i--) {
            siftDown(A, i);
        }

        return A;
    }

    function siftDown(A: number[], k: number) {
        // 此处是 最小堆
        while (k * 2 + 1 < A.length) {
            let son = k * 2 + 1;
            // 与其两个儿子中较小的一个比较
            if (k * 2 + 2 < A.length && A[son] > A[k * 2 + 2]) {
                son = k * 2 + 2;
            }

            // 若大于儿子，则与儿子交换。
            if (A[son] > A[k]) {
                break;
            }
            [A[son], A[k]] = [A[k], A[son]];
            // 交换后再与新的儿子比较并交换，直至没有儿子。
            k = son;
        }
    }


};

var findKthLargest_1 = function (nums: number[], k: number) {
    /**
     * 方法二 快速选择法
     * */

};

import assert from 'assert';

assert.strictEqual(
    findKthLargest([3, 2, 1, 5, 6, 4], 2),
    5,
);
assert.strictEqual(
    findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4),
    4,
);
