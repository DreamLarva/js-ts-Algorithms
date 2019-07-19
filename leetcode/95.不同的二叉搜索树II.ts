/*
给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。

示例:

输入: 3
输出:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释:
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-binary-search-trees-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import {TreeNode, createBinaryTree} from "../util/BinaryTree";

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n: number) {
    if (n === 0) return [];
    return generate_trees(1, n);

    function generate_trees(start: number, end: number) {
        const all_trees: (TreeNode | null)[] = [];
        // 当出现 start > end 的 情况表示 这里 没有节点 但是子树上只能挂null
        // 这种情况下 另一个子树一定 获取了 全部的剩余节点s
        if (start > end) {
            all_trees.push(null);
            return all_trees;
        }

        for (let i = start; i <= end; i++) {
            // 递归生成 左子树
            const left_trees = generate_trees(start, i - 1);
            // 递归生成右子树
            const right_trees = generate_trees(i + 1, end);

            for (const l of left_trees) {
                for (const r of right_trees) {
                    const current_tree = new TreeNode(i);
                    current_tree.left = l;
                    current_tree.right = r;
                    all_trees.push(current_tree);
                }
            }
        }
        return all_trees;
    }
};


import assert from "assert";

assert.deepStrictEqual(
    generateTrees(3),
    [
        [1, null, 2, null, 3],
        [1, null, 3, 2],
        [2, 1, 3],
        [3, 1, null, null, 2],
        [3, 2, null, 1],
    ].map(param => createBinaryTree(param)),
);
