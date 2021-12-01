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
assert_1.default.strictEqual(sumOfLeftLeaves((0, BinaryTree_1.createBinaryTree)([3, 9, 20, null, null, 15, 7])), 24);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LuW3puWPtuWtkOS5i+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDA0LuW3puWPtuWtkOS5i+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDbkQsSUFBSSxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwRDtJQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ3JFLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87S0FDM0M7SUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLGVBQWUsQ0FBQyxJQUFBLDZCQUFnQixFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNoRSxFQUFFLENBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7orqHnrpfnu5nlrprkuozlj4nmoJHnmoTmiYDmnInlt6blj7blrZDkuYvlkozjgIJcblxu56S65L6L77yaXG5cbiAgICAzXG4gICAvIFxcXG4gIDkgIDIwXG4gICAgLyAgXFxcbiAgIDE1ICAgN1xuXG7lnKjov5nkuKrkuozlj4nmoJHkuK3vvIzmnInkuKTkuKrlt6blj7blrZDvvIzliIbliKvmmK8gOSDlkowgMTXvvIzmiYDku6Xov5Tlm54gMjRcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3N1bS1vZi1sZWZ0LWxlYXZlc1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5pbXBvcnQgeyBUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZSB9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBzdW1PZkxlZnRMZWF2ZXMgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGUgfCBudWxsKTogbnVtYmVyIHtcbiAgaWYgKHJvb3QgPT0gbnVsbCkgcmV0dXJuIDA7XG4gIGlmIChyb290LmxlZnQgJiYgcm9vdC5sZWZ0LmxlZnQgPT0gbnVsbCAmJiByb290LmxlZnQucmlnaHQgPT0gbnVsbCkge1xuICAgIHJldHVybiByb290LmxlZnQudmFsICsgc3VtT2ZMZWZ0TGVhdmVzKHJvb3QucmlnaHQpO1xuICB9XG4gIGlmIChyb290LnJpZ2h0ICYmIHJvb3QucmlnaHQubGVmdCA9PSBudWxsICYmIHJvb3QucmlnaHQucmlnaHQgPT0gbnVsbCkge1xuICAgIHJldHVybiBzdW1PZkxlZnRMZWF2ZXMocm9vdC5sZWZ0KTsgLy8gKyAwO1xuICB9XG4gIHJldHVybiBzdW1PZkxlZnRMZWF2ZXMocm9vdC5sZWZ0KSArIHN1bU9mTGVmdExlYXZlcyhyb290LnJpZ2h0KTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIHN1bU9mTGVmdExlYXZlcyhjcmVhdGVCaW5hcnlUcmVlKFszLCA5LCAyMCwgbnVsbCwgbnVsbCwgMTUsIDddKSksXG4gIDI0XG4pO1xuIl19