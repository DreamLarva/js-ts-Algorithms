/*
给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。

示例 1:

输入: [1,2,3,4,5], k=4, x=3
输出: [1,2,3,4]
 

示例 2:

输入: [1,2,3,4,5], k=4, x=-1
输出: [1,2,3,4]
 

说明:

k 的值为正数，且总是小于给定排序数组的长度。
数组不为空，且长度不超过 104
数组里的每个元素与 x 的绝对值不超过 104
 

更新(2017/9/19):
这个参数 arr 已经被改变为一个整数数组（而不是整数列表）。 请重新加载代码定义以获取最新更改。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-k-closest-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr: number[], k: number, x: number) {
    /**
     * 同样使用二分法
     * 将 一个 k 区间内容 的最左边的index 作为 依据 一个区间内所有的值 作为度量
     * */
        // 总共 K 个值 那么如果 寻找最左边界 index 的 范围就是 0 ~ arr.length - k
    let left = 0;
    let right = arr.length - k;
    while (left < right) {
        const mid = (left + right) >> 1; // 优先使用较小的 所以使用向下取整的模板
        //             index mid 作为左边界           mid + k - 1为右边界 这里 看 mid + k
        if (Math.abs(arr[mid] - x) > Math.abs(arr[mid + k] - x)) { // 为什么 mid + k不会越界呢 因为 left < right 然而只有 left = right = arr.length - k 的时 才可能越界
            left = mid + 1; // 在 mid 为左边界 的序列的 右边界的 右边
        } else {
            right = mid;
        }
    }

    return arr.slice(right, right + k);
};

import assert from "assert";

assert.deepStrictEqual(
    findClosestElements([1, 2, 3, 4, 5], 4, 3),
    [1, 2, 3, 4],
);



assert.deepStrictEqual(
    findClosestElements([1, 2, 3, 4, 5], 4, -1),
    [1, 2, 3, 4],
);


