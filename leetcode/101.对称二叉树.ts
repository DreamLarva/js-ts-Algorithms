/*
[101] 对称二叉树

https://leetcode-cn.com/problems/symmetric-tree/description/

Tags: algorithms bloomberg linkedin microsoft breadth-first-search depth-first-search tree

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (45.59%)
* Total Accepted: 25.5K
* Total Submissions: 56K
* Testcase Example: '[1,2,2,3,4,4,3]'

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

1
/ \
2 2
/ \ / \
3 4 4 3


但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

1
/ \
2 2
\ \
3 3


说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

*/

class TreeNode<T> {
    val: T;
    left: null | TreeNode<T> = null;
    right: null | TreeNode<T> = null;

    constructor(val: T) {
        this.val = val;
    }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root: TreeNode<number> | null) {
    if (root == null) {
        return true
    }
    return recursion(root.left, root.right);
};

function recursion(left: TreeNode<number> | null, right: TreeNode<number> | null): boolean {
    if (left == null || right == null) {
        return left == null && right == null
    }
    return left.val === right.val &&
        recursion(left.left, right.right) &&
        recursion(left.right, right.left)
}


const {createBinTree} = require("./util/BinTree");

console.log(isSymmetric(createBinTree([1, 2, 2, 3, 4, 4, 3])));

export {}
