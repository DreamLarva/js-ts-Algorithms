/*
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]





示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。


说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
* */
import {TreeNode} from "../util/BinaryTree";

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    /**
     * 二叉搜索树
     * 右子节点一定大于 当前节点
     * 左子节点一定小于 当前节点
     * */
    // 由于题目没有明确p 和 q 哪个更大
    // 确定 是否在两个值之间 或者在某个值上
    if ((root.val - p.val) * (root.val - q.val) <= 0) {
        return root;
    }
    // 都小于 或者 都大于
    if (root.val - p.val < 0) {
        return lowestCommonAncestor(root.right!, p, q);
    } else {
        return lowestCommonAncestor(root.left!, p, q);
    }
};

export {}
