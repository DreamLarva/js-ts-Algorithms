"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const BinaryTree_1 = require("../util/BinaryTree");
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    /**
     * 正常使用递归
     * */
    const result = [];
    step(root);
    return result;
    function step(node) {
        if (node === null)
            return;
        step(node.left);
        step(node.right);
        result.push(node.val);
    }
};
function postorderTraversal_1(root) {
    /**
     * 使用迭代
     * 使用迭代版本的深度优先 妙啊
     * 后续遍历的 次序是 左子树 右子树 根节点
     * 现在深度优先的 次序是 根节点 右子树 左子树
     * 所以逆序输出 为需要的结果
     * */
    const result = [];
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        result.unshift(node.val); // 逆序 输出值 所以都从头部推入
        if (node.left)
            stack.push(node.left);
        if (node.right)
            stack.push(node.right); // 由于使用的是栈 所以会优先查询 右子树的内容
    }
    return result;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(postorderTraversal(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [3, 2, 1]);
assert_1.default.deepStrictEqual(postorderTraversal_1(BinaryTree_1.createBinaryTree([1, null, 2, 3])), [3, 2, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQ1LuS6jOWPieagkeeahOWQjuW6j+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSixtREFBOEQ7QUFFOUQ7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLElBQXNCO0lBQ3JEOztTQUVLO0lBQ0wsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVYLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxJQUFJLENBQUMsSUFBNkI7UUFDdkMsSUFBSSxJQUFJLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7QUFFTCxDQUFDLENBQUM7QUFFRixTQUFTLG9CQUFvQixDQUFDLElBQXNCO0lBQ2hEOzs7Ozs7U0FNSztJQUNMLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixNQUFNLEtBQUssR0FBdUIsRUFBRSxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJO1lBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBRyxJQUFJLENBQUMsS0FBSztZQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO0tBQ2xFO0lBRUQsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQztBQUdELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsa0JBQWtCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDWixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLG9CQUFvQixDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN2RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quS6jOWPieagke+8jOi/lOWbnuWug+eahCDlkI7luo/CoOmBjeWOhuOAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiBbMSxudWxsLDIsM11cclxuICAgMVxyXG4gICAgXFxcclxuICAgICAyXHJcbiAgICAvXHJcbiAgIDNcclxuXHJcbui+k+WHujogWzMsMiwxXVxyXG7ov5vpmLY6wqDpgJLlvZLnrpfms5XlvojnroDljZXvvIzkvaDlj6/ku6XpgJrov4fov63ku6Pnrpfms5XlrozmiJDlkJfvvJ9cclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2JpbmFyeS10cmVlLXBvc3RvcmRlci10cmF2ZXJzYWxcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuaW1wb3J0IHtUcmVlTm9kZSwgY3JlYXRlQmluYXJ5VHJlZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcclxuICogQHJldHVybiB7bnVtYmVyW119XHJcbiAqL1xyXG52YXIgcG9zdG9yZGVyVHJhdmVyc2FsID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4pIHtcclxuICAgIC8qKlxyXG4gICAgICog5q2j5bi45L2/55So6YCS5b2SXHJcbiAgICAgKiAqL1xyXG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgc3RlcChyb290KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0ZXAobm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpIHtcclxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHN0ZXAobm9kZS5sZWZ0KTtcclxuICAgICAgICBzdGVwKG5vZGUucmlnaHQpO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwb3N0b3JkZXJUcmF2ZXJzYWxfMShyb290OiBUcmVlTm9kZTxudW1iZXI+KSB7XHJcbiAgICAvKipcclxuICAgICAqIOS9v+eUqOi/reS7o1xyXG4gICAgICog5L2/55So6L+t5Luj54mI5pys55qE5rex5bqm5LyY5YWIIOWmmeWVilxyXG4gICAgICog5ZCO57ut6YGN5Y6G55qEIOasoeW6j+aYryDlt6blrZDmoJEg5Y+z5a2Q5qCRIOagueiKgueCuVxyXG4gICAgICog546w5Zyo5rex5bqm5LyY5YWI55qEIOasoeW6j+aYryDmoLnoioLngrkg5Y+z5a2Q5qCRIOW3puWtkOagkVxyXG4gICAgICog5omA5Lul6YCG5bqP6L6T5Ye6IOS4uumcgOimgeeahOe7k+aenFxyXG4gICAgICogKi9cclxuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IHN0YWNrOiBUcmVlTm9kZTxudW1iZXI+W10gPSBbXTtcclxuICAgIHN0YWNrLnB1c2gocm9vdCk7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpITtcclxuICAgICAgICByZXN1bHQudW5zaGlmdChub2RlLnZhbCk7IC8vIOmAhuW6jyDovpPlh7rlgLwg5omA5Lul6YO95LuO5aS06YOo5o6o5YWlXHJcbiAgICAgICAgaWYobm9kZS5sZWZ0KXN0YWNrLnB1c2gobm9kZS5sZWZ0KTtcclxuICAgICAgICBpZihub2RlLnJpZ2h0KXN0YWNrLnB1c2gobm9kZS5yaWdodCk7IC8vIOeUseS6juS9v+eUqOeahOaYr+agiCDmiYDku6XkvJrkvJjlhYjmn6Xor6Ig5Y+z5a2Q5qCR55qE5YaF5a65XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgcG9zdG9yZGVyVHJhdmVyc2FsKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIG51bGwsIDIsIDNdKSksXHJcbiAgICBbMywgMiwgMV0sXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBwb3N0b3JkZXJUcmF2ZXJzYWxfMShjcmVhdGVCaW5hcnlUcmVlKFsxLCBudWxsLCAyLCAzXSkpLFxyXG4gICAgWzMsIDIsIDFdLFxyXG4pO1xyXG4iXX0=