declare class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}
declare function recoverFromPreorder(S: string): TreeNode | null;
declare function getVal(str: string): string | undefined;
declare function getLeftRight(str: string, level: number): RegExpMatchArray;
