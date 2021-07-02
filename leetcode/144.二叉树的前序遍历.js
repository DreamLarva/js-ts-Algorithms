"use strict";
/*
给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,2,3]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = require("../util/BinaryTree");
/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    /**
     * 递归
     * */
    if (root === null)
        return [];
    const result = [];
    step(root);
    return result;
    function step(node) {
        result.push(node.val);
        if (node.left)
            step(node.left);
        if (node.right)
            step(node.right);
    }
};
var preorderTraversal_1 = function (root) {
    /**
     * 迭代
     * */
    if (root === null)
        return [];
    const result = [];
    const stack = [];
    let node = root;
    while (node || stack.length) {
        // 优先 查询 当前节点 和 左子树
        while (node) {
            stack.push(node);
            result.push(node.val);
            node = node.left;
        }
        // 没有左子树的时候 就获取上一个分支的右子树
        node = stack.pop();
        node = node.right;
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(preorderTraversal(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [
    1,
    2,
    3,
]);
assert_1.default.deepStrictEqual(preorderTraversal_1(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [
    1,
    2,
    3,
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ0LuS6jOWPieagkeeahOWJjeW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ0LuS6jOWPieagkeeahOWJjeW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCSTs7Ozs7QUFFSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLElBQTZCO0lBQzdEOztTQUVLO0lBQ0wsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDWCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLElBQXNCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFJLG1CQUFtQixHQUFHLFVBQVUsSUFBNkI7SUFDL0Q7O1NBRUs7SUFDTCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLE1BQU0sS0FBSyxHQUF1QixFQUFFLENBQUM7SUFDckMsSUFBSSxJQUFJLEdBQTRCLElBQUksQ0FBQztJQUN6QyxPQUFPLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzNCLG1CQUFtQjtRQUNuQixPQUFPLElBQUksRUFBRTtZQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMzRSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM3RSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR77yM6L+U5Zue5a6D55qEIOWJjeW6jyDpgY3ljobjgIJcblxuIOekuuS+izpcblxu6L6T5YWlOiBbMSxudWxsLDIsM11cbiAgIDFcbiAgICBcXFxuICAgICAyXG4gICAgL1xuICAgM1xuXG7ovpPlh7o6IFsxLDIsM11cbui/m+mYtjog6YCS5b2S566X5rOV5b6I566A5Y2V77yM5L2g5Y+v5Lul6YCa6L+H6L+t5Luj566X5rOV5a6M5oiQ5ZCX77yfXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9iaW5hcnktdHJlZS1wcmVvcmRlci10cmF2ZXJzYWxcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG5pbXBvcnQgeyBUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfG51bGx9IHJvb3RcbiAqIEByZXR1cm4ge251bWJlcltdfVxuICovXG52YXIgcHJlb3JkZXJUcmF2ZXJzYWwgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpIHtcbiAgLyoqXG4gICAqIOmAkuW9klxuICAgKiAqL1xuICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xuICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gIHN0ZXAocm9vdCk7XG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gc3RlcChub2RlOiBUcmVlTm9kZTxudW1iZXI+KSB7XG4gICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xuICAgIGlmIChub2RlLmxlZnQpIHN0ZXAobm9kZS5sZWZ0KTtcbiAgICBpZiAobm9kZS5yaWdodCkgc3RlcChub2RlLnJpZ2h0KTtcbiAgfVxufTtcblxudmFyIHByZW9yZGVyVHJhdmVyc2FsXzEgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpIHtcbiAgLyoqXG4gICAqIOi/reS7o1xuICAgKiAqL1xuICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xuICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHN0YWNrOiBUcmVlTm9kZTxudW1iZXI+W10gPSBbXTtcbiAgbGV0IG5vZGU6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsID0gcm9vdDtcbiAgd2hpbGUgKG5vZGUgfHwgc3RhY2subGVuZ3RoKSB7XG4gICAgLy8g5LyY5YWIIOafpeivoiDlvZPliY3oioLngrkg5ZKMIOW3puWtkOagkVxuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBzdGFjay5wdXNoKG5vZGUpO1xuICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xuICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICB9XG4gICAgLy8g5rKh5pyJ5bem5a2Q5qCR55qE5pe25YCZIOWwseiOt+WPluS4iuS4gOS4quWIhuaUr+eahOWPs+WtkOagkVxuICAgIG5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgbm9kZSA9IG5vZGUucmlnaHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHByZW9yZGVyVHJhdmVyc2FsKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksIFtcbiAgMSxcbiAgMixcbiAgMyxcbl0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwcmVvcmRlclRyYXZlcnNhbF8xKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksIFtcbiAgMSxcbiAgMixcbiAgMyxcbl0pO1xuIl19