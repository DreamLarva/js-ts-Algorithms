/*
530. 二叉搜索树的最小绝对差
给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

示例：

输入：

   1
    \
     3
    /
   2

输出：
1

解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。

提示：

树中至少有 2 个节点。
本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同

* */

import { createBinaryTree, TreeNode } from "../util/BinaryTree";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference1(root: TreeNode | null): number {
  /**
   * 每个节点与所有的 祖先节点比较
   * */
  let min = Infinity;

  function walk(treeNode: TreeNode | null, parents: number[] = []) {
    if (treeNode == null) return;
    const { left, right } = treeNode;

    if (left) {
      min = Math.min(min, Math.abs(treeNode.val - left.val));
      parents.forEach((v) => {
        min = Math.min(min, Math.abs(v - left.val));
      });
      walk(left, parents.concat(treeNode.val));
    }

    if (right) {
      min = Math.min(min, Math.abs(right.val - treeNode.val));
      parents.forEach((v) => {
        min = Math.min(min, Math.abs(right.val - v));
      });
      walk(right, parents.concat(treeNode.val));
    }
  }

  walk(root);
  return min;
}

function getMinimumDifference2(root: TreeNode | null): number {
  /**
   * 先序遍历 然后循环一次
   * */
  const cache: number[] = [];

  function walk(treeNode: TreeNode | null) {
    if (treeNode == null) return;

    walk(treeNode.left);
    cache.push(treeNode.val);
    walk(treeNode.right);
  }

  walk(root);
  let min = Infinity;
  for (let i = 1; i < cache.length; i++) {
    min = Math.min(min, cache[i] - cache[i - 1]);
  }
  return min;
}

function getMinimumDifference3(root: TreeNode | null): number {
  /**
   * 先序遍历中 存储每个新参与比较的值
   * */
  let ans = Number.MAX_SAFE_INTEGER,
    pre = -1; // 存下上一个离自己最近的值
  const dfs = (root: TreeNode | null) => {
    if (root === null) {
      return;
    }
    dfs(root.left);
    if (pre == -1) {
      pre = root.val;
    } else {
      ans = Math.min(ans, root.val - pre);
      pre = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return ans;
}

import assert from "assert";

assert.strictEqual(getMinimumDifference1(createBinaryTree([1, null, 3, 2])), 1);
assert.strictEqual(getMinimumDifference2(createBinaryTree([1, null, 3, 2])), 1);
assert.strictEqual(getMinimumDifference3(createBinaryTree([1, null, 3, 2])), 1);
