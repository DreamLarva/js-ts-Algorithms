// 二叉树

class TreeNode<T = any> {
    val: T;
    left: null | TreeNode<T> = null;
    right: null | TreeNode<T> = null;

    constructor(val: T) {
        this.val = val;
    }

}


function createBinaryTree<T>(arr: T[]) {
    const root = new TreeNode(arr.shift());
    let current_layer_node_arr = [root];
    const next_layer_node_arr: TreeNode<T>[] = [];
    // 将每个放到 二叉树上 如果还剩余节点那么这些节点 的子节点全部设为null
    while (arr.length || next_layer_node_arr.length) {
        current_layer_node_arr.forEach(node => {
            if (node != null) {
                const left_data = arr.shift() || null;
                if (left_data != null) {
                    const left_node = new TreeNode(left_data);
                    node.left = left_node;
                    next_layer_node_arr.push(left_node);
                } else {
                    node.left = null;
                }
                const right_data = arr.shift() || null;
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
