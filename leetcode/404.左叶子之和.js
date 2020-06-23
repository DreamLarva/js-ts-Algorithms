"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-of-left-leaves
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const BinaryTree_1 = require("../util/BinaryTree");
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    if (root == null)
        return 0;
    if (root.left && root.left.left == null && root.left.right == null) {
        return root.left.val + sumOfLeftLeaves(root.right);
    }
    if (root.right && root.right.left == null && root.right.right == null) {
        return sumOfLeftLeaves(root.left); // + 0;
    }
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(sumOfLeftLeaves(BinaryTree_1.createBinaryTree([3, 9, 20, null, null, 15, 7])), 24);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LuW3puWPtuWtkOS5i+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDA0LuW3puWPtuWtkOS5i+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDbkQsSUFBSSxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwRDtJQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ3JFLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87S0FDM0M7SUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLGVBQWUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEUsRUFBRSxDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu6K6h566X57uZ5a6a5LqM5Y+J5qCR55qE5omA5pyJ5bem5Y+25a2Q5LmL5ZKM44CCXG5cbuekuuS+i++8mlxuXG4gICAgM1xuICAgLyBcXFxuICA5ICAyMFxuICAgIC8gIFxcXG4gICAxNSAgIDdcblxu5Zyo6L+Z5Liq5LqM5Y+J5qCR5Lit77yM5pyJ5Lik5Liq5bem5Y+25a2Q77yM5YiG5Yir5pivIDkg5ZKMIDE177yM5omA5Lul6L+U5ZueIDI0XG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zdW0tb2YtbGVmdC1sZWF2ZXNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IHsgVHJlZU5vZGUsIGNyZWF0ZUJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgc3VtT2ZMZWZ0TGVhdmVzID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlIHwgbnVsbCk6IG51bWJlciB7XG4gIGlmIChyb290ID09IG51bGwpIHJldHVybiAwO1xuICBpZiAocm9vdC5sZWZ0ICYmIHJvb3QubGVmdC5sZWZ0ID09IG51bGwgJiYgcm9vdC5sZWZ0LnJpZ2h0ID09IG51bGwpIHtcbiAgICByZXR1cm4gcm9vdC5sZWZ0LnZhbCArIHN1bU9mTGVmdExlYXZlcyhyb290LnJpZ2h0KTtcbiAgfVxuICBpZiAocm9vdC5yaWdodCAmJiByb290LnJpZ2h0LmxlZnQgPT0gbnVsbCAmJiByb290LnJpZ2h0LnJpZ2h0ID09IG51bGwpIHtcbiAgICByZXR1cm4gc3VtT2ZMZWZ0TGVhdmVzKHJvb3QubGVmdCk7IC8vICsgMDtcbiAgfVxuICByZXR1cm4gc3VtT2ZMZWZ0TGVhdmVzKHJvb3QubGVmdCkgKyBzdW1PZkxlZnRMZWF2ZXMocm9vdC5yaWdodCk7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBzdW1PZkxlZnRMZWF2ZXMoY3JlYXRlQmluYXJ5VHJlZShbMywgOSwgMjAsIG51bGwsIG51bGwsIDE1LCA3XSkpLFxuICAyNFxuKTtcbiJdfQ==