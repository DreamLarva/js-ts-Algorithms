declare class TreeNode<T = any> {
    val: T;
    left: null | TreeNode<T>;
    right: null | TreeNode<T>;
    constructor(val: T);
    levelTraversal(): T[];
    preOrderTraversal(): T[];
}
declare function createBinaryTree<T>(arr: (T | null)[]): TreeNode<T>;
export { createBinaryTree, TreeNode };
