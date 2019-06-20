/*
计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-of-left-leaves
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import {TreeNode, createBinaryTree} from "../util/BinaryTree";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root: TreeNode | null): number {
    if (root == null) return 0;
    if (root.left && root.left.left == null && root.left.right == null) {
        return root.left.val + sumOfLeftLeaves(root.right);
    }
    if (root.right && root.right.left == null && root.right.right == null) {
        return sumOfLeftLeaves(root.left); // + 0;
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

import assert from "assert";

assert.strictEqual(
    sumOfLeftLeaves(createBinaryTree([3, 9, 20, null, null, 15, 7])),
    24,
);
