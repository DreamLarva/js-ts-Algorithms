"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = require("../util/BinaryTree");
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
function getMinimumDifference1(root) {
    /**
     * 每个节点与所有的 祖先节点比较
     * */
    let min = Infinity;
    function walk(treeNode, parents = []) {
        if (treeNode == null)
            return;
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
function getMinimumDifference2(root) {
    /**
     * 先序遍历 然后循环一次
     * */
    const cache = [];
    function walk(treeNode) {
        if (treeNode == null)
            return;
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
function getMinimumDifference3(root) {
    /**
     * 先序遍历中 存储每个新参与比较的值
     * */
    let ans = Number.MAX_SAFE_INTEGER, pre = -1; // 存下上一个离自己最近的值
    const dfs = (root) => {
        if (root === null) {
            return;
        }
        dfs(root.left);
        if (pre == -1) {
            pre = root.val;
        }
        else {
            ans = Math.min(ans, root.val - pre);
            pre = root.val;
        }
        dfs(root.right);
    };
    dfs(root);
    return ans;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(getMinimumDifference1(BinaryTree_1.createBinaryTree([1, null, 3, 2])), 1);
assert_1.default.strictEqual(getMinimumDifference2(BinaryTree_1.createBinaryTree([1, null, 3, 2])), 1);
assert_1.default.strictEqual(getMinimumDifference3(BinaryTree_1.createBinaryTree([1, null, 3, 2])), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMwLuS6jOWPieaQnOe0ouagkeeahOacgOWwj+e7neWvueW3ri5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTMwLuS6jOWPieaQnOe0ouagkeeahOacgOWwj+e7neWvueW3ri50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5Qkk7Ozs7O0FBRUosbURBQWdFO0FBRWhFOzs7Ozs7Ozs7Ozs7R0FZRztBQUVILFNBQVMscUJBQXFCLENBQUMsSUFBcUI7SUFDbEQ7O1NBRUs7SUFDTCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFFbkIsU0FBUyxJQUFJLENBQUMsUUFBeUIsRUFBRSxVQUFvQixFQUFFO1FBQzdELElBQUksUUFBUSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQzdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBRWpDLElBQUksSUFBSSxFQUFFO1lBQ1IsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUVELElBQUksS0FBSyxFQUFFO1lBQ1QsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElB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Q0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuNTMwLiDkuozlj4nmkJzntKLmoJHnmoTmnIDlsI/nu53lr7nlt65cbue7meS9oOS4gOajteaJgOacieiKgueCueS4uumdnui0n+WAvOeahOS6jOWPieaQnOe0ouagke+8jOivt+S9oOiuoeeul+agkeS4reS7u+aEj+S4pOiKgueCueeahOW3rueahOe7neWvueWAvOeahOacgOWwj+WAvOOAglxuXG7npLrkvovvvJpcblxu6L6T5YWl77yaXG5cbiAgIDFcbiAgICBcXFxuICAgICAzXG4gICAgL1xuICAgMlxuXG7ovpPlh7rvvJpcbjFcblxu6Kej6YeK77yaXG7mnIDlsI/nu53lr7nlt67kuLogMe+8jOWFtuS4rSAyIOWSjCAxIOeahOW3rueahOe7neWvueWAvOS4uiAx77yI5oiW6ICFIDIg5ZKMIDPvvInjgIJcblxu5o+Q56S677yaXG5cbuagkeS4reiHs+WwkeaciSAyIOS4quiKgueCueOAglxu5pys6aKY5LiOIDc4MyBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9taW5pbXVtLWRpc3RhbmNlLWJldHdlZW4tYnN0LW5vZGVzLyDnm7jlkIxcblxuKiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVCaW5hcnlUcmVlLCBUcmVlTm9kZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBhIGJpbmFyeSB0cmVlIG5vZGUuXG4gKiBjbGFzcyBUcmVlTm9kZSB7XG4gKiAgICAgdmFsOiBudW1iZXJcbiAqICAgICBsZWZ0OiBUcmVlTm9kZSB8IG51bGxcbiAqICAgICByaWdodDogVHJlZU5vZGUgfCBudWxsXG4gKiAgICAgY29uc3RydWN0b3IodmFsPzogbnVtYmVyLCBsZWZ0PzogVHJlZU5vZGUgfCBudWxsLCByaWdodD86IFRyZWVOb2RlIHwgbnVsbCkge1xuICogICAgICAgICB0aGlzLnZhbCA9ICh2YWw9PT11bmRlZmluZWQgPyAwIDogdmFsKVxuICogICAgICAgICB0aGlzLmxlZnQgPSAobGVmdD09PXVuZGVmaW5lZCA/IG51bGwgOiBsZWZ0KVxuICogICAgICAgICB0aGlzLnJpZ2h0ID0gKHJpZ2h0PT09dW5kZWZpbmVkID8gbnVsbCA6IHJpZ2h0KVxuICogICAgIH1cbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBnZXRNaW5pbXVtRGlmZmVyZW5jZTEocm9vdDogVHJlZU5vZGUgfCBudWxsKTogbnVtYmVyIHtcbiAgLyoqXG4gICAqIOavj+S4quiKgueCueS4juaJgOacieeahCDnpZblhYjoioLngrnmr5TovoNcbiAgICogKi9cbiAgbGV0IG1pbiA9IEluZmluaXR5O1xuXG4gIGZ1bmN0aW9uIHdhbGsodHJlZU5vZGU6IFRyZWVOb2RlIHwgbnVsbCwgcGFyZW50czogbnVtYmVyW10gPSBbXSkge1xuICAgIGlmICh0cmVlTm9kZSA9PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgeyBsZWZ0LCByaWdodCB9ID0gdHJlZU5vZGU7XG5cbiAgICBpZiAobGVmdCkge1xuICAgICAgbWluID0gTWF0aC5taW4obWluLCBNYXRoLmFicyh0cmVlTm9kZS52YWwgLSBsZWZ0LnZhbCkpO1xuICAgICAgcGFyZW50cy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgTWF0aC5hYnModiAtIGxlZnQudmFsKSk7XG4gICAgICB9KTtcbiAgICAgIHdhbGsobGVmdCwgcGFyZW50cy5jb25jYXQodHJlZU5vZGUudmFsKSk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0KSB7XG4gICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIE1hdGguYWJzKHJpZ2h0LnZhbCAtIHRyZWVOb2RlLnZhbCkpO1xuICAgICAgcGFyZW50cy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgTWF0aC5hYnMocmlnaHQudmFsIC0gdikpO1xuICAgICAgfSk7XG4gICAgICB3YWxrKHJpZ2h0LCBwYXJlbnRzLmNvbmNhdCh0cmVlTm9kZS52YWwpKTtcbiAgICB9XG4gIH1cblxuICB3YWxrKHJvb3QpO1xuICByZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRNaW5pbXVtRGlmZmVyZW5jZTIocm9vdDogVHJlZU5vZGUgfCBudWxsKTogbnVtYmVyIHtcbiAgLyoqXG4gICAqIOWFiOW6j+mBjeWOhiDnhLblkI7lvqrnjq/kuIDmrKFcbiAgICogKi9cbiAgY29uc3QgY2FjaGU6IG51bWJlcltdID0gW107XG5cbiAgZnVuY3Rpb24gd2Fsayh0cmVlTm9kZTogVHJlZU5vZGUgfCBudWxsKSB7XG4gICAgaWYgKHRyZWVOb2RlID09IG51bGwpIHJldHVybjtcblxuICAgIHdhbGsodHJlZU5vZGUubGVmdCk7XG4gICAgY2FjaGUucHVzaCh0cmVlTm9kZS52YWwpO1xuICAgIHdhbGsodHJlZU5vZGUucmlnaHQpO1xuICB9XG5cbiAgd2Fsayhyb290KTtcbiAgbGV0IG1pbiA9IEluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGNhY2hlLmxlbmd0aDsgaSsrKSB7XG4gICAgbWluID0gTWF0aC5taW4obWluLCBjYWNoZVtpXSAtIGNhY2hlW2kgLSAxXSk7XG4gIH1cbiAgcmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0TWluaW11bURpZmZlcmVuY2UzKHJvb3Q6IFRyZWVOb2RlIHwgbnVsbCk6IG51bWJlciB7XG4gIC8qKlxuICAgKiDlhYjluo/pgY3ljobkuK0g5a2Y5YKo5q+P5Liq5paw5Y+C5LiO5q+U6L6D55qE5YC8XG4gICAqICovXG4gIGxldCBhbnMgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICBwcmUgPSAtMTsgLy8g5a2Y5LiL5LiK5LiA5Liq56a76Ieq5bex5pyA6L+R55qE5YC8XG4gIGNvbnN0IGRmcyA9IChyb290OiBUcmVlTm9kZSB8IG51bGwpID0+IHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZnMocm9vdC5sZWZ0KTtcbiAgICBpZiAocHJlID09IC0xKSB7XG4gICAgICBwcmUgPSByb290LnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5zID0gTWF0aC5taW4oYW5zLCByb290LnZhbCAtIHByZSk7XG4gICAgICBwcmUgPSByb290LnZhbDtcbiAgICB9XG4gICAgZGZzKHJvb3QucmlnaHQpO1xuICB9O1xuICBkZnMocm9vdCk7XG4gIHJldHVybiBhbnM7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZ2V0TWluaW11bURpZmZlcmVuY2UxKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDMsIDJdKSksIDEpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGdldE1pbmltdW1EaWZmZXJlbmNlMihjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAzLCAyXSkpLCAxKTtcbmFzc2VydC5zdHJpY3RFcXVhbChnZXRNaW5pbXVtRGlmZmVyZW5jZTMoY3JlYXRlQmluYXJ5VHJlZShbMSwgbnVsbCwgMywgMl0pKSwgMSk7XG4iXX0=