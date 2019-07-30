/**
 * 二叉树
 * */
import {createReadStream} from "fs";

class TreeNode<T = any> {
    val: T;
    left: null | TreeNode<T> = null;
    right: null | TreeNode<T> = null;

    constructor(val: T) {
        this.val = val;
    }

    // 层次遍历
    levelTraversal() {
        const result: T[] = [];
        const stack: (TreeNode<T>)[] = [this];
        while (stack.length !== 0) {
            const node = stack.shift()!;
            result.push(node.val);
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
        return result;
    }

    // 先序遍历
    preOrderTraversal() {
        const result: T[] = [];
        traversal(this);
        return result;

        function traversal(node: TreeNode | null) {
            if (!(node === null)) {
                traversal(node.left);
                result.push(node.val);
                traversal(node.right);
            }
        }
    }
}


function createBinaryTree<T>(arr: (T | null)[]) {
    const root: TreeNode<T> = new TreeNode(arr.shift()!); // 根节点不为null
    let current_layer_node_arr = [root];
    const next_layer_node_arr: TreeNode<T>[] = [];
    // 将每个放到 二叉树上 如果还剩余节点那么这些节点 的子节点全部设为null
    while (arr.length || next_layer_node_arr.length) {
        current_layer_node_arr.forEach(node => {
            if (node != null) {
                let shiftData = arr.shift();
                const left_data = shiftData == null ? null : shiftData; // 避免数据出现 0 的情况
                if (left_data != null) {
                    const left_node = new TreeNode(left_data);
                    node.left = left_node;
                    next_layer_node_arr.push(left_node);
                } else {
                    node.left = null;
                }
                shiftData = arr.shift();
                const right_data = shiftData == null ? null : shiftData;
                if (right_data != null) {
                    const right_node = new TreeNode(right_data);
                    node.right = right_node;
                    next_layer_node_arr.push(right_node);
                } else {
                    node.right = null;
                }
            }
        });
        current_layer_node_arr = [...next_layer_node_arr];
        next_layer_node_arr.length = 0;
    }
    return root;

}


export {
    createBinaryTree,
    TreeNode,
};


import assert from "assert";


assert.deepStrictEqual(
    createBinaryTree([1, 2, 3, 4, 5, 6, 7]).levelTraversal(),
    [1, 2, 3, 4, 5, 6, 7],
);
assert.deepStrictEqual(
    createBinaryTree([1, 2, 3, null, null, null, 6, 7]).levelTraversal(),
    [1, 2, 3, null, null, null, 6, 7].filter(Boolean),
);

assert.deepStrictEqual(
    createBinaryTree([1, 2, 3, null, null, null, 6, 7]).levelTraversal(),
    [1, 2, 3, null, null, null, 6, 7].filter(Boolean),
);

assert.deepStrictEqual(
    createBinaryTree([0, 0, 0, 0, null, null, 0, null, null, null, 0]).levelTraversal(),
    [0, 0, 0, 0, null, null, 0, null, null, null, 0].filter(v => v != null),
);

