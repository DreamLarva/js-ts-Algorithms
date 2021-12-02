/*
给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,2,3]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

import { TreeNode, createBinaryTree } from "../util/BinaryTree";

/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
var preorderTraversal = function (root: TreeNode<number> | null) {
  /**
   * 递归
   * */
  if (root === null) return [];
  const result: number[] = [];
  step(root);
  return result;

  function step(node: TreeNode<number>) {
    result.push(node.val);
    if (node.left) step(node.left);
    if (node.right) step(node.right);
  }
};

var preorderTraversal_1 = function (root: TreeNode<number> | null) {
  /**
   * 迭代
   * */
  if (root === null) return [];
  const result: number[] = [];
  const stack: TreeNode<number>[] = [];
  let node: TreeNode<number> | null = root;
  while (node || stack.length) {
    // 优先 查询 当前节点 和 左子树
    while (node) {
      stack.push(node);
      result.push(node.val);
      node = node.left;
    }
    // 没有左子树的时候 就获取上一个分支的右子树
    node = stack.pop()!;
    node = node.right;
  }
  return result;
};

import assert from "assert";

assert.deepStrictEqual(
  preorderTraversal(createBinaryTree([1, null, 2, 3])),
  [1, 2, 3]
);
assert.deepStrictEqual(
  preorderTraversal_1(createBinaryTree([1, null, 2, 3])),
  [1, 2, 3]
);
