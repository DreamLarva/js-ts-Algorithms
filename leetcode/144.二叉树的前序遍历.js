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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ0LuS6jOWPieagkeeahOWJjeW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ0LuS6jOWPieagkeeahOWJjeW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCSTs7Ozs7QUFFSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLElBQTZCO0lBQzdEOztTQUVLO0lBQ0wsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDWCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLElBQXNCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFJLG1CQUFtQixHQUFHLFVBQVUsSUFBNkI7SUFDL0Q7O1NBRUs7SUFDTCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLE1BQU0sS0FBSyxHQUF1QixFQUFFLENBQUM7SUFDckMsSUFBSSxJQUFJLEdBQTRCLElBQUksQ0FBQztJQUN6QyxPQUFPLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzNCLG1CQUFtQjtRQUNuQixPQUFPLElBQUksRUFBRTtZQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMzRSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM3RSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzov5Tlm57lroPnmoTCoOWJjeW6j8Kg6YGN5Y6G44CCXHJcblxyXG7CoOekuuS+izpcclxuXHJcbui+k+WFpTogWzEsbnVsbCwyLDNdXHJcbiAgIDFcclxuICAgIFxcXHJcbiAgICAgMlxyXG4gICAgL1xyXG4gICAzXHJcblxyXG7ovpPlh7o6IFsxLDIsM11cclxu6L+b6Zi2OsKg6YCS5b2S566X5rOV5b6I566A5Y2V77yM5L2g5Y+v5Lul6YCa6L+H6L+t5Luj566X5rOV5a6M5oiQ5ZCX77yfXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9iaW5hcnktdHJlZS1wcmVvcmRlci10cmF2ZXJzYWxcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuXHJcbmltcG9ydCB7IFRyZWVOb2RlLCBjcmVhdGVCaW5hcnlUcmVlIH0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV8bnVsbH0gcm9vdFxyXG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cclxuICovXHJcbnZhciBwcmVvcmRlclRyYXZlcnNhbCA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xyXG4gIC8qKlxyXG4gICAqIOmAkuW9klxyXG4gICAqICovXHJcbiAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBbXTtcclxuICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XHJcbiAgc3RlcChyb290KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICBmdW5jdGlvbiBzdGVwKG5vZGU6IFRyZWVOb2RlPG51bWJlcj4pIHtcclxuICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcclxuICAgIGlmIChub2RlLmxlZnQpIHN0ZXAobm9kZS5sZWZ0KTtcclxuICAgIGlmIChub2RlLnJpZ2h0KSBzdGVwKG5vZGUucmlnaHQpO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBwcmVvcmRlclRyYXZlcnNhbF8xID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKSB7XHJcbiAgLyoqXHJcbiAgICog6L+t5LujXHJcbiAgICogKi9cclxuICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIFtdO1xyXG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcclxuICBjb25zdCBzdGFjazogVHJlZU5vZGU8bnVtYmVyPltdID0gW107XHJcbiAgbGV0IG5vZGU6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsID0gcm9vdDtcclxuICB3aGlsZSAobm9kZSB8fCBzdGFjay5sZW5ndGgpIHtcclxuICAgIC8vIOS8mOWFiCDmn6Xor6Ig5b2T5YmN6IqC54K5IOWSjCDlt6blrZDmoJFcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIHN0YWNrLnB1c2gobm9kZSk7XHJcbiAgICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcclxuICAgICAgbm9kZSA9IG5vZGUubGVmdDtcclxuICAgIH1cclxuICAgIC8vIOayoeacieW3puWtkOagkeeahOaXtuWAmSDlsLHojrflj5bkuIrkuIDkuKrliIbmlK/nmoTlj7PlrZDmoJFcclxuICAgIG5vZGUgPSBzdGFjay5wb3AoKSE7XHJcbiAgICBub2RlID0gbm9kZS5yaWdodDtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwcmVvcmRlclRyYXZlcnNhbChjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAyLCAzXSkpLCBbXHJcbiAgMSxcclxuICAyLFxyXG4gIDMsXHJcbl0pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHByZW9yZGVyVHJhdmVyc2FsXzEoY3JlYXRlQmluYXJ5VHJlZShbMSwgbnVsbCwgMiwgM10pKSwgW1xyXG4gIDEsXHJcbiAgMixcclxuICAzLFxyXG5dKTtcclxuIl19