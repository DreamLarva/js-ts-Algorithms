/*
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (root === null) return [];
    const {left, right, val} = root;
    if (!(left || right)) return [String(val)];
    let result = [];
    if (left) result = result.concat(binaryTreePaths(left).map(v => val + "->" + v));
    if (right) result = result.concat(binaryTreePaths(right).map(v => val + "->" + v));
    return result;
};

/**
 * 更佳的方法
 * 巧用 js 可以在函数中声明函数 将结果放在递归外层
 * 节约了 每次递归和并结果的开销
 * */
var binaryTreePaths2 = function (root) {
    var arr = [];
    var str = root && root.val;
    getPath(root, str);
    return arr;

    function getPath(root, str) {
        if (!root) return;
        if (root.left) {
            var str_left = str + '->' + root.left.val;
            getPath(root.left, str_left)
        }
        if (root.right) {
            var str_right = str + '->' + root.right.val;
            getPath(root.right, str_right)
        }
        if (!root.left && !root.right) {
            return arr.push(String(str))
        }
    }
};

const {createBinaryTree} = require("../util/BinaryTree");
const assert = require("assert");
assert.deepStrictEqual(
    binaryTreePaths(createBinaryTree([1, 2, 3, null, 5])),
    ["1->2->5", "1->3"]
);
assert.deepStrictEqual(
    binaryTreePaths(null),
    []
);
