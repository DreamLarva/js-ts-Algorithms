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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LuW3puWPtuWtkOS5i+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDA0LuW3puWPtuWtkOS5i+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsSUFBcUI7SUFDbkQsSUFBSSxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwRDtJQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ3JFLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87S0FDM0M7SUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLGVBQWUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEUsRUFBRSxDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7orqHnrpfnu5nlrprkuozlj4nmoJHnmoTmiYDmnInlt6blj7blrZDkuYvlkozjgIJcclxuXHJcbuekuuS+i++8mlxyXG5cclxuICAgIDNcclxuICAgLyBcXFxyXG4gIDkgIDIwXHJcbiAgICAvICBcXFxyXG4gICAxNSAgIDdcclxuXHJcbuWcqOi/meS4quS6jOWPieagkeS4re+8jOacieS4pOS4quW3puWPtuWtkO+8jOWIhuWIq+aYryA5IOWSjCAxNe+8jOaJgOS7pei/lOWbniAyNFxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc3VtLW9mLWxlZnQtbGVhdmVzXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbmltcG9ydCB7IFRyZWVOb2RlLCBjcmVhdGVCaW5hcnlUcmVlIH0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIHN1bU9mTGVmdExlYXZlcyA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZSB8IG51bGwpOiBudW1iZXIge1xyXG4gIGlmIChyb290ID09IG51bGwpIHJldHVybiAwO1xyXG4gIGlmIChyb290LmxlZnQgJiYgcm9vdC5sZWZ0LmxlZnQgPT0gbnVsbCAmJiByb290LmxlZnQucmlnaHQgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHJvb3QubGVmdC52YWwgKyBzdW1PZkxlZnRMZWF2ZXMocm9vdC5yaWdodCk7XHJcbiAgfVxyXG4gIGlmIChyb290LnJpZ2h0ICYmIHJvb3QucmlnaHQubGVmdCA9PSBudWxsICYmIHJvb3QucmlnaHQucmlnaHQgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHN1bU9mTGVmdExlYXZlcyhyb290LmxlZnQpOyAvLyArIDA7XHJcbiAgfVxyXG4gIHJldHVybiBzdW1PZkxlZnRMZWF2ZXMocm9vdC5sZWZ0KSArIHN1bU9mTGVmdExlYXZlcyhyb290LnJpZ2h0KTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gIHN1bU9mTGVmdExlYXZlcyhjcmVhdGVCaW5hcnlUcmVlKFszLCA5LCAyMCwgbnVsbCwgbnVsbCwgMTUsIDddKSksXHJcbiAgMjRcclxuKTtcclxuIl19