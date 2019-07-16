"use strict";
/*
给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,2,3]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

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
        while (node) {
            stack.push(node);
            result.push(node.val);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(preorderTraversal(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [1, 2, 3]);
assert_1.default.deepStrictEqual(preorderTraversal_1(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [1, 2, 3]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ0LuS6jOWPieagkeeahOWJjeW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ0LuS6jOWPieagkeeahOWJjeW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCSTs7Ozs7QUFFSixtREFBOEQ7QUFFOUQ7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLElBQTZCO0lBQzNEOztTQUVLO0lBQ0wsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDWCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLElBQXNCO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixJQUFJLG1CQUFtQixHQUFHLFVBQVUsSUFBNkI7SUFDN0Q7O1NBRUs7SUFDTCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLE1BQU0sS0FBSyxHQUF1QixFQUFFLENBQUM7SUFDckMsSUFBSSxJQUFJLEdBQTRCLElBQUksQ0FBQztJQUN6QyxPQUFPLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ3pCLE9BQU8sSUFBSSxFQUFFO1lBQ1QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUNELElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFHLENBQUM7UUFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7S0FHckI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFHRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGlCQUFpQixDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNwRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1osQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixtQkFBbUIsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR77yM6L+U5Zue5a6D55qEwqDliY3luo/CoOmBjeWOhuOAglxuXG7CoOekuuS+izpcblxu6L6T5YWlOiBbMSxudWxsLDIsM11cbiAgIDFcbiAgICBcXFxuICAgICAyXG4gICAgL1xuICAgM1xuXG7ovpPlh7o6IFsxLDIsM11cbui/m+mYtjrCoOmAkuW9kueul+azleW+iOeugOWNle+8jOS9oOWPr+S7pemAmui/h+i/reS7o+eul+azleWujOaIkOWQl++8n1xuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYmluYXJ5LXRyZWUtcHJlb3JkZXItdHJhdmVyc2FsXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuaW1wb3J0IHtUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xuXG4vKipcbiAqIEBwYXJhbSB7VHJlZU5vZGV8bnVsbH0gcm9vdFxuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciBwcmVvcmRlclRyYXZlcnNhbCA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xuICAgIC8qKlxuICAgICAqIOmAkuW9klxuICAgICAqICovXG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gICAgc3RlcChyb290KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgZnVuY3Rpb24gc3RlcChub2RlOiBUcmVlTm9kZTxudW1iZXI+KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcbiAgICAgICAgaWYgKG5vZGUubGVmdCkgc3RlcChub2RlLmxlZnQpO1xuICAgICAgICBpZiAobm9kZS5yaWdodCkgc3RlcChub2RlLnJpZ2h0KTtcbiAgICB9XG59O1xuXG52YXIgcHJlb3JkZXJUcmF2ZXJzYWxfMSA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xuICAgIC8qKlxuICAgICAqIOi/reS7o1xuICAgICAqICovXG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gICAgY29uc3Qgc3RhY2s6IFRyZWVOb2RlPG51bWJlcj5bXSA9IFtdO1xuICAgIGxldCBub2RlOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCA9IHJvb3Q7XG4gICAgd2hpbGUgKG5vZGUgfHwgc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gc3RhY2sucG9wKCkhO1xuICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcblxuXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHByZW9yZGVyVHJhdmVyc2FsKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksXG4gICAgWzEsIDIsIDNdLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgcHJlb3JkZXJUcmF2ZXJzYWxfMShjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAyLCAzXSkpLFxuICAgIFsxLCAyLCAzXSxcbik7XG4iXX0=