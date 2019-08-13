/*
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums: number[]) {
    // 基本同 46.全排列.ts
    // 额外的需要排除重复的项

    // 先排序 ?
    nums.sort();

    const result: number[][] = [];
    const map: { [key: string]: string } = {};
    backtrack(nums.length - 1, nums, 0);
    return result;

    function backtrack(n: number, nums: number[], first: number) {
        // 交换的位置 已经没有了 返回结果
        if (n === first) {
            return result.push(nums);
        }

        /**
         * 这里不 会回溯 直接 在上一层的循环上 进行
         * 最终的效果是 每次 将一个不同的 数放到 first 位 上 然后后面的位递归 自己玩
         * 原因是 全排列I 中 由于值都不同 所以每个交换都是有意义的 相当于放到 第一位
         * */
        for (let i = first; i <= n; i++) {

            // 排除相同 结果 只保留第一个
            if (i != first && nums[first] == nums[i]) continue;

            // console.log(`start${first}`, nums, "swap", nums[first], nums[i]);
            [nums[first], nums[i]] = [nums[i], nums[first]];

            /**
             * 注意之后的代码
             * 1.每次传递 已经交换过位置的拷贝?
             * 2.并不需要回溯之前的状态?
             * */
            // 交换下一个位置的值
            backtrack(n, nums.slice(), first + 1);
        }
    }
};


import assert from "assert";
import {sortDeep} from "../util/assertHelper";
import _ from "lodash";


assert.deepStrictEqual(
    permuteUnique([1, 2, 3]),
    [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ],
);


assert.deepStrictEqual(
    permuteUnique([1, 1, 2]),
    [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
    ],
);




import {permute} from "./46.全排列";
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;

/*
suite
    .add("backtrack", function () {
        permute([1, 2, 3]);
    })
    .add("copy", function () {
        permuteUnique([1, 2, 3]);
    })

    // add listeners
    .on("cycle", function (event: any) {
        console.log(String(event.target));
    })
    .on("complete", function (this: any) {
        console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    // run async
    .run({async: false});
*/


const sample = _.range(0,6);
suite
    .add("backtrack", function () {
        permute(sample);
    })
    .add("copy", function () {
        permuteUnique(sample);
    })

    // add listeners
    .on("cycle", function (event: any) {
        console.log(String(event.target));
    })
    .on("complete", function (this: any) {
        console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    // run async
    .run({async: false});
