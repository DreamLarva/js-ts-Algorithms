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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LuW3puWPtuWtkOS5i+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDA0LuW3puWPtuWtkOS5i+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0osbURBQThEO0FBRTlEOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDakQsSUFBSSxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0RDtJQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ25FLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87S0FDN0M7SUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsZUFBZSxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNoRSxFQUFFLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuiuoeeul+e7meWumuS6jOWPieagkeeahOaJgOacieW3puWPtuWtkOS5i+WSjOOAglxyXG5cclxu56S65L6L77yaXHJcblxyXG4gICAgM1xyXG4gICAvIFxcXHJcbiAgOSAgMjBcclxuICAgIC8gIFxcXHJcbiAgIDE1ICAgN1xyXG5cclxu5Zyo6L+Z5Liq5LqM5Y+J5qCR5Lit77yM5pyJ5Lik5Liq5bem5Y+25a2Q77yM5YiG5Yir5pivIDkg5ZKMIDE177yM5omA5Lul6L+U5ZueIDI0XHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zdW0tb2YtbGVmdC1sZWF2ZXNcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuaW1wb3J0IHtUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIHN1bU9mTGVmdExlYXZlcyA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZSB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgaWYgKHJvb3QgPT0gbnVsbCkgcmV0dXJuIDA7XHJcbiAgICBpZiAocm9vdC5sZWZ0ICYmIHJvb3QubGVmdC5sZWZ0ID09IG51bGwgJiYgcm9vdC5sZWZ0LnJpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcm9vdC5sZWZ0LnZhbCArIHN1bU9mTGVmdExlYXZlcyhyb290LnJpZ2h0KTtcclxuICAgIH1cclxuICAgIGlmIChyb290LnJpZ2h0ICYmIHJvb3QucmlnaHQubGVmdCA9PSBudWxsICYmIHJvb3QucmlnaHQucmlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBzdW1PZkxlZnRMZWF2ZXMocm9vdC5sZWZ0KTsgLy8gKyAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bU9mTGVmdExlYXZlcyhyb290LmxlZnQpICsgc3VtT2ZMZWZ0TGVhdmVzKHJvb3QucmlnaHQpO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBzdW1PZkxlZnRMZWF2ZXMoY3JlYXRlQmluYXJ5VHJlZShbMywgOSwgMjAsIG51bGwsIG51bGwsIDE1LCA3XSkpLFxyXG4gICAgMjQsXHJcbik7XHJcbiJdfQ==