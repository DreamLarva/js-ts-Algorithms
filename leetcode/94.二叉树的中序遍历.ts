/*
给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
* */

import { TreeNode, createBinaryTree } from "../util/BinaryTree";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root: TreeNode<number>) {
  // 递归
  const result: number[] = [];
  step(root);
  return result;

  function step(node: TreeNode<number> | null) {
    if (node) {
      step(node.left);
      result.push(node.val);
      step(node.right);
    }
  }
};

/**
 * 精彩 迭代
 * */
var inorderTraversal_1 = function (root: TreeNode<number>) {
  if (root == null) return [];
  // 迭代
  const result: number[] = [];
  const set: Set<TreeNode<number>> = new Set();
  const stack: TreeNode<number>[] = [];
  stack.push(root);

  while (stack.length) {
    const node = stack[stack.length - 1];
    if (node.left && !set.has(node.left)) {
      stack.push(node.left);
      continue;
    }

    result.push(node.val);
    set.add(node);
    stack.pop();

    if (node.right && !set.has(node.right)) {
      stack.push(node.right);
    }
  }

  return result;
};

import assert from "assert";

assert.deepStrictEqual(inorderTraversal(createBinaryTree([1, null, 2, 3])), [
  1,
  3,
  2,
]);
assert.deepStrictEqual(inorderTraversal_1(createBinaryTree([1, null, 2, 3])), [
  1,
  3,
  2,
]);
