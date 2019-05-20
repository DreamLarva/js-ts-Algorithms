/*
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
* */
import {createBinaryTree, TreeNode} from "../util/BinaryTree";
import assert, {notDeepEqual} from "assert";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root: TreeNode<number> | null): boolean {
    /**
     * 注意 子树是 所有子节点 如果是 隔一层当然也算啊
     * */
    if (root === null) return true;
    let left_result = true;
    let right_result = true;
    if (root.left) {
        left_result = isStepBelow(root.left, root.val) && isValidBST(root.left);
    }

    if (root.right) {
        right_result = isStepUpper(root.right, root.val) && isValidBST(root.right);
    }

    return left_result && right_result;
};

// 该节点的所有子节点都大于目标值
function isStepUpper(node: TreeNode<number> | null, num: number): boolean {
    if (node === null) return true;
    if (node.val <= num) return false;
    return isStepUpper(node.left, num) && isStepUpper(node.right, num);
}

// 该几点的所有子节点都小s于目标值
function isStepBelow(node: TreeNode<number> | null, num: number): boolean {
    if (node === null) return true;
    if (node.val >= num) return false;
    return isStepBelow(node.left, num) && isStepBelow(node.right, num);
}

assert.strictEqual(
    isValidBST(createBinaryTree([])),
    true,
);
assert.strictEqual(
    isValidBST(createBinaryTree([1, 1])),
    false,
);
assert.strictEqual(
    isValidBST(createBinaryTree([2, 1, 3])),
    true,
);
assert.strictEqual(
    isValidBST(createBinaryTree([5, 3, 7, 2, 4, 6, 8])),
    true,
);
assert.strictEqual(
    isValidBST(createBinaryTree([5, 3, 7, 2, 10, 6, 8])),
    false,
);
assert.strictEqual(
    isValidBST(createBinaryTree([5, 1, 4, null, null, 3, 6])),
    false,
);
assert.strictEqual(
    isValidBST(createBinaryTree([10, 5, 15, null, null, 6, 20])),
    false,
);
assert.strictEqual(
    isValidBST(createBinaryTree([3, null, 30, 10, null, null, 15, null, 45])),
    false,
);
