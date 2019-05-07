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
import {createBinaryTree, TreeNode} from "../util/BinaryTree";
import assert from "assert";

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root: TreeNode | null): string[] {
    if (root === null) return [];
    const {left, right, val} = root;
    if (!(left || right)) return [String(val)];
    let result: string[] = [];
    if (left) result = result.concat(binaryTreePaths(left).map(v => val + "->" + v));
    if (right) result = result.concat(binaryTreePaths(right).map(v => val + "->" + v));
    return result;
};

/**
 * 更佳的方法
 * 巧用 js 可以在函数中声明函数 将结果放在递归外层
 * 节约了 每次递归和并结果的开销
 * */
var binaryTreePaths2 = function (root: TreeNode<number> | null): string[] {
    if (root === null) return [];
    const arr: string[] = [];
    getPath(root, String(root.val));
    return arr;

    function getPath(root: TreeNode<number> | null, str: string) {
        if (!root) return;
        if (root.left) {
            const str_left = str + '->' + root.left.val;
            getPath(root.left, str_left);
        }
        if (root.right) {
            const str_right = str + '->' + root.right.val;
            getPath(root.right, str_right);
        }
        if (!root.left && !root.right) {
            arr.push(String(str));
            return;
        }
    }
};

assert.deepStrictEqual(
    binaryTreePaths(createBinaryTree([1, 2, 3, null, 5])),
    ["1->2->5", "1->3"],
);
assert.deepStrictEqual(
    binaryTreePaths(null),
    [],
);
assert.deepStrictEqual(
    binaryTreePaths2(createBinaryTree([1, 2, 3, null, 5])),
    ["1->2->5", "1->3"],
);
assert.deepStrictEqual(
    binaryTreePaths2(null),
    [],
);
